import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';
import { Container, ListGroupItem } from 'react-bootstrap';


class ScholarAccordBody extends React.Component {
  render() {
    return (

        <Container>
          <ListGroupItem>
            {this.props.info.lastName}, {" "}
            {this.props.info.firstName}, {" "}
            {this.props.info.Amount} {" "}
            ({this.props.info.Scholarship}), {" "}
            {this.props.info.College}
          </ListGroupItem>
        </Container>
    )
  }
}

ScholarAccordBody.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ScholarAccordBody;
