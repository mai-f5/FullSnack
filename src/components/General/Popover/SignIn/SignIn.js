import React, { useState, useEffect, useContext } from 'react'
import { Redirect, useHistory } from "react-router-dom";
import { Form, Button, Spinner } from 'react-bootstrap'
import ErrorMessage from '../../FormComponents/ErrorMsg';
import { getUserData, login } from '../../../../DAL/users'
import validateInput from '../../../../utils/validations'
import Cookies from "js-cookie";
import userContext from '../../../../utils/AuthContext';

export default function SignIn() {
    const [disablingLoader, setDisablingLoader] = useState(false)
    const [loginResult, setLoginResult] = useState({})
    const [loginData, setLoginData] = useState({
        username: {
            value: '',
            error: '',
        },
        password: {
            value: '',
            error: '',
        }
    })
    const history = useHistory();
    const context = useContext(userContext)

    async function loginSubmit(e) {
        e.preventDefault()

        if (!loginData.username.error && !loginData.password.error) {
            setDisablingLoader(true)
            const loginRes = await login({ username: loginData.username.value, password: loginData.password.value })
            setLoginResult(loginRes)
            setDisablingLoader(false)

            if (loginRes.id) {
                context.setLoggedUser(loginRes);
            }
        } else {
            setLoginData({
                ...loginData,
                password: {
                    ...loginData['password'],
                    value: '',
                }
            })
            setLoginResult('Incorrect Username/Password')
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
                        name="username"
                        value={loginData.username.value}
                        onChange={(e) => {
                            setLoginResult({})
                            setLoginData({
                                ...loginData,
                                username: {
                                    ...loginData['username'],
                                    value: e.target.value,
                                }
                            }
                            )
                        }}
                        onBlur={(e) => setLoginData(validateInput(e, loginData))}
                    />

                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginData.password.value}
                        onChange={(e) => {
                            setLoginResult({})
                            setLoginData({
                                ...loginData,
                                password: {
                                    ...loginData['password'],
                                    value: e.target.value,
                                }
                            }
                            )
                        }}
                        onBlur={(e) => setLoginData(validateInput(e, loginData))}
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
