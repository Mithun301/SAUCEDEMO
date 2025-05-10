const loginActions = require("../Pages/login/loginActions");
const productPurchaseActions = require("../Pages/productPurchase/productPurchaseActions");
//const utility = require("../../Utility/utility");
const extra = require ("../Extra/extra");
const Password ='secret_sauce';
const UserName1 ='standard_user';
describe("SauceDemo site Automation journey", () => {
    it(" LogIn and Product Purchase ", async () => {
        await loginActions.enterUserName(UserName1);
        await loginActions.enterpassword(Password);
        await loginActions.clickLogin();
        await productPurchaseActions.clickMenu();
        await browser.pause(3000);
        await productPurchaseActions.selectResetApp();
        await productPurchaseActions.clickCross();
        await productPurchaseActions.AddProduct1();
        await productPurchaseActions.AddProduct2();
        await productPurchaseActions.AddProduct3();
        await productPurchaseActions.clickCartIcon();
        await browser.pause(3000);
        await productPurchaseActions.clickCheckOut();
        const FirstName = await extra.createRandomString(4);
        const LastName = await extra.createRandomString(4)
        const Zip = await extra.randomNumber(4);
        await productPurchaseActions.enterfirstName(FirstName);
        await productPurchaseActions.enterlastName(LastName);
        await productPurchaseActions.enterZip(Zip);
        await browser.pause(3000);
        await productPurchaseActions.clickContinue();
        await extra.verifyProductName();     
        await extra.verifyProductPrice();
        await browser.pause(3000);
        await productPurchaseActions.clickFinish();
        await browser.pause(3000);
        await extra.verifyMessage1();
        await browser.pause(3000);
        await productPurchaseActions.clickMenu();
        await productPurchaseActions.selectResetApp();
        await productPurchaseActions.clickLogOut();




    });
});
