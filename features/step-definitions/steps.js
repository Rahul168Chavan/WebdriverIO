import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I am on the login page$/, async () => {
    //Loading the URL.
    await browser.url(`http://automationpractice.com/index.php`);

    //Checking whether the page is loaded or not.
    await $("(.//*[@class='logo img-responsive'])").waitForDisplayed({timeout: 15000});
});

When(/^Provided (.+) to generate user$/, async (email) => {
    //Clicking on sign in button for creating new user
    await $("(.//a[contains(text(),'Sign in')])").click();
    await $("(.//h3[contains(text(),'Create an account')])").waitForDisplayed({timeout: 15000});
    await $("(.//P[contains(text(),'Please enter your email address to create an account.')])").waitForDisplayed({timeout: 15000});

    //Providing email address
    await $("(.//*[contains(text(),'Email address')])[1]//following::input[1]").setValue(email);
    await $("(.//*[(@type='submit')])[2]").click();
});

Then(/^Information details page should be visible$/, async () => {

    //Checking for redirecting of page for user creation
    await $("(.//h3[contains(text(),'Your personal information')])").waitForDisplayed({timeout: 15000}); 
});

When(/^Providing (\w+) (\w+) (.+) (.+) information to create account$/, async (firstName,lastName,password,email) => {
   
    //Providing personal details
    await $("(.//*[@type='radio'])[1]").click();
    await $("(.//*[contains(text(),'First name')])[1]//following::input[1]").setValue(firstName);
    await $("(.//*[contains(text(),'Last name')])[1]//following::input[1]").setValue(lastName);
    await $("(.//input[@data-validate='isEmail'])").setValue(email);
    await $("(.//input[@data-validate='isPasswd'])").setValue(password);
    await $("(.//select[@id='days'])").click();
    await $("(.//option[@value='2'])[1]").click();
    await $("(.//select[@id='months'])").click();
    await $("(.//option[@value='2'])[2]").click();
    await $("(.//select[@id='years'])").click();
    await $("(.//option[@value='2000'])[1]").click();
})

When(/^Providing (\w+) (.+) (.+) (\w+) (.+) (.+) address to create account$/, async (companyName,address,address2,city,pinCode,contactNumber) => {

    //Providing professional details
    await $("(.//*[contains(text(),'Company')])[1]//following::input[1]").setValue(companyName);
    await $("(.//*[contains(text(),'Address')])[1]//following::input[1]").setValue(address);
    await $("(.//*[contains(text(),'Company')])[2]//following::input[1]").setValue(address2)
    await $("(.//*[contains(text(),'City')])[1]//following::input[1]").setValue(city);
    await $("(.//select[@name='id_state'])").click();
    await $("(.//*[contains(text(),'New Jersey')])[@value='30']").click();
    await $("(.//*[contains(text(),'Zip/Postal Code')])[1]//following::input[1]").setValue(pinCode); 
    await $("(.//textarea[@class='form-control'])").setValue("This is only for testing...");
    await $("(.//*[contains(text(),'Mobile phone ')])[1]//following::input[1]").setValue(contactNumber);

    //Submitting the details for creation of user
    await $("(.//button[@type='submit'])[2]").click();
})
Then(/^Checking whether the account is created or not$/, async () => {

    //Check whether account is created or not
    await $("(.//*[contains(text(),'Welcome to your account. Here you can manage all of your personal information and orders.')])").waitForDisplayed({timeout: 15000}); 
});
When(/^Signing out of the application$/, async () => {

    //Signing off from the application
    await $("(.//a[@class='logout'])").click();
})
Then(/^Checking whether the application got logout or not$/, async() => {

    //Checking for logout
    await $("(.//a[@class='login'])").waitForDisplayed({timeout: 15000});
})
Given(/^Logging into the portal with (.+) (.+)$/, async(email,password) => {

    //Login in again with the created details
    await $("(.//a[@class='login'])").click();
    await $("(.//*[contains(text(),'Email address')])[2]//following::input[1]").setValue(email);
    await $("(.//*[contains(text(),'Password')])[1]//following::input[1]").setValue(password);
    await $("(.//button[@type='submit'])[3]").click();
})
When(/^Checking whether details are showing correct or not (\w+) (\w+)$/, async(firstName,lastName) => {

    //Validation check with first and last name
    await $("(.//div[@class='header_user_info'])//span[text()='"+firstName+" "+lastName+"']").isDisplayed();
    
    //Click on T-Shirt tab
    await $("(.//a[text()='T-shirts'])[2]").click();
})
Then(/^Checking for the product popup$/, async() => {
    //Checking for Page redirection.
    await $("(.//div[@class='cat_desc'])").waitForDisplayed({timeout: 15000}); 
})
When(/^Proceeding for checkout$/, async() => {

    //Moving mouse cursor to the image to get the add to cart button
    // await $("(.//img[@itemprop='image'])").moveTo();
    await $("(.//img[@itemprop='image'])").click();
    await $("(.//*[contains(text(),'Add to cart')])").waitForDisplayed({timeout: 15000}); 

    //Click on add to cart button
    await $("(.//*[contains(text(),'Add to cart')])").click();
    await $("(.//*[@id='layer_cart'])").waitForDisplayed({timeout: 15000}); 
    await $("(.//*[contains(text(),'Faded Short Sleeve T-shirts')])[2]").waitForDisplayed({timeout: 15000}); 
    
    // Adding product to the cart
    await $("(.//*[contains(text(),'Proceed to checkout')])[1]").click();
    await $("(.//*[contains(text(),'Shopping-cart summary')])").waitForDisplayed({timeout: 15000}); 
    await $("(.//*[contains(text(),'Proceed to checkout')])[2]").click();

    //Checking address details page
    await $("(.//*[contains(text(),'Choose a delivery address:')])").waitForDisplayed({timeout: 15000}); 
    await $("(.//*[contains(text(),'Proceed to checkout')])[2]").click();
    await $("(.//*[contains(text(),'Choose a shipping option for this address: My address')])").waitForDisplayed({timeout: 15000}); 
    await $("(.//*[contains(text(),'I agree to the terms of service and will adhere to them unconditionally.')])").click();
})
Then(/^Moving to payout$/, async() => {

    //Moved to Payout state.
    await $("(.//*[contains(text(),'Proceed to checkout')])[2]").click();
})

