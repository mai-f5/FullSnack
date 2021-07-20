import React, { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import TextInput from '../../FormComponents/TextInput'
import userContext from '../../../../utils/AuthContext'
import { inputChangeHandler } from '../../../../utils/handlers'
import { isFormValid, validateInput } from '../../../../utils/validations'
import { updateUserPassword } from '../../../../DAL/users'
import MySpinner from '../../MySpinner'

export default function PasswordChange({ close, updatePasswordResponse }) {
    const context = useContext(userContext)
    const [loader, setLoader] = useState(false)
    const [disableBtn, setDisableBtn] = useState(true)
    const [passwordData, setPasswordData] = useState({
        oldPassword: {
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

    useEffect(() => {
        setDisableBtn(!isFormValid(passwordData))
    }, [passwordData])

    async function onPasswordChangeSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        setLoader(true)
        if (isFormValid(passwordData)) {
            const serverRes = await updateUserPassword({
                userId: context.loggedUser.id,
                oldPassword: passwordData.oldPassword.value,
                newPassword: passwordData.passwordConfirm.value
            })
            setLoader(false)
            if (!serverRes.changed) {
                setPasswordData({
                    ...passwordData,
                    oldPassword: {
                        ...passwordData.oldPassword,
                        error: "Incorrect password"
                    }
                })
            } else {
                updatePasswordResponse()
                close()
            }
        }
    }

    return (
        <div>
            <h2>Password Change</h2>
            <hr />
            <Form onSubmit={onPasswordChangeSubmit}>
                <TextInput
                    controlId="oldPassword"
                    label="Old password:"
                    type="password"
                    name='oldPassword'
                    value={passwordData.oldPassword.value}
                    error={passwordData.oldPassword.error}
                    onChange={(e) => setPasswordData(inputChangeHandler(e, passwordData))}
                    onBlur={(e) => setPasswordData(validateInput(e, passwordData))}
                />

                <TextInput
                    controlId="password"
                    label="New password:"
                    type="password"
                    info='Must be between 8-16 characters, At least 1 letter and 1 number'
                    name='password'
                    value={passwordData.password.value}
                    onChange={(e) => setPasswordData(inputChangeHandler(e, passwordData))}
                    onBlur={(e) => setPasswordData(validateInput(e, passwordData))}
                    error={passwordData.password.error} />

                <TextInput
                    controlId="passwordConfirm"
                    label="Confirm new password:"
                    type="password"
                    info='Must match password'
                    name='passwordConfirm'
                    value={passwordData.passwordConfirm.value}
                    onChange={(e) => setPasswordData(inputChangeHandler(e, passwordData))}
                    onBlur={(e) => setPasswordData(validateInput(e, passwordData))}
                    error={passwordData.passwordConfirm.error} />

                <Button type='submit' disabled={disableBtn} className='mr-2'>Save Changes</Button>
                <Button onClick={close}>Cancel</Button>
                {loader && <MySpinner />}
            </Form>

        </div>
    )
}
