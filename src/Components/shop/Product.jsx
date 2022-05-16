import React, { useState } from 'react'
import { NavLink, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import mens from "./Allapi"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useDispatch } from "react-redux";
import { add_product } from "../Redux/Action";




const Product = () => {


    const [text, setText] = useState('Add  to Cart');


    const dispatch = useDispatch();

    let add = (items) => {
        dispatch(add_product(items))
        setText("Add Quantity ")
    }



    let params = useParams();
    const paramsid = params.id;
    const product = mens.filter((items) => items.id == paramsid)
    console.log(product)




    return (

        <>
            <div className='productpage'>
                {
                    product.map((items) => {
                        return (
                            <>
                                <div className='container-fluid'>


                                    <div className="row">
                                        <div className="col-6">
                                            <img id="productimg" src={items.img} alt="product" />
                                        </div>
                                        <div className="col-6">
                                            <h6 className='text-center mt-1'> {items.title}</h6>
                                            <p className='mt-2 text-center' style={{ color: "green" }}>Special price</p>
                                            <h5 className="ml-3 text-center"><strong>₹</strong> {items.cost} <p style={{ fontSize: 14, color: "green" }}>60% off</p> </h5>
                                            <p id="rating" className="ml-3 text-center">Review {items.rating}<sup>*</sup></p>
                                            <p className='text-center' style={{ color: "blue" }} >Be the first to Review this product</p>
                                            <div className='offers text-center'>
                                                <h6 >Available offers</h6>
                                                <ul type="none">
                                                    <li>Pay Later</li><br />
                                                    <li>Special PriceGet extra 10% off (price inclusive of discount)</li><br />
                                                    <li>Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%</li>

                                                </ul>
                                            </div>
                                            <div className='productbtn d-flex justify-content-around'>
                                                <NavLink id="buybtn" to="/buy"><LocalMallIcon />Buy Now</NavLink>
                                                <NavLink id="addbtn" onClick={() => add(items)} to="#"><ShoppingBagOutlinedIcon />{text}</NavLink>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                    })
                }


            </div>
        </>
    )
};
export default Product;
