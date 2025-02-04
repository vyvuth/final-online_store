import React, { useContext } from "react";
import { IoCart, IoEye, IoHeart } from "react-icons/io5";
import AppProvide from "../store/AppProvider";
import { ToastContainer } from "react-toastify";

function Product() {
  const { productAPI, addToCarts } = useContext(AppProvide);
  return (
    <>
      <div className=" container">
        <ToastContainer />
        <h1 className=" text-capitalize fs-5 py-2 fw-bold text-primary mt-5">
          all product here for enjoying your online shopping 🥰❤
        </h1>
        <div className="row">
          {productAPI.map((e, i) => {
            return (
              <div className=" col-lg-4 col-md-4 py-3" key={i}>
                <div
                  style={{ height: "600px" }}
                  className="card overflow-hidden "
                >
                  <div style={{ height: "250px" }} className=" card-img-top">
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src={e.image}
                      alt="not found"
                    />
                  </div>
                  <div className=" card-body">
                    <h4 className="text-capitalize text-center fs-5">
                      {e.title}
                    </h4>
                    <p className=" m-0 fs-5 fw-light text-danger fw-bold  ">
                      ${e.price}
                    </p>
                    <p className=" m-0 fs-5 fw-light ">Des: {e.description}</p>
                    <p className=" m-0 fs-5 fw-light">Model: {e.model}</p>
                    <p className=" m-0 fs-5 fw-light">
                      Source: {e.source_of_product}
                    </p>
                    <p className=" m-0 fs-5 fw-light">Date: {e.date_of_made}</p>
                    <p className=" m-0 fs-5 fw-light">Category: {e.category}</p>
                  </div>
                  <div className=" card-footer d-flex justify-content-center">
                    <button className="btn border-0 fs-3 px-2">
                      <IoHeart />
                    </button>

                    <button
                      onClick={() => addToCarts(e.id)}
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
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
