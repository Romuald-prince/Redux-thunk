import React from "react";
import { connect } from "react-redux";
import { buyIce } from "../redux";

function IceCreams(props) {
  return (
    <div>
      <h3>Number of IceCream - {props.numOfIce}</h3>
      <button onClick={props.buyIce}>Buy Ice</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIce: state.iceCream.numOfIce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIce: () => dispatch(buyIce()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreams);
