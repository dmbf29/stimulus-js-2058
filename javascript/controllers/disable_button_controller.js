import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  // declare all of my targets
  static targets = ["clickme", "reset"];
  // whenever my JS sees the controller in the HTML, it auto calls `connect`
  connect() {
    // console.log("we can do any JS that we want to happen on page load");
    // no longer writing querySeletor or addEventListener
    // console.log(clickme);
    // this.targetNameTarget
    // console.log(this.clickmeTarget);
    // console.log(this.resetTarget);
  }

  disable(event) {
    // console.log("hello from disable");
    event.currentTarget.disabled = true;
    event.currentTarget.innerText = "Clicked!";
    // this.resetTarget.classList.remove("d-none");
    this.resetTarget.classList.remove("d-none");
  }

  enable(event) {
    // clickme btn is not disabled
    // change the text back to "Click me!"
    // add the d-none class back to the reset btn
    this.clickmeTarget.disabled = false;
    this.clickmeTarget.innerText = "Click me!";
    event.currentTarget.classList.add("d-none");
    // reset.classList.add("d-none");
  }
}

// Ruby way:
// class DisableButtonController < Controller

// C - Controller
// A - Action -> addEventListener
// T - Target -> querySelector
