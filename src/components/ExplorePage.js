import React, { useState } from 'react'
import { Row, Container, Alert } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import ProjectCard from './ProjectCard'
import FilterSection from './FilterSection'

export default function Explore() {
    const [cardsData, setCardsData] = useState([])

    return (
        <Container className='mt-5'>
            <h2 >Full Stack Projects</h2>
            <FilterSection setCardsData={setCardsData} />

            <div className='projectsExplore'>
                {cardsData.length > 0 ?
                    < Row >
                        {cardsData.map(cardData => <ProjectCard data={cardData} />)}
                    </Row > :
                    <div className='text-center projs-not-found'>
                        <BsSearch className='mt-5 mb-5' />
                        <p>No Projects Found</p>
                    </div>
                }
            </div >
        </Container >
    )
}
