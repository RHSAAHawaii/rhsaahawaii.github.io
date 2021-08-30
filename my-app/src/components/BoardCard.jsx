import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../style.css';

class BoardCard extends React.Component {
  render() {
    return (
        <div>
          <Card style={{ width: '15rem', height: '28rem' }} className='my-2 shadow-lg' id='boardCardColor'>
            <Card.Img variant="top" src={this.props.boardInfo.picture} />
            <Card.Body>
             <Card.Title>{this.props.boardInfo.name}</Card.Title>
              <Card.Footer style={{backgroundColor:'white'}}>{this.props.boardInfo.role}</Card.Footer>
              <Card.Footer style={{backgroundColor:'white'}}>Class of {this.props.boardInfo.graduatingClass}</Card.Footer>
            </Card.Body>
          </Card>
        </div>
    )
  }
}

BoardCard.propTypes = {
  boardInfo: PropTypes.object.isRequired,
};

export default BoardCard;
