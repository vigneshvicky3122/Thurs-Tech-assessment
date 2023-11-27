import React from "react";

function About() {
  return (
    <>
      <div class="container mt-2 mb-4">
        <div class="card border border-black shadow p-4">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="d-flex gap-2">
                <i class="bi bi-star-fill text-warning"></i> <b>4.9 stars</b>
                <span class="text-secondary">( 231 Reviews )</span>
              </p>
              <div class="d-flex gap-3">
                <i class="bi bi-heart bg-body-secondary fw-bold border border-black p-2 box-shadow rounded-2"></i>
                <i class="bi bi-share bg-body-secondary fw-bold border border-black p-2 box-shadow rounded-2"></i>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-end">
              <h1 class="fw-bold">HYDERABAD CITY</h1>
              <p class="fw-semibold">October 4, 2021</p>
            </div>
            <blockquote class="blockquote mb-0">
              <p class="text-align-justify">
                Hyderabad is the capital of southern India's Telangana state. A
                major center for the technology industry, it's home to many
                upscale restaurants and shops. Its historic sites include
                Golconda Fort, a former diamond-trading center that was once the
                Qutb Shahi dynastic capital.
              </p>
              <footer class="footer d-flex flex-row gap-4">
                <p>
                  <i class="bi bi-geo-alt-fill"></i> Madhapur, Hyderabad.
                </p>
                <p>
                  <i class="bi bi-telephone-fill"></i> +216 1234 5655
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
