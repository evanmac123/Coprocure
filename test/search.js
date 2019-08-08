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

    it('should open detail page, see contract details', async function() {
      const firstResult = await page.$('.result-title')
      await firstResult.click()
      await page.waitForSelector('.contract-details')
      let detail = await page.evaluate(() => {
        return document.querySelector('.contract-details .title-section h1').textContent;
      });
      expect(detail).to.have.lengthOf.above(2)
    })

    it('should dismiss detail page, not see it anymore', async function() {
      const closeLink = await page.$('.close-overlay')
      await closeLink.click();
      await page.waitFor(500);
      let detail = await page.evaluate(() => {
        return document.querySelectorAll('.close-overlay').length;
      });
      expect(detail).to.eql(0)
    })
    
    it('be looking at 1-10 results on first page', async function() {
      let countText = await page.evaluate(() => {
        return document.querySelector('.result-count').textContent.indexOf('Showing 1-10 of');
      });
      expect(countText).to.eql(0)
    })

    it('click pagination link, still see results', async function() {
      const pageForward = await page.$('coprocure-pagination .forward')
      await pageForward.click()
      await page.waitForSelector('.search-results')
      let countText = await page.evaluate(() => {
        return document.querySelector('.result-count').textContent.indexOf('Showing 11-20 of');
      });
      expect(countText).to.eql(0)
    })

    it('should see results when loading results url directly', async function() {
      await page.goto(`${urlBase}contracts.html?query=turf`)
      await page.waitForSelector('.search-results')
      let searchResultLength = await page.evaluate(() => {
        return document.querySelectorAll('.search-results li').length;
      });
      expect(searchResultLength).to.eql(10)
    })

    it('should see contract details when opening detail page url directly', async function() {
      await page.goto(`${urlBase}contract.html?contractId=a275651a-32e7-4153-957b-44fd8bea2606`)

      await page.waitForSelector('.contract-details')
      let detail = await page.evaluate(() => {
        return document.querySelector('.contract-details .title-section h1').textContent;
      });
      expect(detail).to.have.lengthOf.above(2)
    })
  })

  after(async function() {
    await page.close()
  })
})