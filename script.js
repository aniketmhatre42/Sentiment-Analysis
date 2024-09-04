function analyzeSentiment() {
    const text = document.getElementById('inputText').value.trim(); // Trim whitespace
    const resultDiv = document.getElementById('result');

    // Check if the text area is empty
    if (text === '') {
        alert('Please enter the text');
        return;
    }

    // Expanded list of positive words for general and movie reviews
    const positiveWords = [
        'amazing', 'excellent', 'fantastic', 'brilliant', 'wonderful', 'engaging', 'gripping', 'masterpiece',
        'superb', 'remarkable', 'great', 'outstanding', 'spectacular', 'incredible', 'moving', 'heartfelt',
        'touching', 'emotional', 'compelling', 'riveting', 'exceptional', 'innovative', 'cinematic', 'inspiring',
        'stellar', 'powerful', 'beautiful', 'memorable', 'well-acted', 'well-directed', 'well-written', 
        'entertaining', 'thought-provoking', 'top-notch', 'breathtaking', 'immersive', 'flawless',
        'happy', 'joy', 'love', 'awesome', 'good', 'positive', 'cheerful', 'bright', 'uplifting', 'fantastic'
    ];

    // Expanded list of negative words for general and movie reviews
    const negativeWords = [
        'boring', 'terrible', 'awful', 'dull', 'predictable', 'cliché', 'disappointing', 'uninspired',
        'forgettable', 'poor', 'weak', 'slow', 'dragging', 'unengaging', 'mediocre', 'tedious', 
        'flat', 'lackluster', 'unconvincing', 'overrated', 'underwhelming', 'pointless', 'mindless',
        'terribly acted', 'terribly directed', 'badly written', 'lack of depth', 'shallow', 'frustrating',
        'cringe-worthy', 'incoherent', 'unoriginal', 'excessive', 'overdone', 'mundane',
        'sad', 'hate', 'angry', 'bad', 'negative', 'depressing', 'dark', 'gloomy', 'terrible', 'tragic'
    ];

    let score = 0;

    const words = text.toLowerCase().split(/\s+/);
    words.forEach(word => {
        if (positiveWords.includes(word)) {
            score++;
        } else if (negativeWords.includes(word)) {
            score--;
        }
    });

    let sentiment = '';
    let symbol = ''; // Variable to store the symbol
    if (score > 0) {
        sentiment = 'Positive';
        resultDiv.style.color = 'green';
        symbol = '😊'; // Smiley symbol for positive sentiment
    } else if (score < 0) {
        sentiment = 'Negative';
        resultDiv.style.color = 'red';
        symbol = '😡'; // Sad symbol for negative sentiment
    } else {
        sentiment = 'Neutral';
        resultDiv.style.color = 'gray';
        symbol = '😐'; // Neutral face symbol
    }

    resultDiv.textContent = `Sentiment: ${sentiment} ${symbol}`;
}
