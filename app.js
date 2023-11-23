const btn = document.getElementById('btn');
const showQuote = document.getElementById('quote');
const author = document.getElementById('author');

async function getQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const quote = await response.json();

  console.log(quote.content);
  console.log(`- ${quote.author}`);

  showQuote.textContent = quote.content;
}

btn.addEventListener('click', getQuote);
