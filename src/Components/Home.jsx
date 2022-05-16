import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";


const Home = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 carasolimg" style={{ height: 490 }} src="https://img.freepik.com/free-photo/girl-holds-fashion-shopping-bag-beauty_1150-13673.jpg?w=2000" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carasolimg" style={{ height: 490 }} src="https://img.freepik.com/free-photo/hand-holding-shopping-bags-plain-background_23-2148286215.jpg?w=2000" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carasolimg" style={{ height: 490 }} src="https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only">Previous</span> */}
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only">Next</span> */}
                </a>



                <br /><br />
                <div className="container-fluid" title="Click">
                    <h2 className="text-center " style={{ color: "lightblue" }}> Tap and Shop</h2>
                    <div className="cardhome">
                        {/* Men */}
                        <NavLink className="shopcard" to="/men">
                            <div class="homecard">
                                <img class="card-img" src="https://media.istockphoto.com/photos/young-man-in-shopping-looking-for-presents-consumerism-fashion-picture-id1214561965?k=20&m=1214561965&s=612x612&w=0&h=ShSqjz8gahLy4qwbvWB7XO-Y_eyQx6eyI90mPzf5f64=" />
                                <div class="card-body">
                                    <p class="card-text text-center">Men's shop</p>
                                </div>
                            </div>
                        </NavLink>
                        {/* Men */}
                        {/* women */}
                        <NavLink className="shopcard" to="/lady">
                            <div class="homecard">
                                <img class="card-img" src="https://media.istockphoto.com/photos/stylish-shopaholic-with-purchases-picture-id1169378197?k=20&m=1169378197&s=612x612&w=0&h=QuZ4laEcaxPzCVOt57C8cDiDgZPGU_9LrVkZ2OjPEsY=" />
                                <div class="card-body">
                                    <p class="card-text text-center">Women's shop</p>
                                </div>
                            </div>
                        </NavLink>
                        {/* women */}
                        {/* Kids */}
                        <NavLink className="shopcard" to="/kid">
                            <div class="homecard">
                                <img class="card-img" src="https://t4.ftcdn.net/jpg/01/33/96/57/360_F_133965710_qzv5mhpMxPOCwSG8QFQZVrUUVyoARDY8.jpg" />
                                <div class="card-body">
                                    <p class="card-text text-center">Kids's shop</p>
                                </div>
                            </div>
                        </NavLink>
                        {/* Kids */}

                    </div>


                </div>
                <br />

                <div className="conatent mainContent">
                    <h1 className="text-center mt-5">Thank for visited</h1>

                    <h4 className="mainContenth4">It would be nice to send a personalized thank you message every time a customer buys something. But this sounds like a full-time job. It would be nice to have a person whose sole responsibility is to see who your customers are and message them.

                        Well—

                        You can actually make it happen. But instead of a human agent, use an AI chatbot. They can work 24/7 and you can try them out for free. It is like having an additional customer service agent. And you can delegate them even to the most repetitive tasks. They won’t mind it at all.</h4>
                </div>

                <br /><br />


                {/* clinet */}
                <div className="container-fluid " id="clientid">
                    <div className="row d-flex ">
                        <div className="col-4  text-center" >
                            <div class="cardclient" >
                                <img className="text-center" src="https://image.shutterstock.com/image-photo/handsome-man-shopping-supermarket-pushing-260nw-457700929.jpg" />
                                <div class="card-body">
                                    <h6 className="card-text text-center ">Happy client</h6>
                                    <p className="card-text text-center" style={{ color: " red" }}>Suraj</p>
                                    <p className="card-text text-center">Best website for shop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4  text-center">
                            <div className="cardclient" >
                                <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C-KWBg_51vGg_e28hoDO9CKpshWkQItY3ZFWm-Zgp81yjTqXfWYMOCoRIF3lV0Gop7c&usqp=CAU" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-text text-center">Happy client</h6>
                                    <p style={{ color: " red" }} className="card-text text-center">Aman Nayak</p>
                                    <p className="card-text text-center">Best website for shop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <div className="cardclient" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUYAwBX3loBPwvnQC3sBKS_Ig6j435_xfyw&usqp=CAU" alt="Card image cap" />
                                <div className="card-body">
                                    <h6 className="card-text text-center">Happy client</h6>
                                    <p className="card-text text-center" style={{ color: " red" }}>Pratham</p>
                                    <p className="card-text text-center">Best website for shop</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br />

                <Footer />
            </div>
        </>
    )
}


export default Home;