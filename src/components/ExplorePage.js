import React from 'react'
import { Row, Button, Form, FormControl, Container } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import FilterSection from './FilterSection'
export default function Explore() {
    return (
        <Container className='mt-5'>
            <h2 >Full Stack Projects</h2>
            <FilterSection />

            <div className='projectsExplore'>
                < Row >
                    {/*dynamic */}
                    < ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </Row >
            </div >

        </Container >
    )
}
