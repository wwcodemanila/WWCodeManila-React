# React is a Javascript library

To fully understand React, let's see how it works in an HTML file. Like many other Javascript libraries, react can be loaded from a script tag.


index.html
```html
<!DOCTYPE html>
<html>
 <head>
   <meta charset="UTF-8" />
   <title>Hello World</title>
   <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
   <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
   <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
 </head>
 <body>
   <div id="myDiv"></div>
   <script type="text/babel">

   <!-- React Code Goes Here -->

   </script>
 </body>
</html>
```
In the HTML example above, three react scripts are imported:
1. `react`: the core react library
2. `react-dom`: provides DOM-specific methods that can be used at the top level of your app
3. `babel`: the transpiler

React manipulates the root component, div with the id `myDiv`, depending on what's declared in the `render()` method. The root component "reacts" to the updates or renders thrown to it.

[Let's start building!](contents/create_react_app.md)