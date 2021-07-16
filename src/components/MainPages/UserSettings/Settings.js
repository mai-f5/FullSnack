import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react'
import { Redirect, useLocation, useParams, useHistory } from "react-router-dom";
import { Container, Button, Form, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap'
import imgPlaceholder from '../../../images/img-placeholder.png'
import MyModal from '../../General/Modal/MyModal'
import { getUserData, updateUserData } from '../../../DAL/users';
import TextInput from '../../General/FormComponents/TextInput';
import userContext from '../../../utils/AuthContext';
import ToggleRb from '../../General/FormComponents/ToggleRb';
import { inputChangeHandler } from '../../../utils/handlers';
import { validateInput } from '../../../utils/validations';
import { getOccupationsList } from '../../../DAL/staticData';
export default function Settings() {

    const context = useContext(userContext)
    const history = useHistory();
    if (!context.loggedUser.id) {
        history.push('/home');
    }

    const [occuptations, setOccupations] = useState([])

    useEffect(async () => {
        const occupationsOptions = await getOccupationsList()
        setOccupations([...occupationsOptions])
    }, [])


    // const { uid } = useParams();
    const elementRef = useRef();

    //temp for mockup
    const [dataChanged, setDataChanged] = useState(false)
    const [passwordChanged, setPasswordChanged] = useState(false)
    console.log(context.loggedUser)
    const [userData, setUserData] = useState({
        userId: {
            value: context.loggedUser.id
        },
        email: {
            value: context.loggedUser.email,
            error: ''
        },
        gender: {
            value: context.loggedUser.gender_id
        },
        birthdate: {
            value: context.loggedUser.birthdate
        },
        occupation: {
            value: context.loggedUser.occupation_id
        },
        profileImg: {
            value: context.loggedUser.profile_img
        }
    })

    useEffect(() => {
        console.log(userData)
    }, [userData])

    const [previewedPicture, setPreviewedPicture] = useState(`http://localhost:3100/public/${userData.profileImg.value}`)
    const [imgFile, setImgFile] = useState('')


    async function handleFormSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        for (const input in userData) {
            if (input === 'profileImg') {
                if (imgFile) formData.append(input, imgFile);
                break;
            }
            if (userData[input].value) {
                formData.append(input, userData[input].value)
            }
        }
        console.log(formData.get('profileImg'))
        const res = await updateUserData(formData)
        const updatedUser = await getUserData(context.loggedUser.id)
        context.setLoggedUser(updatedUser)
    }

    function changeProfileImg(e) {
        console.log(e.target.files[0])
        setPreviewedPicture(URL.createObjectURL(e.target.files[0]))
        setImgFile(e.target.files[0])
    }

    return (
        <Container className='settings mt-5'>
            <h2 className='mb-0 pb-0'><span className='font-weight-normal'>Settings /</span> {context.loggedUser.username} </h2>
            {dataChanged && <small className='text-success'>Changes saved successfully!</small>}
            <Form className='mt-5' onSubmit={handleFormSubmit}>
                <Form.Row className='mb-5'>
                    <Col className='mr-md-5' sm={12} md={5} lg={3}>

                        <TextInput
                            controlId='email'
                            type='email'
                            label='Email'
                            name='email'
                            value={userData.email.value}
                            error={userData.email.error}
                            onChange={(e) => setUserData(inputChangeHandler(e, userData))}
                            onBlur={(e) => {
                                // setBlurredOutOfInput(true)
                                setUserData(validateInput(e, userData))
                            }}
                        />


                        <div className='mb-5'>
                            <MyModal type='password' />
                            {passwordChanged && <small className='text-success d-block'>Password changed successfully!</small>}
                        </div>
                    </Col>
                    <Col className='mb-5 mr-md-5' sm={12} md={5} lg={3}>

                        <Form.Group controlId="gender">
                            <Form.Label>
                                Gender:
                            </Form.Label>
                            <ToggleRb
                                name='gender'
                                checkedValue={userData.gender.value}
                                onRbChange={(e) => setUserData(inputChangeHandler(e, userData))} />
                        </Form.Group>

                        <TextInput
                            controlId="birthdate"
                            label="Birthdate:"
                            type="date"
                            name="birthdate"
                            value={userData.birthdate.value}
                            onChange={(e) => setUserData(inputChangeHandler(e, userData))} />

                        <Form.Group controlId="occupationSelect">
                            <Form.Control as="select" name='occupation' value={userData.occupation.value} onChange={(e) => setUserData(inputChangeHandler(e, userData))}>
                                <option value={null} selected>Select occupation</option>
                                {occuptations.map((occupation, idx) => <option key={idx} value={occupation.id} selected={occupation.id === context.loggedUser.occupation_id}>{occupation.name}</option>)}
                            </Form.Control>
                        </Form.Group>

                    </Col>

                    <Col md={12} lg={4} className='text-center'>
                        <Form.Group controlId="profileImg" className='user-profile-img'>
                            <Form.Label className='d-block'>Profile Pic:</Form.Label>
                            <img src={previewedPicture} className='img-fluid rounded-circle' alt='user preview' />
                            <Button onClick={(e) => { elementRef.current.click() }}>Edit</Button>
                            <Form.File hidden ref={elementRef} onChange={changeProfileImg} accept='image/*'></Form.File>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Row className='justify-content-end'>
                    <Button variant="primary" type="submit" className='mt-5 mb-5'>
                        Save Settings
                    </Button>
                </Row>
            </Form>
        </Container>
    )
}
