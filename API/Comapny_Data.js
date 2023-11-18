const apiUrl = 'https://financialmodelingprep.com/api/v3/company/logo/';

async function getCompanyLogo(stockTicker) {
  const url = `${apiUrl}${stockTicker}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok && data.url) {
      return data.url;
    } else {
      throw new Error('Company logo not found');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function getCompanyDescription(stockTicker) {
    const apiUrl = `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${stockTicker}?modules=summaryProfile`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok && data.quoteSummary.result) {
        const companyData = data.quoteSummary.result[0].summaryProfile;
        const description = companyData ? companyData.longBusinessSummary : 'Company description not available.';
        return description;
      } else {
        throw new Error('Company information not found');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }