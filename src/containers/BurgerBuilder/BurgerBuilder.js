import React, { Component } from "react";
import Aux2 from "../../hoc/Aux2";
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component {
  render() {
    return (
      <Aux2>
        <div><Burger /> </div>
        <div>Build Controls </div>
      </Aux2>
    );
  }
}

export default BurgerBuilder;
