import {useEffect} from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { getUsers } from '../reducers/UsersSlice'
import Users from './Users'
import AddUser from './AddUser'

const UsersList = () => {

    const dispatch = useDispatch()


    const fetchUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => dispatch(getUsers(response.data)))
    }

    useEffect(()=>{
        fetchUsers()
    },[])



  return (
    <div>
        <h1>Users List</h1>
        <AddUser />
        <Users />
    </div>
  )
}

export default UsersList