// arrow function

const renderMovieList = (list) => {
  // lấy cái thẻ chứa tất cả phim
  let listElement = document.getElementById("list-movie");
  // html sẽ lưu HTML tất cả các cái bộ phim đc BE trả về
  let html = "";
  list.forEach((movie) => {
    let { title, trailer } = movie;
    html += `
        <h1>${title}</h1>
        <iframe 
            width="560" 
            height="315" 
            src="${trailer}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
  });
  listElement.innerHTML = html;
};

const getAllMovie = () => {
  // promise
  axios({
    url: "http://localhost:8080/movie",
    method: "GET",
  }).then((response) => {
    // console.log(response.data);
    renderMovieList(response.data);
  });
};

getAllMovie();
