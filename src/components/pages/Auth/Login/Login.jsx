import React from 'react';
import '../auth.css';

const Login = () => {
    return (
        <div className="form-container">
        <form className="form">
            <h3 className="form-title">Login Here</h3>
            <input placeholder="Email"/>
            <input placeholder="Password"/>
            <button className="form-btn">Submit</button>

        </form>
        
    </div>
    )
}

export default Login
