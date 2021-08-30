import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import rooseveltWhiteLogo from '../images/rooseveltWhiteLogo.png';
import '../style.css';

class Footer extends React.Component {
  render() {
    return (
      <footer id='footer' style={{paddingTop:20, paddingBottom: 20}}>
        <Container>
        <Row>
          <Col className='col-5 text-right'>
            <Image src={rooseveltWhiteLogo} width='100' height='120'/>
          </Col>
          <Col className='text-light' style={{fontSize: 15}}>
            <p className='footerText'>Roosevelt High School Alumni Association</p>
            <p className='footerText'>Roosevelt Alumni Foundation</p>
            <p className='footerText'>P.O. Box 23424</p>
            <p className='footerText'>Honolulu, HI 96823-3424</p>
            <p>rhsaa.hawaii@gmail.com | rafhawaii@gmail.com</p>
          </Col>
        </Row>
        <Row style={{marginTop: 30, fontSize: 10}}>
          <Col className='text-center text-light'>
          <p className='font-italic footerText'>This is the official website of the Roosevelt High School Alumni Association (RHSAA) / Roosevelt Alumni Foundation (RAF), which is a non profit organization in accordance with U.S. Internal Revenue Code</p>
          <p className='font-italic'>RHSAA 2020, All Rights Reserved</p>
          </Col>
        </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer;
