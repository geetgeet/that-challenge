/* -- FETCH FUNCRIONS--*/
let products = [];

async function getPosts() {
  //  console.log(process.env.API_KEY)
   
  let toplist = document.getElementById("top-stories");

  // Fetch the data
   await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=60fcd15748ca4894965746c5aed9d9ef")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.articles.forEach(item => {
        products.push(item);
       createmainItem(item);
      });
      
    });
}

function createmainItem(article) {
  const listitem = `<li>
 
  <div class="article-card">
  <div class="art-cont">
  <h2 class="article-title">${article.title}</h2>
  <hr/>
  <div class="article-cont">
  <img src="${article.urlToImage}" class="fakeimg" />
  <div class="description">
  <h5>${article.description}</h5>
  <a href="${article.url}" target="_blank"><button>Read More</button></a>
  
  </div>
  
  </div>
  <p style="font-size:small"> By:${article.author}</p>
  </div>
    </div>
   
 </li>`;
  let toplist = document.getElementById("top-stories");
  console.log("Hello");
  toplist.innerHTML += listitem;
}
// search items
function createsearchItem(article) {
  const listitem = `<li>
 
  <div class="article-card">
  <div class="art-cont">
  <h2 class="article-title">${article.title}</h2>
  <hr/>
  <div class="article-cont">
  <img src="${article.urlToImage}" class="fakeimg" />
  <div class="description">
  <h5>${article.description}</h5>
  <a href="${article.url}" target="_blank"><button>Read More</button></a>
  
  </div>
  
  </div>
  <p style="font-size:small"> By:${article.author}</p>
  </div>
    </div>
   
 </li>`;
  let toplist = document.getElementById("li-items");
  console.log("Hello");
  toplist.innerHTML += listitem;
}

getPosts();



