//https://api.themoviedb.org/3/movie/550?api_key=4839cefc0999d8130e5a6e30c02509cf

// async function getMovie() {
//     var res = await fetch(
//       "https://api.themoviedb.org/3/movie/550?api_key=4839cefc0999d8130e5a6e30c02509cf"
//     );

//     var data = await res.json();
//     console.log(data.results)
// }

// getMovie()


const API_KEY = "api_key=4839cefc0999d8130e5a6e30c02509cf"
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

function getMovie(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
    })
}

getMovie(API_URL)


function showMovie(data) {
    data.foreach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movie1 = document.createElement("div")
        movie1.classList.add("movie")
        movie1.innerHTML = `
         <img src="${IMG_URL + poster_path}" alt="image">
        <div class="movie-info">
            <h2>${title}</h2>
            <span class="${getColor(vote_average)}">9.8</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
        </div>
        
        `;
    })
}



