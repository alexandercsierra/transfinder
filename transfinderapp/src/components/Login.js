// import React from 'react'

// const Login = () => {
//     return(
//         <div>
//             Login
//             <form>
//                 <input placeholder="username"/>
//                 <input type="password" placeholder="password"/>
//                 <button>Login</button>
//             </form>
//         </div>
//     )
// }

// export default Login

import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components'

const LoginContainer = styled.div`
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    margin: 4% auto;
`;

const Login = (props) => {
  return (
    <LoginContainer>
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="enter username" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <Button>Submit</Button>
        </Form>
    </LoginContainer>
  );
}

export default Login;