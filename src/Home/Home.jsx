import React, { useEffect } from "react";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { FaTruck } from "react-icons/fa6";
import { IoIosClock } from "react-icons/io";
import { IoGiftOutline } from "react-icons/io5";
import "../style.scss";
import "../App.css";
import HomeItem from "./HomeItem";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className=" container-fluid mt-3 p-0 ">
        {/* slide AutoPlay */}
        <div className=" container-fluid p-0">
          <div
            id="carouselExampleIndicators"
            className="carousel slide animate__animated animate__rollIn"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                style={{ height: "100vh" }}
                className="carousel-item active position-relative text-light"
              >
                <div className=" position-absolute z-3 top-50 start-50 translate-middle text-center">
                  <h1>THE BIGGEST SALES</h1>
                  <h2 className=" fw-light">Specail for today</h2>
                  <button className=" btn btn-danger">Shop now</button>
                </div>
                <img
                  src="https://i.ebayimg.com/00/s/ODU1WDEzODU=/z/wO4AAOSwaJ1kgN2S/$_57.JPG?set_id=880000500F"
                  style={{ filter: "brightness(70%)" }}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt=""
                />
              </div>
              <div
                style={{ height: "100vh" }}
                className="carousel-item position-relative text-light"
              >
                <div className=" position-absolute z-3 top-50 start-50 translate-middle text-center">
                  <h1>New Arrival Shopping</h1>
                  <h2 className=" fw-light">Specail for today</h2>
                  <button className=" btn btn-danger">Shop now</button>
                </div>
                <img
                  src="https://images-cdn.ubuy.co.in/65b5305c6faa2a4b8a7df56b-wantdo-men-39-s-winter-coat-windproof.jpg"
                  className="d-block w-100 h-100 object-fit-cover"
                  alt=""
                  style={{ filter: "brightness(70%)" }}
                />
              </div>
              <div
                style={{ height: "100vh" }}
                className="carousel-item position-relative text-light"
              >
                <div className=" position-absolute z-3 top-50 start-50 translate-middle text-center">
                  <h1>Discount 50% off</h1>
                  <h2 className=" fw-light">Specail for today</h2>
                  <button className=" btn btn-danger">Shop now</button>
                </div>
                <img
                  src="https://ae01.alicdn.com/kf/S2b0d9004d2be4725a7a4ee279dbf778bG.jpg?width=790&height=772&hash=1562"
                  className="d-block w-100 h-100 object-fit-cover"
                  alt=""
                  style={{ filter: "brightness(70%)" }}
                />
              </div>
              <div
                style={{ height: "100vh" }}
                className="carousel-item position-relative text-light"
              >
                <div className=" position-absolute z-3 top-50 start-50 translate-middle text-center">
                  <h1>Free biggest gift @topfan</h1>
                  <h2 className=" fw-light">Specail for today</h2>
                  <button className=" btn btn-danger">Shop now</button>
                </div>
                <img
                  src="https://i0.wp.com/supercells.co.za/wp-content/uploads/2024/03/iphone-15-6c.jpg?fit=1360%2C821&ssl=1"
                  className="d-block w-100 h-100 object-fit-cover"
                  alt=""
                  style={{ filter: "brightness(70%)" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-crimson-600 rounded-circle"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-crimson-600 rounded-circle"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div
          style={{ marginTop: "30px" }}
          data-aos="fade-right"
          className="container bg-light-subtle "
        >
          <div className="row  align-items-center px-3 p-3 overflow-auto flex-nowrap">
            <div className="col-lg-3 col-12 col-md-6 Sliders">
              <div className="d-flex align-items-center">
                {/* Bonus Plus */}
                <IoGiftOutline
                  style={{ fontSize: "70px" }}
                  className="text-secondary"
                />
                <div className=" mx-3">
                  <h6
                    style={{ fontSize: "15px" }}
                    className="m-0 text-dark text-uppercase"
                  >
                    Bonus Plus
                  </h6>
                  <p style={{ fontSize: "12px" }} className="m-0">
                    Make top of shopping and collect bonus
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 ">
              <div className="d-flex align-items-center">
                {/* Free Shipping */}
                <FaTruck
                  style={{ fontSize: "70px" }}
                  className="text-secondary"
                />
                <div className="mx-3">
                  <h6
                    style={{ fontSize: "15px" }}
                    className="m-0 text-dark text-uppercase"
                  >
                    Free Shipping
                  </h6>
                  <p style={{ fontSize: "12px" }} className="m-0">
                    Free shipping on all orders $450+
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 Sliders">
              <div className="d-flex align-items-center">
                {/* Discount Offers */}
                <AiTwotoneDollarCircle
                  style={{ fontSize: "70px" }}
                  className="text-secondary"
                />
                <div className="mx-3">
                  <h6
                    style={{ fontSize: "15px" }}
                    className="m-0 text-dark text-uppercase"
                  >
                    money back guarantee
                  </h6>
                  <p style={{ fontSize: "12px" }} className="m-0">
                    30 Days back guarantee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 Sliders">
              <div className="d-flex align-items-center">
                {/* Gift Bonus */}
                <IoIosClock
                  style={{ fontSize: "70px" }}
                  className="text-secondary"
                />
                <div className="mx-3">
                  <h6
                    style={{ fontSize: "15px" }}
                    className="m-0 text-dark text-uppercase"
                  >
                    online support 24/7
                  </h6>
                  <p style={{ fontSize: "12px" }} className="m-0">
                    Call us (+855 183186050)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeItem />
    </>
  );
}

export default Home;
