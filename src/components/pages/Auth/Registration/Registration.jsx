import React from 'react';
import { deleteUser, getAllUsers, updateUser } from '../../../service/users';
import '../auth.css';

const Registration = () => {

    return (
        <div className="form-container">
            <form className="form">
                <h3 className="form-title">Register Here</h3>
                <input placeholder="First Name"/>
                <input placeholder="Last Name"/>
                <input placeholder="Email"/>
                <input placeholder="Password"/>
                <button className="form-btn" onClick={async(e)=>{
                    e.preventDefault();
                    await updateUser("630780861dffe574b6b5f320",{firstName:"eli"})

                }}>Submit</button>

            </form>
            
        </div>
    )
}

export default Registration
