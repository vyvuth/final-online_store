import { IoLocation } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import "../style.scss";
function Footer() {
  return (
    <>
      <div className=" container-fluid bg-crimson-600 bottom-100 py-3">
        <div className=" container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className=" col-lg-4 col-md-12 text-center">
              <h3 className=" fs-4 text-light fw-medium m-0 me-4">
                Subscribe our Newsletter
              </h3>
              <span className=" m-0 text-light fs-5">
                Stay up to date with our latest news
              </span>
            </div>
            <div className=" col-lg-4 col-md-12 text-center mt-2">
              <form className=" d-flex">
                <input
                  className=" form-control w-75 shadow-none border-0 rounded-0"
                  type="email"
                  placeholder="Your email address..."
                />
                <button
                  className=" btn border-0 shadow-none bg-secondary-subtle rounded-0 px-3 text-dark "
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="row d-flex justify-content-center border-top mt-3 ">
            <div className=" col-lg-3 col-md-6 d-grid gap-1">
              <h3 className=" text-light text-uppercase fs-5 mt-3">
                useful links
              </h3>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                my account
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                contact
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                compare
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                wishlist
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                checked
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                faq
              </a>
            </div>
            <div className=" col-lg-3 col-md-6 d-grid gap-1 ">
              <h3 className=" text-light text-uppercase fs-5 mt-3">
                contact information
              </h3>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                <IoLocation style={{ fontSize: "20px" }} /> veng sreng st, 2004
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                <BsTelephoneFill style={{ fontSize: "20px" }} /> +855 93200503
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                <MdMarkEmailUnread style={{ fontSize: "20px" }} />{" "}
                navy5867@email.com
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                <MdDateRange style={{ fontSize: "20px" }} /> mon-sat /
                8:30am-11:00pm
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                <FaDirections style={{ fontSize: "20px" }} /> get directions
              </a>
              <a
                style={{ fontSize: "13px" }}
                className=" text-light text-uppercase text-decoration-none fw-normal"
              >
                <FaBus style={{ fontSize: "20px" }} /> roads to us
              </a>
            </div>
            <div className=" frame col-lg-6 col-md-12 overflow-hidden ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d250151.16293712638!2d104.72502447337733!3d11.579653823308595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1736438866083!5m2!1sen!2skh"
                width="600"
                height="300"
                className=" mt-4"
              ></iframe>
            </div>
            <div className=" col-lg-6 col-md-12 d-lg-none d-block mt-3 text-center py-3 d-flex justify-content-between px-5 ">
              <span className=" text-light" style={{ fontSize: "12px" }}>
                Copyright &copy;2025 All Right Awards
              </span>
              <p className=" text-light m-0" style={{ fontSize: "12px" }}>
                Designed & Develop by
                <span className=" fw-bolder"> VUTH VY</span>
              </p>
            </div>
          </div>
          <div className=" row border-top mt-3">
            <div className=" col-lg-6 col-md-12">
              <span className=" text-light" style={{ fontSize: "12px" }}>
                Copyright &copy;2025 All Right Awards
              </span>
            </div>
            <div className=" col-lg-6 col-md-12 text-end">
              <p className=" text-light m-0" style={{ fontSize: "12px" }}>
                Designed & Develop by
                <span className=" fw-bolder"> VUTH VY</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
