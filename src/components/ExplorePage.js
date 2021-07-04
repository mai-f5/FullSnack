import React, { useState, useEffect } from 'react'
import { Row, Button, Form, FormControl, Container } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import FilterSection from './FilterSection'
import api from '../DAL/api'
export default function Explore() {
    const [cardsData, setCardsData] = useState([])

    useEffect(() => {
        api.getProjectsRowData().then(data => {
            setCardsData([...(JSON.parse(data.cardsDataList))])
        })
    }, [])

    return (
        <Container className='mt-5'>
            <h2 >Full Stack Projects</h2>
            <FilterSection />

            <div className='projectsExplore'>
                < Row >
                    {cardsData.map(cardData => < ProjectCard data={cardData} />)}
                </Row >
            </div >

        </Container >
    )
}
