import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
    background:black;
    display: flex;
    justify-content: space-around;
    padding: 1% 20%
`;

const Nav = () => {
    return (
        <NavBar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </NavBar>
    )
}

export default Nav