import React from 'react'
import autodesk from "../../assets/autodesk.png";
import electric from "../../assets/electric.png";
import "./Sponsors.css"

const Sponsors = () => {
  return (
    <div>
      <section id="Sponsors" class="FAQ">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <h2 class="sponsersText"> Sponsors</h2>

        <picture>
          <img id="autodesk_img" src={autodesk} alt="autodesk.png"/>
          <img id="electric_img" src={electric} alt="electric.png"/>
        </picture>
        </div>
        </section>
    </div>
  )
}

export default Sponsors
