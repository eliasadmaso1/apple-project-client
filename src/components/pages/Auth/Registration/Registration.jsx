import React from 'react';
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
                <button className="form-btn">Submit</button>

            </form>
            
        </div>
    )
}

export default Registration
