import React, { useState, useEffect } from 'react'
import { Row, Container, Button } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import ProjectCard from './ProjectCard/ProjectCard'
import FilterSection from '../../General/FilterSection/FilterSection'
import { useHistory, useLocation } from 'react-router'
import EmptyProjectSvg from '../../../images/development.svg'
export default function Explore({ type }) {
    const history = useHistory();
    const location = useLocation()
    const [isUsersExplore, setIsUsersExplore] = useState(false)
    const [cardsData, setCardsData] = useState([])


    useEffect(() => {
        if (location.state) setIsUsersExplore(true)
        else setIsUsersExplore(false)
    }, [])


    return (
        <Container className='mt-5'>
            <h2 >{!isUsersExplore ? 'Full Stack Projects' : 'My Projects'}</h2>
            {isUsersExplore &&
                <Button onClick={() => history.push('./editproject')} className='mb-3'>+ Add New Project</Button>
            }
            <FilterSection setCardsData={setCardsData} isUserExplore={location.state} />

            <div className='projectsExplore'>
                {cardsData.length > 0 ?
                    < Row >
                        {cardsData.map(cardData => <ProjectCard data={cardData} />)}
                    </Row > :
                    !isUsersExplore ? <div className='text-center projs-not-found'>
                        <BsSearch className='mt-5 mb-5' />
                        <p>No Projects Found</p>
                    </div> : <div className='empty-users-projects mt-2 text-center'>
                        <img src={EmptyProjectSvg} className='m-5' alt='no projects decoration' />
                        <p>No projects created yet.<br />
                            Go ahead and create your first project!
                        </p>
                        <Button onClick={() => history.push('./editproject')}>+ Add your first project</Button>
                    </div>
                }
            </div >
        </Container >
    )
}
