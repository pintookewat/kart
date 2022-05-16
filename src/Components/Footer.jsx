import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer mt-2" >
                <hr style={{ color: 'gray' }} />
                <div className='row'>
                    <div className='col-4 text-center'>
                        <p style={{ color: 'white' }}>Store</p>
                        <hr />
                        <p style={{ color: 'white' }}>Mens</p>
                        <p style={{ color: 'white' }}>Women</p>
                        <p style={{ color: 'white' }}>Kids</p>
                    </div>
                    <div className='col-4 text-center'>
                        <p style={{ color: 'white' }}>Query</p>
                        <hr />
                        <p style={{ color: 'white' }}>Help</p>
                        <p style={{ color: 'white' }}>Contact</p>
                        <p style={{ color: 'white' }}>About</p>
                    </div>
                    <div className='col-4 '>
                        <p style={{ color: 'white' }}>Reached</p>
                        <hr />
                        <p style={{ color: 'white' }}>Payment</p>
                        <p style={{ color: 'white' }}>Delivery</p>
                        <p style={{ color: 'white' }}>Shop</p>
                    </div>
                </div>
                <p style={{ color: 'white' }} className='text-center'>Thank for visited</p>
            </div>
        </>
    )
}
export default Footer