import API_KEY from "../.env"
function searchProducts() {
  // Get data from form
  let form = document.getElementById("search-form");
  let searchTerm = form.getElementsByTagName("input")[0].value;
  // Create Regular Expression
  let searchRegEx = new RegExp(searchTerm, "i");
  const key = process.env.API_KEY
  // Fetch data to search from
  fetch(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      // Filter data
      let result = json.filter((sources) => {
        return sources.category.search(searchRegEx) !== -1;
      });
      // Check if there are found results
      if (result.length > 0) {
        // Render items that matched
        document.getElementById("li-items").innerHTML = "";
        result.forEach((product) => createsaleItem(product));
      } else {
        // Alert nothing found
        alert("nothing found");
      }
    })
    .catch((err) => {
      // Log any error from back end
      console.log(err);
    });
}
