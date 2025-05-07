const utility = require("../../Utility/utility");
const loginActions = require("../Pages/login/loginActions");
const UserName = 'locked_out_user';
const Password = 'secret_sauce';


describe("SauceDemo site Automation journey", () => {
    it("Try LogIn and verify the message ", async () => {
        await loginActions.enterUserName(UserName);
        await loginActions.enterpassword(Password);
        await loginActions.clickLogin();
        await utility.verifyErrorMessage();
    });
});