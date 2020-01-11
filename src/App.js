import React, { Component } from "react";
import Header from "./Header";
import GroceryList from "./GroceryList";
import Footer from "./Footer";
import firebase from "./firebase";
import Swal from "sweetalert2";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      category: "",
      newItemsArray: []
    };
  }
  // basic functionality of form below, establishing state and updating it as needed
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", snapshot => {
      const groceryItems = snapshot.val();
      const newItems = [];
      for (let key in groceryItems) {
        const individualGroceryItem = {
          id: key,
          groceryItem: groceryItems[key]
        };
        newItems.push(individualGroceryItem);
      }
      this.setState({
        newItemsArray: newItems
      });
    });
  }
  // handles the form once information is gathered, pushes to the database once the name and category is grabbed from user input
  handleFormSubmit = event => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    if (this.state.itemName !== "" && this.state.category !== "")
      dbRef.push({
        itemName: this.state.itemName,
        category: this.state.category
      });
    // error handling for user not inputting text or category
    else
      Swal.fire(
        "You forgot to enter an item or category!",
        "Please enter an item and select a category in the box above",
        "question"
      );
  };

  // ASSESSES which radio button is clicked and links it to that category that the user has selected, updates state
  handleChangeRadio = event => {
    this.setState({
      category: event.target.value
    });
  };
  // ASSESSES what was inputted in text by the user and sets it to state
  handleChangeText = event => {
    this.setState({
      itemName: event.target.value
    });
  };

  render() {
    return (
      // on change/on click handles and returning of other components

      <div className="mainReturnDiv">
        <div className="wrapper">
          <Header />
          <form className="inputForm">
            <label className="sr-only">
              Enter individual grocery item here
            </label>
            <input
              type="text"
              name="userInput"
              autoComplete="off"
              onChange={this.handleChangeText}
            />
            <fieldset className="radioButtons">
              <legend>Select a category below</legend>
              <div className="flexcolumn">
                <label>Meat</label>
                <input
                  type="radio"
                  name="categoryInput"
                  value="meat"
                  checked={this.state.category === "meat"}
                  onChange={this.handleChangeRadio}
                />
              </div>
              <div className="flexcolumn">
                <label>Produce</label>
                <input
                  type="radio"
                  name="categoryInput"
                  value="fruitVeg"
                  checked={this.state.category === "fruitVeg"}
                  onChange={this.handleChangeRadio}
                />
              </div>
              <div className="flexcolumn">
                <label>Dairy Products</label>
                <input
                  type="radio"
                  name="categoryInput"
                  value="dairy"
                  checked={this.state.category === "dairy"}
                  onChange={this.handleChangeRadio}
                />
              </div>
              <div className="flexcolumn">
                <label>Pantry Items</label>
                <input
                  type="radio"
                  name="categoryInput"
                  value="dryGoods"
                  checked={this.state.category === "dryGoods"}
                  onChange={this.handleChangeRadio}
                />
              </div>
              <div className="flexcolumn">
                <label>Freezer Items</label>
                <input
                  type="radio"
                  name="categoryInput"
                  value="freezerItems"
                  checked={this.state.category === "freezerItems"}
                  onChange={this.handleChangeRadio}
                />
              </div>
              <div className="flexcolumn">
                <label>Miscellaneous</label>
                <input
                  type="radio"
                  name="categoryInput"
                  value="misc"
                  checked={this.state.category === "misc"}
                  onChange={this.handleChangeRadio}
                />
              </div>
            </fieldset>
            <button type="submit" onClick={this.handleFormSubmit}>
              Submit Item
            </button>
          </form>

          {/* passing the newItemsArray as a prop to component GroceryList.js */}

          <GroceryList newItemsArrayProp={this.state.newItemsArray} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
