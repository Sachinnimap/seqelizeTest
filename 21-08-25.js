// setImmediate(() => {
// console.log('immediate 1');
// setImmediate(() => console.log('immediate 2'));
// });
// setTimeout(() => {
// console.log('timeout 1');
// setTimeout(() => console.log('timeout 2'), 0);
// }, 0);
// console.log('start');
// nexttick
// fs


// const fs = require("fs");

// fs.readFile(__filename, () => {
//   setTimeout(() => console.log("F: timeout 0"), 0); //immediate 
//   setImmediate(() => console.log("G: immediate")); //timeout
// });


// console.log('start');
// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);
// setImmediate(() => {
//     console.log('setImmediate');
// });
// process.nextTick(() => {
//     console.log('process.nextTick');
// });
// Promise.resolve().then(() => {
//     console.log('Promise');
// });
// queueMicrotask(() => {
//     console.log('queueMicrotask');
// });


function test(...args ) {
  console.log(args)
}
test()


function latest(){
    
}

function second(){}

latest(second)





//1.2.3.4.5.6.7.8.9

function handleFunc(val,n){
    
    for(let i=1; i<=val; i++){
        
    //   if(n == i){
    //       if(i < val){
    //       console.log(i)
    //       }else{
    //           console.log(val-i)
    //       }
    //   }   
     
     if()
    
    
    }
}

handleFunc(12,7)


function outerfunc(){
   innerfunc(){
       throw new error("something went wr")
   }
        
    
}