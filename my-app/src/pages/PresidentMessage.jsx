import React from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import ogawa from '../images/headshot-ogawa.jpg';

class PresidentMessage extends React.Component {
  render() {
    return (
      <div>
        <Segment>
          <Header>Message from the President</Header>
          <Image src={ogawa} size='large'/>
        </Segment>
      </div>
    )
  }
}

export default PresidentMessage;
