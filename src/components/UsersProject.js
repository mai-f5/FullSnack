import React from 'react'
import { Row, Button, Form, FormControl } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import imgPlaceholder from '../images/img-placeholder.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FilterSection from './FilterSection';

export default function UsersProject() {
    return (
        <>
            <section>
                <h2>My Projects</h2>
                <Button>+ Add New Project</Button>
            </section>
            <FilterSection />
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

