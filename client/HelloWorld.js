import React from 'react'
import { hot } from 'react-hot-loader'

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World! </h1> 
            <p> I am in the page </p>
        </div>
    )
}

export default hot(module) (HelloWorld)