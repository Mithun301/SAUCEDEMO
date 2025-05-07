const loginLocators = require("../SauceDemo/Pages/login/loginLocators");
const productPurchaseActions = require("../SauceDemo/Pages/productPurchase/productPurchaseActions");

class Utility {
    async convertTextToNumber(text) {
      const value = parseFloat(text.replace(/[^\d.]/g, ""));
      return value;
    }
    async verifyErrorMessage(){
        const message = await $("//h3[@data-test='error']");
        await browser.pause(3000);
        const text = await message.getText();
        expect(text).toEqual('Epic sadface: Sorry, this user has been locked out.');
        
    }
    async verifyMessage1(){
        const message = await $("//h2[@data-test='complete-header']");
        await browser.pause(3000);
        const text = await message.getText();
        expect(text).toEqual('Thank you for your order!');
        await browser.pause(3000);
    }
    async verifyMessage2(){
        const message1 = await $("//div[@data-test='complete-text']");
        const text1 = await message1.getText();
        expect(text1).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await browser.pause(3000);
    }
    async verifyProductName(){
        const xpaths =[ "//div[text()='Sauce Labs Backpack']","//div[text()='Sauce Labs Bike Light']" ,"//div[text()='Sauce Labs Bolt T-Shirt']" ];
        await browser.pause(3000);

        const productTexts = await Promise.all(
            xpaths.map(async(xpath)=>{ const element = await $(xpath);
            return await element.getText();
        }));
        console.log(productTexts);
        await browser.pause(3000);

        const productElements = await $$('//div[@data-test="inventory-item-name"]');
        //const productTexts1 = ['Sauce Labs Backpack','Sauce Labs Bike Light','Sauce Labs Bolt T-Shirt']
        for (let i= 0; i<productElements.length;i++){
            const productName = await productElements[i].getText();
            expect(productName).toEqual(productTexts[i]);
        }
        await browser.pause(3000);

    }
    async verifyProductPrice(){

        
    }
    
}module.exports = new Utility();
