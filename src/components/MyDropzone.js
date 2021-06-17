import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { BiDownload } from 'react-icons/bi'
import { Button } from 'react-bootstrap'
export default function MyDropzone() {
    const [fileNames, setFileNames] = useState([]);

    const handleDrop = acceptedFiles =>

        setFileNames(acceptedFiles.map(file => {
            fileNames.push(file.name)
            return fileNames
        }));

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
                                <ul>
                                    {fileNames.map(fileName => (
                                        <li key={fileName}>{fileName}</li>
                                    ))}
                                </ul>
                            </div>}
                        </div>
                    </div>
                )}
            </Dropzone>

        </div>
    );
}