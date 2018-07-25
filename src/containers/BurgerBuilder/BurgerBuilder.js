import React, { Component } from "react";
import Aux2 from "../../hoc/Aux2";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {

  state = {
      ingredients: {
          salad: 0, 
          bacon: 0,
          cheese: 0, 
          meat: 0 
      }

  };

  render() {
    return (
      <Aux2>
        <div>
          <Burger ingredients ={this.state.ingredients} />{" "}
        </div>
        <div>Build Controls </div>
      </Aux2>
    );
  }
}

export default BurgerBuilder;
