
import React from 'react'

import {useState} from 'react';

import {FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import {addUser} from '../components/Service/api';

import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 2% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
`  

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {

    //to get book details 
    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();
    //...user helps to not to override previous values of book
    //this function will run when we make changes in different fields of form
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //onClick on submit button will send the details to backend..
    //we will call an api using axios which will be code in service folder.

    const addUserDetails =  async () => {
        const {name, username, email, phone} = user;
        if(!name||!username||!email||!phone){
            alert("Can't save empty user");
            return;
        }
         await addUser(user);
         navigate('/all');

    }


    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
    }

export default AddUser;