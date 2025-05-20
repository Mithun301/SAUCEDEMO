const Taxrate = 0.0801;
class Extra {
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
        const message1 = await $("//div[@data-test='complete-text']");
        const text = await message.getText();
        const text1 = await message1.getText();
        await browser.pause(3000);
        expect(text).toEqual('Thank you for your order!');
        expect(text1).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await browser.pause(3000);
    }
   
    async verifyProductName(){
    
      const actualElements = await $$('//div[@class="inventory_item_name"]');
      const expectedElements = await $$('//div[@class="cart_item_label"]//div[@class="inventory_item_name"]');

      const actualTexts = [];
        for (let i = 0; i < actualElements.length; i++) {
        const text = await actualElements[i].getText();
        actualTexts.push(text);
}

      const expectedTexts = [];
        for (let i = 0; i < expectedElements.length; i++) {
        const text = await expectedElements[i].getText();
        expectedTexts.push(text);
   }

     console.log(actualTexts);
     console.log(expectedTexts);

   if (
     actualTexts.length !== expectedTexts.length ||
      !actualTexts.every((val, index) => val === expectedTexts[index])
) 
        await browser.pause(3000);
    }
    async verifyProductName1(){
        const productElements1= await $('//div[@class="inventory_item_name"]');
        const productName1 = await productElements1.getText();
        const productElements2 = await $('//div[@class="inventory_item_name"]');
        const productName2 = await productElements2.getText();
        expect(productName2).toEqual(productName1);   
    }


    async verifyProductPrice(){
     const priceElements = await $$("//div[contains(@class, 'inventory_item_price')]");
      let subtotal = 0;

     for (const priceElement of priceElements) {
      const priceText = await priceElement.getText();
      const numericPrice = await this.convertTextToNumber(priceText);
      subtotal += numericPrice;
    }

       console.log( subtotal);
     
        const Tax = subtotal *  Taxrate ;
        const TotalPrice = subtotal + Tax;
        const expectedTotalPrice = parseFloat(TotalPrice.toFixed(2));
        const PriceValue = await $("//div[@data-test='total-label']");
        const TotalPriceAmount= await PriceValue.getText();
        const actualTotalPrice = await this.convertTextToNumber(TotalPriceAmount);
        expect(expectedTotalPrice).toEqual(actualTotalPrice);
    }
    async verifyProductPrice1(){
        const productPrice = await $("//div[@class= 'inventory_item_price']");;
        const getproductPrice = await productPrice.getText();
        const ItemPrice = await this.convertTextToNumber(getproductPrice);
        const tax = ItemPrice * Taxrate;
        const  Price = ItemPrice + tax ;
        const expectedPrice = parseFloat(Price.toFixed(2));
        const price = await $("//div[@data-test='total-label']");
        const getPrice = await price.getText();
        const ActualPrice = await this.convertTextToNumber(getPrice);
        expect(expectedPrice).toEqual(ActualPrice);

    }

    async randomNumber(lenght){
        const number = "0123456789";
        let result1 = "";
        for (let i=0;i <lenght;i++){
            result1 += number.charAt (Math.floor(Math.random() * number.length ));
        }
        return result1;
    }

    async createRandomString(length) {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      }
     
  }
      module.exports = new Extra();
