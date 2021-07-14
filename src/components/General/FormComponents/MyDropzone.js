import React, { useState, useEffect } from 'react'
import Dropzone from 'react-dropzone'
import { BiDownload } from 'react-icons/bi'
import { AiOutlineFile } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
export default function MyDropzone({ name, insertedFiles, onFileUpload }) {
    const initalFilesState = insertedFiles || [];
    const [files, setFiles] = useState(initalFilesState);

    const handleDrop = acceptedFiles => {
        setFiles([...files, ...acceptedFiles])
    };

    useEffect(() => {
        onFileUpload(({ target: { name: name, value: typeof files !== 'string' ? [...files] : files } }))
    }, [files])

    return (
        <div className="drag-drop-files">
            <Dropzone onDrop={handleDrop}
                accept={name === 'pictures' ? 'image/*' : ''}
            >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <div className='text-center'>
                            {!files.length > 0 && <div>
                                <div><BiDownload className='mb-3' /></div>
                                <Button>Add Files</Button>
                                <p>or drag and drop files here</p>
                            </div>}
                            {files.length > 0 && <div>
                                {name === 'pictures' ? <ul className='dnd-ul text-left'>
                                    {files.map((file, idx) => <li key={idx} className='d-flex'>
                                        <AiOutlineFile className='mr-2' /><span className='file-name-dnd mr-2'>{typeof file.pic_src === 'string' ? file.pic_src : file.name}</span>
                                        <span key={`remove-${idx}`}><Button className='p-0 m-0 remove-link font-weight-light multiple-files-remove' onClick={(e) => {
                                        }} > remove</Button></span>
                                    </li>)}
                                </ul>
                                    :
                                    <div class='mt-4'>
                                        <AiOutlineFile />
                                        <div className='file-name-dnd mr-2'>{typeof files === 'string' ? files : files[0].name}</div>
                                        <div><Button className='p-0 m-0 remove-link font-weight-light' onClick={(e) => {
                                        }}>remove</Button></div>
                                    </div>
                                }
                            </div>}
                        </div>
                    </div>
                )}
            </Dropzone>
        </div>
    );
}