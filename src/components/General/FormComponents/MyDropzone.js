import React, { useState, useEffect } from 'react'
import Dropzone from 'react-dropzone'
import MyModal from '../Modal/MyModal'
import { BiDownload } from 'react-icons/bi'
import { AiOutlineFile } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
export default function MyDropzone({ name, insertedFiles, onFileUpload }) {
    const initalFilesState = insertedFiles || [];
    const [files, setFiles] = useState(initalFilesState);

    const handleDrop = acceptedFiles => {
        if (name === 'assetsSrc' && files.length > 0) return
        setFiles([...files, ...acceptedFiles])
    };

    useEffect(() => {
        console.log(files);
        onFileUpload(({ target: { name: name, value: typeof files !== 'string' ? [...files] : files } }))
    }, [files])

    const removeFiles = newFilesArr => {
        setFiles([...newFilesArr])
    }
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
                                        <span key={`remove-${idx}`} onClick={(e) => {
                                            e.stopPropagation();
                                        }}>
                                            <MyModal type='removeFile' removeType='Picture' removeName={typeof file.pic_src === 'string' ? file.pic_src : file.name} removableId={typeof file === 'string' ? file.id : idx} removeableFile={file} prevFilesArr={files} getNewFilesArr={removeFiles} />
                                        </span>
                                    </li>)}
                                </ul>
                                    :
                                    <div className='mt-4'>
                                        <AiOutlineFile />
                                        <div className='file-name-dnd mr-2'>{typeof files === 'string' ? files : files[0].name}</div>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                        }}>
                                            <MyModal type='removeFile' removeType='File' removeName={typeof files === 'string' ? files : files[0].name} prevFilesArr={files} getNewFilesArr={removeFiles} />
                                        </div>
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