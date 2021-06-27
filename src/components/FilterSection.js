import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import MyMultiSelect from './MyMultiSelect'

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
                    <div className='mr-2'>
                        <MyMultiSelect type='tech' />
                    </div>
                    <div className='mr-2'>
                        <MyMultiSelect type='difficultyLvls' />
                    </div>
                    <MyMultiSelect type='assets' />
                </Form.Row>
            </Form>
            <Form>
                <Form.Row className='sort-by-section'>
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
