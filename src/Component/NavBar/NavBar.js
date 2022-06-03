
import React from 'react'
// import { Link } from "react-router-dom";



function NavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Davina 2</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/special-offers">Special Offers</a>
        </li>
        <li>
        <a class="nav-link active" aria-current="page" href="/testimonials">Testimonials</a>
        </li>
        <li>
        <a class="nav-link active" aria-current="page" href="/price-list">Prices</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/faq">FAQ</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
           Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/eye-treatment">Eye treatment</a></li>
            <li><a class="dropdown-item" href="/facials">Facials</a></li>
            <li><a class="dropdown-item" href="/waxing">Waxing</a></li>
            <li><a class="dropdown-item" href="#"></a></li>
            <li><hr class="dropdown-divider" /></li>
          </ul>
        </li>
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <a href="/contact-us"><button class="btn btn-primary" >Contact us</button></a>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar