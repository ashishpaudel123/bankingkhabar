"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
    let [detail,setDetail]= useState(null)
    let {postid}=useParams()
    useEffect(()=>{
      fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts/${postid}`).then(res=>res.json()).then(a=>setDetail(a))
    },[postid])
    if (!detail) {
      return <div >
                <section class="dots-container">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </section>
      </div>;
    }
  return (
    <>
        <div>
          <div className="container">
              <div className="text-center">
                <img className='w-100 rounded my-2' src={detail.featured_image_src} alt="img" />
                </div>
                {detail.title && <h1 className='my-2'>{detail.title.rendered}</h1>}
                {detail.content && <div className='my-2 t-0' dangerouslySetInnerHTML={{__html: detail.content.rendered}}/>}
            </div>
        </div>
    </>
  )
}

export default page
