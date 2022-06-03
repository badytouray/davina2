import React from 'react'
import FeaturedSpecial from '../FeaturedSpecial/FeaturedSpecial'
import  Brazil from "../Images/brazil.jpg"

function Home() {
  return (
    <>

<br />
<h1> Welcome to DMT Beauty</h1>
<br />
<p class="container">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<br />
    <h1>Services</h1>
    <br />
    <br />
    <div class="row row-cols-md-4 g-4 container-fluid d-flex justify-content-evenly col-xxl">
    <div class="card">
      <img src={Brazil} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Waxing</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a href="/waxing">
        <button type="submit" class="btn btn-success">Read more</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Brazil} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Eye treaments</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/eye-treatment">
        <button type="submit" class="btn btn-success">Read more</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Brazil} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Facials</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/facials">
        <button type="submit" class="btn btn-success">Read more</button>
        </a>
      </div>
    </div>

    
<FeaturedSpecial />

  </div>
    </>
  )
}

export default Home