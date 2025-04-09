import React from "react";
import style from "./Cart.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BandP } from "../Data/data";

const cartItems = BandP.length>0?BandP.slice(1, 7):[];

const Cart = () => {
  return (
    <div className={style.cart}>
      <div className={style.header}>
        <p>Cart</p>
      </div>
      <div className={style.productTable}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((item, i) => (
                <tr>
                  <td>
                    <div className={style.closeBtn}>
                      <IoIosCloseCircleOutline />
                    </div>
                  </td>
                  <td>
                    <div className={style.itemImage}>
                      <img src={item.img} alt="" />
                    </div>
                  </td>

                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>
                    <div className={style.totalBox}>
                      <input type="number" min="0" max="25" step="1" />
                    </div>
                  </td>
                  <td>$ {item.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={style.totalTable}>
        <div className={style.ttBox}>
            <div className={style.ttBoxHeader}>
                <p>Cart totals</p>
            </div>
            <div className={style.ttValue}>
                <p>Total</p>
                <p>$345</p>
            </div>
            <div className={style.ttBoxBtn}>
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
