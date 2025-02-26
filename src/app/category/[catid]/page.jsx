"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0px";
document.getElementById("navbar").classList.add('fixed-top');
document.getElementById("navbar").classList.add('bg-red-300');

  } else {
    document.getElementById("navbar").style.top = "-55px";
    document.getElementById("navbar").classList.remove('fixed-top');
document.getElementById("navbar").classList.remove('bg-red-300');
  }
}
function page() {
  window.onscroll = function() {scrollFunction()};
  let [post,setPost]= useState([])
  let {catid}=useParams()
  useEffect(()=>{
    fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories/${catid}`).then(res=>res.json()).then(a=>setPost(a))
  },[catid])
  return (
    <>
      <div className="container">
      <div className="row my-3">
        {catid}
          {post.map((a)=>(
            <div key={a.id} className="row">
              <div className="col-lg-9 rounded bt mb-4">
                <div className="row pt-4">
                  <div className="col-lg-6">
                  <img className="w-100" src={a.featured_image_src} alt="" />
                  </div>
                  <div className="col-lg-6">
                  <h5 className="ht">{a.title.rendered}</h5>
                  <div className="m-0 pt"
                    dangerouslySetInnerHTML={{__html: a.excerpt.rendered}}/>
                  </div>
                </div>
              </div>

                <div className="col-lg-3 mb-4">
                <h5 className="text-primary fw-bold ps-2 p-2 subtitle bg-secondary">दृष्टिकोण</h5>
                    <div className="">
                      <img className="riw" src={a.featured_image_src} alt="" />
                      <div className="ht"
                    dangerouslySetInnerHTML={{__html: a.title.rendered}}/>
                    </div>
                </div>
            </div>
            ))}
          </div>

          </div>
    </>
  )
}

export default page