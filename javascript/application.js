// //////////////
// Vanilla JS
// //////////////
// 1. Select the element
// 2. add the event listener
// 3. call an api
// 4. change the dom
// const clickmeBtn = document.querySelector("#clickme");
// const resetBtn = document.querySelector("#reset");
// clickmeBtn.addEventListener("click", (event) => {
//   // disable the button
//   // change the text
//   event.currentTarget.disabled = true;
//   event.currentTarget.innerText = "Clicked!";
//   resetBtn.classList.remove("d-none");
// });

// //////////////
// Stimulus 101
// //////////////

// define what HTML will use JS => data-controller  C
// addEventListener()           => data-action      A
// querySelector()              => data-xxx-target  T

// Bonus: data-xxx-valname-value and this.element

import { Application } from "@hotwired/stimulus";
window.Stimulus = Application.start();
// window.richard = "hello";
import DisableButtonController from "./controllers/disable_button_controller.js";
// tells stimulus what the controller is called in the HTML
// data-controller="disable-button"
Stimulus.register("disable-button", DisableButtonController);

import MoviesController from "./controllers/movies_controller.js";
// tells stimulus what the controller is called in the HTML
// data-controller="movies"
Stimulus.register("movies", MoviesController);

// create a controller for movies search
// action?? submit the form
// target?? form, ul (to put the movies into)
