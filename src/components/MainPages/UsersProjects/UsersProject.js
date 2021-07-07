import React from 'react'
import { useState } from 'react'
import { Container, Row, Button, Form, FormControl } from 'react-bootstrap'
import ProjectCard from '../Explore/ProjectCard/ProjectCard'
import imgPlaceholder from '../../../images/img-placeholder.png'
import FilterSection from '../../General/FilterSection/FilterSection';
import EmptyProjectSvg from '../../../images/development.svg'
import { useHistory } from 'react-router'
export default function UsersProject() {
    const [hasProjects, setHasProjects] = useState(true)
    const history = useHistory();
    return (
        <Container className='mb-3'>
            <section className='mt-5 mb-4'>
                <h2 className='mb-3'>My Projects</h2>
                <Button onClick={() => history.push('./editproject')}>+ Add New Project</Button>
            </section>
            <FilterSection />
            {hasProjects && <div className='usersProjects mt-2 '>
                <Row>
                    <ProjectCard ownsProject={true} />
                </Row>
            </div>}

            {!hasProjects && <div className='empty-users-projects mt-2 text-center'>
                <img src={EmptyProjectSvg} className='m-5' />
                <p>No projects created yet.<br />
                    Go ahead and create your first project!
                </p>
                <Button onClick={() => history.push('./editproject')}>+ Add your first project</Button>
            </div>}


        </Container>
    )
}

