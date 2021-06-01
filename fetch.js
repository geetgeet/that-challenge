import API_KEY from '.env'
/* -- FETCH FUNCRIONS--*/
let products = [];
 async function getPosts() {
  // Get element to change
  let list = document.getElementById("li-items");

  // Fetch the data
  await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.articles);
      json.articles.forEach(item => {
        products.push(item);
       createsaleItem(item);
      });
     
    });
}

function createsaleItem(product) {
  const listitem = `<li>
  <div class="product-card">
  <img src="${product.name}" class="li-image">
  <p class="price">R${product.description}</p>
  <p class="stock">Qty ava:${product.category}</p>
</div></li>`;
  let list = document.getElementById("li-items");
  console.log("Hello");
  list.innerHTML += listitem;
}

getPosts();



