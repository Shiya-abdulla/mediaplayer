import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Videocards() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={handleShow} style={{ cursor: "pointer" }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngsZqNHAunE9Q4bbqAIT_TJK6TAFGiZliGQ&s" />
                <Card.Body>
                    <Card.Title>Heeriye</Card.Title>

                    <Button variant="btn">
                        <i className="fa-solid fa-trash " style={{ color: "#cb0b0b", }} />
                    </Button>
                </Card.Body>
            </Card>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Heeriye</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <iframe width="100%" height="315" src="https://www.youtube.com/embed/RLzC55ai0eo?si=PTPXI_Ybqh0zCqK_&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Videocards