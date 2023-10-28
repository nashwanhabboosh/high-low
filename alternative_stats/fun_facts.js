// Import the axios library to make HTTP requests
const axios = require('axios');

// Define the API endpoint and the API key
const endpoint = 'https://api.fungenerators.com';
const apiKey = 'your_api_key_here';

// Define a function to get a random fact based on a category and subcategory
async function getRandomFact(category, subcategory) {
  // Construct the URL with the parameters
  const url = `${endpoint}/fact/random?category=${category}&subcategory=${subcategory}`;

  // Set the request header with the API key
  const headers = {
    'X-FunGenerators-Api-Secret': apiKey
  };

  // Make a GET request and handle the response
  try {
    const response = await axios.get(url, { headers });
    // If the response is successful, return the fact object
    if (response.status === 200) {
      return response.data.contents;
    }
    // Otherwise, throw an error with the status code
    else {
      throw new Error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
    // If there is an error, log it and return null
    console.error(error);
    return null;
  }
}

// Define a function to search for a random fact based on a query
async function searchRandomFact(query) {
  // Construct the URL with the parameter
  const url = `${endpoint}/fact/search?query=${query}`;

  // Set the request header with the API key
  const headers = {
    'X-FunGenerators-Api-Secret': apiKey
  };

  // Make a GET request and handle the response
  try {
    const response = await axios.get(url, { headers });
    // If the response is successful, return the fact object
    if (response.status === 200) {
      return response.data.contents;
    }
    // Otherwise, throw an error with the status code
    else {
      throw new Error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
    // If there is an error, log it and return null
    console.error(error);
    return null;
  }
}

// Define a function to create a fact entry in your private collection
async function createFactEntry(fact, category, subcategory, tags) {
  // Construct the URL with the parameters
  const url = `${endpoint}/fact?fact=${fact}&category=${category}&subcategory=${subcategory}&tags=${tags}`;

  // Set the request header with the API key
  const headers = {
    'X-FunGenerators-Api-Secret': apiKey
  };

  // Make a PUT request and handle the response
  try {
    const response = await axios.put(url, null, { headers });
    // If the response is successful, return the id of the created fact entry
    if (response.status === 200) {
      return response.data.contents.id;
    }
    // Otherwise, throw an error with the status code
    else {
      throw new Error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
    // If there is an error, log it and return null
    console.error(error);
    return null;
  }
}

// Define a function to get a fact entry by id from your private collection
async function getFactEntry(id) {
  // Construct the URL with the parameter
  const url = `${endpoint}/fact?id=${id}`;

  // Set the request header with the API key
  const headers = {
    'X-FunGenerators-Api-Secret': apiKey
  };

  // Make a GET request and handle the response
  try {
    const response = await axios.get(url, { headers });
    // If the response is successful, return the fact object
    if (response.status === 200) {
      return response.data.contents;
    }
    // Otherwise, throw an error with the status code
    else {
      throw new Error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
    // If there is an error, log it and return null
    console.error(error);
    return null;
  }
}

// Test the functions with some examples

// Get a random fact about food and donuts
getRandomFact('Food', 'Donuts')
.then(fact => console.log(fact))
.catch(error => console.error(error));

// Search for a random fact about Amazon River
searchRandomFact('Amazon River')
.then(fact => console.log(fact))
.catch(error => console.error(error));

// Create a fact entry about January 20th in history and numbers category
createFactEntry('January 20th is the day in 1941 that a Nazi officer is murdered in Bucharest, Romania, sparking a rebellion and pogrom by the Iron Guard, killing 125 Jews and 30 soldiers.', 'Numbers', 'Date', 'numbers, historical')
.then(id => console.log(id))
.catch(error => console.error(error));

// Get a fact entry by id from your private collection
getFactEntry('62D6iKM9GSlJxK5nrMf9XwrE')
.then(fact => console.log(fact))
.catch(error => console.error(error));
