import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { Card, Col, ListGroup, Button } from 'react-bootstrap'
import { BiTrash, BiLike } from 'react-icons/bi'
import { FiCode } from 'react-icons/fi'
import { GrAttachment } from 'react-icons/gr'
import { BsBarChart } from 'react-icons/bs'
import image from '../images/projectsImgs/1/homepage.PNG'
export default function ProjectCard() {
    const [ownsProject, setOwnsProject] = useState(false)
    const history = useHistory();
    return (
        <Col sm={12} md={4} lg={3}>
            <Card className='mb-4 pt-4 pl-4 pr-4 pb-3' onClick={() => history.push('/projectdisplay')}>

                {/* Pics Carousel!! */}
                <Card.Img variant="top" src={image} fluid className='rounded' />
                <Card.Header className='text-center font-weight-bold border-none p-2'>Recipes notebook</Card.Header>

                <ListGroup variant="flush">
                    <ListGroup.Item><FiCode className='mr-3' />HTML, CSS, JavaScript, Python</ListGroup.Item>
                    <ListGroup.Item><GrAttachment className='mr-3' />Assets Included</ListGroup.Item>
                    <ListGroup.Item><BsBarChart className='mr-3' />Medium Level</ListGroup.Item>
                    <ListGroup.Item><BiLike className='mr-3' />52 Recommended</ListGroup.Item>
                </ListGroup>

                {ownsProject && <Card.Body className='d-flex justify-content-between pb-0 pt-2'>
                    <Button>Edit</Button>
                    <button className='btn-as-link text-dark'><BiTrash /></button>
                </Card.Body>}
            </Card>
        </Col>
    )
}
