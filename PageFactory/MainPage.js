const BasePage = require('../Util/BaseClass');


class MainPage extends BasePage {
  async openWebPage(url) {
    await this.openURL(url);
  }
  async ensureWebPageIsOpen(url) {
    await this.validateUrl(url);
  }
}
module.exports = MainPage;
