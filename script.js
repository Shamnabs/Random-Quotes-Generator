document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Strive not to be a success, but rather to be of value. - Albert Einstein",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
        
    ];

    const quoteText = document.getElementById('quote-text');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteText.textContent = randomQuote;
    });
});
