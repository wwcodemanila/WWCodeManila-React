# What is React?

React is a Javascript library developed by Facebook for building user interfaces. It is often the V of the MVC framework, and it is very flexible in connecting to any backend build.

_Why React?_

- Everything is made of components which have a [well-defined life cycle](https://reactjs.org/docs/state-and-lifecycle.html)
- React uses JSX which allows "writing HTML" in Javascript
- VirtualDOM makes react faster ([watch "The Story of Virtual DOM" here](https://www.youtube.com/watch?v=BYbgopx44vo))

#### Components are the Lego bricks of your website

The mindset in using React is very similar to playing lego, you can build anything by stacking Lego bricks. Components are the lego bricks that make your websites. Similar to Lego bricks, building your website with react allows you to remove and add components as you like.

#### "HTML" is written in Javascript... what?!

JSX is a syntax extension to Javascript. It allows you to have an idea how your UI looks like while coding. File name extensions of components using JSX can be **_.jsx or .js_**.

Similar to HTML, JSX have **_tag names, attributes and children_**.

`Hello.js`

```javascript
const Hello = (
    <h1 className="heading">Hello World</h1>
);
```

Attributes enclosed in quotes are strings, while those enclosed with curly braces are javascript expressions.

`HelloName.js`

```es6
const name = 'Barbara';
const Hello = (
    <h1>{name}</h1>
);
```

The JSX syntax is not easily understood by our browsers, mainly because it uses the modern Javascript syntax, [ES6](https://github.com/lukehoban/es6features). In order to use JSX, we need Babel to translate/transpile our JSX code to plain old Javascript. The Babel website also has a [playground](https://babeljs.io/repl) where you can see it in action.

#### Building your components

The basic structure of a components looks like this.

`Component.js`

```es6
import React from "react";

const Component = () => <h1>My First Component</h1>;

export default Component;
```

Properties can be passed from a parent component to the child component.

`ParentComponent.js`

```es6
import React from 'react'

const ParentComponent = () => (
    <ChildComponent name="Barbara">
);

export default ParentComponent;

```

`ChildComponent.js`

```es6
import React from "react";

const ChildComponent = ({ name }) => <h1>Hello name</h1>;

export default ChildComponent;
```

Components imported from another component looks very similar to an HTML tag. In order to avoid the confusion, it is **_best practice to name your components in the PascalCase_**.

Now that we know components and jsx, we can start building our first React-powered website. However, building React websites from scratch can be too tedious. It requires a lot of setup. Facebook has developed **_create-react-app_** that allows you to build your React website in just a few minutes.

[Let's start building!](contents/create_react_app.md)