import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { BiDownload } from 'react-icons/bi'
import { AiOutlineFile } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
export default function MyDropzone({ type }) {
    const [files, setFiles] = useState([]);

    const handleDrop = acceptedFiles => {
        setFiles([...files, acceptedFiles])
        setHasFiles(true)
    };

    const [hasFiles, setHasFiles] = useState(false)  /*TEMP */


    return (
        <div className="drag-drop-files">
            <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <div className='text-center'>
                            {!hasFiles && <div>
                                <div><BiDownload className='mb-3' /></div>
                                <Button>Add Files</Button>
                                <p>or drag and drop files here</p>
                            </div>}
                            {hasFiles && <div>
                                {type === 'images' ? <ul className='dnd-ul text-left'>
                                    {files.map((file, idx) => <li key={idx} className='d-flex'>
                                        <AiOutlineFile className='mr-2' /><span className='file-name-dnd mr-2'>{file[0].name}</span>
                                        <span key={`remove-${idx}`}><Button className='btn-as-link p-0 m-0 remove-link font-weight-light'>remove</Button></span>
                                    </li>)}
                                </ul> : <div class='mt-4'>
                                    <AiOutlineFile />
                                    <div className='file-name-dnd mr-2'>{files[0][0].name}</div>
                                    <div><Button className='btn-as-link p-0 m-0 remove-link font-weight-light'>remove</Button></div>
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