

async function searchProducts() {
  // Get data from form
  let form = document.getElementById("search-form");
  let searchTerm = form.getElementsByTagName("input")[0].value;
  // let searchTerm = form.getElementsByTagName("input")[0].value.replace(/ /g,'-');
  let searchTermKey = form.getElementsByTagName("input")[1].value;
  // Create Regular Expression
  let searchRegEx = new RegExp(searchTerm, "i");
  let searchRegEx2 = new RegExp(searchTermKey, "i");


  // Fetch data to search from
  await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=60fcd15748ca4894965746c5aed9d9ef`)
  .then((response) => response.json())
  .then((json) => {
    // Filter data
    let result = json.articles.filter((article) => {
      return article
    });
    console.log(result.length)
    // Check if there are found results
    if (result.length > 0) {
      // Render items that matched
      document.getElementById("li-items").innerHTML = "";
      result.forEach((product) => createsaleItem(product));
    } 
    
    else {
      // Alert nothing found
      alert("nothing found");
    }
  })
  .catch((err) => {
    // Log any error from back end
    console.log(err);
  });
}