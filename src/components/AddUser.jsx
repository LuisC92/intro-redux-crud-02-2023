import { useDispatch } from 'react-redux'

import {useForm} from "react-hook-form"

import { addUser } from '../reducers/UsersSlice';

import {v4 as uuidv4} from "uuid"

const AddUser = () => {

    const { register, handleSubmit } = useForm();
    
    const dispatch = useDispatch()


    const createNewUser = data => {
        console.log(data)
        data.id = uuidv4()
        console.log(data)
        dispatch(addUser(data));
    }


  return (
    <form onSubmit={handleSubmit(createNewUser)}>

        <label>Name: </label>
        <input {...register("name")} />

        <label>Email: </label>
        <input {...register("email")} />

        <label>Username: </label>
        <input {...register("username")} />

        <label>Website: </label>
        <input {...register("website")} />
      
      <button type="submit">Create User</button> 
    </form>
  )
}

export default AddUser