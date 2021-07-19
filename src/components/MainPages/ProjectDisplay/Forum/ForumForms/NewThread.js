import React, { useState, useContext, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { addNewThread } from '../../../../../DAL/forum'
import { addNewNotification } from '../../../../../DAL/events'
import userContext from '../../../../../utils/AuthContext'
import { inputChangeHandler } from '../../../../../utils/handlers'
import { validateInput, isFormValid } from '../../../../../utils/validations'
import TextInput from '../../../../General/FormComponents/TextInput'

export default function NewThread({ relevantData, close, invokeRerender }) {

    const context = useContext(userContext)
    const [disableBtn, setDisableBtn] = useState(true)
    const [newThreadData, setNewThreadData] = useState({
        topic: {
            value: '',
            error: ''
        },
        body: {
            value: '',
            error: ''
        }
    })

    useEffect(() => {
        setDisableBtn(!isFormValid(newThreadData))
    }, [newThreadData])

    const onPostThread = async (e) => {
        e.preventDefault()
        if (isFormValid(newThreadData)) {
            await addNewThread({
                project_id: relevantData.projectId,
                user_id: context.loggedUser.id,
                topic: newThreadData.topic.value,
                body: newThreadData.body.value
            })
            if (context.loggedUser.id !== relevantData.projectsOwnerId) {
                await addNewNotification({ type_id: 1, acted_user_id: context.loggedUser.id, notified_user_id: relevantData.projectsOwnerId, project_id: relevantData.projectId })
            }
            invokeRerender()
        }
    }

    return (
        <div className='new-thread-form'>
            <h4 className='font-weight-bold text-center'>New Thread</h4>
            <hr />
            <Form onSubmit={onPostThread}>
                <TextInput controlId="thread"
                    label="Topic:"
                    info='Must be between 2-75 characters'
                    info2={`${newThreadData.topic.value.length}/75`}
                    isRequired={true}
                    type="text"
                    placeholder="Enter Topic"
                    name="topic"
                    value={newThreadData.topic.value}
                    error={newThreadData.topic.error}
                    onChange={(e) => setNewThreadData(inputChangeHandler(e, newThreadData))}
                    onBlur={(e) => setNewThreadData(validateInput(e, newThreadData))}
                    maxLength={75}
                />
                <TextInput controlId="threadBody"
                    label="Body:" as="textarea"
                    info={`${newThreadData.body.value.length}/500`}
                    name="body"
                    value={newThreadData.body.value}
                    error={newThreadData.body.error}
                    onChange={(e) => setNewThreadData(inputChangeHandler(e, newThreadData))}
                    onBlur={(e) => setNewThreadData(validateInput(e, newThreadData))}
                    rows={10}
                    maxLength={500}
                />
                <Button type='submit' onClick={close} disabled={disableBtn}>Post Thread</Button>
            </Form>
        </div >
    )
}
