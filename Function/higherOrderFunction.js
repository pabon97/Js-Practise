//Callback function passes as an parameter to higher order function
function Callback(){
    console.log("I am callback")
}

function HigherOrder(fn){
    console.log('I am higher Order function')
    fn()
}

HigherOrder(Callback)