//const utility = require("../../Utility/utility");
const extra = require("../Extra/extra");
const loginActions = require("../Pages/login/loginActions");
const productPurchaseActions = require("../Pages/productPurchase/productPurchaseActions");
const UserName2 ='performance_glitch_user';
const Password = 'secret_sauce'
describe("SauceDemo site Automation journey", () => {
    it(" LogIn and Product Purchase1 ", async () => {
        
        await loginActions.enterUserName(UserName2);
        await loginActions.enterpassword(Password);
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
        const FirstName = await extra.createRandomString(4);
        const LastName = await extra.createRandomString(4);
        const Zip = await extra.randomNumber(4);
        await productPurchaseActions.enterfirstName(FirstName);
        await productPurchaseActions.enterlastName(LastName);
        await productPurchaseActions.enterZip(Zip);
        await productPurchaseActions.clickContinue();     
        await extra.verifyProductName1();
        await extra.verifyProductPrice1();
        await productPurchaseActions.clickFinish();
        await browser.pause(3000);
        await extra.verifyMessage1();
        await productPurchaseActions.clickMenu();
        await productPurchaseActions.selectResetApp();
        await productPurchaseActions.clickLogOut();
        
    });
});

