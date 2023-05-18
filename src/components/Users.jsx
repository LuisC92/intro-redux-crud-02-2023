// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers } from '../reducers/UsersSlice'

const Users = () => {

    const users = useSelector((state)=>state.usersList.users)
    const status = useSelector((state)=>state.usersList.status)

    const dispatch = useDispatch()


  return (
    <div>
        <h3>Status: {status}</h3>
        <hr/>
        {users.map((user)=>(
            <div key={user.id}>
                <h4>Name: {user.name}</h4>
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                <p>Website: {user.website}</p>
                <button onClick={()=>dispatch(deleteUsers(user.id))}>Delete User</button>
                <hr/>
            </div>
        ))}
    </div>
  )
}

export default Users