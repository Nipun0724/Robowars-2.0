import React from 'react'
import gravitas from "../../assets/gravitas discription.jpg"
import "./Gravitas.css"
const Gravitas = () => {
  return (
    <>
      <section id="gravitas" class="events">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
          <h1 class="aboutgravitasText">About Gravitas 23'</h1>
        </div>




        <div class="row event-item">
          <div class="col-lg-6">
            <a href="https://gravitas.vit.ac.in/" target="_blank">

              <img src={gravitas} class="img-fluid1" alt=""/>
            </a>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content">
            <h3>About Gravitas</h3>
            <p class="fst-italic">
              VIT's annual techno-management carnival of knowledge, Gravitas, aims to entertain and enrich the
              technological skills of the students and the researchers by having a plethora of innovative events
              in every avenue of engineering.
            </p>
            <p class="fst-italic">
              The 14th Edition of graVITas is scheduled from 22nd to 24th September. This year, graVITas will
              entertain and enrich the technological skills of the students and the researchers by having a
              plethora of innovative events in every avenue of engineering coupled with MEGATHON.
            </p>
            <p class="fst-italic">
              The theme of this year's extravaganza will be with an objective of inspiring the student community
              to develop a product for solving real-world problems and challenges.This annual techno-management
              knowledge carnival of VIT, “graVITas” attracts students from India and Abroad. It provides a
              platform to display their spectacular talents and innovations.
            </p>
          </div>
        </div>



        <div class="swiper-pagination"></div>


      </div>
    </section>
    </>
  )
}

export default Gravitas
