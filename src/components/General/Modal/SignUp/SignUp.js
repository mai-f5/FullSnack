import React, { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { addNewUser, login } from '../../../../DAL/users'
import { inputChangeHandler } from '../../../../utils/handlers'
import { validateInput, isFormValid } from '../../../../utils/validations'
import userContext from '../../../../utils/AuthContext'
import TextInput from '../../FormComponents/TextInput'
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
            await addNewUser({
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
                <TextInput
                    controlId={'username'}
                    type={'text'}
                    label={'Username'}
                    info={'Must be between 4-12 characters'}
                    name={'username'}
                    value={signUpData.username.value}
                    error={signUpData.username.error}
                    onChange={(e) => setSignUpData(inputChangeHandler(e, signUpData))}
                    onBlur={(e) => {
                        setBlurredOutOfInput(true)
                        setSignUpData(validateInput(e, signUpData))
                    }}
                    placeholder={'Enter Username'}
                />

                <TextInput
                    controlId={'email'}
                    type={'email'}
                    label={'Email'}
                    info={'Must be a valid email address'}
                    name={'email'}
                    value={signUpData.email.value}
                    error={signUpData.email.error}
                    onChange={(e) => setSignUpData(inputChangeHandler(e, signUpData))}
                    onBlur={(e) => {
                        setBlurredOutOfInput(true)
                        setSignUpData(validateInput(e, signUpData))
                    }}
                    placeholder={'Enter email'}
                />
                <TextInput
                    controlId={'password'}
                    type={'password'}
                    label={'Password'}
                    info={'Must be between 8-16 characters, At least 1 letter and 1 number'}
                    name={'password'}
                    value={signUpData.password.value}
                    error={signUpData.password.error}
                    onChange={(e) => setSignUpData(inputChangeHandler(e, signUpData))}
                    onBlur={(e) => {
                        setBlurredOutOfInput(true)
                        setSignUpData(validateInput(e, signUpData))
                    }}
                    placeholder={'Enter password'}
                />

                <TextInput
                    controlId={'passwordConfirm'}
                    type={'password'}
                    label={'Confirm Password'}
                    info={'Must match entered password'}
                    name={'passwordConfirm'}
                    value={signUpData.passwordConfirm.value}
                    error={signUpData.passwordConfirm.error}
                    onChange={(e) => setSignUpData(inputChangeHandler(e, signUpData))}
                    onBlur={(e) => {
                        setBlurredOutOfInput(true)
                        setSignUpData(validateInput(e, signUpData))
                    }}
                    placeholder={'Enter password'}
                />

                <Button variant="primary" type="submit" className='d-block mx-auto' disabled={isBtnDisabled}>
                    Join
                </Button>
            </Form>
        </>
    )
}
