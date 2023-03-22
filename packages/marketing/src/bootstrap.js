import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//mount function to startup the app
const mount = (el, isLocal = true) => {
    if (isLocal) {
        ReactDOM.render(<App />, el)
    } else {
        ReactDOM.render(<App />, el)
    }
}

//if we are in devlopment and in isolation
//call mount immediatly
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector("#_marketing-dev-root");
    if (devRoot) {
        mount(devRoot)
    }
}

// we are running through container
//we should export the mount function 
export { mount };