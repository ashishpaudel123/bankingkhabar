"use client";
import React, { useEffect } from "react";
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
function Footer() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <footer className="bg-dark my-3">
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-5">
              <img
                className="w-100"
                src="https://bankingkhabar.com/wp-content/uploads/2022/08/logo1-1.jpg"
                alt=""
              />
              <p className="text-light py-2">
                सूचना विभाग दर्ता नं : २९१/०७३-७४66
                <br />
                फोन नं : 9851018466, 9851215418
                <br />
                समाचार : bankingkhabar72@gmail.com
                <br />
                विज्ञापन : bankingkhabaradv@gmail.com
              </p>
            </div>
            <div className="col-lg-3 offset-lg-4">
              <p className="text-light a b">Chief Editor</p>
              <p className="text-light">Madhav Nirdosh</p>
              <p className="text-light a b">Coordinator</p>
              <p className="text-light">Narayan Kc</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
