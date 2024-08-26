import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addvideo() {

      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <button className=' btn m-5' onClick={handleShow}>
                <i className="fa-solid fa-square-plus fa-3x" style={{ color: "#0d1582", }} />
            </button>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingidt" label="Video ID" className="mb-3">
        <Form.Control type="number" placeholder="id" />
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3">
        <Form.Control type="text" placeholder="vt" />
      </FloatingLabel>
      <FloatingLabel controlId="imgurl" label="Video Image URL" className="mb-3">
        <Form.Control type="text" placeholder="vimg" />
      </FloatingLabel>
      <FloatingLabel controlId="utube" label=" YouTube Video URL" className="mb-3">
        <Form.Control type="text" placeholder="yvt" />
      </FloatingLabel>

       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Addvideo