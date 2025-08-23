
// 321
//  21
//   1

// function handle(num){

// let i=num;

// while(i>0){
//     let str =''
//     let j = 0
//     let first = num - i
//     while(j<num){
//         if(first > j){
//             str += " "
//         }else{
//         str += j;
//         }
//         j--
//     }
//     console.log("str",str)
//     i--
// }

// }

// handle(3)



// function handle(num){
    
//     for(let i=num; i>0;i--){
//         let str = ''
//         for(let j=num; j>0; j--){
//             if(j > i){
//                 str += ' '
//             }else{
//                 str += j
//             }
//         }
//         console.log(str)
//     }
// }

// handle(5);


function handle(num){
    let i=num
    while(i >0){
        let str= ''
        let j=num
        while(j>0){
            if(j>i){
                str += ' '
            }else{
                str += j
            }
            j--
        }
        console.log(str)
        i--
    }
}

handle(5)


// function handleFunc(n,arr){

// let mainLength = arr.length - 1
// if(arr.length > n){
//     console.log(arr[n])
// }
// else {
//   let isOdd = Math.floor( n/mainLength)
//   let num = n % mainLength
//     if(isOdd % 2 == 0){
//         console.log(arr[num])
//     }else{
//         console.log(arr[mainLength-num])
//     }
// }
  
// }

// handleFunc(130,[2,3,5,5,6,7,3,4])


let n = 17
let arr = [4,3,2,5,6,7,8,9,1,0]

let len = arr.length;
let remainder = n %len;

let check =( n- remainder) /len;
if(arr.length<n &&check %2 !=0) {
    remainder = arr.length - remainder;
}

console.log(arr[remainder])

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("/api")
  // app.

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
