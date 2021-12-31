const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const authorText = document.getElementById("author");
const loader = document.getElementById("loader");

let apiQuotes = [];
//show loadding
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
//hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//show new quotes
function newQuotes() {
  loading();
  //pick a random quotes from api
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //   check if author field is blank

  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // chheck quote lenght to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //set quote, hide loader

  quoteText.textContent = quote.text;
  complete();
}

// Get quotes from API
async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuotes();
  } catch (error) {
    //catch error here
  }
}
// tweet a quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// event listener
newQuoteBtn.addEventListener("click", newQuotes);
twitterBtn.addEventListener("click", tweetQuote);

//on load
getQuotes();
