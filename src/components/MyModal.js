
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import SignUp from './SignUp';
import PasswordChange from './PasswordChange';
import NewThread from './Forum/NewThread';
import ShareProject from './ShareProject';
import { BiShareAlt } from 'react-icons/bi'
function MyModal({ type }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/*add close button */}
            {type === 'signup-nav' ? <button onClick={handleShow} className='btn-as-link'>Sign Up</button> :
                type === 'share' ?
                    <Button onClick={handleShow} className='rounded-circle text-center ml-2'><BiShareAlt /></Button>
                    :
                    <Button variant="primary" onClick={handleShow}>
                        {type === 'signup' ?
                            'Sign Up' :
                            type === 'delete' ? '(delete icon)' : type === 'newThread' ? 'New Thread' : 'Change Password'
                        }
                    </Button>
            }

            <Modal show={show} onHide={handleClose}>
                {type.includes('signup') ? <SignUp /> :
                    type === 'share' ? <ShareProject /> :
                        type === 'password' ? <PasswordChange /> : type === 'newThread' ?
                            <NewThread /> :
                            null/*Change Password, Delete- img, asset, project, (changes not saved if started editing project) */}

            </Modal>
        </>
    );
}

export default MyModal;