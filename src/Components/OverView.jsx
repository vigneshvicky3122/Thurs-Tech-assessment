import React from "react";

function OverView() {
  return (
    <>
      <div class="container d-flex justify-content-between gap-5">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button bg-transparent fw-bold fs-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                OVERVIEW
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body fw-semibold">
                Cupidatat nostrud consectetur cupidatat anim eiusmod eu deserunt
                ipsum elit occaecat. Ipsum et fugiat culpa ut excepteur deserunt
                commodo laboris. Exercitation eu pariatur exercitation voluptate
                non magna cupidatat qui proident aliqua. Cupidatat nostrud
                consectetur cupidatat anim eiusmod eu deserunt ipsum elit
                occaecat. Ipsum et fugiat culpa ut excepteur deserunt commodo
                laboris. Exercitation eu pariatur exercitation voluptate non
                magna cupidatat qui proident aliqua.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed bg-transparent fw-bold fs-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                FEATURES
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body fw-semibold">
                Laborum aliqua exercitation sunt laboris sit est. Est sint culpa
                voluptate aliquip quis excepteur tempor nulla quis ad voluptate
                magna nisi velit. Quis nisi sunt ullamco deserunt incididunt ad
                nulla enim sunt anim cillum. Eu fugiat dolor qui laborum
                consectetur. Non labore qui cillum sit qui qui enim amet ut
                culpa ex eu cupidatat. Adipisicing ipsum magna elit nulla
                consectetur voluptate id proident magna quis labore est. Aliquip
                sit fugiat labore consequat pariatur cillum pariatur est minim
                ex labore est in laborum.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed bg-transparent fw-bold fs-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                LISTING VIDEOS
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body fw-semibold">
                Nulla in eiusmod sit dolor voluptate veniam do Lorem duis
                pariatur dolore. Et occaecat sit laborum et fugiat proident do
                anim pariatur. Commodo enim aliquip dolor nostrud reprehenderit
                voluptate ut qui consectetur ipsum cupidatat sint. Occaecat
                incididunt ipsum nulla duis qui commodo ullamco aliquip Lorem
                Lorem. Excepteur consequat dolor mollit Lorem consectetur ipsum
                voluptate tempor ad incididunt dolore. Officia laboris culpa
                cillum ad occaecat commodo duis ipsum culpa minim ex. Minim
                cillum qui aliquip culpa anim mollit ut.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="fw-bold fs-3">LOCATION</h3>
          <img
            src="https://www.google.com/maps/d/thumbnail?mid=1BalN39alAkTq_RfWL2UCCU1UM-s&hl=en"
            alt=""
            class="shadow border border-dark rounded-3"
            width="280"
            height="230"
          />
        </div>
      </div>
    </>
  );
}

export default OverView;
