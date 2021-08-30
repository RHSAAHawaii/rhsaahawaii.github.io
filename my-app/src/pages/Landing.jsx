import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import raf from '../images/raf2.png';
import projectGrad from '../images/projectgrad-temp.jpg';
import rhsaaPreview from '../images/rhsaahawaii-1960mural.jpg';
import rafPreview from '../images/raf-80thAnni.jpg';
import servicePreview from '../images/service-paintingmural.jpg';

class Landing extends React.Component {

  render() {
    const imageStyle = { border: '2px solid #d4af37' };
    return (
      <div className='backgroundImage'>
        <Container fluid style={{ height: '95vh', padding: '10%' }}>
          <Row className="align-items-center">
            <Col className=""> <Image rounded src={raf} className="float-right" /></Col>
            <Col>
              <Row> <h1 className="float-left">Roosevelt High School<br />Alumni Association</h1></Row>
              <Row className="align-items-center">
                <Col md={{ span: 6, offset: 0 }} style={{ padding: '5%' }}> <Button variant="danger" as={NavLink} exact to='/donate' className="float-left" size="lg" block >DONATE!</Button> </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div style={{ backgroundColor: '#b7cce8', opacity: '.95', padding: '2%' }}>
            <Container>
            <Row>
              <Col xs={5} md={3} style={{opacity: '1'}}>
                <Image className="img-fluid" rounded src={rhsaaPreview} style={imageStyle} />
                <br /><b>RHS Alumni Association (RHSAA)</b>
              </Col>
              <Col>
                <h3 color='red'>Alumni Association</h3>
                <br /><a href='http://rhsaahawaii.org/' target='_blank'><b>http://rhsaahawaii.org/</b></a>
                <br />RHSAA works toward developing a spirit of fellowship among its members in order to rekindle and strengthen ties to our alma mater and each other. We publish newsletters for our members and co-host, with the RAF, an annual ho’olaule’a – a get together for alumni.
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ backgroundColor: '#b7cce8', opacity: '.95', padding: '2%' }}>
          <Container >
            <Row>
              <Col xs={5} md={3}>
                <Image className="img-fluid" rounded src={rafPreview} style={imageStyle}/>
                <br/><b>Roosevelt Alumni Foundation (RAF)</b>
                </Col>
              <Col>
                <h3 color='red'>Alumni Foundation</h3>
                <br/><a href='http://rhsaahawaii.org/' target='_blank'><b>http://rhsaahawaii.org/</b></a>
                <br/>RAF raises funds to support our alma mater, Roosevelt High School. 
                Among various methods of support, we offer annual scholarships to alumni 
                and admit qualified applicants to the Roosevelt Hall of Fame.
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ backgroundColor: '#b7cce8', opacity: '.95', padding: '2%' }}>
          <Container>
            <Row>
              <Col xs={5} md={3}>
                <Image className="img-fluid" rounded src={servicePreview} style={imageStyle} />
                <br /><b>Scholarships and Service</b>
              </Col>
              <Col>
                <h3 color='red'>School Support</h3>
                <br /><a href='http://rhsaahawaii.org/scholarhips' target='_blank'><b>http://rhsaahawaii.org/scholarships</b></a>
                <br /> The RAF seeks to support to RHS graduates through scholarship opportunities and a strong alumni network. We also help the current students of Roosevelt High School through campus beautification projects and grants.
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ backgroundColor: '#b7cce8', opacity: '.95', padding: '2%' }}>
          <Container>
            <Row>
              <Col xs={5} md={3}>
                <Image className="img-fluid" rounded src={projectGrad} style={imageStyle} />
                <br /><b>Friends of Roosevelt Project Grad (FRPG)</b>
                </Col>
              <Col>
                <h3 color='red'>Friends of Project Grad</h3>
                <br /><a href='https://www.rooseveltpg.org/' target='_blank'><b>https://www.rooseveltpg.org/</b></a>
                <br />FRPG organizes an annual overnight event for graduating seniors. We help to keep seniors <i>safe</i> while continuing to provide a means for lasting memories.
            </Col>
            </Row>
            <br /><br /> <b>Donations</b>: The RAF and FRPG are non-profit organizations, and therefore, donations are <b>tax deductable</b>.
                </Container>
        </div>
      </div>

    )
  }
}

export default Landing;
