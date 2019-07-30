const webdriverio = require('webdriverio');
const MainPage = require('../PageFactory/MainPage');


describe('Web Test', function () {
    let main;
    let client;
    var options = {
        desiredCapabilities: {
            browserName: 'chrome'
        }
    };

    before(async function () {
        this.timeout(30000);
        client = webdriverio.remote(options);
        main = new MainPage(client);
        await client.init();
    });

    after(async function () {
        this.timeout(30000);
        await client.end();
    });
    
    it('Open Web Url', async function () {
        this.timeout(30000);
        await main.openWebPage('https://m800.com');
    });

    it('Verify if Page is Open', async function () {
        this.timeout(30000);
        await main.ensureWebPageIsOpen('https://www.m800.com/');
    });
    
});
