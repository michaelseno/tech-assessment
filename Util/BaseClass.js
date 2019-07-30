const chai = require('chai');

const UNSUCCESSFULL_MESSAGE = 'webelement not available = ';

class BasePage {
    constructor(client) {
      this.client = client;
    }

      async openURL(url) {
        await this.client.url(url);
        await this.pauseForInSeconds(1);
      }

      async validateUrl(expectedUrl) {
        const currentUrl = await this.client.getUrl();
        chai.assert.strictEqual(currentUrl, expectedUrl, 'compared URL is different!');
      }

      async pauseForInSeconds(selector) {
        const msval = selector * 1000;
        await this.client.pause(msval);
      }

      async clickOn(locator) {
        await this.client.waitForExist(locator, 20000);
        await this.client.click(locator);
        await this.pauseForInSeconds(1);
      }
    
      async ensureElementExist(locator) {
        const locatorVisibility = await this.client.isVisible(locator);
        chai.assert.isTrue(locatorVisibility, 'element does not exist');
      }
    
      async inputValue(locator, value) {
        await this.client.waitForExist(locator, 20000);
        await this.client.setValue(locator, value);
      }
}
module.exports = BasePage;