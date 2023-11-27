import React from "react";

function Recent() {
  return (
    <>
      <div class="container mt-5">
        <h1 class="fw-bold mb-4">RELATED ACTIVITIES</h1>
        <div class="row row-cols-1 row-cols-md-3 g-5">
          <div class="col">
            <div class="card h-100 shadow">
              <span class="suggestion">Popular</span>
              <img
                src="https://tbcdn.talentbrew.com/company/391/v3_0/img/og-disney-wdw.jpg"
                class="card-img-top"
                alt="..."
              />
              <span class="img-let">PLACE</span>
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p>
                    <i class="bi bi-star-fill text-warning"></i>{" "}
                    <b>4.9 stars</b>
                  </p>
                  <p class="fw-semibold">October 4, 2021</p>
                </div>

                <h5 class="card-title fw-bold">PLACE</h5>
                <h6>$22.00</h6>
              </div>
              <div class="ms-4 me-4">
                <p class="fw-semibold">
                  <i class="bi bi-geo-alt-fill"></i> Madhapur, Hyderabad.
                </p>
                <p class="fw-semibold">
                  <i class="bi bi-telephone-fill"></i> +216 1234 5655
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 shadow">
              <img
                src="https://www.indiantempletour.com/wp-content/uploads/2022/08/nepal-tour-package-from-hyderabad.jpg"
                class="card-img-top"
                alt="..."
              />
              <span class="img-let">OUTDOOR ACTIVITIES</span>
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p>
                    <i class="bi bi-star-fill text-warning"></i>{" "}
                    <b>5.0 stars</b>
                  </p>
                  <p class="fw-semibold">October 4, 2021</p>
                </div>
                <h5 class="card-title fw-bold">PLACE</h5>
                $$$<span class="text-secondary">$$</span>
              </div>
              <div class="ms-4 me-4">
                <p class="fw-semibold">
                  <i class="bi bi-geo-alt-fill"></i> Chilkalguda, Hyderabad.
                </p>
                <p class="fw-semibold">
                  <i class="bi bi-telephone-fill"></i> +216 1234 5655
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 shadow">
              <img
                src="https://pbs.twimg.com/media/DSlz843VoAElSp6.jpg:large"
                class="card-img-top"
                alt="..."
              />
              <span class="img-let">OUTDOOR ACTIVITIES</span>
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p>
                    <i class="bi bi-star-fill text-warning"></i>{" "}
                    <b>4.2 stars</b>
                  </p>
                  <p class="fw-semibold">October 4, 2021</p>
                </div>

                <h5 class="card-title fw-bold">PLACE</h5>
                <h6>$$$$$</h6>
              </div>
              <div class="ms-4 me-4">
                <p class="fw-semibold">
                  <i class="bi bi-geo-alt-fill"></i> Madhapur, Hyderabad.
                </p>
                <p class="fw-semibold">
                  <i class="bi bi-telephone-fill"></i> +216 1234 5655
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recent;
