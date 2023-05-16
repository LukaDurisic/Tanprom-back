const axios = require('axios');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const url = 'https://impexautodijelovi.hr/autodijelovi/bmw/3-2004/320-d-120kw';  // Replace with the URL of the website you want to scrape
const elementSelector = '#km-assemblyGroupsTree > div > ul > li';  // Replace with the CSS selector for the elements you want to scrape

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    
    // Scrape the desired elements
    const scrapedData = [];
    $(elementSelector).each((index, element) => {
      const data = $(element).text();
      scrapedData.push({ value: data });
    });

    // Save the data to a CSV file
    const csvWriter = createCsvWriter({
      path: 'category.csv',
      header: [
        { id: 'value', title: 'Value' },
      ],
    });
    
    csvWriter.writeRecords(scrapedData)
      .then(() => console.log('Data saved to CSV file.'));
  })
  .catch(error => console.error(error));
