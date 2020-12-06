import React from "react";

const Result = props =>{
    const {first_name, last_name, email, password, confirm_password} = props.data;
return(
    <div className="container">
        <div className="row w-25 justify-content-center">
            <h6>Your Form Data</h6>
        </div>
        <div className="row w-25">
            <div className="col-md-6">
                <p>First Name: </p>
            </div>
            <div className="col">
            <p>{first_name}</p>
            </div>
        </div>
        <div className="row w-25">
            <div className="col-md-6">
                <p>Last Name: </p>
            </div>
            <div className="col">
            <p>{last_name}</p>
            </div>
        </div>
        <div className="row w-25">
            <div className="col-md-6">
                <p>Email: </p>
            </div>
            <div className="col-md-6">
            <p>{email}</p>
            </div>
        </div>
        <div className="row w-25">
            <div className="col-md-6">
                <p>Password: </p>
            </div>
            <div className="col">
            <p>{password}</p>
            </div>
        </div>
        <div className="row w-25">
            <div className="col-md-6">
                <p>Confirm Password: </p>
            </div>
            <div className="col">
            <p>{confirm_password}</p>
            </div>
        </div>
    </div>
)
}

export default Result;