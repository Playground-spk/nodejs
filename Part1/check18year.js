function isover18(){
    age = +prompt("ใส่อายุสิจ๊ะ")
    return new Promise(function(fulfill, reject){
        if(age > 18){
            function pass(){
                alert("อายุผ่านยินดีต้อนรับ");

            }
            fulfill(pass())
        } else {
            function noPass(){
                alert("อายุไม่ผ่านนะจ๊ะ")
            
            }
            
            reject(noPass())
        }
    })
        
}
function height175(){
    let height = +prompt("ใส่ความสุงสิจ๊ะ")
    return new Promise(function(fulfill,reject){
        if(height > 175){
            function heightPass(){
                alert(height + "สูงดีหนิ")
            }
            fulfill(heightPass())
        }
    })

}


isover18().then(height175())