import React from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import '../style.css';

const auditorium = 'https://www.freewebs.com/rhsaahawaii/House%20from%20stage.JPG'

class Membership extends React.Component {
  render() {
    const headerStyle = { fontSize: '40px', marginTop: '10px' };
    return (
        <div className='membership'>
          <Header style={headerStyle} textAlign='center' inverted>Membership</Header>
          <Segment>
            <Image src={auditorium} size='large' centered/>
          </Segment>
        </div>
    )
  }
}

export default Membership;
