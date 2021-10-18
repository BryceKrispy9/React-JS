This is my work on React.js

For a NPX community-made react project, use `npx create-react-app my_app --use-npm`

SET PATH=%AppData%\npm;%PATH%

^ Fixes the js-generate code and allows you to select a product

js-generate
react-bootstrap
npm install
npm start

> **Instructions on what the foundational files are in conjunction with the Portfolio**
> -node_modules are NPM libraries
> -Bootstrap.js is a common name that you place at the root of a React application (Not the bootstrap framework)
> -To delete a node module, delete it from dependecies under package.json and run npm install

> **src folder**
> src folder is pure react and JS code we write

index.js - Interact with redux store (redux gives us ability to store everything in 1 place)
components are what make up a react application (allow you to build an app one component at a time)
app.js is the parent component for all other components

style folder in where you place all your web styles like css/scss

bootstrap.js makes the start of the application
-ReactDOM means it's in a browser
-ReactNative means it's an app

index.html is just the web browser that gets the ".app-wrapper" in the first div body
babel-polyfill fills in everything in a browser that is missing

> **static directory**
> assets - README.md (put static images and standalone libraries{no npm support}) - Company logo
> favicon.ico - icon that is at the top of the web browser(tab)
> index.html - mainly used for the app-wrapper to get the code from the react.js code

> **webpack directy**
> common.config.js - common is a set of rules that the application will follow for every browser
> -Putting together a list of rules we want to follow
> -entry:
> app: where the application start and which file to look at first
> vendor: when we bring in the polyfill

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

> **Babel**
> A "." infront of a file name is a hidden file
> Babel is a JS compiler (Takes the code we write and compiles it into something that most browsers can read)
> -Certain browsers don't understand newer JS

const nums = [1, 2, 3].map(el => {
return el \* 5;
}) - (Map over array of numbers, times it by 5 and stores it)

returns: var nums = [1, 2, 3].map(function (el) {
return el \* 5
})

> **Overide Server Ports**
> env.js - what dev host/port to use to test the code for the devServer (creating env.examples.js is normal)

> **package.json**
> (See package.json file)
> Most of the scripts deal a lot with dynamic behavoior and how it interacts with the server

> **Difference between package.json and package-lock.json**
> package-lock.json contains more detailed information about the dependencies and EXACTLY what's being used
> DO NOT CHANGE THE PACKAGE-LOCK.json FILE (IT IS AUTOMATICALLY GENERATED)

> **Procfile, Readme, Server JS**
> Procfile - Tool to deploy to the web (Type of server we want to use)
> server.js - Pulls config for the server (express, port, app, etc.)

> **Constructor**
> Going to allow you to set initial state and set custom functions to utilize

> **JSX**
> (From Babeljs.io)

<div className = "card" id = "5" styles = "{ color: red; font-wright: 900; }">
  <div className = "title">
<PortfolioItem title="Quip" url="google.com" />
  </div>
  
  <div className = "description">
    some details...
  </div>
</div>

------------ Output -----------

"use strict";

/_#**PURE**_/
React.createElement("div", {
className: "card",
id: "5",
styles: "{ color: red; font-wright: 900; }"
}, /_#**PURE**_/React.createElement("div", {
className: "title"
}, /_#**PURE**_/React.createElement(PortfolioItem, {
title: "Quip",
url: "google.com"
})), /_#**PURE**_/React.createElement("div", {
className: "description"
}, "some details..."));

**Deep Dive: Props, State, and this**

> Functional Component (Dumb Component) - Not a lot of behavior like a button. Renders some kind of HTML element. Shouldn't have _state_.
> Class Component - Gets state of user and track their behavior.

> Props = Properties of a component

**Component Lifecycle**

> Mounting - Picking out what kind of data/processes need to occur when the component is going to load (Page content from outside API for example)
> Updating - Each time you have a component that gets updated (Web socket for example)
> Unmounting - Remove component from the DOM

**Create Read Update Delete (CRUD)**

1. Create items
2. Query (GET)
3. Update records
4. Delete records
