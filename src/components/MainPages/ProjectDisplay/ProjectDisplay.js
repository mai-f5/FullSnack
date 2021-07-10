import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import ProjectsForum from './Forum/ProjectsForum'
import MyModal from '../../General/Modal/MyModal'
import { BiLike, BiDownload } from 'react-icons/bi'
import { FiCode, FiExternalLink } from 'react-icons/fi'
import { GrAttachment, GrGithub } from 'react-icons/gr'
import { BsBarChart, BsBook } from 'react-icons/bs'
import image from '../../../images/usersImages/user_id_1/projectsImages/1/homepage.PNG'
import { getProjectData } from '../../../DAL/projects';

export default function ProjectDisplay() {
    const location = useLocation();
    const { pid } = useParams();
    const [projectsData, setProjectsData] = useState({})

    const pics = [image, image, image]

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        if (!location.state) {
            getProjectData({ projectId: pid }).then(data => {
                console.log(data)
                console.log({ ...data[0] })
                // setProjectsData({ ...data[0] })
            })
        } else {
            console.log(location.state)
            // setProjectsData({ ...location.state })
        }
    }, [])


    const projectsRec = ['HTML', 'CSS', 'JavaScript', 'Python'];

    return (
        <Container fluid className='projectDisplay text-left'>
            <Row>
                <Col lg='6' md='12' className='px-3 pt-3 px-md-4 pt-md-4 px-lg-5 pt-lg-5 right-side-display'>


                    <Row className='ml-2 flex-column'>
                        <div>
                            <h2 className='mr-5 text-dark d-block d-md-inline'>{projectsData.name}</h2>
                            <Button className='rounded-circle text-center mr-2'><BiLike /></Button>
                            <MyModal type='share' />
                            <p className='font-weight-bold d-block mb-3 mt-3 mt-lg-0'>By {'leebaronx3'}</p>

                        </div>
                        <p><BiLike className='mr-3 text-dark' />{projectsData.likesCounter} Recommended this project</p>
                    </Row>
                    <Carousel activeIndex={index} onSelect={handleSelect} className='ml-0 col-lg-9 col-sm-12'>
                        {pics.map(pic => {
                            return (
                                <Carousel.Item>
                                    <img className="d-block w-100" src={pic} alt='project example' />
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
                                    <p className='p-2 bg-warning text-center d-block'>Medium</p>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <BsBook className='mr-2' />
                                    <div className='w-75'>
                                        <h3 className='text-dark'>Project Description:</h3>
                                        <p className=''>In this project you'll create a website containing recipes. The users can add, edit, delete and view recipes</p>
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
                                        {projectsRec.map(tech => <span className='mr-2 mb-2 border border-dark p-1 rounded'>{tech}</span>)}
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <GrAttachment className='mr-3' />
                                <div>
                                    <h3 className='text-dark'>Project's Assets</h3>
                                    <a href='#' download>RecipesAssets <BiDownload className='ml-1' /></a>
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <GrGithub className='mr-3' />
                                <h3 className='text-dark'><a className='text-dark' href='https://hamuf.github.io/recipes-mockup/#!/my-recipes'>Project's Repository<FiExternalLink className='pl-1' /></a></h3>
                            </div>
                        </Col>
                    </Row>


                </Col>

                <Col lg='6' md='12' className='p-3 p-md-4 p-lg-5'>
                    <ProjectsForum />
                </Col>
            </Row>
        </Container >
    )
}
