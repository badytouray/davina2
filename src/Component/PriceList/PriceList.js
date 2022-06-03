import React from 'react'
import Prices from "../Images/PriceList.jpg";

function PriceList() {
  return (
    <>
    <br />
    <h1> Price List</h1>
    <br />
    <div class="row">
      <div class="col" >
    <img src={Prices} class="rounded mx-auto d-block" style={{width: "1000px"}}></img>
    </div>
    </div>
    </>
  )
}

export default PriceList


