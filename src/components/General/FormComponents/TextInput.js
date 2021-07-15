import React from 'react'
import { Form } from 'react-bootstrap'
import ErrorMsg from './ErrorMsg'

export default function TextInput({ controlId, type, icon, label, info, info2, isRequired, name, value, error, onChange, onBlur, placeholder, as, rows, maxLength, defaultValue }) {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>
                {icon ? icon : ''}
                {label}
            </Form.Label>
            {info && <Form.Text className="text-muted">
                {info}
            </Form.Text>}
            {info2 && <Form.Text className="text-muted">
                {info2}
            </Form.Text>}
            {isRequired && <Form.Text className="text-muted">
                Required
            </Form.Text>}
            <Form.Control type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                rows={rows}
                as={as}
                maxLength={maxLength}
                defaultValue={defaultValue}
            />
            <ErrorMsg error={error} />
        </Form.Group>

    )
}
