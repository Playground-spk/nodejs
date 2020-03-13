function settimeoutAndLog(input, time){
    return new Promise(function(fullfill, reject){
        setTimeout(function(){
            fullfill(input)
            
        },time)
    })
};

settimeoutAndLog("a",1000).then(function(string){console.log(string); return settimeoutAndLog("b", 2000)})
.then(function(string){console.log(string)})
