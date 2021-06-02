/* -- FETCH FUNCRIONS--*/
let products = [];
 async function getPosts() {
  // Get element to change
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
  <div>
  <div class="product-card">
  <h2>${article.title}</h2>
  <p> By:${article.author}</p>
      <h5>${article.description}</h5>
      <img src="${article.urlToImage}" class="fakeimg" style="height:200px;"/>
      <a href="${article.url}" target="_blank"><button>Read More</button>
    </div>
    </div>
 </li>`;
  let toplist = document.getElementById("top-stories");
  console.log("Hello");
  toplist.innerHTML += listitem;
}

function createsearchItem(article) {
  const listitem = `<li>
  <div class="product-card">
  <h2>${article.title}</h2>
  <p> By:${article.author}</p>
      <h5>${article.description}</h5>
      <img src="${article.urlToImage}" class="fakeimg" style="height:200px;"/>
      <a href="${article.url}" target="_blank"><button>Read More</button>
    </div>
 </li>`;
  let toplist = document.getElementById("li-items");
  console.log("Hello");
  toplist.innerHTML += listitem;
}

getPosts();



