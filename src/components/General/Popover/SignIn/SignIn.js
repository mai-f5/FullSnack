import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import TextInput from '../../FormComponents/TextInput';
import ErrorMessage from '../../FormComponents/ErrorMsg';
import MySpinner from '../../MySpinner'
import { inputChangeHandler } from '../../../../utils/handlers';
import { validateInput } from '../../../../utils/validations'
import { login } from '../../../../DAL/users'
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
                <TextInput controlId='username'
                    type='text'
                    placeholder='Enter Username'
                    name='username' value={loginData.username.value}
                    onChange={(e) => {
                        setLoginResult({})
                        setLoginData(inputChangeHandler(e, loginData))
                    }}
                    onBlur={(e) => setLoginData(validateInput(e, loginData))} />

                <TextInput controlId="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => {
                        setLoginResult({})
                        setLoginData(inputChangeHandler(e, loginData))
                    }}
                    onBlur={(e) => setLoginData(validateInput(e, loginData))} />

                <Button variant="primary" type="submit" className='d-block mx-auto' disabled={disablingLoader}>
                    Sign in
                </Button>
                {typeof loginResult === 'string' ? <ErrorMessage error={loginResult} /> : null}
                {disablingLoader && <MySpinner />}
            </Form>
        </>
    )
}
