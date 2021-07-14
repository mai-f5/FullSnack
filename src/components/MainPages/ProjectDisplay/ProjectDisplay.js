import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Carousel, Spinner } from 'react-bootstrap'
import ProjectsForum from './Forum/ProjectsForum'
import MyModal from '../../General/Modal/MyModal'
import { BiLike, BiDownload } from 'react-icons/bi'
import { FiCode, FiExternalLink } from 'react-icons/fi'
import { GrAttachment, GrGithub } from 'react-icons/gr'
import { BsBarChart, BsBook } from 'react-icons/bs'
import image from '../../../images/usersImages/user_id_1/projectsImages/1/homepage.PNG'
import { getProjectData } from '../../../DAL/projects';
import MySpinner from '../../General/MySpinner';


export default function ProjectDisplay() {
    // const location = useLocation();
    const { pid } = useParams();
    const [projectsData, setProjectsData] = useState({
        id: '',
        name: '',
        likesCounter: '',
        difficultyLevel: '',
        requiredTechs: [],
        description: '',
        githubLink: '',
        assets_src: '',
        pictures: [],
        user: {
            username: '',
            id: ''
        }
    })
    const [load, setLoad] = useState(true)

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(async () => {
        const project = await getProjectData(pid)
        setProjectsData({
            id: project.id,
            name: project.name,
            likesCounter: project.liked_project_id.length,
            difficultyLevel: project.difficulty_level.name,
            requiredTechs: project.project_required_tech_id.map(tech => tech.name),
            description: project.description,
            githubLink: project.github_url,
            assetsSrc: project.assets_src,
            pictures: project.projects_pictures.map(pic => pic.pic_src),
            user: {
                username: project.user.username,
                id: project.user.id
            }
        })
    }, [])

    useEffect(() => {
        console.log(projectsData)
        if (projectsData) setLoad(false)
    }, [projectsData])

    return (

        <Container fluid className='projectDisplay text-left'>
            {load && <MySpinner />}
            {!load && <Row>
                <Col lg='6' md='12' className='px-3 pt-3 px-md-4 pt-md-4 px-lg-5 pt-lg-5 right-side-display'>

                    <Row className='ml-2 flex-column'>
                        <div>
                            <h2 className='mr-5 text-dark d-block d-md-inline'>{projectsData.name}</h2>
                            <Button className='rounded-circle text-center mr-2'><BiLike /></Button>
                            <MyModal type='share' />
                            <p className='font-weight-bold d-block mb-3 mt-3 mt-lg-0'>By {projectsData.user.username}</p>

                        </div>
                        <p><BiLike className='mr-3 text-dark' />{projectsData.likesCounter} Recommended this project</p>
                    </Row>
                    <Carousel activeIndex={index} onSelect={handleSelect} className='ml-0 col-lg-9 col-sm-12'>
                        {projectsData.pictures.map(pic => {
                            return (
                                <Carousel.Item>
                                    <img className="d-block w-100" src={pic.pic_src} alt='project example' />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>

                    <Row className='projectInfo mt-4 ml-2 mb-0'>
                        <Col lg="6" md="12">
                            <div className='d-flex'>
                                <BsBarChart className='mr-2' />
                                <div>
                                    <h3 className='text-dark'>Difficulty Level:</h3>
                                    <p className='p-2 bg-warning text-center d-block'>{projectsData.difficultyLevel}</p>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <BsBook className='mr-2' />
                                    <div className='w-75'>
                                        <h3 className='text-dark'>Project Description:</h3>
                                        <p className=''>{projectsData.description ? projectsData.description : 'Nothing else to add...'}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex'>
                                <FiCode className='mr-3' />
                                <div className='w-75'>
                                    <h3 className='text-dark'>Required Technologies:</h3>
                                    <p className='required-tech-p'>
                                        {projectsData.requiredTechs.map(tech => <span className='mr-2 mb-2 border border-dark p-1 rounded'>{tech}</span>)}
                                    </p>
                                </div>
                            </div>
                            {projectsData.assetsSrc && <div className='d-flex'>
                                <GrAttachment className='mr-3' />
                                <div>
                                    <h3 className='text-dark'>Project's Assets</h3>
                                    <a href={`${projectsData.assetSrc}`} download>{projectsData.name} Assets <BiDownload className='ml-1' /></a>
                                </div>
                            </div>}
                            {projectsData.githubLink && <div className='d-flex mt-3'>
                                <GrGithub className='mr-3' />
                                <h3 className='text-dark'><a className='text-dark' href={`${projectsData.githubLink}`}>{`${projectsData.name}`} Repository<FiExternalLink className='pl-1' /></a></h3>
                            </div>}
                        </Col>
                    </Row>
                </Col>
                <Col lg='6' md='12' className='p-3 p-md-4 p-lg-5'>
                    <ProjectsForum projectId={projectsData.id} />
                </Col>
            </Row>}
        </Container >
    )
}
