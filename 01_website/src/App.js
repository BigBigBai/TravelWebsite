import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import SignIn from './components/pages/SignIn';
import Chatroom from './components/pages/Chatroom';
import Comment from './components/pages/Comment';
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    <ReactFullpage.Wrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/chat-room' component={Chatroom} />
          <Route path='/comment' component={Comment} />
        </Switch>
      </Router>
    </ReactFullpage.Wrapper>
  );
}

export default App;
