var QuotesStorage = [
    {
        'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author': 'Frank Zappa',
        'quote': 'So many books, so little time.'
    },
    {
        'author': 'Mae West',
        'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Be the change that you wish to see in the world.'
    },
    {
        'author': 'Mark Twain',
        'quote': 'If you tell the truth, you don\'t have to remember anything.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'A friend is someone who knows all about you and still loves you.'
    },
];

var lastRandomIndex = -1;

function generateQuote() {
    var randomIndex;


    do {
        randomIndex = Math.floor(Math.random() * QuotesStorage.length);
    } while (randomIndex === lastRandomIndex);


    lastRandomIndex = randomIndex;

    var randomQuote = QuotesStorage[randomIndex];

    var outputQuote = document.getElementById('OutputQuote');
    var outputAuthor = document.getElementById('OutputAuthor');

    outputQuote.textContent = `"${randomQuote.quote}"`;
    outputAuthor.textContent = `— ${randomQuote.author}`;
}