
    const vendors = vendor ? vendor.split(',')?.map(Number) : [];
    const clients = client ? client.split(',')?.map(Number) : [];
    const statusList = status ? status.split(',') : [];
    const addresses = address ? address.split(',') : [];
    const passing_years = passing_year ? passing_year.split(',') : [];
    const skills = skill ? skill.split(',') : [];

    const whereClause: any = {
            ...(vendors.length > 0 && { vendor_id: { [Op.in]: vendors } }),
            ...(statusList.length > 0 && { status: { [Op.in]: statusList } }),
            // ...(addresses.length > 0 && { address: { [Op.in]:  { [Op.like]: `%${address}%` }}} ),
            ...(passing_years.length > 0 && { passing_year: { [Op.in]: passing_years } }),
            ...(skills.length > 0 && { primary_skill: { [Op.in]: skills } }),
             ...(clients.length > 0 && { "$joining->client.id$": { [Op.in]: clients } }),
      ...(search && {
        [Op.or]: [
          { fname: { [Op.like]: `%${search}%` } },
          { lname: { [Op.like]: `%${search}%` } },
          { phone: { [Op.like]: `%${search}%` } },
          { personal_email: { [Op.like]: `%${search}%` } },
          { email: { [Op.like]: `%${search}%` } },
          { project: { [Op.like]: `%${search}%` } },
          { primary_skill: { [Op.like]: `%${search}%` } },
          { secondary_skill: { [Op.like]: `%${search}%` } },
          { resident_address: { [Op.like]: `%${search}%` } },
          { relationship: { [Op.like]: `%${search}%` } },
          { alternate_no: { [Op.like]: `%${search}%` } },
          { passing_year: { [Op.like]: `%${search}%` } },
          { "$vendorData.company_name$": { [Op.like]: `%${search}%` } },
          { "$joining->client.client_name$": { [Op.like]: `%${search}%` } },
          sequelizeAttribute.where(sequelizeAttribute.fn('concat', sequelizeAttribute.col('fname'), ' ', sequelizeAttribute.col('lname')), {
            [Op.like]: `%${search}%`
          }),
        ],
      }),
      isArchived: false,
      deleted: false,

    };

    if (startDate && endDate) {
      whereClause.contract_end_date = {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      };



      let arr = [1, 2, 3, 4, 5, -6, 7];
// arr.length = 5;
// console.log(arr);

// x = 10;
// console.log(x);
// var x;

// let a = { x: 1, y: 2 }
// let b = a;
// b.x = 3;
// console.log(a);
// console.log(b);

// for(var i = 0; i <= 10; i++){
//     setTimeout(function(){
//       console.log("value is " + i);
//   })
// }

// function hello() {
//   console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     })
//   console.log("3");
// }
// hello();

// let f = "8";
// let a = 1;
// console.log((+f)+a+1); 

// let a = 10;
// if(true){
//   let a = 20;
//   console.log(a, "inside");
// }
// console.log(a, "outside");

// var x = 1;
// if (function test() {}) {
// x += typeof test;
// }
// console.log(x);

// function sayHelloWorld() {
// return sayGoodbyeWorld();
// var sayGoodbyeWorld = function() {
// return "Hello, World!";
// };
// function sayGoodbyeWorld() {
// return "Goodbye, World!";
// }
// }
// console.log(sayHelloWorld());

// function Parent() {}
// function Child() {}
// Child.prototype = new Parent();
// var obj = new Child();
// console.log(obj instanceof Parent);

// var x = 10;
// function testValue() {
// console.log(x);
// var x = 20;
// }
// testValue()

// function Person(name) {
// this.name = name;
// }
// Person.prototype.greet = function() {
// return "Hello, my name is " + this.name;
// };
// var person1 = new Person("Lokesh Prajapati");
// var person2 = new Person("Lucky");
// console.log(person1.greet === person2.greet)

// function sayHi() {
// return hi;
// var hi = "Hello, World!";
// }
// console.log(sayHi())

// var x = 5;
// function outer() {
// var x = 10;
// function inner() {
// console.log(x);
// }
// return inner;
// }
// var finalResult = outer();
// finalResult();

// function userData() {
// return userData;
// }
// console.log(typeof userData());

// var x = 10;
// function testNum() {
// console.log(x);
// if (true) {
// var x = 20;
// }
// console.log(x);
// }
// testNum();

// var a = [1, 2, 3];
// var b = [1, 2, 3];
// console.log(a == b);

// var x = 5;
// (function() {
// console.log(x);
// var x = 10;
// })()

// function a() {
//   console.log(this);
// }
// var b = {
// foo: a
// };
// b.foo();

// var a = "xyz";
// var a = "pqr";
// console.log(a)

// const arr1 = [1, 2, 3, 4];
// const arr2 = [6, 7, 5];
// const result = [...arr1, ...arr2];
// console.log(result);

// const person1 = { name: 'xyz', age: 21 };
// const person2 = { city: 'abc', ...person1 };
// console.log(person2);

// console.log(5 < 6 < 7);
// console.log(0 == false);
// console.log(1 == true);

// let x = 5; 
// let y = x++; 
// console.log(x)//6
// console.log(y)//5

// console.log('apple'.split(''));

// const arr = [2,3,5,2,8,10,5];
// console.log(arr.indexOf(5))

// function sum(a=5, b=7){
//     return a+b;
// }
// console.log(sum(undefined, null));

// console.log(10 + "5"); //1
// console.log("5" + 10); //


// const arr = [10, -1, 2,6,2000,1000];
// arr.sort();
// console.log(arr);

// const arr = [11, 0, '', false, 2, 1];
// const filtered = arr.filter(Boolean);
// console.log(filtered);

// var x = 0;
// var y = 1;
// if(x){
//   console.log(x);
// }
// if(y){
//   console.log(y);
// }

// const obj = {
// var1: 1,
// var2: 2
// };
// const { var1, var2 } = obj;
// console.log(var1, var2);

// const user = { 
// name: "Surbhi dighe", 
// country: "India" 
// };
// const { name: fullname, country } = user;
// console.log(fullname);
// console.log(name);//

// const person = {
//   firstName: 'Surbhi',
// };
// const { lastName="dighe" } = person;
// console.log(person);

// const person = {
//   firstName: 'Surbhi',
// };
// const { firstName="Henry"} = person;
// console.log(firstName);

// var a = 10;
// let a = 20;
// console.log(a)

// const arr = ["A","B","C","D","E"]
// // {0:A}
// console.log(Object.keys(arr)); 
// console.log(Object.values(arr));

// function modify(obj) {
//     obj.name = "Updated";
// }
// let person = { name: "Original" };
// modify(person);
// console.log(person.name);
// function reassign(obj) {
//     obj = { name: "New Object" };
// }
// reassign(person);
// // console.log(person.name); 

// function modify(obj) {
//     obj[0]=6;
// }
// let person = [1,2,3]
// modify(person);
// console.log(person[0]);
// console.log(person);
// function reassign(obj) {
//     obj = [9,'',4]
// }
// reassign(person);
// console.log(person)

// let a={ x:1, y: {alpha:10,beta:20} };
// let b = {...a};
// console.log(b)
// b.x=101;
// b.y.alpha=1001;
// console.log(a.x); //101
// console.log(a.y.alpha);//1001
// console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// // console.log('End');

// var array = [1,2,3,4,5];
// delete array[2];
// console.log(array.length);
// console.log(array)
// console.log(array.map((elem) => console.log(elem)).length)
// for(let i=0;i<array.length;i++) {
//     console.log(array[i]);
    
// }

// let x = ["a","b","c"];
// let y = ["a","b","c"];
// let z = y;
// console.log(x == y); // f
// console.log(z == y); // t
// console.log(z == x); // t

// let x; 
// console.log(x); 
// x = 20;
// console.log(x);
// x = "John";
// console.log(x);
// let text;
// switch (1) {
//   case 0:
//     text = "This is zero";
//     break;
//   case 1:
//     text = "This is one";
//     break;
//   case 2:
//     text = "This is two";
//     break;
//   default:
//     text = "No matches found!";
// }
// console.log(text);

// console.log('start');
// setTimeout(() => {
//   console.log('timeout');
// }, 0);
// (async () => {
//   console.log('async 1');
//   await new Promise((resolve) => {
//     console.log('promise start');
//     resolve();
//   });
//   console.log('async 2');
// })();
// Promise.resolve().then(() => {
//   console.log('then 1');
// });
// console.log('end');

// console.log('start');
// setTimeout(() => {
//   console.log('timeout');
// }, 0);
// Promise.resolve().then(() => {
//   console.log('promise');
// });
// console.log('end');

// let x = 1;
// async function test() {
//   x += await 2;
//   console.log(x);
// }
// test();
// console.log(x);

// let a = 0;
// setTimeout(() => {
//   ++a;
// }, 0);
// Promise.resolve().then(() => {
//   console.log(a);
// });
// const x = (() => {
//   let a = 5;
//   return () => {
//     a++;
//     console.log(a);
//   };
// })();

// x();
// x();