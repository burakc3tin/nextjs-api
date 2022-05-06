import React from 'react'

export default function header() {
  return (
    <header className="header-personal">
      <nav className="navbar navbar-expand-lg">
        <div className="container-xl">
          <div className="collapse navbar-collapse justify-content-center centered-nav">
            {/* menus */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Web Tasarım
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  E-Ticaret
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Wordpress
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Php
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Codeigniter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Seo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
