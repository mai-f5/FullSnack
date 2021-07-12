import React, { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { addNewUser, login } from '../../../../DAL/users'
import { inputChangeHandler } from '../../../../utils/handlers'
import { validateInput, isFormValid } from '../../../../utils/validations'
import ErrorMessage from '../../FormComponents/ErrorMsg'
import userContext from '../../../../utils/AuthContext'
export default function SignUp() {
    const context = useContext(userContext)
    const [signUpData, setSignUpData] = useState({
        username: {
            value: '',
            error: ''
        },
        email: {
            value: '',
            error: ''
        },
        password: {
            value: '',
            error: ''
        },
        passwordConfirm: {
            value: '',
            error: ''
        }
    })
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const [blurredOutOfInput, setBlurredOutOfInput] = useState(false)


    useEffect(() => {
        setIsBtnDisabled(!isFormValid(signUpData))
        setBlurredOutOfInput(false)
    }, [blurredOutOfInput])

    async function signUp(e) {
        e.preventDefault();
        if (isFormValid(signUpData)) {
            const newUser = await addNewUser({
                username: signUpData.username.value,
                email: signUpData.email.value,
                password: signUpData.password.value
            })

            context.setLoggedUser(await login({ username: signUpData.username.value, password: signUpData.password.value }))
        }
    }


    return (
        <>
            <h2>Sign Up</h2>
            <hr />
            <p>All fields are Required</p>
            <Form onSubmit={signUp}>

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Text className="text-muted">
                        Must be between 4-12 characters
                    </Form.Text>
                    <Form.Control type="text"
                        name="username"
                        value={signUpData.username.value}
                        onChange={(e) => setSignUpData(inputChangeHandler(e, signUpData))}
                        onBlur={(e) => {
                            setBlurredOutOfInput(true)
                            setSignUpData(validateInput(e, signUpData))
                        }}
                        placeholder="Enter Username" />
                    <ErrorMessage error={signUpData.username.error} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Text className="text-muted">
                        Must be a valid email address
                    </Form.Text>
                    <Form.Control type="email"
                        name="email"
                        value={signUpData.email.value}
                        onChange={(e) => setSignUpData(inputChangeHandler(e, signUpData))}
                        onBlur={(e) => {
                            setBlurredOutOfInput(true)
                            setSignUpData(validateInput(e, signUpData))
                        }}
                        placeholder="Enter email" />
                    <ErrorMessage error={signUpData.email.error} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Text className="text-muted">
                        Must be between 8-16 characters, At least 1 letter and 1 number
                    </Form.Text>
                    <Form.Control type="password"
                        name="password"
                        value={signUpData.password.value}
                        onChange={(e) => setSignUpData(inputChangeHandler(e, signUpData))}
                        onBlur={(e) => {
                            setBlurredOutOfInput(true)
                            setSignUpData(validateInput(e, signUpData))
                        }}
                        placeholder="Password" />
                    <ErrorMessage error={signUpData.password.error} />
                </Form.Group>


                <Form.Group controlId="passwordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Text className="text-muted">
                        Must match password
                    </Form.Text>
                    <Form.Control type="password"
                        name="passwordConfirm"
                        value={signUpData.passwordConfirm.value}
                        onChange={(e) => setSignUpData(inputChangeHandler(e, signUpData))}
                        onBlur={(e) => {
                            setBlurredOutOfInput(true)
                            setSignUpData(validateInput(e, signUpData))
                        }}
                        placeholder="Enter password again" />
                    <ErrorMessage error={signUpData.passwordConfirm.error} />
                </Form.Group>

                <Button variant="primary" type="submit" className='d-block mx-auto' disabled={isBtnDisabled}>
                    Join
                </Button>
            </Form>
        </>
    )
}
