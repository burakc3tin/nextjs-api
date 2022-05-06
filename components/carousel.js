import React from 'react'

export default function carousel() {
  return (
    <section className="hero-carousel">
    <div className="container-xl">
      <div className="post-carousel-lg">
        {/* post */}
        <div className="post featured-post-xl">
          <div className="details clearfix">
            <h4 className="post-title">
              <a href="#">Yenilikçi Ve Fonksiyonel Website Yaratımları</a>
            </h4>
          </div>
          <a href="#">
            <div className="thumb rounded">
              <div
                className="inner data-bg-image"
                data-bg-image="images/bom-banner.jpg"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
