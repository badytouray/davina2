import React from 'react'
import ContactUs from '../ContactUs/ContactUs'

import D from "../Images/D.jpeg"
import "./About.css"

function About() {
  return (
<>
<br />
<h1> About Us</h1>
<div class="wrapper">
<img src={D} class="pic"></img>
<p class="container-fluid"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>

</div>

<div class="modal-dialog modal-xl">
<div class="embed-responsive embed-responsive-16by9">
  <iframe style={{margin: "10px", width: "1000px", height: "500px"}} class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
</div>
<ContactUs />
    </>
  )
}

export default About