import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import Product from './home/product';



const images = [
  'https://k.nooncdn.com/cms/pages/20210614/686de682605c6753366569a273c7fc3a/en_slider-01.gif',
  'https://k.nooncdn.com/cms/pages/20210614/9869c6c393e8857e667c2b8c11e13e16/en_slider-01.gif',
  'https://k.nooncdn.com/cms/pages/20210615/b62e3ab08f234a38a8402cc57a5affa4/en_slider-01-5DAYS.png',
  'https://k.nooncdn.com/cms/pages/20210614/09a01ec8709dd3b5b0c36828dc61b333/en_banner-01.png',
  'https://k.nooncdn.com/cms/pages/20210507/11508227cca5f94e7d0e94b7e745cf51/en_banner-01.png',
  'https://k.nooncdn.com/cms/pages/20210613/4dbf23acb27455e01e73c514bed52aca/en_slider.png',
  'https://k.nooncdn.com/cms/pages/20210614/557d21bf8f395c06ac25a0779f27a6fa/en_cookware-01.png',
  'https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png'
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}




function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2  mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">العربية</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="" /> <sup>Ship to</sup><b>UAE</b>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#"><img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="" /><b>UAE</b><input type="radio" value="UAE" name="country" /></a></li>
                  <li><a className="dropdown-item" href="#"><img src="https://z.nooncdn.com/s/app/com/common/images/flags/sa.svg" alt="" /><b>KSA</b><input type="radio" value="KSA" name="country" /></a></li>
                  <li><a className="dropdown-item" href="#"><img src="https://z.nooncdn.com/s/app/com/common/images/flags/eg.svg" alt="" /><b>Egypt</b><input type="radio" value="Egypt" name="country" /></a></li>
                </ul>
              </li>
              
              <li className="nav-item">
                <a className="nav-link " href="#"><b>Sign In</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#"><b>Cart</b></a>
              </li>
            </ul>
            <form className="d-flex ">
              <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" size="76" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>  
        </div>
      </nav>
      <div className="slide-show my-3">
        <Slideshow />
      </div>
      <div className="m-3">
        <div className="row ">
          <div className="col-6">
            <h3>Recommended for you</h3>
          </div>
        </div>
      </div>

      <Product />














    </div>
  );
}

export default App;
