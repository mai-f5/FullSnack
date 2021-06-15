import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import MultiTechSelect from './MultiTechSelect'

export default function FilterSection() {
    return (
        <div>
            <Form className='col-sm-12 col-md-6 p-0'>
                <Form.Group controlId='search' className='search'>
                    <FormControl type="text" placeholder="Search by keyword..." />
                    <button className='btn-as-link text-dark' ><BiSearch /></button>
                </Form.Group>
            </Form>
            <Form>
                <Form.Row>
                    <p className='mr-4 font-weight-bold'>Filter By</p>
                    {/* <Form.Group controlId="requiredTechSelect" className='mr-2'>
                        
                        <Form.Control as="select">
                            <option disabled hidden selected value=''>Required Technologies</option>
                            <option>HTML</option>
                            <option>CSS</option>
                            <option>JavaScript</option>
                        </Form.Control>
                    </Form.Group> */}
                    <MultiTechSelect />

                    <Form.Group controlId="difficultyLvlSelect" className='ml-2 mr-2'>
                        <Form.Control as="select">
                            <option disabled hidden selected value='' >Difficulty Level</option>
                            <option value='1'>Easy</option>
                            <option value='2'>Medium</option>
                            <option value='3'>Hard</option>
                            <option value=''>All Levels</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="assetsSelect" className='ml-2'>
                        <Form.Control as="select">
                            <option disabled hidden selected value='' >Assets</option>
                            <option value='1'>Included</option>
                            <option value='0'>Not Included</option>
                            <option value=''>Either</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <p className='mr-4 font-weight-bold'>Sort By</p>
                    <Form.Check
                        custom
                        inline
                        label="Most Popular"
                        type='radio'
                        id='most-popular-rb'
                        className='font-weight-lighter'
                    />
                    <Form.Check
                        custom
                        inline
                        label="Most Recent"
                        type='radio'
                        id='most-popular-rb'
                        className='font-weight-lighter'
                    />
                </Form.Row>
            </Form>
        </div>
    )
}
