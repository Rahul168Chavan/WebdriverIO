Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page

    When Provided <email> to generate user

    Then Information details page should be visible

    When Providing <firstName> <lastName> <password> <email> information to create account

    When Providing <companyName> <address> <address2> <city> <pinCode> <contactNumber> address to create account

    Then Checking whether the account is created or not

    When Signing out of the application

    Given Checking whether the application got logout or not

    Given Logging into the portal with <email> <password>
    
    When Checking whether details are showing correct or not <firstName> <lastName>

    Then Checking for the product popup

    When Proceeding for checkout

    Then Moving to payout

    Examples:
    | email                          |firstName           |lastName           |password           |companyName          |address          |address2         |city          |pinCode          |contactNumber          |
    | webdriverIOtest100@gmail.com    |webdriver           |IO                 |Admin@123          |Testing company      |India            |Mindspace        |Hyderabad     |59302            |1234567890             |