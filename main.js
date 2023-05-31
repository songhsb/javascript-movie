window.onload = function () {
  getMovie();
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTQ1ODJiZDIxOTY2YjZmZDYyZTMyNmEyZDAxMDU1YyIsInN1YiI6IjY0NzRiYTkwOWFlNjEzMDBjNGM4N2M3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZNhwAQZCokGuUX8k9O29PC3M48FJPu13w0saa3MvPg",
  },
};

// TMDB api 받아오기
function getMovie() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results); // 카드만들기
    });
}

// 카드섹션에 카드만들기
function showMovies(data) {
  data.forEach((movie) => {
    const { id, title, poster_path, vote_average, overview } = movie;
    const cardSection = document.querySelector(".card-list");
    const card = document.createElement("div");

    card.className = "movie-card";
    card.innerHTML = `
    <img class=img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
            <h2 class="card-title">${title}</h2>
            <p class="card-rating">${vote_average}</p>
            <p class="card-overview">${overview}</p>
    `;

    cardSection.appendChild(card);

    // 카드클릭시 alert창
    card.addEventListener("click", () => {
      alert(`영화 id : ${id}`);
    });
  });
}
