import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import { remove_product, add_qnt, dec_qnt, clear } from "./Redux/Action";
import { NavLink } from 'react-router-dom';


const Cart = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Shopingcart.Cart)


  const remove = (id) => {
    dispatch(remove_product(id))
  }
  const clears = (items => {
    dispatch(clear(items))
  })
  const addqnt = (id) => {
    dispatch(add_qnt(id))

  }
  const decqnt = (id) => {
    dispatch(dec_qnt(id))
  }



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
      {
        (data.length) ? <>

          <div className='container-fluid'>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>


                {
                  data.map((product) => {
                    return (
                      <>
                        <tr>
                          <th scope="row" style={{ color: 'gray' }}>{product.title}</th>
                          <td><img id="cartimg" src={product.img} alt="tableimg" /></td>
                          <td ><strong>₹</strong>{product.cost}</td>
                          <td className='ml-2'>
                            <ul className="pagination">
                              <li className="page-item"><a onClick={() => decqnt(product.id)} className="page-link" href="#">-</a></li>
                              <li className="page-item"><span className="page-link" href="#">{product.qnt}</span></li>
                              <li className="page-item"><a onClick={() => addqnt(product.id)} className="page-link" href="#">+</a></li>
                            </ul>
                          </td>
                          <td>
                            <Button style={{ fontSize: 14 }} onClick={() => remove(product.id)} variant="outlined" color="error">
                              Remove
                            </Button>
                          </td>



                        </tr>
                        <h5 className='text-center' id="total">Total :<strong>₹</strong> {value}</h5>

                      </>
                    )
                  })
                }



              </tbody>
            </table>
            <Button id="clearbtn" onClick={() => clears(data)} variant="outlined" color="error">
              Clear Cart
            </Button>
            <div className="text-center">
              <NavLink id="checkout" to="/checkout">
                <Button variant="contained" color="success">
                  Checkout
                </Button>
              </NavLink>
            </div>
          </div>
        </> : <><h1 className='text-center'> Your Cart is Empty</h1>
          <div className="text-center">
            <NavLink id="cartshop" to="/men">
              <Button color="secondary">Shop</Button>
            </NavLink>
          </div>


        </>
      }


    </>
  )
}
export default Cart;