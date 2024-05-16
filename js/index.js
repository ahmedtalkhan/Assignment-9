var quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best - Marilyn Monroe",
  "So many books, so little time.― Frank Zappa",
  "You know you're in love when you can't fall asleep because reality is finally better tshan your dreams ― Dr. Seuss",
];

function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
document.getElementById("Quote").innerHTML = getRandomQuote();
