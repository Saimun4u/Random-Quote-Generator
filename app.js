const btn = document.getElementById('btn');
const showQuote = document.getElementById('quote');
const author = document.getElementById('author');

async function getQuote() {
  try {
    btn.innerText = 'Loading...';
    btn.disabled = true;
    showQuote.textContent = 'Loading...';
    author.textContent = 'Updating...';
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();

    btn.disabled = false;
    btn.innerText = 'GET A QUOTE';

    showQuote.textContent = quote.content;
    author.textContent = `~ ${quote.author}`;
  } catch (error) {
    showQuote.style.color = 'red';
    showQuote.textContent = 'Ohhh.. the site has hit a snag';
    btn.disabled = false;
    btn.innerText = 'GET A QUOTE';
  }

  console.log(quote.content);
  console.log(`- ${quote.author}`);
}

getQuote();

btn.addEventListener('click', getQuote);
