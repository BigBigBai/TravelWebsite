import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import SignIn from './components/pages/SignIn';
import Chatroom from './components/pages/Chatroom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/chat-room' component={Chatroom} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
