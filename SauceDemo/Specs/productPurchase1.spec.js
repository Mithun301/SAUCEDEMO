const utility = require("../../Utility/utility");
const loginActions = require("../Pages/login/loginActions");
const productPurchaseActions = require("../Pages/productPurchase/productPurchaseActions");
const UserName2 ='performance_glitch_user';
const Password2 = 'secret_sauce'
const FirstName = 'Alic';
const LastName = 'Nick';
const Zip = '1971';
describe("SauceDemo site Automation journey", () => {
    it(" LogIn and Product Purchase1 ", async () => {
        
        await loginActions.enterUserName(UserName2);
        await loginActions.enterpassword(Password2);
        await loginActions.clickLogin();
        await productPurchaseActions.clickMenu();
        await browser.pause(3000);
        await productPurchaseActions.selectResetApp();
        await productPurchaseActions.clickCross();
        await productPurchaseActions.clickSort();
        await browser.pause(3000);
        await productPurchaseActions.productAdd();
        await productPurchaseActions.clickCartIcon();
        await browser.pause(3000);
        await productPurchaseActions.clickCheckOut();
        await productPurchaseActions.enterfirstName(FirstName);
        await productPurchaseActions.enterlastName(LastName);
        await productPurchaseActions.enterZip(Zip);
        await productPurchaseActions.clickContinue();     
        await utility.verifyProductName1();   
        await productPurchaseActions.clickFinish();
        await browser.pause(3000);
        await utility.verifyMessage1();
        await browser.pause(3000);
        await utility.verifyMessage2();
        await productPurchaseActions.clickMenu();
        await productPurchaseActions.selectResetApp();
        await productPurchaseActions.clickLogOut();
        
    });
});

