import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Carousel from '../components/carousel'
import Categories from '../components/categories'
import Posts from '../components/posts'
export default function Home() {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>BOM AJANS</title>
      <meta name="description" content="Bom Ajans - Aday Template" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link rel="shortcut icon" type="image/x-icon" href="images/favico.jpg" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100;200;300;400;500;600;700;800;900&family=Grenze:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />
      {/* STYLES */}
      <link
        rel="stylesheet"
        href="css/bootstrap.min.css"
        type="text/css"
        media="all"
      />
      <link rel="stylesheet" href="css/all.min.css" type="text/css" media="all" />
      <link rel="stylesheet" href="css/slick.css" type="text/css" media="all" />
      <link
        rel="stylesheet"
        href="css/simple-line-icons.css"
        type="text/css"
        media="all"
      />
      <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />

      <div id="preloader">

        <div className="inner">
          <p className="loader_text">Bom Ajans</p>
        </div>
      </div>

      <div className="site-wrapper">
        <div className="main-overlay" />
        {/* ------------------------------------- ALL-COMPONENTS ------------------------------------- */}

        {/* header */}
        <Header />

        {/* carousel-top-image */}
        <Carousel />

        {/* category list */}
        <Categories />

        {/* post-list */}
        <Posts />

        {/* footer */}
        <Footer />

        {/* ------------------------------------- ALL-COMPONENTS-END ------------------------------------- */}

      </div>

      {/* JS-FILES */}
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/slick.min.js"></script>
      <script src="js/jquery.sticky-sidebar.min.js"></script>
      <script src="js/custom.js"></script>
    </>

  )
}
