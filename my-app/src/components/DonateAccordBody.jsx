import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';
import { Container, ListGroup } from 'react-bootstrap';


class DonateAccordBody extends React.Component {
  render() {
    return (

        <Container>
          <ListGroup.Item>
            {this.props.info.purpose}{" - "}
            ${this.props.info.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </ListGroup.Item>
        </Container>
    )
  }
}

DonateAccordBody.propTypes = {
  info: PropTypes.object.isRequired,
};

export default DonateAccordBody;
