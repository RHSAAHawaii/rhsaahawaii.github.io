import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../style.css';
import ScholarAccordBody from './ScholarAccordBody';
import _ from 'underscore/underscore-esm';

class ScholarAccord extends React.Component {
  render() {
    return (
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={this.props.classInfo} className='donate-acrdTitle'>
                    <b>Class of {this.props.classInfo}</b>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.classInfo}>
                  <Card.Body>
                    {_.map(this.props.scholarInfo, (current, index) => <ScholarAccordBody key={index} info={current}/> )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
    )
  } 
}

ScholarAccord.propTypes = {
  scholarInfo: PropTypes.array.isRequired,
  classInfo: PropTypes.string.isRequired,
};

export default ScholarAccord;
