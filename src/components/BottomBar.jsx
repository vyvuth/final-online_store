import { FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppProvide from "../store/AppProvider";

function BottomBar() {
  const { productCount, cart } = useContext(AppProvide);
  return (
    <>
      <div className=" container-fluid bg-crimson-700 d-lg-none fixed-bottom py-3">
        <div className=" nav justify-content-between">
          <NavLink
            to={"/"}
            className=" text-center text-light text-decoration-none py-2"
          >
            <FaHome className=" fs-1" /> <p className=" m-0  ">Home</p>
          </NavLink>
          <NavLink
            to={"/product"}
            className=" text-center text-light text-decoration-none py-2"
          >
            <AiFillProduct className=" fs-1" /> <p className=" m-0">Product</p>
          </NavLink>
          <NavLink
            to={"/contect"}
            className=" text-center text-light text-decoration-none py-2"
          >
            <MdContactPhone className=" fs-1" />{" "}
            <p className=" m-0 ">Contact</p>
          </NavLink>
          <NavLink
            to={"/cart"}
            className=" text-center text-light text-decoration-none py-2 position-relative"
          >
            <FaCartShopping className=" fs-1" /> <p className=" m-0 ">Cart</p>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </NavLink>
          <a className=" text-center text-light text-decoration-none py-2">
            <MdAccountCircle className=" fs-1" />{" "}
            <p className=" m-0 ">Account</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
