function setTimeoutAndLog(input){
    return new Promise(function(fullfill, reject){
        setTimeout(function(){
            fullfill(console.log(input))
        },1000)

    })
 };

setTimeoutAndLog("a").then(setTimeoutAndLog("b")).then(setTimeoutAndLog("c")).then(setTimeoutAndLog("d"));