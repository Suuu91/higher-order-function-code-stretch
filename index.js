const userInPut = prompt(`Please Enter Your Numbers, Seperate by Commas`, `20,45,23,56,87,14,43`)
const inputArray = userInPut.split(`,`)
const numberArray =[]
for(let i=0; i<inputArray.length; i++){
  numberArray.push(Number(inputArray[i]))
}
const arrayPlusTwo = numberArray.map((nums)=>{
  return nums+2
})

console.log (arrayPlusTwo)