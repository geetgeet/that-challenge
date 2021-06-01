/* -- FETCH FUNCRIONS--*/
let products = [];
let catagoty=[]
 async function getPosts() {
  // Get element to change
  let list = document.getElementById("li-items");

  // Fetch the data
  await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=60fcd15748ca4894965746c5aed9d9ef")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.articles);
      json.articles.forEach(item => {
        products.push(item);
       createsaleItem(item);
      
      });
      
    });
}

function createsaleItem(article) {
  const listitem = `<li>
  <div class="product-card">
  <h2>${article.title}</h2>
  <p> By:${article.author}</p>
      <h5>${article.description}</h5>
      <img src="${article.urlToImage}" class="fakeimg" style="height:200px;"/>
      <p >${article.content}</p>
    </div>
 </li>`;
  let list = document.getElementById("li-items");
  console.log("Hello");
  list.innerHTML += listitem;
}

getPosts();



