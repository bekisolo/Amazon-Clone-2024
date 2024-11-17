import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png"
                alt="Amazon logo"
              />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                {/* icon */}
                <SlLocationPin />
              </span>
              <div>
                <p>Delivering </p>
                <span>Addis</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            {/*  */}
            <BsSearch size={25} />
          </div>

          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://cdn-icons-png.flaticon.com/256/206/206626.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            {/* three components */}
            <a href="/auth">
              <div>
                <p>sign in</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */}
            <a href="/orders">
              <p>returns</p>
              <span>&orders</span>
            </a>
            {/* cart */}
            <a href="/cart" className={classes.cart}>
              {/* icon */}
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header