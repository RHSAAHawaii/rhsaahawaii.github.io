import React from 'react';
import { Container, Card, Alert, Row, Col, Image } from 'react-bootstrap';
import PhotoGroupLei from '../images/events/grouplei.jpg';
import PhotoSelfStorage from '../images/events/selfStorage.jpg';
import '../style.css';

class Events extends React.Component {
  render() {
    return (
        <div className='events'>
          <Container>
            <h1 className='scholarHeader'>Events</h1>
            <Card>
              <Card.Header as="h3">90th Anniversary, Hall of Fame Celebration</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Alert variant={'danger'} className='text-capitalize'>
                    Postponed to October 2021 due to COVID-19 restrictions!
                  </Alert>
                  <b>Location:</b> Hilton Hawaiian Village <br/>
                  <b>Time:</b> 5:00 pm – 10:00 pm <br/>
                  <b>Honorees:</b><br/>
                  <ul>
                    <li>Doris Yamauchi Ching ’58</li>
                    <li>Stephen Chamberlin ’60</li>
                    <li>Susan Cushing Chamberlin ’60</li>
                    <li>Rylan Sekiguchi ’00</li>
                    <li>Brian Taniguchi ’69</li>
                    <li>Ted Tsukiyama ’39</li>
                  </ul>
                  <b>Cost:</b> <br/>
                  <ul>
                    <li>$150 per person</li>
                    <li>Silver Table for 10 – $3,000</li>
                    <li>Gold Table for 10 $5,000</li>
                  </ul>
                  <b>Contact:</b> rafhawaii@gmail.com for more information
                </Card.Text>
                <Card.Text className="lead">
                  Ever faithful, ever true, <br/>
                  All Hail!, Hail! Hail!
                </Card.Text>
              </Card.Body>
            </Card>

            <Row className="mt-5">
              <Col sm="6"><Image fluid src={PhotoGroupLei}/></Col>
              <Col sm="6"><Image fluid src={PhotoSelfStorage}/></Col>
            </Row>

            <div className='responsiveCal mt-5'>
              <iframe
                  src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffabab&amp;ctz=Pacific%2FHonolulu&amp;src=ZnRrZXJ2cWc5NjE3N3JhbWpocGNibWdhazBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB"
                  style={{ border: 'solid 1px #777' }} width="800" height="400" scrolling="no"/>
            </div>
          </Container>
        </div>

    )
  }
}

export default Events;
