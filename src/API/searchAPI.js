
function getSearchData(term) {
  fetch(`https://www.reddit.com/search.json?q=${term}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.data.children)
  })
  }


  export {getSearchData}
