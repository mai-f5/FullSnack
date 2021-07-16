import { Button, CloseButton } from 'react-bootstrap'
import { removeHandler } from '../../../../utils/handlers'
import React from 'react'
import { useContext } from 'react'
import userContext from '../../../../utils/AuthContext'

export default function RemoveWarning({ type, name, close, id, prevFilesArr, file, getNewFilesArr, invokeExploreRerender }) {
    const context = useContext(userContext)
    async function handlePromise() {

        const result = await removeHandler(type, id, prevFilesArr, file, context.loggedUser.id)
        if (result instanceof Array && type !== 'Project') getNewFilesArr(result)
    }

    return (
        <div className='remove-warning'><CloseButton onClick={close} />
            <p className='mb-5 font-weight-bold'>Are you sure you want to remove '{name}'?<br />
                This cannot be undone
            </p>
            <div className='d-flex w-75 justify-content-between mx-auto'>
                <Button onClick={close}>No, Keep {type}</Button>
                <Button className='bg-secondary' onClick={(e) => {
                    handlePromise()
                    close()
                    if (type === 'Project') invokeExploreRerender()
                }}>Yes, Remove {type}</Button>
            </div>
        </div>
    )
}
