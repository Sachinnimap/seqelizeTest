
// function upperHandler(str){
//      let upperValInarr = []
//       let strInArr = str.split(" ")
//       for(let i = 0; i < strInArr.length; i++){
//          upperValInarr.push(strInArr[i].charAt(0).toUpperCase() + strInArr[i].slice(1))
//          //  upperValInarr.push(strInArr[i].split("")[0].toUpperCase() + strInArr[i].split("").splice(1).join(""))
//       }
//       console.log(upperValInarr)

//       return upperValInarr.join(" ")
// }

// console.log(upperHandler('hello this is simple string change to upper'))
//removes the duplicates 
// function duplicateArr(arr){
//       let uniqueArr =  new Set(arr);

//       return  Array.from(uniqueArr).sort();
// }

// console.log(duplicateArr([2,5,6,1,7,8,4,2,8,2,5,6,3,4,8]))


counts the occurrences of each character 
// function eachChar(str){
//       let allStringWithNum = {};
//       let strInArr = str.split("");
//       for(let i= 0; i<strInArr.length; i++){
//          console.log(allStringWithNum[strInArr[i]]);
//          allStringWithNum[strInArr[i]] = allStringWithNum[strInArr[i]] == null ? 1 : allStringWithNum[strInArr[i]] + 1
//        }
//        return allStringWithNum;
// }

// console.log(eachChar('Hello world'))
function add(obj){
    // obj = {
    //     number : obj.number +1
    // }
    obj.number++
    console.log("Inner",obj)
}

var objVal  = {number :10}

add(objVal)

console.log(objVal)
 
 
 await User.increment({
        stock : 5
},{
where : {id : 5}
})

await User.increment(
       { stock : 5, roles: 2, num : 12}, //multitpe
        where : {id : 6}
})





fullName : {
    type : Datatypes.STRING,
set(value){
    console.log(value)
}
}

var a = 'background-color-new'

let values =  []
let newOne ;
for(let i=1; i<=a.length; i++){
        console.log(i)
    if(!newOne ) newOne = i
    if(a[i] == '-'){
        values.push(a.slice(newOne,i))
        newOne =null
    }
}

console.log(values)

const t = await sequelize.transaction();
try {
  await User.create(..., { transaction: t });
  await t.commit();
} catch (e) {
  await t.rollback();
}



async function IncrementRole(userId){

    //increment role - integer BY 5
    await User.increment({role : 5},{where : {userId : 5}}) 

     return null 
}

module.exports = {getAllUsers,getUsersById,addUser,modifyUser,deleteUser,IncrementRole}