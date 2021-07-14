import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIce } from "../redux";
function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCake
    : state.iceCream.numOfIce;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIce());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
