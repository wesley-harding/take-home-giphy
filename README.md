## Giphy Project (aka Spiphy)

This is a simple app that utilizes [Giphy's API](https://developers.giphy.com/) to display a list a trending images,
search images, and view a single GIF.

Demo: [https://spiphy.netlify.com/](https://spiphy.netlify.com/)


### Starting Point
I started with `create-react-app`, but wasn't particularly happy with it. In particular, it was missing hot reloading
and all indications were I'd need to eject to get hot reloading to work. I also haven't started a project from 
`create-react-app` and wasn't sure what limitations I would face.  I decided to cut my losses and find a boilerplate on
Github that fit what I was looking for.

My requirements:

* Can be found via Google search for 'react redux typescript hot reload'
* Has some reasonable Typescript defaults
* Has hot reloading setup to work with Typescript out of the box
* Has Redux already setup (`create-react-app` requires manual setup of Redux). Just to save some time.
* Has been updated relatively recently. Don't want a dead project.
* Isn't overly opinionated. I want the boilerplate and some basic structure, but not extensive code structure.
* Has some sort of CSS processor (less, scss, postcss, etc)

I ended up starting with [https://github.com/chunliu/typescript-react-hot-reload](https://github.com/chunliu/typescript-react-hot-reload)

I reset the Git Repo after cloning, so my [first commit](https://github.com/wesley-harding/take-home-giphy/commit/4bf880e2658cc67233e7c6ba541a34e26730c16e)
was only boilerplate code. A diff of my changes after that commit can be viewed here: https://github.com/wesley-harding/take-home-giphy/compare/4bf880e2658cc67233e7c6ba541a34e26730c16e..master  


### Other design decisions

##### Typesafe Actions
I used [typesafe-actions](https://github.com/piotrwitek/typesafe-actions) as a means of working with my actions and reducers.

I used this on a side project the past summer and enjoyed it's design patterns. I figured I'd use it here as well.

* Very clean syntax for defining reducer action handlers. Eliminates the need for switch statements, a default return, and automatically types the action in the handler.
* Reports a Typescript error if an action handler is defined for an action that doesn't exist.
* Simple (albeit, slightly convoluted) syntax for defining actions. Good alternative for verbosity of string enums (e.g. FOO_ACTION = 'FOO_ACTION')
* Biggest con is that it does involve runtime code (which is where the performance hits likely come from). 
* Provides a very nice flow for handling async requests (like AJAX)

Note: I haven't used it in a production app so I'm not sure what performance impacts it may have. Some Github comments have indicated increased memory usage.

##### React Router
A full blown router certainly isn't necessary for this task. I've decided to include it because:

* The app is page-oriented and built for web - fitting a url router well.
* Routing can get complex. Let's standardize it from the start.
* It's easier for applications to ignore routing than it is to shoehorn them into routes later.

##### Redux Sagas
Integrating with [Giphy's API](https://developers.giphy.com/) means we need to fetch asynchronously. Since Redux only supports [synchronous data flow](https://redux.js.org/advanced/async-flow) out the box, we need a middleware for asynchronous actions.

In the past, I've turned to [redux-thunk](https://github.com/reduxjs/redux-thunk) but recent experience with [redux-saga](https://github.com/redux-saga/redux-saga) has pushed me to prefer [redux-saga](https://github.com/redux-saga/redux-saga). 

##### CSS Processor
Less came with the boilerplate so I decided to stick with it. For a simple project, like this, it's not worth the effort to switch to something else. 

##### Tests
I did not write tests for this project. I'd be happy to update with a test suite if needed.
