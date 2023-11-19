import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logos from './images/logo.png' ;
import Button from 'react-bootstrap/Button';
import slider from './images/slider-img.jpg';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './images/slider-img.jpg';
import Card from 'react-bootstrap/Card';
import plug from './images/plug.png';
import about1 from './images/about-img1.jpg';
import about2 from './images/about-img2.jpg';
import blog1 from './images/blog1.jpg';
import blog2 from './images/blog2.jpg';
import sre1 from './images/s1.png';
import sre2 from './images/s2.png';
import sre3 from './images/s3.png';
import sre4 from './images/s4.png';
import sre5 from './images/s5.png';

function Apple() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-dark fixed-top">
             <Navbar.Brand href="#home" className='logo'>
          <img src={logos} alt="" />
          <h1>Electrochip</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-navbar-toggler" 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-item me-auto">
            <Nav.Link className="nav-menu active" aria-current="page"  href="#home">HOME</Nav.Link>
            <Nav.Link className="nav-menu" href="#about">ABOUT</Nav.Link>
            <Nav.Link className="nav-menu" href="#service" >SERVICE</Nav.Link>
            <Nav.Link className="nav-menu" href="#blog">BLOG</Nav.Link>
            <Nav.Link className="nav-menu" href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Navbar>
      <div id='home'>
        <div className='row'>
          <div className='col'>
            <div className='contant'>
              <h1>ELECTRICAL</h1>
              <h1>SERVICE</h1>
              <h1>PROVIDERS</h1>
              <p>It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout.
                 The point of using Lorem</p>
                 <Button variant="outline-primary">Contact Us</Button>

            </div>
          </div>
          <div className='col'>
            <div className='image'>
              <img src={slider} alt="slider" />
            </div>
          {/* <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
          </div>
        </div>
      </div>

      {/* service */}
      <div id='service'>
        <div className='row'>
          <div className='col'>
          <h2>Our Services</h2>
          </div>
          <div className='col'>
          <img src={plug} alt="plug" />        
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sre1} height={250}/>
      <Card.Body>
        <Card.Title>Equipment installation</Card.Title>
        <Card.Text>
        There are many variations of passages of Lorem Ipsum available,
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </div>
          <div className='col'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sre2} height={250}/>
      <Card.Body>
        <Card.Title>Windmill Energy</Card.Title>
        <Card.Text>
        There are many variations of passages of Lorem Ipsum available,
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </div>
          <div className='col'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sre3} height={250}/>
      <Card.Body>
        <Card.Title>Equipment Maintenance</Card.Title>
        <Card.Text>
        There are many variations of passages of Lorem Ipsum available,
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </div>
        </div>
        <div className='row'>
        <div className='col'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sre4} height={250}/>
      <Card.Body>
        <Card.Title>Offshore Engineering</Card.Title>
        <Card.Text>
        There are many variations of passages of Lorem Ipsum available,
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sre5} height={250}/>
      <Card.Body>
        <Card.Title>Electrical Wiring</Card.Title>
        <Card.Text>
        There are many variations of passages of Lorem Ipsum available,
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        </div>
      </div>

      
      {/* about page */}

      <div id='about'>
        <div className='row'>
          <div className='col'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit</p>
              <Button variant="outline-primary">Read More</Button>
          </div>
          <div className='col'>
            <img src={about1} alt="about" />
            <img src={about2} alt="about" />
          </div>
        </div>
      </div>

      {/* blog page */}

      <div id='blog'>
        <div className='row'>
          <h1>Blog</h1>
          <div className='col'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className='col'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={blog2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>

      {/* contact page */}

      <div id='contact'>
        <div className='row'>
          <div className='col'>
            <h1>Contact Us</h1>
            <input class="form-control form-control-lg" type="text" placeholder="Name" aria-label=".form-control-lg example"/><br />
            <input class="form-control form-control-lg" type="text" placeholder="Email" aria-label=".form-control-lg example"/><br />
            <input class="form-control form-control-lg" type="text" placeholder="Phone Numer" aria-label=".form-control-lg example"/><br />
            <input class="form-control form-control-lg" type="text" placeholder="Messag" aria-label=".form-control-lg example"/><br />

          </div>
          <div className='col'>
              <img src={slider} alt="map" />
          </div>
        </div>
      </div>
      </div>
  )
}

export default Apple;