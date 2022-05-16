import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom"

const Signup = () => {
    return (
        <div className="login">
            <div className="loginmain text-center">
                <div className="icons">  <PersonIcon style={{ fontSize: 50 }} /> </div>

                <div className="input  ">
                    <input placeholder="Enter your Full Name.." className="form-control " />
                </div>
                <br />

                <div className="input ">
                    <input placeholder="Enter your Email.." className="form-control " />
                </div>
                <br />
                <div className="input ">
                    <input placeholder="Enter your password.." className="form-control " />
                </div>
                <br />
                <div className="input ">
                    <input placeholder="Enter your  Confirm password.." className="form-control " />
                </div>
                <br />

                <div className="text-center">
                    <NavLink className="loginbtn" to='#'>Signup</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Signup;