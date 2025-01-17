import React, { useContext, useState } from "react";
import AppProvide from "../store/AppProvider";
import {
  IoCart,
  IoDesktop,
  IoEye,
  IoHeartCircle,
  IoLogOut,
  IoStar,
} from "react-icons/io5";

function HomeShop() {
  const { handleTabClick, activeTab } = useContext(AppProvide);
  return (
    <>
      <div className="container-fluid p-lg-0">
        <div className="container p-0">
          {/* Button menu click */}
          <div className="nav nav-fill row main-row">
            <div className="col-lg-3 col-md-3 mt-4">
              <button
                onClick={() => handleTabClick("feature")}
                className={`nav btn border-0 text-dark text-decoration-none fs-5 font-family ${
                  activeTab === "feature" ? "active" : ""
                }`}
              >
                Featured
              </button>
            </div>
            <div className="col-lg-3 col-md-3 mt-4">
              <button
                onClick={() => handleTabClick("sale")}
                className={`nav btn border-0 text-dark text-decoration-none fs-5 font-family ${
                  activeTab === "sale" ? "active" : ""
                }`}
              >
                On Sale
              </button>
            </div>
          </div>
          {/* Tab content */}
          <div className="tab-content position-absalute">
            <div
              id="feature"
              className={`tab-pane fade ${
                activeTab === "feature" ? "show active" : ""
              } d-flex row pt-3 mt-3 overflow-auto flex-nowrap`}
            >
              {/* Featured Cards */}
              {/* card1 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card3 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card4 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card5 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card6 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card7 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card8 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card9 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card10 */}
              <div className="col-lg-3 col-md-3">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "100px" }}
                    className="card-img-top bg-crimson-600 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://blogs.windows.com/wp-content/uploads/prod/sites/2/2017/01/MSI-CES-2017.jpg"
                      alt="404"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className=" text-capitalize text-center fs-5 m-0">
                      eletronic
                    </p>
                    <h1 className=" fs-5 text-capitalize text-center m-0">
                      MSI Thin15
                    </h1>
                    <div className=" d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className=" mt-3"
                      >
                        $175.00
                      </div>
                      <div className=" text-center">
                        <span>
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className=" text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className=" p-0 m-0">
                          4ratings
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className=" col-lg-3 col-md-3 d-flex ms-4">
                      <button className=" btn border-0">
                        <IoHeartCircle className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoCart className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoDesktop className=" fs-5" />
                      </button>
                      <button className=" btn border-0">
                        <IoEye className=" fs-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* on sale */}
            <div
              id="sale"
              style={{ position: "relative", marginTop: "-30vh" }}
              className={`tab-pane fade shadow ${
                activeTab === "sale" ? "show active" : ""
              } d-flex row pt-3 shadow overflow-auto flex-nowrap`}
            >
              {/* On Sale Cards */}
              {/* card1 */}
              <div className="col-lg-2 col-md-3">
                <div className="card bg-crimson-700">
                  <div className="card-img-top bg-crimson-600">
                    <img src="" alt="404" />
                  </div>
                  <div className="card-body">
                    <div className="bg-crimson-500 py-3">On Sale Item</div>
                    <div className="bg-crimson-400 py-3"></div>
                  </div>
                  <div className="card-footer">
                    <div className="bg-crimson-300 py-3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more tab panes for other tabs if needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeShop;
