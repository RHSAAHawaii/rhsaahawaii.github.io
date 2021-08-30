import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../style.css';
import DonateAccordBody from './DonateAccordBody';
import _ from 'underscore/underscore-esm';

class DonateAccord extends React.Component {
  render() {
    return (
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={this.props.groupInfo} className='donate-acrdTitle'>
                    <b>{this.props.groupInfo}</b> | ${_.reduce(_.pluck(this.props.donationInfo, 'amount'), (memo, num)=>memo+num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.groupInfo}>
                  <Card.Body>
                    {_.map(this.props.donationInfo, (current, index) => <DonateAccordBody key={index} info={current}/> )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
    )
  } 
}

DonateAccord.propTypes = {
  donationInfo: PropTypes.array.isRequired,
  groupInfo: PropTypes.string.isRequired,
};

export default DonateAccord;
