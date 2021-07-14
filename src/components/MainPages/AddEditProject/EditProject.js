import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import MyDropzone from '../../General/FormComponents/MyDropzone'
import MyMultiSelect from '../../General/FormComponents/MyMultiSelect'
import ToggleRb from '../../General/FormComponents/ToggleRb'
import { FiSave, FiCode } from 'react-icons/fi'
import { GrAttachment, GrGithub } from 'react-icons/gr'
import { BsBarChart, BsBook } from 'react-icons/bs'
import { CgImage } from 'react-icons/cg'
import nameTag from '../../../images/name_tag.svg'
import userContext from '../../../utils/AuthContext'
import { validateInput, isFormValid } from '../../../utils/validations'
import { inputChangeHandler } from '../../../utils/handlers'
import TextInput from '../../General/FormComponents/TextInput'
import ErrorMessage from '../../General/FormComponents/ErrorMsg'
import { addNewProject, getProjectData, updateProjectData } from '../../../DAL/projects'
import MySpinner from '../../General/MySpinner'

export default function EditProject({ isNew }) {

    const context = useContext(userContext)
    const history = useHistory();
    if (!context.loggedUser.id) {
        history.push('/home');
    }
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const [blurredOutOfInput, setBlurredOutOfInput] = useState(false)
    const [load, setLoad] = useState(true)

    //if new project
    const [projectData, setProjectData] = useState({
        userId: context.loggedUser.id,
        name: {
            value: '',
            error: ''
        },
        difficultyLevel: {
            value: '',
            error: ''
        },
        githubLink: {
            value: '',
            error: ''
        },
        description: {
            value: '',
            error: ''
        },
        requiredTechs: {
            value: [],
            error: ''
        },
        assetsSrc: {
            value: '',
            error: ''
        },
        pictures: {
            value: [],
            error: ''
        },
    })

    //if editing
    const { pid } = useParams();
    useEffect(async () => {
        if (pid !== 'new') {
            const projectData = await getProjectData(pid)
            setProjectData({
                userId: context.loggedUser.id,
                name: {
                    value: projectData.name,
                    error: ''
                },
                difficultyLevel: {
                    value: projectData.difficulty_level_id.toString(),
                    error: ''
                },
                githubLink: {
                    value: projectData.github_url || '',
                    error: ''
                },
                description: {
                    value: projectData.description || '',
                    error: ''
                },
                requiredTechs: {
                    value: projectData.project_required_tech_id.map(tech => { return { id: tech.id, label: tech.name } }),
                    error: ''
                },
                assetsSrc: {
                    value: projectData.assets_src || '',
                    error: ''
                },
                pictures: {
                    value: projectData.projects_pictures,
                    error: ''
                },
            })
        }
        setLoad(false)
    }, [])

    useEffect(() => {
        setIsBtnDisabled(!isFormValid(projectData))
        setBlurredOutOfInput(false)
    }, [blurredOutOfInput])

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const projectFormData = new FormData()
        for (const input in projectData) {
            if (input === 'userId') projectFormData.append(input, projectData[input])
            // else if (input === 'pictures' || input === 'assetsSrc') break; //TEMP
            else projectFormData.append(input, projectData[input].value)
        }
        let projectsId;
        if (pid === 'new') {
            projectsId = await addNewProject(projectFormData)
        }
        else {
            await updateProjectData(projectFormData)
            projectsId = pid
        }
        history.push(`/projectdisplay/${projectsId.id}`)
    }

    return (
        <Container className='mt-5 edit-project'>
            {load && <MySpinner />}
            {!load && <>
                <h2><span className='font-weight-normal'>My Projects /</span> {pid === 'new' ? 'New Project' : projectData.name.value}</h2>
                <Form className='mt-5'>
                    <Form.Row className='mb-5'>
                        <Col className='mr-md-5' sm={12} md={5} lg={3}>

                            <TextInput
                                controlId={'projectName'}
                                type={'text'}
                                icon={<img src={nameTag} alt='name tag icon' className='name-svg mr-2' />}
                                label={'Project Name:'}
                                info={'Must be between 2-20 characters'}
                                isRequired={true}
                                name={'name'}
                                value={projectData.name.value}
                                defaultValue={projectData.name.value}
                                error={projectData.name.error}
                                onChange={(e) => setProjectData(inputChangeHandler(e, projectData))}
                                onBlur={(e) => {
                                    setBlurredOutOfInput(true)
                                    setProjectData(validateInput(e, projectData))
                                }}
                                placeholder={'Project Name'}
                                maxLength={20}
                            />


                            <Form.Group controlId="difficultyLevel" className='mb-5'>
                                <Form.Label>
                                    <BsBarChart className='mr-2 text-dark' />
                                    Difficulty Level:
                                </Form.Label>
                                <Form.Text className="text-muted">
                                    Required
                                </Form.Text>
                                < ToggleRb
                                    name='difficultyLevel'
                                    checkedValue={projectData.difficultyLevel.value}
                                    onRbChange={(e) => setProjectData(inputChangeHandler(e, projectData))} />
                                <ErrorMessage error={projectData.difficultyLevel.error} />
                            </Form.Group>


                            <Form.Group controlId="requiredTechSelect" className='mr-2'>
                                <Form.Label><FiCode className='mr-2 text-dark' />Required Technologies</Form.Label>
                                <MyMultiSelect
                                    type={'reqTechs'}
                                    location={'edit'}
                                    onSelectChange={(e) => setProjectData(inputChangeHandler(e, projectData))}
                                    checkedValues={projectData.requiredTechs.value} />
                                <ErrorMessage error={projectData.requiredTechs.error} />
                            </Form.Group>
                        </Col>


                        <Col className='border-right border-dark pr-3 mr-4 mt-4' sm={12} md={5} lg={4}>
                            <TextInput
                                controlId={'githubLink'}
                                type={'text'}
                                icon={<GrGithub className='mr-2 text-dark' />}
                                label={'Github Link:'}
                                info={''}
                                isRequired={false}
                                name={'githubLink'}
                                value={projectData.githubLink.value}
                                error={projectData.githubLink.error}
                                onChange={(e) => setProjectData(inputChangeHandler(e, projectData))}
                                onBlur={(e) => {
                                    setBlurredOutOfInput(true)
                                    setProjectData(validateInput(e, projectData))
                                }}
                                placeholder={'Github Link'} />


                            <TextInput
                                controlId={'description'}
                                type={''}
                                icon={<BsBook className='mr-2 text-dark' />}
                                label={'Project Description:'}
                                info={''}
                                isRequired={false}
                                name={'description'}
                                value={projectData.description.value}
                                error={projectData.description.error}
                                onChange={(e) => setProjectData(inputChangeHandler(e, projectData))}
                                onBlur={(e) => {
                                    setBlurredOutOfInput(true)
                                    setProjectData(validateInput(e, projectData))
                                }}
                                placeholder={'Project description... Explain to the users what they should expect'}
                                as="textarea"
                                rows={4}
                                maxLength={200}
                            />
                        </Col>


                        <Col className='' sm={12} md={5} lg={4}>
                            <Form.Group>
                                <Form.Label><CgImage className='mr-2 text-dark' />Project's Images:</Form.Label>
                                <MyDropzone
                                    name='pictures'
                                    insertedFiles={projectData.pictures.value}
                                    onFileUpload={(e) => setProjectData(inputChangeHandler(e, projectData))}
                                />

                            </Form.Group>

                            <Form.Group>
                                <Form.Label><GrAttachment className='mr-2 text-dark' />Project's Assets:</Form.Label>
                                <MyDropzone
                                    name='assetsSrc'
                                    insertedFiles={projectData.assetsSrc.value}
                                    onFileUpload={(e) => setProjectData(inputChangeHandler(e, projectData))}
                                />

                            </Form.Group>
                        </Col>


                    </Form.Row>
                    <Row className='justify-content-end'>
                        <Button variant="primary" type="submit" disabled={isBtnDisabled} onClick={handleFormSubmit}>
                            <FiSave className='mr-2' />{pid === 'new' ? 'Save Project' : 'Save Changes'}
                        </Button>
                    </Row>
                </Form>
            </>}

        </Container>
    )
}