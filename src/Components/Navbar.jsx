import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark m-4 rounded-3 ps-3 pe-3">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-lg-0 gap-3">
              <li class="nav-item">
                <a
                  class="nav-link text-white fw-medium"
                  aria-current="page"
                  href="#"
                >
                  Categories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white fw-medium" href="#">
                  Activities Near Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white fw-medium" href="#">
                  Add a Place
                </a>
              </li>
            </ul>
            <a class="nav-link text-white fw-medium" href="#">
              Start Exploring <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
