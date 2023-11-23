const btn = document.getElementById('btn');
const showQuote = document.getElementById('quote');
const author = document.getElementById('author');

async function getQuote() {
  try {
    showQuote.textContent = 'Updating...';
    btn.disabled = true;
    btn.innerText = 'Loading...';
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();

    btn.disabled = false;
    btn.innerText = 'Get me a quote';

    showQuote.textContent = quote.content;
    author.textContent = `- ${quote.author}`;
  } catch (error) {
    showQuote.style.color = 'red';
    showQuote.textContent = 'Ohhh.. the site has hit a snag';
    btn.disabled = false;
    btn.innerText = 'GET QUOTE';
  }

  console.log(quote.content);
  console.log(`- ${quote.author}`);
}

btn.addEventListener('click', getQuote);
