import React, { Component } from "react";
import firebase from "./firebase";

class IndividualItem extends Component {
  constructor() {
    super();
    this.state = {
      listClass: "null"
    };
  }
  // function to cross of item on list, attached to on click
  crossOffItem = () => {
    const crossy = this.state.listClass;
    this.setState({
      listClass: !crossy
    });
  };
  // function to remove item from list, attached to on click
  removeItem = event => {
    const dbRef = firebase.database().ref();
    dbRef.child(event.target.id).remove();
  };
  // RETURN sends this li to "GroceryList" component which then maps over each item in array individually. assigns a key to each individual li and attaches span and onClick for the above functions
  render() {
    return (
      <li
        key={this.props.itemIdProp}
        onClick={this.crossOffItem}
        className={this.state.listClass ? "null" : "crossedOut"}
      >
        {this.props.itemNameProp}
        <span
          id={this.props.itemIdProp}
          className="removeSpan"
          onClick={this.removeItem}
        >
          🗑
        </span>
      </li>
    );
  }
}
export default IndividualItem;
