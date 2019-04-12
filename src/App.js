import React, { Component } from "react";
import "./App.css";
import ShopCart from "./Components/Shopcart";
import * as Utility from "./utility";

class App extends Component {
  state = {
    shopCart: []
  };

  addToList = (name, qty) => {
    if (name.length !== 0 && qty.length !== 0) {
      let shopArray = this.state.shopCart;
      const uidv4 = require("uuid/v4");
      const shopObject = {};
      shopObject.Uid = uidv4();
      shopObject.Name = name;
      shopObject.Qty = qty;
      shopObject.Date = Utility.getCurrentDateWithTime();
      shopObject.Done = false;
      shopArray.push(shopObject);
      document.getElementById("name").value = "";
      document.getElementById("qty").value = "";
      this.setState({
        shopCart: shopArray
      });
    }
  };

  deleteToDo = uid => {
    let shopArray = this.state.shopCart;
    shopArray = shopArray.filter(shopObject => shopObject.Uid !== uid);
    this.setState({
      shopCart: shopArray
    });
  };

  toDoDone = uid => {
    let shopArray = this.state.shopCart;
    const changed = shopArray.find(shopObject => shopObject.Uid === uid);
    changed.Done = !changed.Done;
    this.setState({
      shopCart: shopArray
    });
  };

  render() {
    return (
      <div>
        <div>
          <input id="name" />
          <br />
          <input type="number" id="qty" />
          <br />
          <button
            onClick={() =>
              this.addToList(
                document.getElementById("name").value,
                document.getElementById("qty").value
              )
            }
          >
            Dodaj do listy
          </button>
        </div>
        <ShopCart
          shopCart={this.state.shopCart}
          deleteToDo={this.deleteToDo}
          toDoDone={this.toDoDone}
        />
      </div>
    );
  }
}

export default App;
