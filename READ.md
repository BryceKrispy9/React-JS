This is my work on React.js

SET PATH=%AppData%\npm;%PATH%

^ Fixes the js-generate code and allows you to select a product

js-generate
react-bootstrap
npm install
npm start

**Instructions on what the foundational files are in conjunction with the Portfolio**
-node_modules are NPM libraries
-Bootstrap.js is a common name that you place at the root of a React application (Not the bootstrap framework)
-To delete a node module, delete it from dependecies under package.json and run npm install


**src folder**
src folder is pure react and JS code we write

index.js - Interact with redux store (redux gives us ability to store everything in 1 place)
components are what make up a react application (allow you to build an app one component at a time)
app.js is the parent component for all other components

style folder in where you place all your web styles like css/scss

bootstrap.js makes the start of the application
-ReactDOM means it's in a browser
-ReactNative means it's an app

index.html is just the web browser that gets the ".app-wrapper" in the first div body
babel-polyfill fills in everything in a browser that is missing


**static directory**
assets - README.md (put static images and standalone libraries{no npm support}) - Company logo
favicon.ico - icon that is at the top of the web browser(tab)
index.html - mainly used for the app-wrapper to get the code from the react.js code


**webpack directy**
common.config.js - common is a set of rules that the application will follow for every browser
-Putting together a list of rules we want to follow
-entry:
app:  where the application start and which file to look at first
vendor:  when we bring in the polyfill

-resolve:
extensions: what type of files we want in our app (.js, .scss)
modules: pointing to listed dependencies or node_modules

-rules:
test: testing against a certain value (against .js for example)
exclude: modules in example
use: babel-loader if you come accross any modern JS

dev.config.js - works on your local machine
postcss.config.js - works with css files
prod.config.js - works on a server


**Babel**
A "." infront of a file name is a hidden file
Babel is a JS compiler (Takes the code we write and compiles it into something that most browsers can read)
-Certain browsers don't understand newer JS

const nums = [1, 2, 3].map(el => {
    return el * 5;
}) - (Map over array of numbers, times it by 5 and stores it)

returns: var nums = [1, 2, 3].map(function (el) {
    return el * 5
})


**Overide Server Ports**
env.js - what dev host/port to use to test the code for the devServer (creating env.examples.js is normal)