import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Number of Cake - {props.numberOfCake}</h1>
      <button onClick={() => props.buyCake(number)}>By {number} Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
