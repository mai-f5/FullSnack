import React from 'react'
import { Form } from 'react-bootstrap'
import ErrorMsg from './ErrorMsg'

export default function TextInput({ controlId, type, icon, label, info, info2, isRequired, name, value, error, onChange, onBlur, placeholder, as, rows, maxLength }) {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label className='d-block'>
                {icon ? icon : ''}
                {label}
            </Form.Label>
            <div className='d-flex justify-content-between'>
                {info && <Form.Text className="text-muted">
                    {info}
                </Form.Text>}
                {info2 && <Form.Text className="text-muted">
                    {info2}
                </Form.Text>}
                {isRequired && <Form.Text className="text-muted">
                    *Required
                </Form.Text>}
            </div>
            <Form.Control type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                rows={rows}
                as={as}
                maxLength={maxLength}
                autoComplete="new-password"
            />
            {error ? <ErrorMsg error={error} /> : null}

        </Form.Group>

    )
}
