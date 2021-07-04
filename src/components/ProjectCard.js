import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { Card, Col, ListGroup, Button } from 'react-bootstrap'
import { BiTrash, BiLike } from 'react-icons/bi'
import { FiCode } from 'react-icons/fi'
import { GrAttachment } from 'react-icons/gr'
import { BsBarChart } from 'react-icons/bs'
import image from '../images/usersImages/user_id_1/projectsImages/1/homepage.PNG'
export default function ProjectCard({ ownsProject, data }) {
    const history = useHistory();
    return (
        <Col sm={12} md={4} lg={3} className='project-card'>
            <Card className='mb-4 pt-4 pl-4 pr-4 pb-3'>
                <div onClick={() => history.push('/projectdisplay')}>
                    {/* Pics Carousel!! */}
                    <Card.Img variant="top" src={data.pictures[0] ? data.pictures[0] : image} fluid className='rounded card-img' />
                    <Card.Header className='text-center font-weight-bold border-none p-2'>{data.name}</Card.Header>

                    <ListGroup variant="flush">
                        <ListGroup.Item><FiCode className='mr-3' />{data.requiredTechs.join(', ')}</ListGroup.Item>
                        <ListGroup.Item><GrAttachment className='mr-3' />Assets {data.assets ? 'Included' : 'Not Included'}</ListGroup.Item>
                        <ListGroup.Item><BsBarChart className='mr-3' />{data.difficultyLevel}</ListGroup.Item>
                        <ListGroup.Item><BiLike className='mr-3' />{data.likesCounter} Recommended</ListGroup.Item>
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
