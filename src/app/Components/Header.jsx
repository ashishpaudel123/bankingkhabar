"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0px";
document.getElementById("navbar").classList.add('fixed-top');
document.getElementById("navbar").classList.add('bg-light-red');

  } else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").classList.remove('fixed-top');
    document.getElementById("navbar").classList.remove('bg-light-red');
  }
}
function Header() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = function () {
        scrollFunction();
      };
    }
  }, []);
    let [cat,setCat]= useState([])
    useEffect(()=>{
        fetch(`https://bankingkhabar.com/wp-json/wp/v2/categories`)
        .then(res=>res.json())
        .then(a=>setCat(a))
    },[])
  return (
    <>
      <header>
        <div className="container">
          <div className="row py-2">
            <div className="col-lg-4">
              <Link href={`/`}><img
                className="w-100"
                src="https://bankingkhabar.com/wp-content/uploads/2022/11/banking-logo.jpg"
                alt=""
              /></Link>
            </div>
            <div className="col-lg-8">
                <img
                className="w-100"
                src="https://bankingkhabar.com/wp-content/uploads/2019/03/prabhumoney.gif"
                alt=""
              />
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg nav-bg  fw-bold" id="navbar">
          <div className="container">
            <button
              className="navbar-toggler navbar-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white active" aria-current="page" href="/">
                  मुख्य पेज
                  </a>
                </li>
                {cat.map(a=>(
                    <li key={a.id} className="nav-item">
                    <Link className="nav-link text-white nav-border" href={`/category/${a.id}`} >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container text-end px-2 my-1 border-bottom">
        <iframe scrolling="no" border="0" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true" src="https://www.ashesh.com.np/linknepali-time.php?dwn=only&font_color=333333&font_size=16&bikram_sambat=0&api=920133p281" width="165" height="22"></iframe>
        </div>


      </header>
    </>
  );
}

export default Header;
