const {openBrowser, write,switchTo, closeBrowser, goto, press, text, focus, textBox, toRightOf,click,
    reload,title,into,$,clear,scrollDown,link,waitFor,button} = require('taiko');

function homePage(){

let name = $('#name');
let email=$('#email');
let submit =button('SUBMIT');
let automationLink=link('Automation Practise - 1');
let automationLink2=link('Automation Practise - 2');

this.enterTheForm =  async function(){

    await waitFor(name); 
    await write('Advait Sharma',name);
    await waitFor(email);
    await write('advaitsharma012@gmail.com',email);
    await waitFor(submit);
    await click(submit);
}

this.clickOnAutomationLink=async function(){
await waitFor(automationLink);
await click(automationLink);


}

this.clickOnAutomationLink2=async function(){
await waitFor(automationLink2);
await click(automationLink2);

}


}

module.exports=new homePage();