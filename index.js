const quoteElement = document.getElementsByClassName('quote');
const authorElement = document.getElementsByClassName('author');
const tweetElement = document.getElementById('tweet-quote');
const newQuoteElement = document.getElementById('new-quote');

const container = document.getElementById('quote-container')
const loadingIcon = document.getElementsByClassName('lds-ellipsis')

console.log(loadingIcon);



function showLoadingSpinner() {
    loadingIcon[0].classList.remove('hidden');
    container.classList.add('hidden');
}

function removeLoadingSpinner() {
    if (!loadingIcon[0].classList.contains('hidden')) {
        loadingIcon[0].classList.add('hidden');
        container.classList.remove('hidden');
    }
}








async function getData() {

    showLoadingSpinner();

    const apiUrl = 'https://stoicquotesapi.com/v1/api/quotes/random';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();



        quoteElement[0].innerHTML = data.body;
        authorElement[0].innerHTML = data.author;





        console.log(data.body);
        console.log(data.author);

        removeLoadingSpinner();


    } catch (error) {
        console.log(error);
    }



}



getData();


newQuoteElement.addEventListener('click', getData);

tweetElement.addEventListener('click', () => {
    const quote = quoteElement[0].innerHTML;
    const author = authorElement[0].innerHTML;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
});

