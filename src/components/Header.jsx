import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import BottomBar from "./BottomBar";

function Header() {
  return (
    <>
      <nav className=" container-fluid navbar bg-crimson-700 py-3">
        <div className=" container">
          <div className=" col-2 ">
            <a
              href="#"
              className="text-light fs-5 text-decoration-none fw-bold text-uppercase text-shadow"
            >
              vy-store
            </a>
          </div>
          <div className=" col-8 bg-body rounded-5 overflow-hidden">
            <form className="d-flex">
              <select className="form-select w-25 d-none d-md-block shadow-none rounded-0 bg-light border-0 ">
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
          <div className=" col-2 d-none d-lg-block  text-end">
            <div>
              <FaCartShopping className="me-2 text-light fs-1 m-0" />
              <a href="#" className="text-light text-decoration-none  ">
                Shopping Cart
              </a>
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
