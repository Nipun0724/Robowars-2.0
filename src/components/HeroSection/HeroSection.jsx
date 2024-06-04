import React, { useEffect } from "react";
import gif from "../../assets/robowars_logo.gif";
import "./HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    const playButton = document.getElementById("playButton");
    const videoPlayer = document.getElementById("videoPlayer");
    const videoOverlay = document.getElementById("videoOverlay");
    const backButton = document.getElementById("backButton");

    const handleDocumentClick = (event) => {
      if (
        videoOverlay.style.display === "block" &&
        !videoPlayer.contains(event.target) &&
        !backButton.contains(event.target) &&
        !playButton.contains(event.target)
      ) {
        // Hide the video overlay
        videoOverlay.style.display = "none";
        // Pause the video
        videoPlayer.pause();
        // Change the button icon back to a play icon
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
      }
    };

    if (playButton && videoPlayer && videoOverlay && backButton) {
      // Add a click event listener to the play button
      playButton.addEventListener("click", function () {
        // Show the video overlay
        videoOverlay.style.display = "block";
        // Play the video
        videoPlayer.play();
        // Change the button icon to a pause icon
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
      });

      // Add an event listener to the back button
      backButton.addEventListener("click", function () {
        // Hide the video overlay
        videoOverlay.style.display = "none";
        // Pause the video
        videoPlayer.pause();
        // Change the button icon back to a play icon
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
      });

      // Add an event listener to the video to reset the button text when the video ends
      videoPlayer.addEventListener("ended", function () {
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        videoOverlay.style.display = "none";
      });

      // Add an event listener to the document to handle clicks outside the video
      document.addEventListener("click", handleDocumentClick);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (playButton && videoPlayer && videoOverlay && backButton) {
        playButton.removeEventListener("click", playButton);
        backButton.removeEventListener("click", backButton);
        videoPlayer.removeEventListener("ended", videoPlayer);
        document.removeEventListener("click", handleDocumentClick);
      }
    };
  }, []);

  return (
    <>
      <section id="hero" className="d-flex">
        <div
          className="container position-relative text-center text-lg-start aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-8">
              <img src={gif} id="robowars_logo" alt="robowars_logo.gif" />
              <h1>
                Welcome to <span>Robowars</span>
              </h1>
              <div className="btns">
                <a
                  href="https://events.vit.ac.in/"
                  className="btn-menu animated fadeInUp scrollto"
                >
                  Register
                </a>
                <a
                  href="index1.html"
                  className="btn-book animated fadeInUp scrollto"
                >
                  Competition
                </a>
              </div>
            </div>
            <button id="playButton">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </section>
      <div
        id="videoOverlay"
        className="video-overlay"
        style={{ display: "none" }}
      >
        <button id="backButton" className="back-button">
          Back
        </button>
        <video id="videoPlayer" controls>
          <source
            src="https://res.cloudinary.com/vit2/video/upload/v1663653129/Robowars_2022._Coming_Soon..._bhaufm.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default HeroSection;
