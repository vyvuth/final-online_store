import React, { useState } from "react";
import {
  IoCart,
  IoDesktop,
  IoEye,
  IoHeartCircle,
  IoStar,
} from "react-icons/io5";
import AppProvide from "../store/AppProvider";

function HomeShop() {
  const [activeTab, handleTabClick] = useState(AppProvide);

  return (
    <div className="container-fluid p-lg-0">
      <div className="container p-0">
        {/* Navigation Menu */}
        <div data-aos="flip-left" className="row nav nav-fill">
          <div className="col-lg-3 col-md-3 mt-4">
            <button
              className="nav btn border-0 text-dark text-decoration-none fs-5 font-family"
              onClick={() => handleTabClick("featured")}
            >
              Featured
            </button>
          </div>
          <div className="col-lg-3 col-md-3 mt-4">
            <button
              className={`nav btn border-0 text-dark text-decoration-none fs-5 font-family ${
                activeTab === "sale" ? "active" : ""
              }`}
              onClick={() => handleTabClick("sale")}
            >
              On Sale
            </button>
          </div>
          <div className="col-lg-3 col-md-3 mt-4">
            <button
              className={`nav btn border-0 text-dark text-decoration-none fs-5 font-family ${
                activeTab === "topRated" ? "active" : ""
              }`}
              onClick={() => handleTabClick("topRated")}
            >
              Top Rated
            </button>
          </div>
          <div className="col-lg-3 col-md-3 mt-4">
            <button
              className={`nav btn border-0 text-dark text-decoration-none fs-5 font-family ${
                activeTab === "newArrivals" ? "active" : ""
              }`}
              onClick={() => handleTabClick("newArrivals")}
            >
              New Arrivals
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div data-aos="flip-right" className="tab-content">
          {/* Featured Tab Pane */}
          <div
            className={`tab-pane show    ${
              activeTab === "featured" ? "show active" : ""
            } `}
            id="featured"
          >
            <div className=" row pt-3 mt-3">
              {/* Featured Product Card */}
              {/* card1 */}
              <div className="col-lg-3 col-md-4 py-2">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "200px" }}
                    className="card-img-top overflow-hidden"
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src="https://storage-asset.msi.com/global/picture/news/2024/nb/thin15-20240308-2.jpg"
                      alt="MSI Thin15"
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
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
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
              {/* card2 */}
              <div className="col-lg-3 col-md-4 py-2">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "200px" }}
                    className="card-img-top overflow-hidden"
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src="https://beauvince.com/cdn/shop/products/ER1176_800x.jpg?v=1540924871"
                      alt="jewellery"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className="text-capitalize text-center fs-5 m-0">
                      jewellery
                    </p>
                    <h1 className="fs-5 text-capitalize text-center m-0">
                      diamond earings
                    </h1>
                    <div className="d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className="mt-3"
                      >
                        $2175.00
                      </div>
                      <div className="text-center">
                        <span>
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className="p-0 m-0">
                          5 ratings
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
              {/* card3 */}
              <div className="col-lg-3 col-md-4 py-2">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "200px" }}
                    className="card-img-top overflow-hidden"
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src="https://assets.ajio.com/medias/sys_master/root/20231006/uGY7/65200a08afa4cf41f52e0fd0/-473Wx593H-466679697-green-MODEL.jpg"
                      alt="cothes"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className="text-capitalize text-center fs-5 m-0">
                      clothes
                    </p>
                    <h1 className="fs-5 text-capitalize text-center m-0">
                      hoodie pockets
                    </h1>
                    <div className="d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className="mt-3"
                      >
                        $75.00
                      </div>
                      <div className="text-center">
                        <span>
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
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
              {/* card4 */}
              <div className="col-lg-3 col-md-4 py-2">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "200px" }}
                    className="card-img-top overflow-hidden"
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src="https://www.jiomart.com/images/product/original/rvegm7udlq/dexture-air-jordan-style-trendy-sneakers-for-men-black-product-images-rvegm7udlq-0-202305310754.jpg?im=Resize=(1000,1000)"
                      alt="shoes"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className="text-capitalize text-center fs-5 m-0">
                      shoes
                    </p>
                    <h1 className="fs-5 text-capitalize text-center m-0">
                      jordan man
                    </h1>
                    <div className="d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className="mt-3"
                      >
                        $215.00
                      </div>
                      <div className="text-center">
                        <span>
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className="p-0 m-0">
                          5 ratings
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
              {/* card5 */}
            </div>
          </div>

          {/* On Sale Tab Pane */}
          <div
            className={`tab-pane fade ${
              activeTab === "sale" ? "show active" : ""
            }`}
            id="sale"
          >
            <div className="row pt-3 mt-3">
              {/* Placeholder or Product Cards for Sale */}
              {/* card1 */}
              <div className="col-lg-3 col-md-4 py-2">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "200px" }}
                    className="card-img-top overflow-hidden"
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ROG_Strix_G17_Advantage_Edition.jpeg"
                      alt="laptop"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className="text-capitalize text-center fs-5 m-0">
                      Electronic
                    </p>
                    <h1 className="fs-5 text-capitalize text-center m-0">
                      ROG strix g17
                    </h1>
                    <div className="d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className="mt-3"
                      >
                        $1385.00
                      </div>
                      <div className="text-center">
                        <span>
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className="p-0 m-0">
                          5 ratings
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
              {/* card2 */}
              <div className="col-lg-3 col-md-4 py-2">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "200px" }}
                    className="card-img-top overflow-hidden"
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src="https://s.alicdn.com/@sc04/kf/Haa6028d59e9c464dae09add8588f8f18d.png_720x720q50.png"
                      alt="watch"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className="text-capitalize text-center fs-5 m-0">
                      Electronic
                    </p>
                    <h1 className="fs-5 text-capitalize text-center m-0">
                      smartwatch
                    </h1>
                    <div className="d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className="mt-3"
                      >
                        $385.00
                      </div>
                      <div className="text-center">
                        <span>
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
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
              {/* card3 */}
              <div className="col-lg-3 col-md-4 py-2">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "200px" }}
                    className="card-img-top overflow-hidden"
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src="https://filebroker-cdn.lazada.com.ph/kf/S621ffb09ece141bea9cb26908b50f796h.jpg"
                      alt="shirt"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className="text-capitalize text-center fs-5 m-0">
                      clothes
                    </p>
                    <h1 className="fs-5 text-capitalize text-center m-0">
                      couple shirt
                    </h1>
                    <div className="d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className="mt-3"
                      >
                        $25.00
                      </div>
                      <div className="text-center">
                        <span>
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
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
              {/* card4 */}
              <div className="col-lg-3 col-md-4 py-2">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "200px" }}
                    className="card-img-top overflow-hidden"
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src="https://assets.adidas.com/images/w_450,f_auto,q_auto/2a8259dcc5464c54a0d62b00b5919302_9366/JF2450_000_plp_model.jpg"
                      alt="clothes"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className="text-capitalize text-center fs-5 m-0">
                      clothes
                    </p>
                    <h1 className="fs-5 text-capitalize text-center m-0">
                      adidas hoodie
                    </h1>
                    <div className="d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className="mt-3"
                      >
                        $85.00
                      </div>
                      <div className="text-center">
                        <span>
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
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
            </div>
          </div>

          {/* Top Rated Tab Pane */}
          <div
            className={`tab-pane fade ${
              activeTab === "topRated" ? "show active" : ""
            }`}
            id="topRated"
          >
            <div className="row pt-3 mt-3">
              {/* Placeholder or Product Cards for Top Rated */}
              {/* card1 */}
              <div className="col-lg-3 col-md-4 py-2">
                <div className="card bg-crimson-700">
                  <div
                    style={{ height: "200px" }}
                    className="card-img-top overflow-hidden"
                  >
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src="https://filebroker-cdn.lazada.com.ph/kf/S621ffb09ece141bea9cb26908b50f796h.jpg"
                      alt="shirt"
                    />
                  </div>
                  <div className="card-body py-2">
                    <p className="text-capitalize text-center fs-5 m-0">
                      clothes
                    </p>
                    <h1 className="fs-5 text-capitalize text-center m-0">
                      couple shirt
                    </h1>
                    <div className="d-flex justify-content-between py-3">
                      <div
                        style={{ fontSize: "15px", color: "red" }}
                        className="mt-3"
                      >
                        $25.00
                      </div>
                      <div className="text-center">
                        <span>
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                          <IoStar
                            className="text-warning"
                            style={{ fontSize: "13px" }}
                          />
                        </span>
                        <p style={{ fontSize: "13px" }} className="p-0 m-0">
                          5 ratings
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
              {/* card2 */}
            </div>
          </div>

          {/* New Arrivals Tab Pane */}
          <div
            className={`tab-pane fade ${
              activeTab === "newArrivals" ? "show active" : ""
            }`}
            id="newArrivals"
          >
            <div className="row pt-3 mt-3">
              {/* Placeholder or Product Cards for New Arrivals */}
              <p>New Arrival Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeShop;
