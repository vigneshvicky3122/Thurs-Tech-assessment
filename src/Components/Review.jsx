import React from "react";

function Review() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <h1 class="fw-bold text-dark">REVIEW</h1>
        <div className="d-flex flex-column">
          <div class="d-flex justify-content-between">
            <div class="d-flex gap-3">
              <h1 class="fw-bold">5.0</h1>
              <div class="d-flex flex-column">
                <p>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </p>
                <p class="text-secondary" style={{ marginTop: "-18px" }}>
                  1289 reviews
                </p>
              </div>
            </div>
            <button class="btn btn-primary box-shadow border-dark">
              Write a review &nbsp;<i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div class="mt-5">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between gap-5">
                <div class="d-flex flex-column mandatory-width">
                  <h6>LAILA JOHN</h6>
                  <p class="text-secondary">MUMBAI</p>
                </div>
                <div class="d-flex flex-column">
                  <div className="d-flex align-items-center gap-3 ">
                    <div className="d-flex gap-2 mb-2">
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                    </div>
                    <h4>The best out there!</h4>
                  </div>
                  <p class="fw-semibold">
                    Est occaecat amet laborum esse elit amet in qui. Ea
                    excepteur qui eiusmod minim. Ex tempor cillum voluptate id
                    reprehenderit dolor pariatur nisi reprehenderit magna. Nisi
                    fugiat irure do laborum et proident est tempor eiusmod.
                    Officia fugiat officia dolore veniam commodo sit
                    exercitation.
                  </p>
                </div>
                <div class="d-flex mandatory-width">MAY 12, 2021</div>
              </li>
              <li class="list-group-item d-flex justify-content-between gap-5">
                <div class="d-flex flex-column mandatory-width">
                  <h6>MATT DEMON</h6>
                  <p class="text-secondary">DELHI</p>
                </div>
                <div class="d-flex flex-column">
                  <div className="d-flex align-items-center gap-3 ">
                    <div className="d-flex gap-2 mb-2">
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                    </div>
                    <h4>A Must-Have for Event Enthusiastic!</h4>
                  </div>
                  <p class="fw-semibold">
                    Est occaecat amet laborum esse elit amet in qui. Ea
                    excepteur qui eiusmod minim. Ex tempor cillum voluptate id
                    reprehenderit dolor pariatur nisi reprehenderit magna. Nisi
                    fugiat irure do laborum et proident est tempor eiusmod.
                    Officia fugiat officia dolore veniam commodo sit
                    exercitation.
                  </p>
                </div>
                <div class="d-flex mandatory-width">MAY 12, 2021</div>
              </li>
              <li class="list-group-item d-flex justify-content-between gap-5">
                <div class="d-flex flex-column mandatory-width">
                  <h6>MELISA DUNBAR</h6>
                  <p class="text-secondary">BANGALORE</p>
                </div>
                <div class="d-flex flex-column">
                  <div className="d-flex align-items-center gap-3 ">
                    <div className="d-flex gap-2 mb-2">
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                      <i class="bi bi-star-fill text-dark"></i>
                    </div>
                    <h4>Loacal Events at Your Fingertips</h4>
                  </div>
                  <p class="fw-semibold">
                    Est occaecat amet laborum esse elit amet in qui. Ea
                    excepteur qui eiusmod minim. Ex tempor cillum voluptate id
                    reprehenderit dolor pariatur nisi reprehenderit magna. Nisi
                    fugiat irure do laborum et proident est tempor eiusmod.
                    Officia fugiat officia dolore veniam commodo sit
                    exercitation.
                  </p>
                </div>
                <div class="d-flex mandatory-width">MAY 12, 2021</div>
              </li>
            </ul>
          </div>
          <div class="d-flex justify-content-end gap-2 mt-3">
            <button class="btn btn-light box-shadow border-dark rounded-5">
              <i class="bi bi-caret-left-fill"></i>
            </button>
            <button class="btn btn-warning box-shadow border-dark rounded-5">
              <i class="bi bi-caret-right-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
