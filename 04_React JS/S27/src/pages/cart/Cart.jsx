import React from "react";
import "./Cart.css";
function Cart() {
  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>ACTION</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Cart;
