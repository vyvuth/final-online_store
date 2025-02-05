import React from "react";

function MyAccount() {
  return (
    <>
      <div className=" container-fluid">
        <div className=" container">
          <div className=" row">
            <div className=" m-auto col-lg-6">
              <div className=" text-end py-3">
                <button className=" btn border-0 fs-6 text-capitalize btn-info">
                  save
                </button>
              </div>
              <div className=" h-auto w-100 bg-secondary-subtle m-0 p-3 py-3 m-auto rounded-2 p-5 ">
                <button className="text-capitalize fs-3 btn btn-outline-info border-0  ">
                  edit profile
                </button>
                <div className="d-flex">
                  <div
                    style={{ width: "100px", height: "100px" }}
                    className=" bg-warning  rounded-circle mt-3 ms-4 overflow-hidden "
                  >
                    <img
                      className=" w-100 h-100 object-fit-cover"
                      src="vy pic.jpg"
                      alt="404"
                    />
                  </div>
                  <button className="m-0 mt-3 ms-2 btn py-0 border-0  text-capitalize fs-6 text-info fw-bold     ">
                    upload image
                  </button>
                </div>
                <form className=" py-5">
                  <div>
                    <label className="form-label fw-bold text-info">
                      Your Name
                    </label>
                    <p className="form-control w-100 shadow-none border-info text-uppercase">
                      vuth vy
                    </p>
                  </div>
                  <div className=" mt-2">
                    <label className="form-label fw-bold text-info">
                      Your Email
                    </label>
                    <p className="form-control w-100 shadow-none border-info">
                      navy5867@gmail.com
                    </p>
                  </div>
                  <div className=" mt-2">
                    <label className="form-label fw-bold text-info">
                      Your Phone
                    </label>
                    <p className="form-control w-100 shadow-none border-info">
                      018 318 6150
                    </p>
                  </div>
                  <div className=" mt-2">
                    <label className="form-label fw-bold text-info">
                      Your Country
                    </label>
                    <p className="form-control w-100 shadow-none border-info text-uppercase">
                      cambodia
                    </p>
                  </div>
                  <div className=" mt-2">
                    <label className="form-label fw-bold text-info">
                      Your job
                    </label>
                    <p className="form-control w-100 shadow-none border-info text-capitalize">
                      web developer || frontend developer
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
