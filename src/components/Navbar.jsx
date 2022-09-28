import React, { Component } from "react";
import { Back, ContainBack, Top, TopTwo } from "./Navbarstyle";
class Navbar extends Component {
  render() {
    return (
      <div>
        <ContainBack>
          <Back>
            <Top>
              <b>Free Shipping for all orders over $100</b>
            </Top>
            <TopTwo>
              <b>Shop</b>
              <b>About</b>
              <b>Sungare 101</b>
              <h3>Cream Shop</h3>
              <b>Account </b>
              <b>Search</b>
              <b>Cart(0)</b>
            </TopTwo>
          </Back>
        </ContainBack>
      </div>
    );
  }
}

export default Navbar;
