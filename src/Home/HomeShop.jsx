import React, { useContext } from "react";
import AppProvide from "../store/AppProvider";
import { IoCart, IoEye, IoHeart } from "react-icons/io5";

function HomeShop() {
  const { product } = useContext(AppProvide);
  return (
    <div className=" container p-lg-0">
      <h3 className=" fs-3 mt-2">Product</h3>
      <div className=" row">
        {product.map((e, i) => {
          return (
            <div
              data-aos="zoom-in"
              className=" col-6 col-md-4 col-lg-3 py-2"
              key={i}
            >
              <div className=" card overflow-hidden">
                <div className="w-100 " style={{ height: "210px" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover"
                    src={e.image}
                    alt="404"
                  />
                </div>
                <div className=" card-body text-center">
                  <p className=" m-0">{e.category}</p>
                  <h5 className="text-line1">{e.title}</h5>
                  <div className=" d-flex justify-content-between">
                    <p className=" text-danger">$4{e.price}</p>
                    <p>{e.rate}</p>
                  </div>
                </div>
                <div className=" d-flex justify-content-center border-top">
                  <button className=" btn border-0 fs-3 px-2">
                    <IoHeart />
                  </button>
                  <button className=" btn border-0 fs-3 px-2">
                    <IoCart />
                  </button>
                  <button className=" btn border-0 fs-3 px-2">
                    <IoEye />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeShop;
