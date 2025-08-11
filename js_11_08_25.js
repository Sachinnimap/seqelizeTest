let strData = "abcabbaedababa"

function handleReverse(reverseVal){
    newStr = ''
    for(let i = reverseVal.length-1; i>=0; i-- ){
        newStr += reverseVal[i]
    }
    return newStr;
}

console.log(handleReverse("deld"))
let strVal = ''
for(let i=0; i<strData.length; i++){
    let str = strData[i]
     while(i < strData.length){
         console.log("strData",str)
         if(handleReverse(str) !== str){
            //  str += strData[i]
            break
         }
         str += strData[i]
     }
     if(strVal.length < str.length){
     strVal = str;
     }
}

console.log("strval",strVal)



let arr =  [4, 3, 6, 2, 1, 1,1,4]


function getMissingArr (arr){
    let sortArr = arr.sort((a,b)=> b>a ? -1 : 1)
    let arrVal = []
    for(let i =0; i<sortArr.length; i++){
        if( sortArr[i+1] - sortArr[i] > 1 ){
                arrVal.push(sortArr[i]+1)
            }
        for(let j=i; j<sortArr.length; j++){
            if(sortArr[j+1] == sortArr[i] && !arrVal.includes(sortArr[j])){
                arrVal.push(sortArr[i])
            }
            
        }
    }
    return arrVal;
}

console.log(getMissingArr(arr))




let arr = [2,2,1,4,3,2,4,7]

let obj = {}
for(let i=0; i<arr.length; i++){
    obj[`val${arr[i]}`] = arr[i]
}


console.log([...Object.values(obj)]


let arr = [2,2,1,4,3,2,4,7]

let newArr = []
for(let i=0; i<arr.length; i++){
    let isPresent=false
    
    for(let j =0; j<newArr.length; j++){
        console.log("newArr[j]",newArr)
        console.log("arr[i]",arr[i])
        if(newArr[j] == arr[i]){
            isPresent = true
        }
    }

console.log('ispresent',isPresent)
    if(!isPresent || newArr.length ==0){ 
        newArr.push(arr[i])
    
}
    // for(let j =0; j< arr.length; j++){
    //     arr
    // }
    
}
console.log('newArr',newArr)


console.log(newArr)