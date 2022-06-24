import axios from 'axios';

const URL = '';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch(error) {
        console.log('Error while calling addUser api', error);
    }
}

export const getUsers = async () => {
    try{
        return await axios.get(`${URL}/all`)
    } catch (error){
        console.log('Error while calling getUsers API', error);
    }
}

export const getUser = async(id) => {
    try{
        //console.log(id)
        const response =  await axios.get(`${URL}/${id}`)
        return response
    } catch (error) {
        console.log("Error while using getUser api", error);
    }
}

export const editUser = async (user, id) => {
    try{
        return await axios.post(`${URL}/${id}`, user);
    }catch (error) {
        console.log("Error while using editUser api", error);
    }
}

export const deleteUser = async (id) => {
    try {
        console.log("api del 1")
        return await axios.delete(`${URL}/${id}`);
      

    } catch (error) {
        console.log("Error while using deleteUser api", error);
    }
}