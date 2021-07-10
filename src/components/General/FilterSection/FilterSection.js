import React, { useState, useEffect } from 'react'

import { Form, FormControl } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import MyMultiSelect from './MyMultiSelect'
import { getProjectsCardData } from '../../../DAL/projects'

export default function FilterSection({ setCardsData }) {
    const [filterByData, setFilterByData] = useState({
        sortBy: 'likes',
        amount: 20,
        searchTxt: '',
        difficultyLevels: [],
        requiredTechs: [],
        assets: [],
        userId: '',
        currentPage: 1,
    })

    useEffect(() => {
        getProjectsCardData(filterByData).then(data => {
            if (typeof data === 'object') {
                setCardsData([...data])
            } else {
                setCardsData([])
            }
        })
    }, [filterByData])


    function onInputChangeHandler({ target: { name, value } }) {
        setFilterByData({
            ...filterByData,
            [name]: value
        })
    }

    return (
        <div>
            <Form>
                <Form.Group controlId='search' className='search col-sm-12 col-md-6 col-lg-4 p-0'>
                    <FormControl
                        type="text"
                        placeholder="Search by keyword..."
                        name='searchTxt'
                        onChange={onInputChangeHandler}
                        value={filterByData.searchTxt}
                    />
                    <button className='btn-as-link text-dark'  ><BiSearch /></button>
                </Form.Group>
                <Form.Row className='col-12'>
                    <p className='mr-4 font-weight-bold'>Filter By</p>
                    <div className='mr-2'>
                        <MyMultiSelect type='reqTechs' onSelectChange={onInputChangeHandler} />
                    </div>
                    <div className='mr-2'>
                        <MyMultiSelect type='difficultyLvls' onSelectChange={onInputChangeHandler} />
                    </div>
                    <div className=''>
                        <MyMultiSelect type='assets' onSelectChange={onInputChangeHandler} />
                    </div>
                </Form.Row>
                <Form.Row className='sort-by-section col-12'>
                    <p className='mr-4 font-weight-bold d-sm-block'>Sort By</p>
                    <Form.Check
                        label="Most Popular"
                        type='radio'
                        id='most-popular'
                        className='font-weight-lighter mr-4'
                        name="sortBy"
                        value='likes'
                        checked={filterByData.sortBy === 'likes'}
                        onChange={onInputChangeHandler}
                    />
                    <Form.Check
                        label="Most Recent"
                        type='radio'
                        id='most-recent'
                        className='font-weight-lighter'
                        name="sortBy"
                        value='timestamp'
                        checked={filterByData.sortBy === 'timestamp'}
                        onChange={onInputChangeHandler}
                    />
                </Form.Row>
            </Form>
        </div>
    )
}
