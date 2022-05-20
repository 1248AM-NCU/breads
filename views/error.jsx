const React = require('react')
const Default = require('./layouts/Default')

function Error({bread}){
    console.log("Error")
    return(
        <Default>
        <p>Seems that bread {bread} doesn't quite exists </p>
        </Default>
    )
}

module.exports = Error