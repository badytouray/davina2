import React from 'react'
import Brazil from "../../Component/Images/brazil.jpg";
import Massage from "../../Component/Images/massage.jpg";
import Nails from "../../Component/Images/nails.jpg";
import Wax from "../../Component/Images/wax.jpg";
import "./SpecialOffer.css"


function SpecialOffer() {
  return (
    <>
    <br />
    <h1>Special Offers</h1>
    <br />
    <br />
    <div class="row row-cols-md-4 g-4 container-fluid d-flex justify-content-evenly col-xxl">
    <div class="card">
      <img src={Brazil} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Brazilian Wax + ? </h5>
        <h6 class="text-danger">Price: £25</h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <br />
        <a href="/contact-us">
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Button</button>
      </div>
      </a>
      </div>
    </div>

    <div class="card">
      <img src={Massage} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Massage</h5>
        <h6  class="text-danger">Price: £25</h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <br />
        <a href="/contact-us">
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Button</button>
      </div>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Nails} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Nail Treatment</h5>
        <h6  class="text-danger">Price: £25</h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <br />
        <a href="/contact-us">
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Button</button>
      </div>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Leg waxing</h5>
        <h6  class="text-danger">Price: £25</h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <br />
        <a href="/contact-us">
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Button</button>
      </div>
        </a>
      </div>
    </div>
  </div>


  </>
  )
}

export default SpecialOffer