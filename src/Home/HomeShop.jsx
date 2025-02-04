import React, { useContext } from "react";
import AppProvide from "../store/AppProvider";
import { IoCart, IoEye, IoHeart } from "react-icons/io5";
import SkalaTon from "../pages/SkalaTon";
import { ToastContainer } from "react-toastify";

function HomeShop() {
  const { product, brand, loadings, addToCart } = useContext(AppProvide);
  return (
    <div className=" container p-lg-0">
      <ToastContainer />
      <h3 className=" fs-3 mt-2">Product</h3>
      <div className=" row">
        {loadings ? (
          <SkalaTon />
        ) : (
          product.map((e, i) => {
            return (
              <div className=" col-6 col-md-4 col-lg-3 py-2" key={i}>
                <div className=" card overflow-hidden shadow">
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
                    <button className="btn border-0 fs-3 px-2">
                      <IoHeart />
                    </button>

                    <button
                      onClick={() => addToCart(e.id)}
                      className=" btn border-0 fs-3 px-2"
                    >
                      <IoCart />
                    </button>
                    <button className=" btn border-0 fs-3 px-2">
                      <IoEye />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <h4 className=" mt-3 text-capitalize fs-5 ">Brand of product</h4>
      </div>
      <div className="row overflow-auto flex-nowrap">
        {brand.map((e, i) => {
          return (
            <div key={i} className=" col-lg-3 col-md-3 col-6 border-0">
              <div className="card overflow-hidden border-0">
                <div
                  style={{ height: "150px", width: "150px", padding: "20px" }}
                  className=" w-100"
                >
                  <img
                    src={e.image}
                    alt="404"
                    className=" w-100 h-100 object-fit-cover"
                  />
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
