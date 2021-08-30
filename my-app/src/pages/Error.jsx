import React from 'react';
import { Header } from 'semantic-ui-react';
import '../style.css';

class Error extends React.Component {
  render() {
    return (
        <div className='footer'>
          <Header>Error 404. Page not found.</Header>
        </div>

    )
  }
}

export default Error;
