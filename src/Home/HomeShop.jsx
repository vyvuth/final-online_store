import React from "react";
import {
  IoCart,
  IoDesktop,
  IoEye,
  IoHeartCircle,
  IoStar,
} from "react-icons/io5";

function HomeShop() {
  return (
    <>
      <div className="container-fluid p-lg-0">
        <div className="container p-0">
          {/* button Menu */}
          <div className="row ">
            <div className="col-lg-3 col-md-3 mt-4">
              <button className="nav btn border-0 text-dark text-decoration-none fs-5 font-family">
                Featured
              </button>
            </div>
            <div className="col-lg-3 col-md-3 mt-4">
              <button className="nav btn border-0 text-dark text-decoration-none fs-5 font-family">
                On Sale
              </button>
            </div>
            <div className="col-lg-3 col-md-3 mt-4">
              <button className="nav btn border-0 text-dark text-decoration-none fs-5 font-family">
                Top Rated
              </button>
            </div>
            <div className="col-lg-3 col-md-3 mt-4">
              <button className="nav btn border-0 text-dark text-decoration-none fs-5 font-family">
                New Arrivals
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            <div className="flex-nowrap overflow-auto row pt-3 mt-3">
              {/* Featured Cards */}
              {[...Array(20)].map((_, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mx-2" key={index}>
                  <div className="card bg-crimson-700">
                    <div
                      style={{ height: "130px" }}
                      className="card-img-top bg-crimson-600 overflow-hidden"
                    >
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src="https://storage-asset.msi.com/global/picture/news/2024/nb/thin15-20240308-2.jpg"
                        alt="404"
                      />
                    </div>
                    <div className="card-body py-2">
                      <p className="text-capitalize text-center fs-5 m-0">
                        Electronic
                      </p>
                      <h1 className="fs-5 text-capitalize text-center m-0">
                        MSI Thin15
                      </h1>
                      <div className="d-flex justify-content-between py-3">
                        <div
                          style={{ fontSize: "15px", color: "red" }}
                          className="mt-3"
                        >
                          $175.00
                        </div>
                        <div className="text-center">
                          <span>
                            {[...Array(5)].map((_, starIndex) => (
                              <IoStar
                                key={starIndex}
                                className="text-warning"
                                style={{ fontSize: "13px" }}
                              />
                            ))}
                          </span>
                          <p style={{ fontSize: "13px" }} className="p-0 m-0">
                            4 ratings
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-around">
                        <button className="btn border-0">
                          <IoHeartCircle className="fs-5" />
                        </button>
                        <button className="btn border-0">
                          <IoCart className="fs-5" />
                        </button>
                        <button className="btn border-0">
                          <IoDesktop className="fs-5" />
                        </button>
                        <button className="btn border-0">
                          <IoEye className="fs-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeShop;
