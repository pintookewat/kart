import React from "react";
import { NavLink } from "react-router-dom"
import kidsapi from "./Kidsapi";
import { useState } from "react";

const Kids = () => {

    const [value, setvalue] = useState('');

    const handleinput = (e) => {
        setvalue(e.target.value);
    }
    return (
        <>
            <div className="menshop">


                <div className="row">
                    <div className="col-4 text-center"><NavLink className="navtop" to="/men">Men</NavLink></div>
                    <div className="col-4 text-center"><NavLink className="navtop" to="/lady">Women</NavLink></div>
                    <div className="col-4 text-center"><NavLink className="navtop" to="/kid">Kids</NavLink></div>
                </div>
                <br />

                <div className="catinput">
                    <input className="form-control " onChange={handleinput} value={value} placeholder="Search your products..." />
                </div>
                {/* <div >
                <svg id="svg" viewBox="0 40 200 200" xmlns="http://www.w3.org/2000/svg">

                    <path fill="#b0c4de" d="M61.3,-47.7C70.9,-36.8,64.4,-11.8,56.3,8.6C48.2,28.9,38.6,44.6,22.9,54.9C7.3,65.3,-14.5,70.3,-34.6,63.7C-54.7,57.2,-73.2,39,-77.3,18.4C-81.4,-2.2,-71.1,-25.3,-55.8,-37.5C-40.5,-49.7,-20.3,-51,2.8,-53.2C25.8,-55.4,51.6,-58.6,61.3,-47.7Z" transform="translate(100 100)" />
                </svg>
            </div> */}

                {
                    kidsapi.filter((items) => {
                        if (value == "") {
                            return items;

                        } else if (items.title.toLowerCase().includes(value.toLowerCase())) {
                            return items;
                        }


                    }).map((value) => {
                        return (
                            <>
                                <NavLink to={`/product/${value.id}`}>
                                    <div class="carditems text-center" >
                                        <img class="carditemimg" src={value.img} alt="Card image cap" />
                                        <div class="card-body">
                                            <p class="card-title text-center" style={{ color: "black" }}>{value.title}</p>
                                            <p class="card-text text-center" style={{ color: "black" }}> <strong>₹</strong>:{value.cost}</p>
                                            <p id="butid" className="text-center">Buy it</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Kids