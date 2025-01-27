import React, { useContext } from "react";
import HomeShop from "./HomeShop";
import AppProvide from "../store/AppProvider";

function HomeItem() {
  return (
    <>
      <div className=" container-fluid p-lg-0">
        <div data-aos="fade-up-right" className=" container p-0 mt-3">
          <div className="row">
            {/* part1 */}
            <div className="col-lg-6 col-md-12 py-lg-3 px-1">
              <div
                style={{ height: "60vh" }}
                className=" col-12 position-relative"
              >
                <div className="main-text position-absolute z-3 font-robot text-light mt-5 mx-5 text-center p-5 ">
                  <h1 className="text-capitalize shadow fs-2">new laptops</h1>
                  <h6 className=" fw-light">Now starting at $1299</h6>
                  <button className="btn btn-danger text-capitalize mt-2">
                    buy now
                  </button>
                </div>
                <img
                  className=" w-100 h-100 object-fit-cover"
                  src="https://www.aorus.com/img/blog/components/components.jpg"
                  alt="404"
                  style={{ filter: " brightness(60%)" }}
                />
              </div>
              <div className=" main-slide d-flex mt-2 overflow-hidden">
                {/* slide-1 */}
                <div
                  style={{ height: "160px" }}
                  className=" slide1 col-lg-6 pe-lg-1 position-relative"
                >
                  <div
                    style={{ marginTop: "40px" }}
                    className="main-text1 position-absolute z-3 font-robot text-light text-center mx-4"
                  >
                    <h1 style={{ fontSize: "25px" }}>New mobile phone</h1>
                    <h6 style={{ fontSize: "17px" }} className=" fw-light">
                      Special for today
                    </h6>
                    <button
                      style={{ fontSize: "12px" }}
                      className="btn btn-danger text-capitalize"
                    >
                      buy now
                    </button>
                  </div>
                  <img
                    className=" w-100 h-100 object-fit-cover"
                    src="https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj.jpg"
                    alt="404"
                    style={{ filter: " brightness(60%)" }}
                  />
                </div>
                {/* slide-2 */}
                <div
                  style={{ height: "160px" }}
                  className="slide-2 col-lg-6 ps-lg-1 position-relative"
                >
                  <div
                    style={{ marginTop: "40px" }}
                    className="main-text2 position-absolute z-3 font-robot text-light text-center mx-5"
                  >
                    <h1 style={{ fontSize: "22px" }}>Watch collection</h1>
                    <h6 style={{ fontSize: "15px" }} className=" fw-light">
                      Special for today
                    </h6>
                    <button
                      style={{ fontSize: "12px" }}
                      className="btn btn-danger text-capitalize mt-2"
                    >
                      buy now
                    </button>
                  </div>
                  <img
                    className=" w-100 h-100 object-fit-cover"
                    src="https://www.swisswatchexpo.com/thewatchclub/wp-content/uploads/2023/06/How-to-Start-a-Watch-Collection-Rolex-Daytona-Panerai-Radiomir-Vacheron-Constantin-Overseas-Omega-Seamaster.jpg"
                    alt="404"
                    style={{ filter: " brightness(60%)" }}
                  />
                </div>
              </div>
            </div>
            {/* part2 */}
            <div className="col-lg-6 col-md-12 py-lg-3 px-1 ">
              <div className=" main-slide1 d-flex overflow-hidden">
                {/* slide-3 */}
                <div
                  style={{ height: "200px" }}
                  className=" slide3 col-lg-6 pe-lg-1 position-relative"
                >
                  <div
                    style={{ marginTop: "50px" }}
                    className="main-text3 position-absolute z-3 font-robot text-light text-center mx-5"
                  >
                    <h1 style={{ fontSize: "20px" }}>Summer collection</h1>
                    <h6 style={{ fontSize: "15px" }} className=" fw-light">
                      New Arrivals On Sale
                    </h6>
                    <button
                      style={{ fontSize: "12px" }}
                      className="btn btn-danger text-capitalize mt-2"
                    >
                      buy now
                    </button>
                  </div>
                  <img
                    className=" w-100 h-100 object-fit-cover"
                    src="https://news.syr.edu/wp-content/uploads/2016/08/2003.1101.2-e1470249384776.jpg"
                    alt="404"
                    style={{ filter: " brightness(60%)" }}
                  />
                </div>
                {/* slide-4 */}
                <div
                  style={{ height: "200px" }}
                  className="slide4 col-lg-6 ps-lg-1 position-relative "
                >
                  <div
                    style={{ marginTop: "50px" }}
                    className="main-text4 position-absolute z-3 font-robot text-light text-center mx-5"
                  >
                    <h1 style={{ fontSize: "20px" }}>Shoes for you</h1>
                    <h6 style={{ fontSize: "15px" }} className=" fw-light">
                      New starting at $59
                    </h6>
                    <button
                      style={{ fontSize: "12px" }}
                      className="btn btn-danger text-capitalize mt-2"
                    >
                      buy now
                    </button>
                  </div>
                  <img
                    className=" w-100 h-100 object-fit-cover"
                    src="https://images.meesho.com/images/products/203646097/lgpub_512.webp"
                    alt="404"
                    style={{ filter: " brightness(60%)" }}
                  />
                </div>
              </div>
              <div
                style={{ height: "53vh", width: "100%" }}
                className=" col-12 mt-2 position-relative"
              >
                <div
                  style={{ marginTop: "90px" }}
                  className="main-text5 position-absolute z-3 font-robot text-light mx-5 text-center p-3 end-0"
                >
                  <h1 className=" fs-3">Popular jewellery brands</h1>
                  <h6 className=" fw-light">Now starting at $1799</h6>
                  <button className="btn btn-danger text-capitalize mt-2">
                    buy now
                  </button>
                </div>
                <img
                  className=" w-100 h-100 object-fit-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4adSBK26Rddx7AAKvUG2_xWiZkj04sRWIutB_phvjLZ3Rugs7HRpaRHt_TyD8bcrtFJU&usqp=CAU"
                  alt="404"
                  style={{ filter: " brightness(60%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeShop />
    </>
  );
}

export default HomeItem;
