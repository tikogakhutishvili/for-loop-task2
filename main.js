let Sum = 0
for(i=0; i<=10; i++){
    Sum+=i
}
console.log(Sum/i)


let str = "tiko"
let x = ""
let Upper = str.toLocaleUpperCase()
for(let i=0; i <= str.length - 1; i++){
    x+=Upper[i]
} 
console.log(x)
///// შევაბრუნოთ დდ
let strr = "isev tiko"
let UC = strr.toLocaleUpperCase()
let result = ""
for( i = strr.length - 1; i >= 0; i--){
    result +=UC[i]
}
console.log(result)
