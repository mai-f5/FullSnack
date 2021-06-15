
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import SignUp from './SignUp';
function MyModal({ type }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/*add close button */}
            {type === 'signup-nav' ? <button onClick={handleShow} className='btn-as-link'>Sign Up</button> :
                <Button variant="primary" onClick={handleShow}>
                    {type === 'signup' ? 'Sign Up' : '(delete icon)'}
                </Button>
            }

            <Modal show={show} onHide={handleClose}>
                {type.includes('signup') ? <SignUp /> : null/*Change Password, Delete- img, asset, project, (changes not saved if started editing project) */}

            </Modal>
        </>
    );
}

export default MyModal;