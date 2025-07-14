

// [] + 1     
// [] + {}       
// {} + [] 


// console.log([] +  1) //"1" //it will not any space becouse it has converted to empty string not a string that has any value like empty string or any value

// console.log([] + {}) // [object object]

// console.log({} + []) //[object object]


// '5' - 2
// console.log('5' - 2 )     //3   
// console.log('5' * '2' )     // 10
// console.log('5' / 2  )  //2.5      
// console.log(null * 5 )   // 0      
// console.log(true - false)  //    true will convert to  1 and false will convert to 0 that why it giving 1
// console.log(false * '5')  // 0



// console.log('abc' - 1  ) //NAN

// console.log(undefined - 1) //NaN //undefined do not convert

// console.log(null -  1) // -1 null converted to 0 

// console.log( 1 - null) //1

// console.log(undefined  + 'something')


// console.log(undefined == null) //false


const obj = {
  valueOf() { return 10; },
  toString() { return '5'; }
};

console.log(obj + 1) // 11
console.log('Value: ' + obj) //5


// most subtle and confusing behaviors in JavaScript
// most misunderstood parts of JavaScript

// console.log('dha' < 10 )


// console.log({
//     toString(){return undefined}
// } + 1)



// const obj = {
//   valueOf() { return 10; },
//   toString() { return '5'; }
// };

// console.log(obj + 1) // 11
// console.log('Value: ' + obj) //5

// console.log(null >= 0) //true




console.log(-false)   //-0    
console.log(-true)    //-1    
console.log(-'42')    //-42    
console.log(-'')      //-0  
console.log(-null)    //-0 
console.log(-undefined)  //NaN 
console.log(-[5])       //-5   
console.log(-[1, 2])     //NaN
console.log(-{})         //NaN


console.log(parseInt("49.87234sdljk123"))//NaN

console.log(parseFloat("49.874djalk"))


console.log([] + [] - [] + []); //0

console.log([] + {} - [1]);// N

// console.log(NaN + undefined) //NaN
// console.log(undefined + NaN) //NaN
// console.log(undefined + 2) // NaN
// console.log(NaN + 2) // NaN
// console.log(undefined + 'x') // undefinedX
// console.log(NaN + 'x') NaNX


// console.log(undefined == null) //

const latest =  {namewere:""}

console.log(latest.prop)

consoo