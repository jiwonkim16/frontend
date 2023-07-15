const quotes = [
        {quotes:"I never dreamed about sucess, i worked for it"},
        {quotes:"Do not try to be original just try to be good"},
        {quotes:"Do not be afraid to give up the good to go for the great"},
        {quotes:"Whatever you do, you have to keep moving forward"},
        {quotes:"The most certain way to succeed is always to try just one more time"},
        {quotes:"Some people dream of success, while other people get up every morning and make it happen"},
        {quotes:"The only thing worse than starting something and failing is not starting something"},
        {quotes:"You will face many defeats in life, but never let yourself be defeated"},
        {quotes:"The die is cast"},
        {quotes:"This too snail pass"}
]

const quote = document.querySelector("#quote span:first-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quotes;