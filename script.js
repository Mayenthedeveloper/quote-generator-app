let apiQuotes = [];

//show new quotes
function newQuotes() {
  //pick a random quotes from api
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuotes();
  } catch (error) {
    //catch error here
  }
}
//on load
getQuotes();
