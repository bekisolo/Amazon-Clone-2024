import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) =>{
    return item.amount + amount
  }, 0)
  console.log(basket);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png"
                alt="Amazon logo"
              />
            </Link>
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
            <Link to="" className={classes.language}>
              <img
                src="https://cdn-icons-png.flaticon.com/256/206/206626.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            {/* three components */}
            <a href="/auth">
              <div>
                <p>sign in</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>&orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              {/* icon */}
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
