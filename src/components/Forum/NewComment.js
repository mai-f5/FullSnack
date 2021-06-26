import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import userProfileImagePlaceholder from '../../images/usersImages/user_id_1/img-placeholder.png'
import { Button } from 'react-bootstrap'
import React from 'react'
import AddCommentBtn from './AddCommentBtn'
export default function NewComment() {
    return (
        <div className='media p-3 pl-5 border border-dark rounded'>
            <img src={userProfileImagePlaceholder} className='mr-3 mt-3 forum-user-img rounded-circle d-inline' />
            <Editor
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
                toolbarCustomButtons={[<AddCommentBtn />]}
            // wrapperStyle={ }
            // editorStyle={ }
            />
        </div >
    )
}
// ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history']