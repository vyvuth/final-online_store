import React, { useContext, useState } from "react";
import AppProvide from "../store/AppProvider";

function SkalaTon() {
  const { product } = useContext(AppProvide);
  return (
    <>
      <div className=" row p-lg-0">
        {product.map((_, i) => {
          return (
            <div className=" col-lg-3 col-md-4 col-6 my-2" key={i}>
              <div className="card" aria-hidden="true">
                <img
                  src="..."
                  className="card-img-top bg-secondary-subtle"
                  alt="..."
                  style={{ height: "150px" }}
                />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SkalaTon;
