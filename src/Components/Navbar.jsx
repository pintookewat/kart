import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useSelector } from "react-redux";
import Allapi from "./shop/Allapi";
import { toast } from 'react-toastify';


const Navbar = () => {

    let [value, setValue] = useState('');

    const handleinput = (e) => {
        setValue(e.target.value)
    }


    const onsearch = () => {
        setValue('')
    }

    const data = useSelector((state) => state.Shopingcart.Cart)

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-2 mb-1  bg-white rounded">
                <NavLink className="navbar-brand" to="/"><img id="logo" src="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png" alt="logo" /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Signin</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Signup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/men">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <div className="carticons">
                                <IconButton aria-label="cart">
                                    <NavLink to="/cart">
                                        <StyledBadge badgeContent={data.length} color="secondary">
                                            <ShoppingBagOutlinedIcon />
                                        </StyledBadge>
                                    </NavLink>
                                </IconButton>
                            </div>
                        </li>
                    </ul>
                </div>




            </nav>
            <span className="nav-item searchnav ">
                <input className="form-control" value={value} onChange={handleinput} id="navinput" placeholder="Search Your Products..." />
                {
                    Allapi.filter((items) => {
                        if (value == "") {

                        } else if (items.title.toLowerCase().includes(value.toLowerCase())) {
                            return items
                        }
                    }).map((items) => {
                        return (
                            <>
                                <div>
                                    <NavLink onClick={onsearch} id="searchid" to={`/product/${items.id}`}>
                                        <div className="d-flex searchbox">
                                            <img src={items.img} alt="searchimg" id="searchnavimg" className="mt-1 ml-4" />
                                            <p className="searchp mt-1" style={{ color: "black", fontSize: 10 }}>{items.title}.slice(0,5)</p>
                                        </div>
                                    </NavLink>
                                </div>

                            </>
                        )
                    })
                }
            </span>

        </>
    )
}


export default Navbar;