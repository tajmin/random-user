const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data));
}

function displayQuotes(data) {
    console.log(data)
    const quoteTag = document.getElementById('quotes');
    quoteTag.innerText = data.quote;
    quoteTag.style.background = "#e3f2f7";
    quoteTag.style.padding = "25px";

}