import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Impact from './pages/Impact';
import Error from './pages/Error';
import Privacy from './pages/Privacy';
import PresidentMessage from './pages/PresidentMessage';
import Board from './pages/Board';
import Donate from './pages/Donate';
import Scholarships from './pages/Scholarships';
import Events from './pages/Events';
import Membership from './pages/Membership';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className='backgroundStyle'>
            <NavBar />
            <Switch>
              <Route path="/" component={Landing} exact/>
              <Route path="/impact" component={Impact}/>
              <Route path="/privacy" component={Privacy}/>
              <Route path="/events" component={Events}/>
              <Route path="/members" component={Membership}/>
              <Route path="/message" component={PresidentMessage}/>
              <Route path="/board" component={Board}/>
              <Route path="/donate" component={Donate}/>
              <Route path="/scholarships" component={Scholarships}/>
              <Route path="/rhsaahawaii" component={Landing}/>
              <Route component={Error}/>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;