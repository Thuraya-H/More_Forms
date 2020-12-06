import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

const Form = (props) => {
    
    const {inputs, setInputs} = props;
    const [errors, setErrors] = useState({});

    const onChange = (e) =>{
        
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const first_name_Errors = e =>{
        let value = e.target.value;
        let message = "";
        if (!value){
            message = "First Name is required!"
        } else if (value.length < 2){
            message = "First Name must be at least 2 characters!" 
        }
        setErrors({...errors, first_name: message});
    }
    const last_name_Errors = e =>{
        let value = e.target.value;
        let message = "";
        if (!value){
            message = "Last Name is required!"
        } else if (value.length < 2){
            message = "Last Name must be at least 2 characters!" 
        }
        setErrors({...errors, last_name: message});
    }
    const email_Errors = e =>{
        let value = e.target.value;
        let message = "";
        if (!value){
            message = "Email is required!"
        } else if (value.length < 5){
            message = "Email must be at least 5 characters!" 
        }
        setErrors({...errors, email: message});
    }
    const password_Errors = e =>{
        let value = e.target.value;
        let message = "";
        if (!value){
            message = "Passward is required!"
        } else if (value.length < 8){
            message = "Passward must be at least 8 characters!" 
        }
        setErrors({...errors, password: message});
    }
    const confirm_password_Errors = e =>{
        let value = e.target.value;
        let message = "";
        if (!value){
            message = "Passward is required!"
        } else if (value !== inputs.password){
            message = "Passward doesn't match!"
        }
        setErrors({...errors, confirm_password: message});
    }
    return(
        <form>
            <div className="container">
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="first_name">First Name</label>
                    <input onChange={onChange} onBlur={first_name_Errors} className="col-md-6 form-control" type="text" name="first_name" />
                </div>
                <p className="px-3 text-danger">{errors.first_name}</p>
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="last_name">Last Name</label>
                    <input onChange={onChange} onBlur={last_name_Errors} className="col-md-6 form-control" type="text" name="last_name" />
                </div>
                <p className="px-3 text-danger">{errors.last_name}</p>
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="email">Email</label>
                    <input onChange={onChange} onBlur={email_Errors} className="col-md-6 form-control" type="text" name="email" />
                </div>
                <p className="px-3 text-danger">{errors.email}</p>
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="password">Password</label>
                    <input onChange={onChange} onBlur={password_Errors} className="col-md-6 form-control" type="password" name="password" />
                </div>
                <p className="px-3 text-danger">{errors.password}</p>
                <div className="row w-50 from-group border border-ligth rounded p-2 m-2 bg-light text-secondary">
                    <label className="col-md-3" htmlFor="confirm_password">Confirm Password</label>
                    <input onChange={onChange} onBlur={confirm_password_Errors}className="col-md-6 form-control" type="password" name="confirm_password" />
                </div>
                <p className="px-3 text-danger">{errors.confirm_password}</p>
            </div>
        </form>
    )
}
export default Form;