import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import robovitics from "../../assets/robovitics logo.png"
import gravitas from "../../assets/gravitas_logo-removebg-preview.png"
import "./Navbar.css"

const Navbar = () => {
  return (
     <div class="navbar">
    <img src={robovitics} alt="robovitics logo"/>
    <li>
      <ul>Home</ul>
      <ul onclick="scrollToAboutUs()">About us</ul>
      <ul onclick="scrollToGravitas()">Gravitas 23'</ul>
      <ul onclick="scrollToFaq()">FAQ</ul>
      <ul onclick="scrollTocontactUs()">Contact us</ul>
    </li>
    <img id="gravitas_logo" src={gravitas} alt="gravitas logo"/>
  </div>
  )
}

export default Navbar
