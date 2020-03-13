function setTimeoutAndLog(input){
    return new Promise(function(fullfill, reject){
        setTimeout(function(){
            fullfill(input)
        },1000)

    })
 };

setTimeoutAndLog("a").then(function(input){console.log(input); return setTimeoutAndLog("b")})
.then(function(input){console.log(input); return setTimeoutAndLog("c")})
.then(function(input){console.log(input); return setTimeoutAndLog("d")})
.then(function(alphabet){console.log(alphabet)})




