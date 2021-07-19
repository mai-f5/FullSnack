
import { Modal, Button, CloseButton } from 'react-bootstrap'
import { useState } from 'react';
import SignUp from './SignUp/SignUp';
import PasswordChange from './PasswordChange/PasswordChange';
import ShareProject from './ShareProject/ShareProject';
import NewThread from '../../MainPages/ProjectDisplay/Forum/ForumForms/NewThread';
import { BiShareAlt, BiTrash } from 'react-icons/bi'
import RemoveWarning from './RemoveWarning/RemoveWarning';
function MyModal({ type, projectId, removeType, removeName, removableId, removeByIdx, removeableFilesArr, removeableFile, prevFilesArr, getNewFilesArr, invokeRerender, relevantData, updatePasswordResponse }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let removeFilesClasses = 'p-0 m-0 btn-as-link remove-link font-weight-light'
    if (removeType === 'Picture') removeFilesClasses += ' multiple-files-remove'
    return (
        <>
            {type === 'signup-nav' ? <button onClick={handleShow} className='btn-as-link'>Sign Up</button> :
                type === 'share' ? <Button onMouseDown={(e) => e.preventDefault()} onClick={handleShow} className='like-share-icon rounded-circle text-center ml-2'><BiShareAlt /></Button> :
                    type === 'delete' ? <button onClick={handleShow} className='btn-as-link text-dark button-zindex'><BiTrash /></button> :
                        type === 'removeFile' ? <Button className={removeFilesClasses} onClick={(e) => {
                            handleShow(e)
                            e.stopPropagation();
                        }}>remove</Button> :
                            <Button variant="primary" onClick={handleShow}>
                                {type === 'signup' ? 'Sign Up' :
                                    type === 'newThread' ? 'New Thread' :
                                        'Change Password'
                                }
                            </Button>
            }

            <Modal show={show} onHide={handleClose}>
                <CloseButton onClick={handleClose} className="d-flex justify-content-end" />
                {type.includes('signup') ? <SignUp /> :
                    type === 'share' ? <ShareProject projectId={projectId} /> :
                        type === 'password' ? <PasswordChange close={handleClose} updatePasswordResponse={updatePasswordResponse} /> :
                            type === 'newThread' ? <NewThread relevantData={relevantData} close={handleClose} invokeRerender={invokeRerender} /> :
                                type === 'delete' || type === 'removeFile' ? <RemoveWarning type={removeType} name={removeName} close={handleClose} id={removableId} idx={removeByIdx} filesArr={removeableFilesArr} file={removeableFile} prevFilesArr={prevFilesArr} getNewFilesArr={getNewFilesArr} invokeExploreRerender={invokeRerender} />
                                    : null}

            </Modal>
        </>
    );
}

export default MyModal;