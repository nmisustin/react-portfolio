import React, {useState} from 'react';
import Modal from 'react-bootstrap/modal'
import Website from '../Website';

function MyModal(props){
    const project = props
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <>
            <button className="btn btn-secondary text-light" onClick={handleShow}>info</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{project.project.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{project.project.description}</Modal.Body>
                <Modal.Footer>
                    <a className='btn btn-primary text-light' href={project.project.github} target='_blank'>Github </a>
                    <Website website= {project}></Website>
                    <button className='btn btn-success text-light' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default MyModal;