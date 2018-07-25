import React from "react";
import Aux2 from "../../../hoc/Aux2";
import Button from "../../../components/UI/Button/Button";



const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
      return( <li key = {igKey}> 
          <span style= {{textTransform: 'capitalize'}}> {igKey}</span>: {props.ingredients[igKey]}
        </li>);
  });
  
  
  return (
    <Aux2>
      <h3> Your Order </h3>
      <p> A delicious burger with the following ingredients: </p>
      <ul>
          {ingredientSummary}
    </ul>
    <p>Continue to Checkout?</p>
    <Button  btnType = "Danger" clicked = {props.purchaseCancelled}> CANCEL </Button>
    <Button  btnType = "Success" clicked = {props.purchaseContinued}> CONTINUE  </Button>
    </Aux2>
  );
};

export default OrderSummary;
