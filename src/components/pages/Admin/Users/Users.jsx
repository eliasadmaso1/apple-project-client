import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../../context/context';
import { deleteUser, getAllUsers } from '../../../service/users';
import './users.css';

function Users() {

    const [users,setUsers] = useState([]);

    const { toggle, changeToggle } = useMyContext();


    useEffect(()=>{
        const displayUsers = async()=>{
            await getAllUsers().then((res)=>{
                setUsers(res);
            })

        };
        displayUsers();

    },[toggle]);

   

    return (
        <>
        <div className="users-table">
          <div className="table-header-users">
            <h5>ID</h5>
            <h5>Image</h5>
            <h5>First Name</h5>
            <h5>Last Name</h5>
            <h5>User Name</h5>
            <h5>Email</h5>
            <h5>Is Admin</h5>
            <h5>Created At</h5>
            <h5>Manage</h5>
          </div>
    
          {users.map((user,i) => {
            return (
              <div className="table-row-users" key={i}>
                <h5>{user._id.slice(0,10)}</h5>
                <h5><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="70"/></h5>
                <h5>{user.firstName}</h5>
                <h5>{user.lastName}</h5>
                <h5>{user.userName}</h5>
                <h5>{user.email}</h5>
                <h5>{user.isAdmin ? <span style={{color:"green"}}>Admin</span> : <span style={{color:"red"}}>Not Admin</span>}</h5>
                <h5>{user.createdAt.slice(0,10)}</h5>
                <h5>
                  <button className="table-btn" onClick={async()=>{
                      await deleteUser(user._id);
                      changeToggle();

                  }}>Delete</button>
                </h5>
              </div>
            );
          })}
        </div>
    
    
        <div className="display-products-responsive">
          <div className="responsive-container">
            {users.map((user)=>{
              return(
                <div className="responsive-item">
                <h5 className="responsive-title">{user._id.slice(0,10)}</h5>
                <h5><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="90"/></h5>
                <h5 className="responsive-title">{user.email}</h5>
                <h5>{user.isAdmin ? <span style={{color:"green"}}>Admin</span> : <span style={{color:"red"}}>Not Admin</span>}</h5>
                <div className="responsive-buttons">
                  <button className="table-btn-responsive">delete</button>      
                </div>
              </div>
              )
            })}
         
          </div>
        </div>
        </>
      );
}

export default Users
