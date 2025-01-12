import { FaHome } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

function BottomBar() {
  return (
    <>
      <div className=" container-fluid bg-crimson-700 d-lg-none fixed-bottom py-3">
        <div className=" nav justify-content-between">
          <a className=" text-center text-light text-decoration-none py-2">
            <FaHome className=" fs-1" /> <p className=" m-0  ">Home</p>
          </a>
          <a className=" text-center text-light text-decoration-none py-2">
            <AiFillProduct className=" fs-1" /> <p className=" m-0">Product</p>
          </a>
          <a className=" text-center text-light text-decoration-none py-2">
            <MdContactPhone className=" fs-1" />{" "}
            <p className=" m-0 ">Contact</p>
          </a>
          <a className=" text-center text-light text-decoration-none py-2">
            <FaCartShopping className=" fs-1" /> <p className=" m-0 ">Cart</p>
          </a>
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
