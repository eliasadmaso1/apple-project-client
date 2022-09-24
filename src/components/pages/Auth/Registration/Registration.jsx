import { deleteUser, getAllUsers, updateUser } from '../../../service/users';
import '../auth.css';
import {userRegisteraion} from "../../../service/auth";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';


const Registration = () => {

    const [messageFromServer, setMessageFromServer] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [values, setValues] = useState({
      firstName: "",
      lastName: "",
      userName:"",
      email: "",
      password: "",
    });

    const handleChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      };

    const validate = (values) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    
        const errors = {};
        if (!values.userName) {
            errors.userName = "User Name is required!";
          }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "Email is not valid!";
        }
        if (!values.password) {
          errors.password = "Password is required!";
        }
        return errors;
      };

      const navigate = useNavigate();

      const register = async (e) => {
        e.preventDefault();

        setFormErrors(validate(values));
    
        const res = await userRegisteraion(
          values.firstName,
          values.lastName,
          values.userName,
          values.email,
          values.password
        );
        setMessageFromServer(res.data.message);
        if (res.data.success) {
          navigate("/login");
        }
      };

    return (
        <div className="form-container">
            <form className="form">
                <h3 className="form-title">Register Here</h3>
                <input placeholder="First Name" name="firstName" onChange={handleChange}/>
                <input placeholder="Last Name" name="lastName" onChange={handleChange}/>
                <input placeholder="User Name" name="userName" onChange={handleChange}/>
                <span>{formErrors.userName}</span>
                <input placeholder="Email" name="email" onChange={handleChange}/>
                <span>{formErrors.email}</span>
                <input placeholder="Password" name="password" onChange={handleChange}/>
                <span>{formErrors.password}</span>
                <span>Already registered? <Link to="/login" style={{color:"white",textDecoration:"none"}}>Click Here</Link></span>
                <button className="form-btn" onClick={register}>Submit</button>

            </form>
            
        </div>
    )
}

export default Registration
