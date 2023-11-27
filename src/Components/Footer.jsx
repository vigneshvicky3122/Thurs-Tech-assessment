import React from "react";

function Footer() {
  return (
    <>
      <div class="bg-dark">
        <div class="marquee">
          <span>
            <div class="ads-animation">
              <p class="feature">No extra cost</p>
              <h3 class="quote">LIKE NEVER BEFORE</h3>
              <p class="feature">Exclusive offers & deals</p>
              <h3 class="quote">FUTURE PACKED</h3>
              <p class="feature">Easy booking</p>
            </div>
          </span>
        </div>
        <div class="container d-flex justify-content-between pt-5 mt-5">
          <div class="d-flex flex-column align-items-start gap-2 mt-5">
            <h2 class="fw-bold text-white mb-4">WEBSITE</h2>
            <p class="fw-semibold text-white">Categories</p>
            <p class="fw-semibold text-white">Activities Near Me</p>
            <p class="fw-semibold text-white">Add a Photo</p>
          </div>
          <div class="d-flex flex-column align-items-start gap-2 mt-5">
            <h2 class="fw-bold text-white mb-4">IMPORTANT</h2>
            <p class="fw-semibold text-white">Term & Conditions</p>
            <p class="fw-semibold text-white">Privacy Policy</p>
            <p class="fw-semibold text-white">Term of Usage</p>
          </div>
          <div class="d-flex flex-column align-items-start gap-2 mt-5">
            <h2 class="fw-bold text-white mb-4">CONTACT</h2>
            <p class="fw-semibold text-white">Mumbai, India</p>
            <p class="fw-semibold text-white">+91 8276 4276 34</p>
          </div>
        </div>
        <div class="container mt-5">
          <div class="d-flex justify-content-between">
            <p class="text-secondary">
              All rights reserved by littlemoments.in
            </p>
            <a class="nav-link text-secondary" href="/">
              Back to top
            </a>
          </div>
        </div>
        <div class="container-fluid">
          <h1 class="end-lett">LITTLE MOMENTS</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
