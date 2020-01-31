import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./BevCard.css";

const BevCard = (props) => {
    return (
        <div className="bev-card col-md-2 text-center shadow">
        
            <Card style={{ width: '24rem', marginBottom: '10px', border:'0px'}}>
                <Card.Img class="coffee-image" variant="top" alt={props.name} src={props.image}></Card.Img>
                <Card.Body>
                <h3 class="coffee-name">{props.name}</h3>
                    <Card.Text>
                    <p class="coffee-type">{props.type}</p>
                    <p class="coffee-description">{props.description}</p>
                    <p class="coffee-price">Price: ${props.price}.00 </p>
                    </Card.Text>
                    <Button class="coffee-order-btn" variant="danger" onClick={()=> props.addToCart(props.id)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BevCard; 
