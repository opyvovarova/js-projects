const quoteContainer= document.getElementById("quote-container");
const quoteText= document.getElementById("quote");
const authorText= document.getElementById("authour");
const twitterBtn= document.getElementById("twitter");
const newQuoteBtn= document.getElementById("new-quote");
const loader = document.getElementById("loader");

// let apiQuotes = []; 
//Show Loader

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}


//Show NEw Quote
function newQuote() {
    loading();
    //Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //Check if Author false is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;

    }
    //Check Quote Length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    //Set Quote, HIde Loader
    quoteText.textContent = quote.text;
    complete();
}


// //Get Quotes From API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         // console.log(apiQuotes[12]);
//         // newQuote();
//     } catch (error) {
//         // Catch Error Here
//     }
// }

//Tweet Quotes
function tweetQuote() {
    const twitterUrl = `https://twiiter.com/intent/tweet?text/=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//On Load
newQuote();


