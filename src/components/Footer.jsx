import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-light p-2'>
        <Row className='p-5 '>
          <Col sm={12} md={5} >
            <h4  >MediaPlayer 2024</h4>
            <p style={{textAlign:"justify" } } className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus libero alias magni sit ipsam vitae eaque nisi aliquid. Suscipit, quia. Unde labore autem officiis illum? Minus ea saepe nesciunt.

            </p>
          </Col>
          <Col sm={12} md={2} className='d-flex flex-column '>
          <h4>Links</h4>
          <Link to={'/'}>Landing</Link>
          <Link to={'/home'}>Home</Link>
          <Link to={'/history'}>Watch History</Link>
          
          </Col>
          <Col sm={12} md={5}>
          <h4>Feedback</h4>
          <textarea name="" id="" className='form-control'></textarea>
          <button className='btn btn-info mt-3'>Send</button>
          
          </Col>
        </Row>
        <h6 className='text-center'>MediaPlayer 2024 &copy</h6>

      </div>
    </>
  )
}

export default Footer