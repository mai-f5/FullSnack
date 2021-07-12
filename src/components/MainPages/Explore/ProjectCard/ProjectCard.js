import React from 'react'
import { useHistory } from 'react-router'
import { Card, Col, ListGroup, Button } from 'react-bootstrap'
import { BiTrash, BiLike } from 'react-icons/bi'
import { FiCode } from 'react-icons/fi'
import { GrAttachment } from 'react-icons/gr'
import { BsBarChart } from 'react-icons/bs'
import image from '../../../../images/usersImages/user_id_1/projectsImages/1/homepage.PNG'
export default function ProjectCard({ ownsProject, data }) {

    const history = useHistory();
    return (
        <Col sm={12} md={4} lg={3} className='project-card'>
            <Card className='mb-4 pt-4 pl-4 pr-4 pb-3'>
                <div onClick={() => history.push(`/projectdisplay/${data.id}`, data)}>
                    <Card.Img variant="top" src={data.projects_pictures[0] ? data.projects_pictures[0].pic_src : image} fluid className='rounded card-img' />
                    <Card.Header className='text-center font-weight-bold border-none p-2'>{data.name}</Card.Header>

                    <ListGroup variant="flush">
                        <ListGroup.Item><FiCode className='mr-3' />{data.project_required_tech_id.map(tech => tech.name).join(', ')}</ListGroup.Item>
                        <ListGroup.Item><GrAttachment className='mr-3' />Assets {data.assets ? 'Included' : 'Not Included'}</ListGroup.Item>
                        <ListGroup.Item><BsBarChart className='mr-3' />{data.difficulty_level.name}</ListGroup.Item>
                        <ListGroup.Item><BiLike className='mr-3' />{data.liked_project_id.length} Recommended</ListGroup.Item>
                    </ListGroup>
                </div>
                {ownsProject && <Card.Body className='d-flex justify-content-between pb-0 pt-2'>
                    <Button className='button-zindex' onClick={() => history.push('./editproject')} >Edit</Button>
                    <button className='btn-as-link text-dark button-zindex'><BiTrash /></button>
                </Card.Body>}
            </Card>
        </Col>
    )
}
