import React from 'react'

import {useState, useEffect} from 'react';

import {FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import {editUser, getUser} from '../components/Service/api';

import { useNavigate, useParams } from 'react-router-dom';

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

const EditUser = () => {

    //to get book details 
    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const { id } = useParams();
    //...user helps to not to override previous values of book
    //this function will run when we make changes in different fields of form

    useEffect(()=>{
        loadUserDetails();
    },[])

    const loadUserDetails = async() => {
        const response = await getUser(id);
        console.log(response.data);
        setUser(response.data[0]);
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //onClick on submit button will send the details to backend..
    //we will call an api using axios which will be code in service folder.

    const editUserDetails =  async () => {
         await editUser(user, id);
         navigate('/all');

    }

    return(
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
    }

export default EditUser;