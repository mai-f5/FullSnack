import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'

export default function FilterSection() {
    return (
        <div>
            <Form inline>
                <Form.Label>Search</Form.Label>
                <FormControl type="text" placeholder="Search by keyword..." className="mr-sm-2" />
                <button className='btn-as-link text-dark' ><BiSearch /></button>
            </Form>
            <Form>
                <Form.Row>
                    <p className='mr-4'>Filter By</p>
                    <Form.Group controlId="requiredTechSelect" className='mr-2'>
                        <Form.Control as="select" custom>
                            <option>Required Technologies</option>
                            <option>HTML</option>
                            <option>CSS</option>
                            <option>JavaScript</option>

                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="difficultyLvlSelect" className='ml-2 mr-2'>
                        <Form.Control as="select" custom>
                            <option value=''>Difficulty Level</option>
                            <option value='1'>Easy</option>
                            <option value='2'>Medium</option>
                            <option value='3'>Hard</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="assetsSelect" className='ml-2'>
                        <Form.Control as="select" custom>
                            <option value=''>Assets</option>
                            <option value='1'>Included</option>
                            <option value='0'>Not Included</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <p className='mr-4'>Sort By</p>
                    <Form.Check
                        custom
                        inline
                        label="Most Popular"
                        type='radio'
                        id='most-popular-rb'
                    />
                    <Form.Check
                        custom
                        inline
                        label="Most Recent"
                        type='radio'
                        id='most-popular-rb'
                    />
                </Form.Row>
            </Form>
        </div>
    )
}
