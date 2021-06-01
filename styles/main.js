let searchBar = document.getElementById("searchBar");
let articleCard = document.getElementById("articles");
function search() {
    //if the code does not run you may need to activate the server
    //proxy server to fix cors error
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    //assigned variable for api key
    const key = "&apiKey=e9812236a72c43d6855eda46082ae0d8"
    //link for the api to query
    const link = "https://newsapi.org/v2/everything?q="
    const url = proxyUrl + link + searchBar.value + key
    const request = new Request(url);
    console.log(searchBar.value);
    fetch(request)
    //turns resp into json data
        .then(resp => resp.json())
        // returns object of the data
        .then((article) => { 
            console.log(article);
            //populates webpage with articles
            let popArt = `
        <div class="art">
          <h1>${JSON.stringify(article.articles[0].title)}</h1>
          <h2>${JSON.stringify(article.articles[0].author)}</h2>
          <img src=${JSON.stringify(article.articles[0].urlToImage)} alt=${JSON.stringify(article.articles[0].title)} id="articleCard"/>
          <p>${JSON.stringify(article.articles[0].description)}</p>
          <a href=${JSON.stringify(article.articles[0].url)} target="_blank">Read full article</a>
        </div>
        <div class="art">
          <h1>${JSON.stringify(article.articles[1].title)}</h1>
          <h2>${JSON.stringify(article.articles[1].author)}</h2>
          <img src=${JSON.stringify(article.articles[1].urlToImage)} alt=${JSON.stringify(article.articles[1].title)} id="articleCard"/>
          <p>${JSON.stringify(article.articles[1].description)}</p>
          <a href=${JSON.stringify(article.articles[1].url)} target="_blank">Read full article</a>
        </div>
        <div class="art">
          <h1>${JSON.stringify(article.articles[2].title)}</h1>
          <h2>${JSON.stringify(article.articles[2].author)}</h2>
          <img src=${JSON.stringify(article.articles[2].urlToImage)} alt=${JSON.stringify(article.articles[2].title)} id="articleCard"/>
          <p>${JSON.stringify(article.articles[2].description)}</p>
          <a href=${JSON.stringify(article.articles[2].url)} target="_blank">Read full article</a>
        </div>
        <div class="art">
          <h1>${JSON.stringify(article.articles[3].title)}</h1>
          <h2>${JSON.stringify(article.articles[3].author)}</h2>
          <img src=${JSON.stringify(article.articles[3].urlToImage)} alt=${JSON.stringify(article.articles[3].title)} id="articleCard"/>
          <p>${JSON.stringify(article.articles[3].description)}</p>
          <a href=${JSON.stringify(article.articles[3].url)} target="_blank">Read full article</a>
        </div>
        <div class="art">
          <h1>${JSON.stringify(article.articles[4].title)}</h1>
          <h2>${JSON.stringify(article.articles[4].author)}</h2>
          <img src=${JSON.stringify(article.articles[4].urlToImage)} alt=${JSON.stringify(article.articles[4].title)} id="articleCard"/>
          <p>${JSON.stringify(article.articles[4].description)}</p>
          <a href=${JSON.stringify(article.articles[4].url)} target="_blank">Read full article</a>
        </div>
      `;
      
      articleCard.innerHTML = popArt;
        })
}