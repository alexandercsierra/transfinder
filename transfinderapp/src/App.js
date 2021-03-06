import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Search from './components/Search'
import Login from './components/Login'
import Nav from './components/Nav'
import Home from './components/Home'
import styled from 'styled-components'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Review from './components/Review'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="App">
      <Nav/>
      <Container>
        <h1>Trans Finder</h1>
        <Route exact path="/"><Home /></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/signup"><Signup/></Route>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/review" component={Review} />
      </Container>
      
    </div>
  );
}

export default App;
