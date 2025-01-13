import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import BottomBar from "./BottomBar";

function Header() {
  return (
    <>
      <nav className=" container-fluid navbar bg-crimson-700 py-3">
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

            <div className=" text-end mx-3">
              <button className=" btn btn-light rounded-0 px-3 fw-bolder ">
                Register
              </button>
              <button className=" btn border-0 text-light fw-bolder fs-5    rounded-0 px-3">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className=" container-fluid shadow d-none d-lg-block">
        <ul className=" nav justify-content-center">
          <li className=" px-2 py-1 text-uppercase">
            <a href="#" className="text-decoration-none text-dark">
              Home
            </a>
          </li>
          <li className=" px-2 py-1 text-uppercase">
            <a href="#" className="text-decoration-none text-dark">
              all-products
            </a>
          </li>
          <li className=" px-2 py-1 text-uppercase">
            <a href="#" className="text-decoration-none text-dark">
              contact
            </a>
          </li>
        </ul>
      </div>
      <BottomBar />
    </>
  );
}

export default Header;
