# Create-React-App

Setting up a React app can be overwhelming when doing it the first time. There's tons of setup to do before actually coding in React. The good thing about the maintainers of React, **Facebook**, is that they developed a boilerplate app that can get us to start with React without the painful setup.

>The [create-react-app](https://github.com/facebook/create-react-app) allows you to build a React website with just one line of code.

## Build your portfolio with create-react-app

!> Before running this command, make sure that you have **_node and yarn_** installed.

Run the following command on your command line.

```shell
yarn create react-app my-profile
```

This command creates a directory called `my-profile`. Open your project folder with your favorite text editor to see the files.

```
my-profile
|--- README.md
|--- node_modules
|--- package.json
|--- .gitignore
|--- public
    |--- favicon.ico
    |--- index.html
    |--- manifest.json
|--- src
    |--- App.css
    |--- App.js
    |--- App.test.js
    |--- index.css
    |--- index.js
    |--- logo.svg
    |--- serviceWorker.js
```

We now have our React website! Run it on your localhost:

1. go to the project folder: `cd my-profile`
2. run the website: `yarn start`
3. visit http://localhost:3000 on your browser to preview your website

![React Default Page](../_media/react_default_page.gif)

## What does each generated file do?
| File         | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| node_modules | where dependencies are installed                                     |
| package.json | where dependencies and scripts are declared                          |
| public       | where the `index.html` is placed                                     |
| src          | where the development files are, contains the components of your app |

## Going through the flow of the project files
The browser starts with the index.html file and reads the root div. The root div is the starting component. All component are rendered within the root div.

`public/index.html` at about line 30
```html
<div id="root"></div>
```

`src/index.js` at about line 7 states that the component **_App_** should be rendered within the root component.
```javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

`App.js` is the parent component of all components in the project. Browser routes are usually managed in this file.

## Create your first component
1. Create a `components` folder inside `src`.
2. Inside the `components` folder, create a file named `Profile.js`
   <br>

   `Profile.js`
   ```javascript
   import React from 'react'

   const Profile = () => (
       <h1>Hello Women Who Code Manila!</h1>
   )

   export default Profile
   ```
3. Update `App.js` by importing your new component. 
   <br>

   `App.js`
   ```javascript
   import React, {Component} from 'react'
   import Profile from 'components/Profile'

   class App extends Component {
       render{
           return(
               <Profile/>
           )
       }
   }

   export default App
   ```

The elements in the `render()` method are displayed on the browser. It should only return one `div`. If you wish to render more than one `div`, just enclose it in a parent div or `Fragment`.

```javascript
import React, {Component, Fragment} from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

class App extends Component {
    render {
        return(
            <Fragment>
                <Component1/>
                <Component2/>
                <Component3/>
            </Fragment>
        )
    }
}

```


Preview your changes in the browser. Run `yarn start`. React reloads the browser when you make edits, you don't have to restart the service everytime. 

The browser should display the header, `Hello Women Who Code Manila!`.

> Activity: Play around the App and Profile components and design the landing page for your portfolio. You can create as many components as you want. 