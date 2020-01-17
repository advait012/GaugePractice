const {openBrowser, write,switchTo, closeBrowser, goto, press, text, focus, textBox, toRightOf,click,
    reload,title,into,$,clear,scrollDown,link,waitFor,button,dropDown,radioButton,checkBox,closeTab,alert,accept} = require('taiko');

    function secondPage(){

let secondRadioButton=radioButton('Radio2');
let suggestionBox=$('#autocomplete');
let dropDownExample=dropDown({id:'dropdown-class-example'});
let thirdCheckBox=checkBox('Option2');
let openWindowButton=button('Open Window');
let openTabButton=link('Open Tab');
let table = $('table#product');

this.selectRadioButton=async function(){
await waitFor(secondRadioButton);
await secondRadioButton.select();   
}

this.fillTheSuggestionField=async function(){

await waitFor(suggestionBox);
await write('United',suggestionBox);
await press('ArrowDown');
await press('ArrowDown');
await press('ArrowDown');
await press('Enter');


}

this.selectDropDown=async function(){

    await waitFor(dropDownExample);
    await dropDownExample.select('Option3');

}

this.selectCheckBox=async function(){

await waitFor(thirdCheckBox);
await thirdCheckBox.check();

}

this.switchToWindow=async function(){

await waitFor(openWindowButton);
await click(openWindowButton);
await switchTo('http://www.qaclickacademy.com/');
await click(link('COURSES'));
await switchTo('https://rahulshettyacademy.com/AutomationPractice/');
await closeTab('https://www.rahulshettyacademy.com/#/index');

await checkBox('Option3').check();
await waitFor(5000);
    
}

this.acceptTheAlert = async function(){

   
await alert('Hello , share this practice page and share your knowledge',async ()=>await accept());
await click(button('Alert'));


}

this.switchToTab=async function(){
await waitFor(openTabButton);
await click(openTabButton);
await switchTo('https://www.rahulshettyacademy.com/#/index');
await click(link('JOIN NOW'));


}

this.fetchTheCourse=async function(){
let rows=await $('table#product > tbody > tr').elements();
for (row of rows){
let cells = row.$('td').elements();
if(cells[2].text()=='35'){
console.log(await cells[1].text());

}

}





}




}


    

    module.exports=new secondPage();