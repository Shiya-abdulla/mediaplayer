import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocards from './Videocards'

function Videos() {
  return (
   <>
   <div className='border border-3 p-5 mb-3'>
    <Row>
        <Col>
        <Videocards/>
        </Col>
    </Row>
     
   </div>
   </>
  )
}

export default Videos