import '../auth.css';
import { useState } from "react";
import { userLogin } from '../../../service/auth';



const Login = () => {

    const [error, setError] = useState("");
    const [values, setValues] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    };

    const loginUser = async(e) => {
        e.preventDefault();
        const res = await userLogin(values.email, values.password)
            if (res.data) {
              localStorage.setItem("token", res.data.token);
            } else {
              setError("Incorrect Email or Password , Resgister below");
            }
          
    
      };

    return (
        <div className="form-container">
        <form className="form">
            <h3 className="form-title">Login Here</h3>
            <input placeholder="Email" name="email" onChange={handleChange}/>
            <input placeholder="Password" name="password" onChange={handleChange}/>
            <button className="form-btn" onClick={loginUser}>Submit</button>
            {error && <div style={{ color: "red", fontSize: 13.5 }}>{error}</div>}

        </form>
        
    </div>
    )
}

export default Login
