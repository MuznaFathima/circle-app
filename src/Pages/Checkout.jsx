import React, { useState } from "react";
import style from "./checkout.module.css";
import { getNames } from "country-list";
import Select from "react-select";

const Checkout = () => {
  const countryList = getNames();
  const options = countryList.map((item) => ({ value: item, label: item }));
  const [drawerOpen, setDrawerOpen] = useState("");

  const handleDrawerOpen = (e) => {
    setDrawerOpen(e.target.value);
  };

  return (
    <div className={style.checkout}>
      <div className={style.header}>
        <p>Checkout</p>
      </div>
      <div className={style.checkoutContent}>
        <div className={style.billingOrder}>
          <div className={style.billDetail}>
            <p>Billing details</p>
          </div>
          <div className={style.detailInput}>
            <div className={style.detailInputLeft}>
              <label htmlFor="">
                First name <span>*</span>
              </label>
              <input type="text" />
            </div>
            <div className={style.detailInputRight}>
              <label htmlFor="">
                Last name <span>*</span>
              </label>
              <input type="text" />
            </div>
          </div>
          <div className={style.detailInputTwo}>
            <label htmlFor="">Company name (optional)</label>
            <input type="text" />
          </div>
          <div className={style.detailInputTwo}>
            <label htmlFor="">
              Country / Region <span>*</span>
            </label>
            <div className={style.reactSelect}>
              <Select
                options={options}
                components={{ IndicatorSeparator: () => null }}
                placeholder="Select Country"
                styles={{
                  placeholder: (base) => ({
                    ...base,
                    color: "#999",
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "16px",
                    padding: "0 8px",
                    display: "flex",
                    alignItems: "center",
                    margin: "0",
                    width: "100%",
                    height: "100%",
                  }),
                  control: (base, state) => ({
                    ...base,
                    width: "100%",
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "16px",
                    height: "50px",
                    borderRadius: "0",
                    boxShadow: state.isFocused ? "0 0 0 2px #8bc34a" : "none",
                    borderColor: state.isFocused ? "#8bc34a" : base.borderColor,
                    outline: "none",
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    height: "50px",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    height: "50px",
                    padding: "0 8px",
                    display: "flex",
                    alignItems: "center",
                    color: "#999",
                  }),
                  menuList: (base) => ({
                    ...base,
                    maxHeight: "250px",
                    color: "#999",
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "16px",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }),

                  option: (base, state) => ({
                    ...base,
                    color: state.isFocused ? "#fff" : "",
                    backgroundColor: state.isFocused
                      ? "#8bc34a"
                      : state.isSelected
                      ? "#dddddd"
                      : "",
                  }),
                }}
              />
            </div>
          </div>
          <div className={style.detailInputTwo}>
            <label htmlFor="">
              Street address <span>*</span>
            </label>
            <input type="text" placeholder="House number and street name" />

            <input
              type="text"
              placeholder="Apartment,suite,unit,etc.(optional)"
            />
          </div>
          <div className={style.detailInputTwo}>
            <label htmlFor="">
              Postcode / ZIP <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={style.detailInputTwo}>
            <label htmlFor="">
              Phone <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={style.detailInputTwo}>
            <label htmlFor="">
              Email Address <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={style.billDetail}>
            <p>Additional information</p>
          </div>
          <div className={style.detailInputTwo}>
            <label htmlFor="">Order notes (optional)</label>
            <textarea
              type="text"
              rows={5}
              placeholder="Notes About Your Order ,e.g Special notes for delivery"
            />
          </div>
        </div>
        <div className={style.yourOrder}>
          <div className={style.orderContainer}>
            <div className={style.orderHeader}>
              <p>Your Order</p>
            </div>
            <div className={style.tableHeader}>
              <p>Product</p>
              <p>Subtotal</p>
            </div>
            <div className={style.tableItems}>
              <p>Cashew Butter X 2</p>
              <p>$ 50.00</p>
            </div>
            <div className={style.tableItems}>
              <p>SubTotal</p>
              <p>$ 50.00</p>
            </div>
            <div className={style.tableItems}>
              <p>Total</p>
              <p>$ 50.00</p>
            </div>
          </div>
          <div className={style.paymentOuter}>
            <div className={style.payment}>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="check payment"
                  onChange={handleDrawerOpen}
                />
                Check payments
              </label>
              <div
                className={`${style.drawer} ${
                  drawerOpen === "check payment" ? style.visible : ""
                }`}
              >
               <p> Drawer content for check payment</p>
              </div>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cash on delivery"
                  className={style.radio}
                  onChange={handleDrawerOpen}
                />
                Cash on delivery
              </label>
              <div
                className={`${style.drawer} ${
                  drawerOpen === "cash on delivery" ? style.visible : ""
                }`}
              >
               <p> Drawer content for check payment</p>
              </div>
            </div>
          </div>

          <div className={style.placeOrder}>
            <button>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
