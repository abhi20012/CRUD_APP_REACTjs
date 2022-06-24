import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';//used as pulgin

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
})

const user = mongoose.model('user', userSchema);

export default user;