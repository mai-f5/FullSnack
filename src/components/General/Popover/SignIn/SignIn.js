import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button, Spinner } from 'react-bootstrap'
import ErrorMessage from '../../FormComponents/ErrorMsg';
import { login } from '../../../../DAL/users'

export default function SignIn() {
    const [disablingLoader, setDisablingLoader] = useState(false)
    const [loginResult, setLoginResult] = useState()
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const history = useHistory();

    useEffect(() => {
        // console.log(loginData)
    }, [loginData])

    async function loginSubmit(e) {
        e.preventDefault()
        setDisablingLoader(true)
        const loginRes = await login(loginData)
        setLoginResult(loginRes)

        setDisablingLoader(false)
        setLoginData({
            ...loginData,
            password: ''
        })

        if (typeof loginRes === 'object') {
            localStorage.setItem("loggedUser", JSON.stringify(loginRes));
            history.push('/explore');
        }

    }

    return (
        <>
            <Form onSubmit={loginSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        value={loginData.username}
                        onChange={(e) => {
                            setLoginResult()
                            setLoginData({ ...loginData, username: e.target.value }
                            )
                        }}
                    />

                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={(e) => {
                            setLoginResult()
                            setLoginData({ ...loginData, password: e.target.value }
                            )
                        }}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block mx-auto' disabled={disablingLoader}>
                    Sign in
                </Button>
                {typeof loginResult === 'string' ? <ErrorMessage error={loginResult} /> : null}
                {disablingLoader && <div className='text-center'><Spinner animation="border" variant="dark" /></div>}
            </Form>
        </>
    )
}
