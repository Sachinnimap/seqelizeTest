// . you have string "Google" and you have to find frequency of each character in which all characters will be lowercase.
// 2. js guess the output and give reason.
// 3 > 2 > 1
// [] + []
// [] + {}
// {} + {}
// {} + []
// true == '1'
// true === '1'
// null == 0
// await null >= 0
// NaN === NaN
// typeof null
// "b" + "a" + +"a" + "a"
// 3. explain role based access control.
// 4. how will you handle error in your socket project when socket connection gets disconnected.
// 5. what are the microservices.
// 6. what is transponder in nest.
// 7. what is the middleware.
// 8. what is difference between PostgresSQL and MongoDB.
// 9. have you implemented queue mechanism like RabitMQ and Kafka.
// 10. what is closure in JS explain with example

(async () => {
  await Promise.resolve().then(async () => {
    console.log('A');
    await null;
    console.log('B');
  });
  console.log('C');
})();

console.log('D');


(async () => {
  await Promise.resolve().then(async () => {
    console.log('A');
    await null;
    console.log('B');
  });
  console.log('C');
})();

console.log('D');


Promise.resolve('start')
  .then(() => {
    return {
      then: function (resolve,reject) {
        console.log('custom then called');
        resolve() //becouse it not resolved it is considered as promise
      }
    };
  })
  .then(() => {
    console.log('next');
  });


  const thenable = {
  then(resolve, reject) {
    console.log('thenable called');
    resolve('value');
  }
};

Promise.resolve(thenable).then(console.log);


setTimeout(() => console.log('timeout'), 0);

Promise.reject('error')
  .catch((e) => {
    console.log('caught', e);
  });

console.log('done');

(async function () {
  console.log('A');
  await 0;
  console.log('B');
})();

Promise.resolve().then(() => console.log('C'));
console.log('D');


Promise.resolve('Start')
  .then((res) => {
    console.log(res);
    Promise.resolve('Middle');
  })
  .then((res) => {
    console.log('Second:', res);
    return 'End';
  })
  .then(console.log);


  Promise.resolve('X')
  .then(Promise.resolve('Y'))
  .then(res => console.log('Result:', res));


  async function foo() {
  return 'foo';
}

foo().then(console.log);
console.log('bar');


Promise.resolve()
  .then(() => {
    return Promise.resolve('A');
  })
  .then((res) => {
    console.log(res);
    return 'B';
  })
  .then(()=> Promise.resolve('C'))   
  .then(console.log);


  Promise.reject('Fail 1')
  .catch(err => {
    console.log('Caught:', err);
    return Promise.reject('Fail 2');
  })
  .catch(err => {
    console.log('Caught Again:', err);
  });


  setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => console.log('Promise in Timeout'));
}, 0);

Promise.resolve().then(() => console.log('Outer Promise'));

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

const user = {name: "Neha", age:"30"}
const {name:userName} = user
console.log(userName)


console.log(true == '1') // true
console.log(true === '1') //  false
console.log(null == 0) // // false // true
console.log(null >= 0) // false // true
console.log(NaN === NaN) // false // true
console.log(typeof null) //object //

console.log([] + []) //
console.log([] + {}) // 
console.log({} + {}) // objectobjectobjectobject
console.log({} + []) // objecto



let input = "aaabbbccd" //output = "a3b3c2d1"


function getStr(str){
    let totalStr = ""
        for(let i = 0;  i<input.length ; i++){
            let currentStr = input[i]
            let totalStrTimes = 0
            for (let j=0; j<input.length; j++){
                    if(str[i] == str[j]){
                        totalStrTimes += 1
                    }
            }
            if(!totalStr.includes(`${currentStr + totalStrTimes}`)){
            totalStr = totalStr + currentStr + totalStrTimes
            }
        }
        return totalStr;
}


console.log(getStr(input))


let input = "aaabbbccd", //output = "a3b3c2d1"



console.log(getStr(input))


let a= {x:1, y:2}
let b ={x:1, y:2}
console.log(a= b)




 let arr = [1,2,3,4]
//  [24,12,8,6]

let all = []
for(let i = 0; i<arr.length; i++){
    
    let total;
    // let lates
    for(let j = 0; j<arr.length; j++){
        if(i!==j){
            if(total){
               total = total * arr[j]
            }else{
                total = arr[j]
            }
        }
    }
    all = [...all,total]; 
}

console.log(all)
