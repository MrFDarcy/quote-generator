
async function getData() {
    const apiUrl = 'https://stoicquotesapi.com/v1/api/quotes/random';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        let quoteElement = document.getElementsByClassName('quote');
        let authorElement = document.getElementsByClassName('author');

        quoteElement[0].innerHTML = data.body;
        authorElement[0].innerHTML = data.author;

        console.log(data.body);
        console.log(data.author);


    } catch (error) {
        console.log(error);
    }

}

getData();
