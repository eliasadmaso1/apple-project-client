import { deleteUser, getAllUsers, updateUser } from '../../../service/users';
import '../auth.css';
import {userRegisteraion} from "../../../service/auth";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'


const Registration = () => {

    const [messageFromServer, setMessageFromServer] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [values, setValues] = useState({
      firstName: "",
      lastName: "",
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

      const register = async () => {
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
          navigate("/Login");
        }
      };

    return (
        <div className="form-container">
            <form className="form">
                <h3 className="form-title">Register Here</h3>
                <input placeholder="First Name" name="firstName"/>
                <input placeholder="Last Name" name="lastName"/>
                <input placeholder="User Name" name="userName"/>
                <input placeholder="Email" name="email"/>
                <input placeholder="Password" name="password"/>
                <button className="form-btn">Submit</button>

            </form>
            
        </div>
    )
}

export default Registration
