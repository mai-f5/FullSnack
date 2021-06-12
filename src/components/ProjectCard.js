import React from 'react'
import { Card, Col, ListGroup, Button, Row } from 'react-bootstrap'
import imgPlaceholder from '../images/img-placeholder.png'
export default function ProjectCard() {
    return (
        <Col sm={12} md={4} lg={3}>
            <Card className='mb-4'>
                {/* Pics Carousel!! */}
                <Card.Img variant="top" src={imgPlaceholder} fluid />
                <Card.Header>Recipes notebook</Card.Header>

                <ListGroup variant="flush">
                    <ListGroup.Item>HTML, CSS, JavaScript</ListGroup.Item>
                    <ListGroup.Item>Assets Included</ListGroup.Item>
                    <ListGroup.Item>Medium Level</ListGroup.Item>
                    <ListGroup.Item>52 Recommended</ListGroup.Item>
                </ListGroup>
                <Card.Body className={'hidden?'}>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
