import React, { useContext, useState } from "react";
import AppProvide from "../store/AppProvider";

function SkalaTon() {
  return (
    <>
      <div className=" row p-lg-0">
        <div className=" col-lg-12 col-md-12 col-12 my-2 m-0">
          <div
            style={{ width: "250px", height: "250px" }}
            className="card m-auto mt-5"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOXe_tEY4wfa0Rnmz1HZ4HJhaFvd_12kogw&s"
              className="card-img-top bg-secondary-subtle w-100 h-100 object-fit-cover"
              alt="..."
            />
          </div>
          <p className=" m-0 text-capitalize fs-5 text-center">
            data is loading.......
          </p>
        </div>
      </div>
    </>
  );
}

export default SkalaTon;
