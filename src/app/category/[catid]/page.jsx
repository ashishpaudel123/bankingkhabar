"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  let [post, setPost] = useState(null);
  let { catid } = useParams();
  useEffect(() => {
    fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories/${catid}`)
      .then((res) => res.json())
      .then((a) => setPost(a));
  }, [catid]);
  if (!post) {
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
      <div className="container">
        <div className="row">
          {/* {catid} */}
          {post.map((a) => (
            <div key={a.id} className="row bt">
              <div className="col-lg-9 rounded">
                <div className="row mt-2">
                  <div className="col-lg-6">
                    <img
                      height="235"
                      className="w-100 objc"
                      src={a.featured_image_src}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <Link href={`/details/${a.id}`}>
                      <h5 className="ht my-2">{a.title.rendered}</h5>
                    </Link>
                    <Link href={`/details/${a.id}`}>
                      <div
                        className="m-0 pt my-2"
                        dangerouslySetInnerHTML={{ __html: a.excerpt.rendered }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mb-4 mt-2">
                <h5 className="text-primary fw-bold ps-2 p-2 subtitle bg-secondary">
                  दृष्टिकोण
                </h5>
                <div className="">
                  <img className="riw" src={a.featured_image_src} alt="img" />
                  <Link href={`/details/${a.id}`}>
                    <div
                      className="ht font-20 my-2 text-justify"
                      dangerouslySetInnerHTML={{ __html: a.title.rendered }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
