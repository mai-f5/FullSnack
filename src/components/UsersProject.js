import React from 'react'
import { Row, Button, Form, FormControl } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import imgPlaceholder from '../images/img-placeholder.png'


export default function UsersProject() {
    return (
        <>
            <section>
                <h2>My Projects</h2>
                <Button>+ Add New Project</Button>
            </section>
            <div className='topSection'>
                <h2>Full Stack Projects</h2>
                <Form inline>
                    <Form.Label>Search</Form.Label>
                    <FormControl type="text" placeholder="Search by keyword..." className="mr-sm-2" />
                    <Button variant="outline-success" >(fa-search)</Button>
                </Form>
                <Form>
                    <Form.Row>
                        <p className='mr-4'>Filter By</p>
                        <Form.Group controlId="requiredTechSelect" className='mr-2'>
                            <Form.Control as="select" custom>
                                <option>Required Technologies</option>
                                {/* <option>
                                <input type='checkbox'>html</input>
                            </option>
                            <option>
                                <input type='checkbox'>html</input>
                            </option> */}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="difficultyLvlSelect" className='ml-2 mr-2'>
                            <Form.Control as="select" custom>
                                <option value=''>Difficulty Level</option>
                                <option value='1'>Easy</option>
                                <option value='2'>Medium</option>
                                <option value='3'>Hard</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="assetsSelect" className='ml-2'>
                            <Form.Control as="select" custom>
                                <option value=''>Assets</option>
                                <option value='1'>Included</option>
                                <option value='0'>Not Included</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <Form>
                    <Form.Row>
                        <p className='mr-4'>Sort By</p>
                        <Form.Check
                            custom
                            inline
                            label="Most Popular"
                            type='radio'
                            id='most-popular-rb'
                        />
                        <Form.Check
                            custom
                            inline
                            label="Most Recent"
                            type='radio'
                            id='most-popular-rb'
                        />
                    </Form.Row>
                </Form>
            </div>
            <div className='usersProjects'>
                <Row>
                    {/* //users project list Or empty state */}
                    <ProjectCard />
                </Row>
            </div>
            <div className='emptyProject text-center'>
                <img src={imgPlaceholder} alt='' /> {/*will be through css */}
                <p>No projects created yet.<br />
                    Go ahead and create your first project!
                </p>
                <Button>+ Add your first project</Button>
            </div>


        </>
    )
}

