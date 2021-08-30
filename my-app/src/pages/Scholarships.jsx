import React from 'react';
import '../style.css';
import scholarshipPhoto from '../images/scholarships-2012.jpg';
import maxH from '../images/MaxwellHiga.jpg';
import calyxB from '../images/CalyxBadon.jpg';
import lakotaN from '../images/LakotaNguyen.jpg';
import scholars from '../data/scholars.json';
import _ from 'underscore/underscore-esm';
import ScholarAccord from '../components/ScholarAccord';
import {
  Accordion,
  Container,
  Image,
  Row,
  Col,
  Carousel
} from 'react-bootstrap';

class Scholarships extends React.Component {
  render() {
    const arrayInfo = (_.groupBy(scholars, 'Class'));

    return (
          <Container className="mb-5">
            <h1 className="scholarHeader">SCHOLARSHIPS</h1>
            <Row>
              <Col sm="6" className="p-4 align-items-center" data-aos="fade-right">
                <p className="lead mt-5">We seek to provide financial aid to
                  graduates of Roosevelt High School
                  who demonstrate the ability, desire,
                  and have a financial need to be met in order to pursue academic, trade or vocational
                  school goals.
                </p>
                <br/>
                <p className="lead">The Roosevelt Alumni Foundation has contributed over $70,000 in
                  scholarships to both hard-working and
                  need-based students (not necessarily determined by federal guidelines)!
                </p>
              </Col>
              <Col sm="6"><Image data-aos="zoom-in" roundedCircle fluid src={scholarshipPhoto}/></Col>
            </Row>

            <Row style={{marginTop: "15rem"}}>
              <Col sm="4" className="mt-5" data-aos="flip-up">
                <h2 className="impactSubheaders">Recent Recipients</h2>
                <hr className="yellowHr"/>
                <Carousel className="mt-5">
                  <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={calyxB}
                        alt="first slide"
                    />
                    <Carousel.Caption>
                      <p>Calyx Badon</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={lakotaN}
                        alt="second slide"
                    />
                    <Carousel.Caption>
                      <p>Lakota Nguyen</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={maxH}
                        alt="third slide"
                    />
                    <Carousel.Caption>
                      <p>Maxwell Higa</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col data-aos="flip-down" sm="8">
                <h2 className="impactSubheaders mt-5">Requirements</h2>
                <hr className="redHr"/>
                <ul className="lead mt-3">
                  <li>Be cool</li>
                  <br/>
                  <li>Stay in school</li>
                  <br/>
                  <li>Be a graduating student or graduate of Roosevelt High School</li>
                  <br/>
                  <li>Submit evidence of acceptance into an accredited institution of higher learning.
                    This includes institutions that offer courses for study of a trade of a trade or vocation.
                  </li>
                </ul>
              </Col>
            </Row>
            <h2 className="impactSubheaders text-center" style={{marginTop: "10rem"}}>Past Scholarship Winners</h2>
            <hr className="yellowHr"/>
            <Accordion defaultActiveKey='0' className="mt-5">
              {_.map(arrayInfo, (current, index) => <ScholarAccord classInfo={index}
                                                                   scholarInfo={current}/>).reverse()}
            </Accordion>
          </Container>

    )
  }
}

export default Scholarships;