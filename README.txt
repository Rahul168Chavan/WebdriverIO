Pre-requities

1. Should have node above 12(npx)
2. Should have chrome browser installed in the machine where you are running.



Step to Run 

1. Please download the zip and unzip it.
2. Place the extracted folder in the Visual Studio Code.
3. Go inside the folder from terminal and run below command
4. npm install @wdio/cli
5. npx wdio config

   On my local machine : Hit enter
   Which framework do you want to use? : Select cucumber using keyboard arrow key and hit enter
   Babel (https://babeljs.io/) : Select Babel and hit enter
   Where are your feature files located? : Hit enter
   Where are your step definitions located? : Hit enter
   Do you want WebdriverIO to autogenerate some test files? : type n and hit enter
   Which reporter do you want to use? : Select dot and allure using keyboard arrow keys and space and then hit enter
   Do you want to add a service to your test setup? : Select using only selenium-standalone keyboard arrow keys and space and then hit enter
   What is the base url? : Hit enter
   
4. npx wdio run wdio.conf.js



Data change

1. go to the login.feature(TestCucumberPorject-->features-->login.feature).
2. In the example section please change the data.
