import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of Cake - {props.numberOfCake}</h1>
      <button onClick={props.buyCake}>By Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCake: state.cake.numberOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
