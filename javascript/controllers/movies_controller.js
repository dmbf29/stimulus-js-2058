import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  // declare all of my targets
  static targets = ["input", "list"];

  // whenever my JS sees the controller in the HTML, it auto calls `connect`
  // data-controller='movies'
  connect() {
    console.log("connecte to movies!");
  }

  // this is triggers by our data-action event
  search(event) {
    // console.log();
    event.preventDefault(); // dont refresh
    // get the url for the api
    const url = `https://www.omdbapi.com/?s=${this.inputTarget.value}&apikey=adf1f2d7`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.listTarget.innerHTML = "";
        this.insertMovies(data.Search);
      });

    // make an http request to the api
    // get the data back from the api
    // insert the data onto the page
  }

  insertMovies(movies) {
    movies.forEach((movie) => {
      const li = `
      <li class='list-group-item'>
        <img src='${movie.Poster}' />
        <p>${movie.Title}</p>
      </li>`;
      this.listTarget.insertAdjacentHTML("beforeend", li);
    });
  }
}
