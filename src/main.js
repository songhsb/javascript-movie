const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTQ1ODJiZDIxOTY2YjZmZDYyZTMyNmEyZDAxMDU1YyIsInN1YiI6IjY0NzRiYTkwOWFlNjEzMDBjNGM4N2M3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZNhwAQZCokGuUX8k9O29PC3M48FJPu13w0saa3MvPg",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
