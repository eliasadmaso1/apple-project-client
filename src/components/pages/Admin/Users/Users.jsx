import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../../context/context';
import { deleteUser, getAllUsers } from '../../../service/users';
import './users.css';

function Users() {

    const [users,setUsers] = useState([]);
    const [modal, setModal] = useState(false);
    const [userId,setUserId] = useState(null);

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
    
          {users ? users.map((user,i) => {
            return (
              <div className={modal ? "modal-on" : "table-row-users"} key={i}>
                <h5>{user._id.slice(0,10)}</h5>
                <h5><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="70"/></h5>
                <h5>{user.firstName}</h5>
                <h5>{user.lastName}</h5>
                <h5>{user.userName}</h5>
                <h5>{user.email}</h5>
                <h5>{user.isAdmin ? <span style={{color:"green"}}>Admin</span> : <span style={{color:"red"}}>Not Admin</span>}</h5>
                <h5>{user.createdAt.slice(0,10).split('-').reverse().join('/')}</h5>
                <h5>
                  <button className="table-btn" onClick={async()=>{
                    setUserId(user._id)
                    setModal(true)
                   

                  }}>Delete</button>
                </h5>
              </div>
            );
          }) : <div>users not found</div>}
            {modal ? <div className="modal-container">
             <div className="modal">
                 <h3>Are you sure to delete this user?</h3>
                 <div className="modal-buttons">
                 <button className="modal-button-ok" onClick={async()=>{
                    await deleteUser(userId);
                    changeToggle();
                     setTimeout(()=>{
                        setModal(false)
                     },2000) 
                 
                 }}>Yes</button>
                      <button className="modal-button" onClick={()=>{
                     setModal(false)
                 }}>No</button>
                 </div>
             

             </div>
          
         </div> : null}
        </div>
    
    
        <div className="display-products-responsive">
          <div className="responsive-container">
            {users ? users.map((user)=>{
              return(
                <div className={modal ? "modal-on" : "responsive-item"}>
                <h5 className="responsive-title">ID - {user._id.slice(0,10)}</h5>
                <h5 className="responsive-title">Created At - {user.createdAt.slice(0,10).split('-').reverse().join('/')}</h5>

                <h5><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="responsive-img"/></h5>
                <h5 className="responsive-title">Email - {user.email}</h5>
                <h5>{user.isAdmin ? <span style={{color:"green"}}>Admin</span> : <span style={{color:"red"}}>Not Admin</span>}</h5>
                <div className="responsive-buttons">
                  <button className={modal ? "modal-on" : "table-btn-responsive"}onClick={()=>{
                    setUserId(user._id);
                    setModal(true)
                  }}>delete</button>      
                </div>
              </div>
              )
            }) : <div> users not found</div>}
                {modal ? <div className="modal-container">
             <div className="modal">
                 <h3>Are you sure to delete this user?</h3>
                 <div className="modal-buttons">
                 <button className="modal-button-ok" onClick={async()=>{
                    await deleteUser(userId);
                    changeToggle();
                     setTimeout(()=>{
                        setModal(false)
                     },2000) 
                 
                 }}>Yes</button>
                      <button className="modal-button" onClick={()=>{
                     setModal(false)
                 }}>No</button>
                 </div>
             

             </div>
          
         </div> : null}
          </div>
        </div>
        </>
      );
}

export default Users
