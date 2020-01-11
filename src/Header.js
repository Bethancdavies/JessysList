import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Grocery List App</h1>
        <p>
          Enter your grocery item below and select which category it fits into
          and the App will populate an organized grocery list for you!
        </p>
      </header>
    );
  }
}
export default Header;
