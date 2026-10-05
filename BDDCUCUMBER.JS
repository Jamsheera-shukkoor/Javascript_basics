/*//BDD
//behavoiur driven devolopment
//test written in jerkin language(plain english)
//bdd in playwright is an approach of writing test business readable format, usually using jerkin syntax such as guven,when,then and etc
//playwright is then used to automate these steps throh step definition 

//cucumber : is a BDD framework/tool used to write testcase in a human readable language called jerkin

//keyword
//1. feature: functionality being tested.
//2.scenario : individual testcase
//3.given : precoondition
//4. when :action
//then:expected result 
//and :addyional steps

foldernale: features
FileName: login.feature

folder name : step-definitions
FileName: login.steps.js

//feature: logn functionality
scenario : login with valid credential
given : user is on the login page (pre condition)
when : (action)  user enter valid username and password
Then: user shoul navigate to home page  (expected)

login.feature file
is a feature file contain test scenario written in BDD Format, using keyword like feature, scenario,when, then.
it is written in simple english so non -tech user can understand 
it explain application behaviour
it explains how the login functionality should work

login.steps.js (step definition file )
login.steps.js is called step definition file . 
it contain the actual automation code for each step written in the feature fila 


difference login.feature and login.steps.js

1.login.feature                 2.login.steps.js
contain test scenario             contains automation code
written in english                written in javascript
easy for business users            easy for automation testers
user given,when...etc              use plywright +cucumber code





*/