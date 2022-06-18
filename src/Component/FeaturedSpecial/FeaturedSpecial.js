import React from 'react'
import massage from "../../Component/Images/massage.jpg";

function FeaturedSpecial() {
  return (
    <>
    <br />
    <h1>DMT's Special Offer's</h1>
    <br />
    <br />
    <div class="row row-cols-md-2 g-4 container-fluid d-flex justify-content-evenly col-xxl">
    <div class="card">
      <img src={massage} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Semi permanent mascara</h5>
        <h6>Price: £25 (Inca removal)</h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <br />
        <a href="/contact-us">
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Book Now</button>
      </div>
        </a>
      </div>
    </div>


    <div class="card">
      <img src={massage} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Eyelash Lift</h5>
        <h6>Price: £20</h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <br />
        <a href="/contact-us">
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Book Now</button>
      </div>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={massage} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Eyelash Tint</h5>
        <h6>Price: £25 </h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <br />
        <a href="/contact-us">
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Book Now</button>
      </div>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={massage} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Eyelash Lift & Tint</h5>
        <h6>Price: £25 </h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <br />
        <a href="/contact-us">
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Book Now</button>
      </div>
        </a>
      </div>
    </div>

  



  </div>
    </>
  )
}

export default FeaturedSpecial