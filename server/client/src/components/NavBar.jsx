import React from 'react'
import { AppBar, Toolbar, styled} from '@mui/material';
import {Link} from 'react-router-dom';


const Header = styled(AppBar)`
background: #111111
`;

const Tabs = styled(Link)`
    font-size: 20px;
    margin-right: 100px;
    color: inherit;
    text-decoration: none; 
`;



const NavBar = () => {
    return(
        <Header position='static'>
            <Toolbar>
            <Tabs to='/'>Home</Tabs>
            <Tabs to='/all'>All Users</Tabs>
            <Tabs to='/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
    };

export default NavBar;