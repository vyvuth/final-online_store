import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import BottomBar from "./BottomBar";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className=" sticky-top">
        <nav className=" container-fluid navbar bg-crimson-700 py-3 ">
          <div className=" container">
            <div className=" col-3 ">
              <a
                href="#"
                className="text-light fs-5 text-decoration-none fw-bold text-uppercase text-shadow"
              >
                vy-store
              </a>
            </div>
            <div className=" col-6 bg-body rounded-5 overflow-hidden">
              <form className="d-flex">
                <select className="form-select w-50 d-none d-md-block shadow-none rounded-0 bg-light border-0 ">
                  <option className=" bg-light rounded">All Categories</option>
                </select>
                <input
                  type="text"
                  className=" border-start form-control shadow-none border-0 bg-light rounded-0"
                  placeholder=" Type to search..."
                />
                <button className=" btn bg-light rounded-0 shadow-none border-0">
                  <CiSearch className=" fs-2" />
                </button>
              </form>
            </div>
            <div className=" col-3 d-none d-lg-flex justify-content-end align-items-center  text-end">
              <a className=" position-relative me-3">
                <FaCartShopping className="me-2 text-light fs-4 m-0" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  10+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </a>
              {login ? (
                <div className=" d-flex ms-3">
                  <div
                    style={{ width: 40, height: 40 }}
                    className=" rounded-circle bg-warning overflow-hidden"
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2022-06/GettyImages-1186344530.jpg?itok=DPCnhCoO"
                      alt="404"
                    />
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn border-0 text-light dropdown-toggle fw-bolder text-uppercase"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Useraccount
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <MdOutlineAccountCircle className=" fs-4 mb-1 ms-1 me-1" />
                          My Account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <IoIosSettings className=" fs-4 mb-1 ms-1 me-1" />
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <AiOutlineLogout className=" fs-4 mb-1 ms-1 me-1" />
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className=" text-end mx-3">
                  <button className=" btn btn-light rounded-0 px-3 fw-bolder ">
                    Register
                  </button>
                  <button className=" btn border-0 text-light fw-bolder fs-5    rounded-0 px-3">
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div className=" container-fluid bg-crimson-400  d-none d-lg-block ">
          <ul className=" nav justify-content-center">
            <li className=" px-2 py-1 text-uppercase">
              <NavLink to={"/"} className="text-decoration-none text-light">
                Home
              </NavLink>
            </li>
            <li className=" px-2 py-1 text-uppercase">
              <NavLink
                to={"/product"}
                className="text-decoration-none text-light"
              >
                all-products
              </NavLink>
            </li>
            <li className=" px-2 py-1 text-uppercase">
              <NavLink
                to={"/contect"}
                className="text-decoration-none text-light"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default Header;
