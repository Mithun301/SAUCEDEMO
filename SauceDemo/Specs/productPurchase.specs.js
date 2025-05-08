const loginActions = require("../Pages/login/loginActions");
const productPurchaseActions = require("../Pages/productPurchase/productPurchaseActions");
const utility = require("../../Utility/utility");
const Password1 ='secret_sauce';
const UserName1 ='standard_user';
const FirstName = 'Alic';
const LastName = 'Nick';
const Zip = '1971';
//var SinglePrice1;
//var SinglePrice2;
//var SinglePrice3;
describe("SauceDemo site Automation journey", () => {
    it(" LogIn and Product Purchase ", async () => {
        await loginActions.enterUserName(UserName1);
        await loginActions.enterpassword(Password1);
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
        await productPurchaseActions.enterfirstName(FirstName);
        await productPurchaseActions.enterlastName(LastName);
        await productPurchaseActions.enterZip(Zip);
        await productPurchaseActions.clickContinue();
        await utility.verifyProductName();       
        await utility.verifyProductPrice();
        await browser.pause(3000);
        await productPurchaseActions.clickFinish();
        await browser.pause(3000);
        await utility.verifyMessage1();
        await utility.verifyMessage2();
        await productPurchaseActions.clickMenu();
        await productPurchaseActions.selectResetApp();
        await productPurchaseActions.clickLogOut();




    });
});
