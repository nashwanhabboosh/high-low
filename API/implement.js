// Function to fetch stock data from Alpha Vantage
function fetchStockData(symbol) {
    const apiKey = 'NH1S3G338R9GTMX0'; 
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data['Time Series (5min)']) {
                const timeSeries = data['Time Series (5min)'];
                // Extract relevant stock data for your game
                const latestTime = Object.keys(timeSeries)[0];
                const latestQuote = timeSeries[latestTime];
                const openPrice = parseFloat(latestQuote['1. open']);
                const closePrice = parseFloat(latestQuote['4. close']);
                return { openPrice, closePrice };
            } else {
                return null; // Handle API response errors
            }
        })
        .catch(error => {
            console.error('Error fetching stock data:', error);
            return null;
        });
}

// Function to set new companies for the game round using Alpha Vantage data
async function setNewCompanies() {
    const symbols = ['AAPL', 'GOOGL', 'AMZN', 'MSFT']; // Example stock symbols
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    const stockData = await fetchStockData(randomSymbol);

    if (stockData) {
        companyAMarketCap = stockData.openPrice;
        companyBMarketCap = stockData.closePrice;

        document.getElementById("companyAMarketCap").textContent = `$${companyAMarketCap}`;
        document.getElementById("companyBMarketCap").textContent = `$${companyBMarketCap}`;
    } else {
        // Handle API errors or data not available
        console.error('Failed to fetch stock data');
    }
}
// Call setNewCompanies when the game starts and after each round
setNewCompanies();
