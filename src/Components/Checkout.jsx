import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { useState } from 'react';
const Checkout = () => {
    const [value, setValue] = useState(0);
    const data = useSelector((state) => state.Shopingcart.Cart)

    const total = () => {
        let price = 0
        data.map((items) => {
            price = price + items.qnt * items.cost
        })
        setValue(price)
    }


    useEffect(() => {
        total();
    }, [total])
    return (
        <>


            <div className="container-fluid ">
                <div className="row checkout">
                    <div className="col-1 ">

                    </div>

                    <div className="col-6  mt-5">
                        <h5>Billing address</h5>
                        <div className="billform">
                            <div className="d-flex justify-content-around">
                                <div>
                                    <span style={{ fontSize: 14 }}>First name</span>
                                    <input className="form-control" placeholder="" />
                                </div>
                                <div> <span style={{ fontSize: 14 }}>Last name</span>
                                    <input className="form-control" placeholder="" /></div>
                            </div>
                            <div>
                                <span style={{ fontSize: 14 }}>Phone</span>
                                <input className="form-control" placeholder="" />
                            </div>
                            <div>
                                <span style={{ fontSize: 14 }}>Address</span>
                                <input className="form-control" placeholder="" />
                            </div>
                            <div>
                                <span style={{ fontSize: 14 }}>Address 2 (Optional)</span>
                                <input className="form-control" placeholder="" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <span style={{ fontSize: 14 }}>Country</span>
                                    <input className="form-control" placeholder="Choose" />
                                </div>
                                <div>
                                    <span style={{ fontSize: 14 }}>State</span>
                                    <input className="form-control" placeholder="Choose" />
                                </div>
                                <div>
                                    <span style={{ fontSize: 14 }}>Zip</span>
                                    <input className="form-control" placeholder="" type="number" /></div>
                            </div>
                        </div>
                        <hr />
                        <div className="shiping">
                            <span className="d-flex mt-2 d-flex justify-content-space-between">
                                <input type="checkbox" name="ship" className="mt-2" /><p>Shipping address is the same as my billing address</p>
                            </span>
                            <span className="d-flex mt-2">
                                <input type="checkbox" name="ship" className="mt-2" /><p>Save this information for next time</p>
                            </span>
                        </div>
                        <hr />


                        <div>
                            <h5>Payment</h5>
                        </div>
                        <div className="shiping">
                            <span className="d-flex  d-flex justify-content-space-between">
                                <input type="radio" name="ship" className="mt-2" /><p style={{ fontSize: 14 }}>Credit card</p>

                            </span>
                            <span className="d-flex mt-2">
                                <input type="radio" name="ship" className="mt-2" /><p style={{ fontSize: 14 }}>Debit card</p>
                            </span>
                            <span className="d-flex mt-2">
                                <input type="radio" name="ship" className="mt-2" /><p style={{ fontSize: 14 }}>Paypal</p>
                            </span>
                        </div>
                        <hr />

                        <div className="d-flex justify-content-around">
                            <div>
                                <span style={{ fontSize: 14 }}>Name on card</span>
                                <input className="form-control" placeholder="" />
                                <p style={{ fontSize: 10 }}>Full name as displayed on card</p>
                            </div>
                            <div> <span style={{ fontSize: 14 }}>Credit card number</span>
                                <input type="number" className=" form-control" placeholder="" />
                            </div>
                        </div>


                        <div className="d-flex justify-content-between">
                            <div>
                                <span style={{ fontSize: 10 }}>Expiration</span>
                                <input className="form-control" />
                            </div>
                            <div>
                                <span style={{ fontSize: 10 }}>CVV</span>
                                <input className="form-control" />
                            </div>
                            <hr />
                            <div></div>
                        </div>




                    </div>


                    <div className="col-4 mt-5 ">


                        <h5>Your cart  Items {data.length}</h5>



                        {(data.length) ? <>
                            <div className=" ml-4 pricecheckout ">
                                <div id="p">

                                    {data.map((items) => {
                                        return (
                                            <>
                                                <div>
                                                    <div className="d-flex justify-content-between">
                                                        <p style={{ fontSize: 10 }}>{items.title}</p>
                                                        <p style={{ fontSize: 13 }}>  <strong>₹</strong>{items.cost}</p>
                                                    </div>

                                                    <p style={{ fontSize: 13 }}> Qnt :{items.qnt}</p>
                                                </div>


                                                <hr />

                                            </>
                                        )
                                    })}

                                    <div className='d-flex justify-content-around'>
                                        <p>  <pre> Toatl: <strong>₹</strong>{value}</pre></p>

                                        <NavLink id="checkoutbuy" to="/buy">
                                            <Button color="secondary" >Buy Items </Button>
                                        </NavLink>



                                    </div>
                                </div></div>
                        </> : <p className='text-center'>No product</p>}







                    </div>

                    <div className='col-1' ></div>

                </div>

            </div>






        </>

    )
}


export default Checkout;