import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import userProfileImagePlaceholder from '../../../../../../images/usersImages/user_id_1/img-placeholder.png'
import React from 'react'
import AddCommentBtn from './AddCommentBtn'
import { useState } from 'react';
import ErrorMessage from '../../../../../General/FormComponents/ErrorMsg';
export default function NewComment({ relevantData, invokeRerender }) {

    const [commentData, setCommentData] = useState({
        value: EditorState.createEmpty(),
        error: ''
    })
    const [commentDataDB, setCommentDataDB] = useState({})

    const onCommentChange = editorState => {
        setCommentData({
            value: editorState,
            error: ''
        })

        const data = convertToRaw(editorState.getCurrentContent());
        setCommentDataDB({ ...data })
    };

    function returnError() {
        setCommentData({
            ...commentData,
            error: 'Empty comment is not allowed'
        })
    }

    return (<div>
        <div className='media p-3 pl-5 border border-dark rounded'>
            <img src={userProfileImagePlaceholder} className='mr-3 mt-3 forum-user-img rounded-circle d-inline' alt='commenter' />
            <Editor
                editorState={commentData.value}
                toolbar={{
                    options: ['inline', 'emoji'],
                    inline: {
                        options: ['bold', 'italic', 'underline', 'monospace'],
                        className: 'inline-space'
                    },
                    emoji: { className: '' },
                }}
                wrapperClassName="w-100 d-flex flex-column-reverse px-2 border border-dark rounded"
                editorClassName="m-0 editor-height"
                toolbarClassName="m-0 p-0"
                toolbarCustomButtons={[<AddCommentBtn comment={commentDataDB} threadRelevantData={relevantData} returnError={returnError} invokeRerender={invokeRerender} />]}
                onEditorStateChange={onCommentChange}
            />
        </div >
        <div className='d-block'>
            <ErrorMessage error={commentData.error} />
        </div>
    </div>
    )
}
// ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history']