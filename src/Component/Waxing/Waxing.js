import React from 'react'
import Wax from "../../Component/Images/wax.jpg";

function Waxing() {
  return (
    <>
    <br />
    <h1>Waxing Treatments</h1>
    <br />
    <br />
    <div class="row row-cols-md-3 g-4 container-fluid d-flex justify-content-evenly col-xxl" style={{margin: "auto"}}>
    <div class="card">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Armpits</h5>
        <h6>Price: £7</h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/contact-us">
        <button href="/waxing" type="submit" class="btn btn-success">Book now</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Upper lip</h5>
        <h6>Price: £5</h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/waxing">
        <button href="/waxing" type="submit" class="btn btn-success">Book now</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Half leg</h5>
        <h6>Price: £12 </h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/waxing">
        <button href="/waxing" type="submit" class="btn btn-success">Book now</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Full Leg</h5>
        <h6>Price: £20 </h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/waxing">
        <button href="/waxing" type="submit" class="btn btn-success">Book now</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Bikini line</h5>
        <h6>Price: £10 </h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/waxing">
        <button href="/waxing" type="submit" class="btn btn-success">Book now</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Extended Bikini line</h5>
        <h6>Price: £15</h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/waxing">
        <button href="/waxing" type="submit" class="btn btn-success">Book now</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Brazilian</h5>
        <h6>Price: £25 </h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/waxing">
        <button href="/waxing" type="submit" class="btn btn-success">Book now</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Hollywood</h5>
        <h6>Price: £30 </h6>
        <small class="text-muted">Duration: 30mins</small>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/waxing">
        <button href="/waxing" type="submit" class="btn btn-success">Book now</button>
        </a>
      </div>
    </div>

  </div>
    </>
  )
}

export default Waxing