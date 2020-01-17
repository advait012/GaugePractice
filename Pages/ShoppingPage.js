const {openBrowser, write,switchTo, closeBrowser, goto, press, text, focus, textBox, toRightOf,click,
    reload,title,into,$,clear,scrollDown,link,waitFor,button,dropDown,radioButton,checkBox} = require('taiko');

    function shoppingPage(){

let searchField= $('input[type="search"]');
let searchButton=$('button.search-button');
let incrementButton=$('a.increment');
let addToCart= button('ADD TO CART');
let cart = $('img[alt="Cart"]');
let checkout = button('PROCEED TO CHECKOUT');
let placeOrder = button('Place Order');
let country=dropDown({style:'width: 200px;'});
let agreeCheckBox=checkBox({class:'chkAgree'});
let proceedButton=button('Proceed');

this.purchaseTheBanana=async function(){

await waitFor(searchField);
await write('Banana',searchField);
await waitFor(searchButton);
await click(searchButton);
await waitFor(incrementButton);
 for (let i = 0 ; i < 3 ; i ++){

await click(incrementButton);
}
await waitFor(addToCart);
await click(addToCart);

}

this.proceedForCheckout= async function(){

await waitFor(cart);
await click(cart);
await waitFor(checkout);
await click(checkout);
await waitFor(placeOrder);
await click(placeOrder);
await waitFor(country);
await country.select('Austria');
await waitFor(5000);
await waitFor(agreeCheckBox);
await agreeCheckBox.check();
await waitFor(proceedButton);
await click(proceedButton);
}




    }

    module.exports=new shoppingPage();