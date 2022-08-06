# GitHub Finder React

- Tailwind CSS
- Context
- Github Rest API
- Daisy UI (Tailwind Plugin)
- Reducers (useReducer)

## Add daisyUI plugin to your react project

1. Install Tailwind CSS

    https://tailwindcss.com/docs/guides/create-react-app

2. Install daisyUI
    ```
    npm i daisyui
    ```
3. Add daisyUI to your *tailwind.config.js* file.
    ```json
    module.exports = {
    //...
    plugins: [require("daisyui")],
    }
    ```

## Use Context API for global states
```js
// ex: NameContext.js
import { createContext } from 'react';

const NameContext = createContext();

export const NameProvider = ( {children} ) => {
    // states..
    // functions..

    return <NameContext.Provider value={{
        state1,
        state2,
        func1,
        func2,
        ...
        ..
    }}>
        {children}
    </NameContext.Provider>
}

export default NameContext;
```

## useReducer() hook instead of useState()
* *create two file: ...Reducer.js / ...Context.js*

**1. NameContext.js**
```js
import { createContext, useReducer } from 'react';
import nameReducer from './NameReducer';

const NameContext = createContext();

export const NameProvider = ({ children }) => {
    const initialState = {
        state1: [],
        state2: {},
        state3: '',
        state4: true
    }

    const [state, dispatch] = useReducer(nameReducer, initialState);

    // functions...

    return <NameContext.Provider value={{
        arr: state.state1,
        obj: state.state2,
        name: state.state3,
        isLoaded: state.state4
    }}>
        {children}
    </NameContext.Provider>
}
```
**2. NameReducer.js**
```js
const nameReducer = (state, action) => {
    switch(action.type) {
        case: 'SET_STATE1':
            return {
                ...state,
                state1: action.payload,
                state4: false
            }
        case: 'SET_STATE2':
            return {
                ...state,
                state2: action.payload
            }
        case: 'SET_STATE3':
            return {
                ...state,
                state3: 'Hello World!'
            }
        default:
            return state;
    }
}

export default nameReducer;
```

**Reducer** is a function which takes two args **state** and **action**.  

The **action** is typically an object that has a **type** and the **type** is basically just a string that you can evaluate.  

*It might have a **payload**.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
