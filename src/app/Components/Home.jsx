"use client";

import React, { useEffect, useState } from "react";


function Home() {
  let [homepost, setHomepost] = useState([]);
  useEffect(() => {
    fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts`)
      .then((res) =>{
        if (res.status >= 200 && res.status <= 299) {
            return res.json()
          } else {
           // You can redirect to error page here or show an error toast
           throw Error('Error message. Erroe in data fetch');
          } 
      })
      .then((a) => setHomepost(a))
      .catch(error => {console.log(error) })

  }, []);
  return (
    <>
      <section>
        <div className="container">
        <div className="row">
        <div className="col-lg-12 py-2">
            <img className="w-100" src="https://bankingkhabar.com/wp-content/uploads/2024/09/1000-x-100.gif" alt="" />
        </div>
        </div>
          {/* top-1 first news start */}
          {homepost.slice(0, 1).map((a) => (
            <div className="row py-2" key={a.id}>
              <div className="col-lg-12">
                <h1 className="first-title">{a.title.rendered}</h1>
                <img className="w-100" src={a.featured_image_src} alt="" />
                {/* ads */}
                <img
                  className="w-100 py-2"
                  src="https://bankingkhabar.com/wp-content/uploads/2025/02/800-x-200-gif%20new.gif"
                  alt=""
                />{" "}
                {/* ads */}
              </div>
            </div>
          ))}
          {/* top-1 or first news end */}
          {/* second news start */}
          {homepost.slice(1, 2).map((a) => (
            <div key={a.id} className="parent py-2">
              <img
                className="w-100 overlay"
                src={a.featured_image_src}
                alt=""
              />
              <div className="child">
                <h2 className="fw-bold text-light text-center">
                  {a.title.rendered}
                </h2>
              </div>
            </div>
          ))}
          {/* top-2 or second news end */}
          {/* 3rd news start */}
          {homepost.slice(2, 3).map((a) => (
            <div key={a.id} className="parent py-2">
              <img
                className="overlay"
                id="height-150"
                src={a.featured_image_src}
                alt=""
              />
              <div className="child">
                <h2 className="fw-bold text-light text-center">
                  {a.title.rendered}
                </h2>
              </div>
            </div>
          ))}
          {/* 3rd news end */}
          {/* ads */}
          <img
            className="w-100"
            src="https://bankingkhabar.com/wp-content/uploads/2024/12/800x100_Sunaulo-Bhachat-gif-1-1.gif"
            alt=""
          />
          {/* ads */}
          {/* 4th news start */}
          <div className="row py-2">
            {homepost.slice(4, 7).map((a) => (
              <div key={a.id} className="col-lg-4 col-md-4 col-sm-6 col-12 py-2">
                <img height="220" className="w-100 objc" src={a.featured_image_src} alt="" />
                <h2 className="fw-bold l2 text-center py-2">
                  {a.title.rendered}
                </h2>
              </div>
            ))}
          </div>
          {/* 4th news end */}
          {/* ads */}
          <img
            className="w-100"
            src="https://bankingkhabar.com/wp-content/uploads/2025/02/900x150.gif"
            alt=""
          />
          {/* ads */}

          {/* मुख्य start  */}
          <div className="row py-4 px-2 bg-light">
            <span className="bg-danger p-2 text-center text-light fs-5 fw-bold">मुख्य</span>
            <div className="col-lg-8 py-2">
              <div className="row">
              <div className="col-lg-6">
              {homepost.slice(4, 5).map((a) => (
                <div key={a.id}>
                  <div className="parent py-2">
                    <img
                      className="overlay"
                      id="height-150"
                      src={a.featured_image_src}
                      alt=""
                    />
                    <div className="child">
                      <h4 className="fw-bold text-light text-center">
                        {a.title.rendered}
                      </h4>
                    </div>
                  </div>
                  <div className="l5" dangerouslySetInnerHTML={{__html:a.excerpt.rendered}}/>
                  </div>
                ))}
                </div>

                <div className="col-lg-6 py-2">   
                {homepost.slice(6, 10).map((a) => (
                <div key={a.id}>
                    <div className="row border-bottom mt-0 my-5">
                        <div className="col-lg-4">
                            <img className="w-100" src={a.featured_image_src} alt="" />
                        </div>
                        <div className="col-lg-8">
                        <div className="l2 text-dark" dangerouslySetInnerHTML={{__html:a.excerpt.rendered}}/>
                        </div>
                    </div>
                </div>
                ))}
                </div>
              </div>
            </div>

            {/* ads */}
            <div className="col-lg-4 py-2">
              <img
                className="w-100"
                src="https://bankingkhabar.com/wp-content/uploads/2019/09/subisu.gif"
                alt=""
              />
              <img className="w-100 mt-3" src="https://bizmandu.com/wp-content/uploads/2025/01/Bizmandu-Design_300x150.gif" alt="" />
            </div>
            {/* ads */}
            {/* मुख्य close  */}
          </div>

          {/* ads */}
          <img
            className="w-100"
            src="https://bankingkhabar.com/wp-content/uploads/2024/10/610-4-1-GIF-Laxmi-sunrise-TVc_-810x90px.gif"
            alt=""
          />
          {/* ads */}

          {/* Bises news start */}
          <div className="row py-2 bg-light">
            <span className="bg-danger fw-bold text-center fs-5 text-light py-2">विशेष</span>
            {homepost.slice(1,4).map((a) => (
              <div key={a.id} className="col-lg-4 col-md-4 col-sm-6 col-12 py-2">
                <img height="220" className="w-100 objc" src={a.featured_image_src} alt="" />
                <h2 className="fw-bold l2 text-center py-2">
                  {a.title.rendered}
                </h2>
              </div>
            ))}
          </div>
          {/* Bises news end */}

         {/* ads */}
         <img
            className="w-100 my-2"
            src="https://bankingkhabar.com/wp-content/uploads/2025/02/1200-100%20Sukhamaya(2)(1)(1).gif"
            alt=""
          />
          {/* ads */}


        {/* बैंकिङ खबर start  */}
        <div className="row px-2 bg-light">
            <span className="bg-danger p-2 text-center text-light fs-5 fw-bold">बैंकिङ खबर</span>
            <div className="col-lg-8 py-2">
              <div className="row">
              <div className="col-lg-6">
              {homepost.slice(5, 6).map((a) => (
                <div key={a.id}>
                  <div className="parent py-2">
                    <img
                      className="overlay"
                      id="height-150"
                      src={a.featured_image_src}
                      alt=""
                    />
                    <div className="child">
                      <h4 className="fw-bold text-light text-center">
                        {a.title.rendered}
                      </h4>
                    </div>
                  </div>
                  </div>
                ))}
                </div>

                <div className="col-lg-6 py-2">   
                {homepost.slice(3, 6).map((a) => (
                <div key={a.id}>
                    <div className="row border-bottom mt-1 my-4">
                        <div className="col-lg-4">
                            <img className="w-100" src={a.featured_image_src} alt="" />
                        </div>
                        <div className="col-lg-8">
                        <div className="l2 text-dark f18" dangerouslySetInnerHTML={{__html:a.excerpt.rendered}}/>
                        </div>
                    </div>
                </div>
                ))}
                </div>
              </div>
            </div>

            {/* ads */}
            <div className="col-lg-4 py-2">  
                {homepost.slice(7,10 ).map((a) => (
                <div key={a.id}>
                    <div className="row border-bottom mt-2 my-4">
                        <div className="col-lg-4">
                            <img className="w-100" src={a.featured_image_src} alt="" />
                        </div>
                        <div className="col-lg-8">
                        <div className="l2 text-dark f18" dangerouslySetInnerHTML={{__html:a.excerpt.rendered}}/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            {/* ads */}
            <img
            className="w-100 my-2"
            src="https://bankingkhabar.com/wp-content/uploads/2025/02/1200-100%20Sukhamaya(2)(1)(1).gif"
            alt=""
          />
            {/* बैंकिङ खबर close  */}
          </div>
        
         {/* राष्ट्र बैंक start  */}
         <div className="row py-2 px-2 bg-light">
            <span className="bg-danger p-2 text-center text-light fs-5 fw-bold">राष्ट्र बैंक</span>
            <div className="col-lg-8 py-2">
              <div className="row">
              <div className="col-lg-6">
              {homepost.slice(4, 5).map((a) => (
                <div key={a.id}>
                  <div className="parent py-2">
                    <img
                      className="overlay"
                      id="height-150"
                      src={a.featured_image_src}
                      alt=""
                    />
                    <div className="child">
                      <h4 className="fw-bold text-light text-center">
                        {a.title.rendered}
                      </h4>
                    </div>
                  </div>
                  <div className="l5" dangerouslySetInnerHTML={{__html:a.excerpt.rendered}}/>
                  </div>
                ))}
                </div>

                <div className="col-lg-6 py-2">  
                {homepost.slice(6, 10).map((a) => (
                <div key={a.id}>
                    <div className="row border-bottom mt-0 my-5">
                        <div className="col-lg-4">
                            <img className="w-100" src={a.featured_image_src} alt="" />
                        </div>
                        <div className="col-lg-8">
                        <div className="l2 f18 text-dark" dangerouslySetInnerHTML={{__html:a.excerpt.rendered}}/>
                        </div>
                    </div>
                </div>
                ))}
                </div>
              </div>
            </div>

            {/* recent news */}
            <div className="col-lg-4">
            <div>
            <span className="bg-danger mt-2 p-2 text-light d-block fs-5 fw-bold">नयाँ अपडेट</span>
            </div>
            <div className="h-450 p-2 bg-dark">
            {homepost.slice(1, 10).map((a) => (
                 <div key={a.id}>
                 <div className="row border-bottom mt-0 my-2 py-3">
                     <div className="col-lg-4">
                         <img className="w-100" src={a.featured_image_src} alt="" />
                     </div>
                     <div className="col-lg-8">
                     <div className="l2 f18 text-light" dangerouslySetInnerHTML={{__html:a.excerpt.rendered}}/>
                     </div>
                 </div>
             </div>
              ))}
              </div>

            </div>
            {/* recent news */}
            {/* राष्ट्र बैंक close  */}
          </div>
               {/* ads */}
         <img
            className="w-100 my-2"
            src="https://bankingkhabar.com/wp-content/uploads/2025/02/1200-100%20Sukhamaya(2)(1)(1).gif"
            alt=""
          />
          {/* ads */}

          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>

          </div>
          </div>
    
      </section>
      
    </>
  );
}

export default Home;
