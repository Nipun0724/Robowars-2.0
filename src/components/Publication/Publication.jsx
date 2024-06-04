import React from 'react'
import pub1 from "../../assets/publication1.jpg"
import pub2 from "../../assets/publication2.jpg"
import pub3 from "../../assets/publication3.jpg"
import pub4 from "../../assets/publication4.jpg"
import "./Publication.css"

const Publication = () => {
  return (
    <div>
      <section id="media" class="gallery">

      <div class="container aos-init aos-animate" data-aos="fade-up">

        <h1 class="mediaText">Publications and Media</h1>

      </div>

      <div class="container-fluid aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-0">
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="img/publication1.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src={pub1} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="img/publication3.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src={pub3} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="img/publication2.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src={pub2} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="img/publication4.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src={pub4} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>
        </div>

        <div id="lightbox" class="lightbox">
          <div id="lightbox-content" class="lightbox-content">
            <img id="lightbox-image" src="" alt="" class="img-fluid"/>
            <span id="lightbox-close" class="lightbox-close">×</span>
          </div>
        </div>


      </div>
    </section>
    </div>
  )
}

export default Publication
