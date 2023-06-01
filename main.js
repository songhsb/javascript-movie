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
      showMovies(data.results); // 카드만들기 함수로
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

    // card클릭 시 해당영화 페이지로
    card.addEventListener("click", () => {
      alert(`${id}_${title} 페이지로 들어갑니다.`);
      const movieURL = `https://www.themoviedb.org/movie/${id}`;
      window.location.href = movieURL;
    });
  });
}

// 검색기능
function handleSearch() {
  let input_val, keywords, movieList, title;
  input_val = document.getElementById("search-input").value;

  // 검색란에 아무런 입력도 없을 시
  if (input_val === "") {
    alert("한 글자 이상 입력");
  }

  //대소문자 구분 없이, 공백 있어도 검색 가능
  keywords = input_val.toUpperCase().replace(/\s+/g, "");
  movieList = document.getElementsByClassName("movie-card");
  for (i = 0; i < movieList.length; i++) {
    title = movieList[i].getElementsByTagName("h2")[0].innerHTML;
    if (title.toUpperCase().replace(/\s+/g, "").indexOf(keywords) > -1) {
      movieList[i].style.display = "block";
    } else {
      movieList[i].style.display = "none";
    }
  }
}
