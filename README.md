# Pokedex

An application that gives the ability to search for Pokemon and see name, photo, weight, height, and abilities of a Pokemon. As well, the application saves the search history for recall of previously viewed Pokemon. The project uses Create React App, Redux, Typescript, and Grommet. 


## Future Changes 

If I had more time I would have like to complete some of the bonus elements such as seeing details about abilities, species, etc. As well, I did not implement any error handling, testing, or pokemon evolution details for want of a speedy delivery.

## Concurrent environment considerations

While javascript uses some pretty robust concurrent patterns such as promises, async/await, and event emitter, there are some ways to make this application more resilient in a concurrent environment. You could employ a node server with worker threads that can handle multi-threaded operations. As well, utilizing a technology such as Kubernetes to give you scaling automation and load balancing would be a solid concurrency option.

## Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm install`
Downloads packages needed to run the application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

