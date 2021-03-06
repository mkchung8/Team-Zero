import React, { useContext } from "react"; 
import CartContext from "../utils/CartContext"; 

import "../pages/Checkout.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// imported images 
import plants from "../pages/AboutPageIMG/NEWthree-plants.jpg"

function Checkout () { 

    const { setCartConfirm } = useContext(CartContext); 
    setCartConfirm(true); 

    return(
      
       <div className="container checkout-page text-center">
           
            <div className="row">
                <Card className="orderCard">
                    <Card.Title className="cardText1">Your order has been submitted and will be ready for pick up in 15 minutes!</Card.Title>
                </Card>
            </div>
            <div className="row">
                <Image className="threeCactusIMG1" src={plants}></Image>
            </div>

        </div>
    )
}

export default Checkout; 