/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

step("Go to site", async function() {
    await goto("https://rahulshettyacademy.com/#/practice-project");
    });

step("Enter the values", async function() {
       let hp = require('../Pages/HomePage.js');
       await hp.enterTheForm();
       

        });
  step("Click on Automation Link", async function() {
    let hp = require('../Pages/HomePage.js');
    await hp.clickOnAutomationLink();
            });

            step("Click on Automation Link for link 2", async function() {
              let hp = require('../Pages/HomePage.js');
    await hp.clickOnAutomationLink2();
              });

              step("Select the radio button", async function() {
                let spp = require('../Pages/SecondPracticePage.js');
              await spp.selectRadioButton();
                });


            step("Buy Banana", async function() {
              let sp = require('../Pages/ShoppingPage.js');
              await sp.purchaseTheBanana();
              });

              step("Proceed to checkout", async function() {
                let sp = require('../Pages/ShoppingPage.js');
              await  sp.proceedForCheckout();
                });

                step("Fill the suggestion field", async function() {
                  let spp = require('../Pages/SecondPracticePage.js');
                  await spp.fillTheSuggestionField();
                  
                  });

                  step("Select the dropdown", async function() {
                    let spp = require('../Pages/SecondPracticePage.js');
                    await spp.selectDropDown();
                    });

                    step("Select the checkbox", async function() {
                      let spp = require('../Pages/SecondPracticePage.js');
                    await spp.selectCheckBox();
                      });
                      step("Switch to window", async function() {
                        let spp = require('../Pages/SecondPracticePage.js');
                        await spp.switchToWindow();
                        });

                        step("Switch to tab", async function() {
                          let spp = require('../Pages/SecondPracticePage.js');
                          await spp.switchToTab();
                          });

                          step("Handle the Alert", async function() {
                            let spp = require('../Pages/SecondPracticePage.js');
                            await spp.acceptTheAlert();
                            });

                            step("Fetch the Course Name", async function() {
                              let spp = require('../Pages/SecondPracticePage.js');
                            await spp.fetchTheCourse();
                              });