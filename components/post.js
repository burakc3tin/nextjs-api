import React from 'react'

export default function post({img,title,text}) {
  return (
    <div className="col-sm-6 col-md-4">
    {/* post */}
    <div className="post post-grid rounded bordered">
      <div className="thumb top-rounded">
        <a href="#">
          <div className="inner">
            <img
              src= {img}
              alt="post-title"
            />
          </div>
        </a>
      </div>
      <div className="details">
        <ul className="meta list-inline mb-0">
          <li className="list-inline-item">Web Tasarım</li>
          <li className="list-inline-item">29 Mart 2021</li>
        </ul>
        <h5 className="post-title mb-1 mt-2">
          <a href="#">
            {title}
          </a>
        </h5>
        <p className="excerpt mb-0">
         {text}
        </p>
      </div>
      <div className="post-bottom clearfix d-flex align-items-center">
        <div className="social-share me-auto">
          <button className="toggle-button icon-share" />
          <ul className="icons list-unstyled list-inline mb-0">
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-pinterest" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-telegram-plane" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="far fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
        <div className="more-button float-end">
          <a href="#">
            <span className="icon-options" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
