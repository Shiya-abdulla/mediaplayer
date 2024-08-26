import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className='container-fluid d-flex align-items-center' style={{ height: "80vh" }}>
        <Row >
          <Col className='p-5 ' sm={12} md={6}>
            <h4>
              <i className="fa-brands fa-youtube fa-beat-fade fa-1x" style={{ color: "#cd131c" }}></i>
              MediaPlayer
            </h4>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem et pariatur similique dolorem, incidunt aspernatur suscipit enim labore! Voluptas illum praesentium provident deleniti. Consequuntur natus harum omnis nisi dolores.</p>
            <div className='d-grid mt-4'>
              <Link to={'/home'} className='btn btn-info'>Let's Go</Link>
            </div>
          </Col>


          <Col className='py-4' sm={12} md={6}>
            <img src="https://img.freepik.com/premium-psd/3d-video-camera-icon_368873-236.jpg?w=740" alt="" className='img-fluid rounded' style={{ height: "300px", width: "500px" }} />

          </Col>
        </Row>

      </div>

      <div className='p-4' style={{ height: "100vh" }}>
        <div>
          <h3 style={{ textAlign: "center" }}>Features</h3>
          <div className='d-flex justify-content-around mt-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/88/60/c0/8860c0ee4fb6e265800445bac368f234.gif" />
              <Card.Body>
                <Card.Title>Upload Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'200px'} src="https://cdni.iconscout.com/illustration/free/thumb/free-man-watching-online-video-illustration-download-in-svg-png-gif-file-formats--streaming-service-call-to-action-pack-design-development-illustrations-3798680.png?f=webp" />
              <Card.Body>
                <Card.Title>History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHglQw2fPyBJ8E71IzF3LGcyYBiAwupxn58A&s" />
              <Card.Body>
                <Card.Title>Catgories</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>

      </div>

      <div className='p-5'>
        <Row>
          <Col sm={12} md={7}>
            <h4>Simple and Faster</h4>
            <p style={{textAlign:"justify"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi, ducimus, nihil ullam ratione quisquam modi ipsa est nulla aliquid odio minima adipisci veritatis voluptates eligendi eos voluptate facere Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus quasi soluta cumque nulla ipsam dolore tenetur officiis voluptatem eveniet neque eius laborum alias quos, nesciunt et assumenda debitis harum.></p>
          </Col>
          <Col sm={12} md={5}>
          <iframe width="450" height="365" src="https://www.youtube.com/embed/7CqJlxBYj-M" title="Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>

      </div>
    </>
  )
}

export default Landing