import React from 'react'
import "./ServiceList.css"
import Eye from "../../Component/Images/eyebrow.jpg";
import Spa from "../../Component/Images/Spa.jpg";
import Wax from "../../Component/Images/wax.jpg";

function ServiceList() {
  return (
    <>
    <h1>Popular Services</h1>
    <br />
    <br />
    <div class="row row-cols-md-4 g-4 d-flex justify-content-evenly container-fluid ">
    <div class="card col-md-4 ">
      <img src={Eye} class="card-img-top" alt="..." style={{"height": "auto", "width" : "auto"}} />
      <div class="card-body">
        <h5 class="card-title">Wax ur ass</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-primary">Read more</button>
      </div>
    </div>

    <div class="card col-md-4">
      <img src={Spa} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Wax ur ass</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-primary">Read more</button>
      </div>
    </div>

    <div class="card col-md-4">
      <img src={Wax} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Wax ur ass</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-primary">Read more</button>
      </div>
    </div>
    </div>


  </>
  )
}

export default ServiceList;