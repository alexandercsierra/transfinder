import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components'
import {axiosWithAuth} from '../axiosWithAuth'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const LoginContainer = styled.div`
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    margin: 4% auto;
`;

// https://auth-friends-backend.herokuapp.com/

const Login = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    console.log("submitted", user);
    axios.post('http://localhost:5000/auth/login', user)
      .then(res=>{
        localStorage.setItem('token', res.data.token);
        history.push('/dashboard')
      })
      .catch(err=>console.log(err))
  }

  

  return (
    <LoginContainer>
        <Form inline onSubmit={onSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="username" className="mr-sm-2">Username</Label>
            <Input type="username" name="username" id="username" placeholder="enter username" value={user.username} onChange={handleChange}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" value={user.password} onChange={handleChange}/>
        </FormGroup>
        <Button>Submit</Button>
        </Form>
    </LoginContainer>
  );
}

export default Login;