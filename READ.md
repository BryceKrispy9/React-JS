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