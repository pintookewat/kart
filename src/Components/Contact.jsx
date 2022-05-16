import React from 'react';
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact">

        <h1 className='text-center'>! Contact us !</h1>
        <br />
        <div className='contactbox'>
          <div className='cinput '>
            <h6 style={{ color: "white" }}>Enter your name</h6>
            <input placeholder="Enter your Name.." className="form-control" />
          </div>
          <div className='cinput '>
            <h6 style={{ color: "white" }}>Enter your Email</h6>
            <input placeholder="Enter your Email.." className="form-control" />
          </div>

          <div className='cinput '>
            <h6 style={{ color: "white" }}>Enter your City</h6>
            <input placeholder="Enter your City.." className="form-control" />
          </div>
          <div className='cinput '>
            <h6 style={{ color: "white" }}>Enter your Message</h6>
            <textarea placeholder="Enter your Message.." className="form-control" />
          </div>
          <div className='text-center mt-3'>
            <NavLink className="cbtn" to="#"> Submit</NavLink>
          </div>
        </div>

      </div>
    </>
  )
}
export default Contact;