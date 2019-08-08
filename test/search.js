/* globals browser, expect */
describe('Load "/" route, fill form there, and submit it', async function() {
  let page
  const urlBase = 'http://localhost:1337/'

  before(async function() {
    page = await browser.newPage()
  })

  describe('Navigate to /', function() {
    before(async function() {
      await page.goto(`${urlBase}`)
    })

    it('should see a seachbox, enter text', async function() {
      await page.waitFor('input[name="coprocure_query"]');
      let searchString = await page.evaluate(() => {
        let searchBoxSelector = '.middle-section input[name="coprocure_query"]';
        document.querySelector(searchBoxSelector).value = "play";
        return document.querySelector(searchBoxSelector).value;
      });
      expect(searchString).to.eql('play')
    })

    it('should submit form, see search results', async function() {
      const searchBtn = await page.$('.middle-section .search-now')
      await searchBtn.click()
      await page.waitForSelector('.search-results')
      let searchResultLength = await page.evaluate(() => {
        return document.querySelectorAll('.search-results li').length;
      });
      expect(searchResultLength).to.eql(10)
    })
/*
    it('should open detail page, see contract details', async function() {
      const searchBtn = await page.$('.middle-section .search-now')
      await searchBtn.click()
      await page.waitForSelector('.search-results')
      let searchResultLength = await page.evaluate(() => {
        return document.querySelectorAll('.search-results li').length;
      });
      expect(searchResultLength).to.eql(10)
    })
*/

// More Tests to write:
// load search result page directly
// load detail page directly
// do a filter with a query that works for each coop, find some results

  })

  after(async function() {
    await page.close()
  })
})