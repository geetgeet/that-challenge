
require('dotenv').config();



let searchBar = document.getElementById("searchBar");

async function search() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const API_KEY = process.env.API_KEY
    const link = "https://newsapi.org/v2/sources?apiKey=API_KEY"
    const url = proxyUrl + link + searchBar.value + API_KEY
    const request = new Request(url);
    console.log(searchBar.value);
    console.log(request)
    // await fetch(request)
    //     .then(response => response.json())
    //     .then((articles) => { console.log(articles); return articles; })
    //     .then((articles) => {
    //         for (let i = 0; i < articles.length; i++) {
    //             console.log(articles[i])
    //             document.getElementById("articles").innerHTML += articles;
    //         }
    //     });
}

// function Draw(articles) {
//     let book = `
//         <div class="art">
//           <h4>${articles.author}</h4>
//           <img src=${articles.urlToImage} alt=${articles.title} id="articleCard"/>
//         </div>
//       `;
// }