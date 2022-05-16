import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom"

const Login = () => {
    return (
        <>

            <div className="login">
                <div className="loginmain text-center">
                    <div className="icons">  <PersonIcon style={{ fontSize: 50 }} /> </div>
                    <br />
                    <div className="input  ">
                        <input placeholder="Enter your Name.." className="form-control " />
                    </div>
                    <br />
                    <div className="input ">
                        <input placeholder="Enter your password.." className="form-control " />
                    </div><br />
                    <div className="text-center">
                        <NavLink className="loginbtn" to='#'>Login</NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Login;