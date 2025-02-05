import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

function Contect() {
  return (
    <>
      <div className=" container py-3">
        <div className="row">
          <div className=" col-lg-12 col-12 col-md-12">
            <h3 className=" text-capitalize fs-5 mt-5 text-center ">
              please contact us if you have any help?
            </h3>
            <div className=" d-flex justify-content-around py-3 align-items-center mt-5">
              <a
                className=" btn btn-primary w-25 rounded-2 py-2 "
                href="https://web.facebook.com/agency007V"
              >
                <IoLogoFacebook className=" fs-2 rounded-5" />
                <p className="m-0 text-capitalize">facebook</p>
              </a>
              <a
                href="https://www.tiktok.com/@useragency_butterfly?lang=en"
                className=" btn btn-dark w-25 rounded-2 py-2 "
              >
                <IoLogoTiktok className=" fs-2 rounded-5 text-danger" />
                <p className="m-0 text-capitalize">tik tok</p>
              </a>
              <a
                href="https://t.me/Webfront_developer"
                className=" btn btn-info w-25 rounded-2 py-2 "
              >
                <FaTelegram className=" fs-2 rounded-5 text-light" />
                <p className="m-0 text-capitalize">telegram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contect;
