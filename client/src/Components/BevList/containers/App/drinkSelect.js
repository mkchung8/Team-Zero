import React, { Component } from "react";
import DrinkForm from "./drinkForm";
import Carousel from "./carousel";
import DrinkList from './drinkList'

class DrinkSelect extends Component {
  state = {
    id: "", 
    drinktype: "",
    temp: "",
    size: "",
    extraShots: 0,
    milk: "",
    vanilla: "false",
    hazlenut: "false",
    mocha: "false",
    whiteMocha: "false",
    SFVanilla: "false",

    notes: "",
    amountofdrinks: 0
  };

  drinklist = [];
  bigness = 0;

  handleInputChange = event => {
    console.log("handleinputchange was fired");
    const { name, value } = event.target;
    // console.log(name, value);
    // console.log(value);
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state)
    );
  };

  handleNewDrink = event => {
    // console.log(this.state)
    event.preventDefault();
    let drink = {
      id: this.state.id, 
      drinktype: this.state.drinktype,
      temp: this.state.temp,
      size: this.state.size,
      extraShots: this.state.extraShots,
      milk: this.state.milk,
      vanilla: this.state.vanilla,
      hazlenut: this.state.hazlenut,
      mocha: this.state.mocha,
      whiteMocha: this.state.whiteMocha,
      SFVanilla: this.state.SFVanilla,
      notes: this.state.notes
    };

   this.props.pushToCart(drink); 

    //setCartItem
    // console.log("drink LIST HERE", this.drinklist);
    // console.log("drink HERE", this.drinklist[0]);
    this.setState({
      id: "", 
      drinktype: "",
      temp: "",
      size: "",
      extraShots: 0,
      milk: "",
      vanilla: "false",
      hazlenut: "false",
      mocha: "false",
      whiteMocha: "false",
      SFVanilla: "false",
      notes: ""
    });
  };

  listFlavors = drink => {
    let list = "";
    if (drink.vanilla === "true") list += "vanilla ";
    if (drink.hazlenut === "true") list += "hazlenut ";
    if (drink.mocha === "true") list += "mocha ";
    if (drink.whiteMocha === "true") list += "white mocha ";
    if (drink.SfVanilla === "true") list += "Sugar Free Vanilla ";
    return list;
  };

  deleteDrink = event => {
    console.log("DELETE BUTTON ", event.target.id);
    delete this.drinklist[event.target.id];
    // console.log("DRINK LIST IN DELETE FUNC", this.drinklist);
    this.setState({
      amountofdrinks: this.drinklist.length
    })
  };

  submitOrder = event => {
   event.preventDefault();
   console.log("YOU CLICKED SUBMIT!")
  }; 

  render() {
    this.bigness++;
    //console.log(`I am ${this.bigness} renders old`)
    return (
      <div>
        <Carousel
          state={this.state}
          handleInputChange={this.handleInputChange}
        />

        {/* {this.state.drinktype ? (
          <h1>how you want your {this.state.drinktype}</h1>
        ) : (
          <h1>pick a drink to customize</h1>
        )} */}

        <DrinkForm
          state={this.state}
          handleInputChange={this.handleInputChange}
          handleNewDrink={this.handleNewDrink}
          submitOrder={this.submitOrder}
        />

        {/* {this.drinklist.length > 0 ? (
          this.drinklist.map((drink, index) => {
            // console.log(drink);
            return (
              <div key={index}>
                <p>{index}</p>
                <h6>{drink.drinktype}</h6>
                <p>{drink.size}</p>
                <p>{drink.milk}</p>
                <p>{this.listFlavors(drink)}</p>
                <p>{drink.temp}</p>
                <p>{drink.notes}</p>
                <button
                  id={index}
                  placeholder="Remove Drink"
                  onClick={()=>this.deleteDrink(index)}
                   />
               
              </div>
            );
          })
        ) : (
          <h6>empty cart</h6>
        )} */}

        <DrinkList handler={this.deleteDrink} arr={this.drinklist} listFlavors={this.listFlavors}
        submitOrder={this.submitOrder}/>
      </div>
    );
  }
}

export default DrinkSelect;
