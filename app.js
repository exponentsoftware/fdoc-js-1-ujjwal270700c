const countWords=(string,word1,word2)=>{
    let data=string.split(" ");
    let count1=0;
    let count2=0;
    data.forEach(element => {
        if(element === word1){
            count1++;
        }
        if(element === word2){
            count2++;
        }
    });
   return count1 > count2 ? `The word ${word1} more frequently occurred than ${word2}.`:`The word ${word2} more frequently occurred than ${word1}.`
}
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love .';

console.log(countWords(paragraph,"love","you"));

const countWord=(para)=>{
  let word=para.split(" ")
  let filterData=word.filter((item) => item.length !== 1)
     return filterData.length;
}
const sentence =  `I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher`

console.log(countWord(sentence));

// const countUniqueWord=(para)=>{
//    let word=para.split(" ")
//    let count =0

//    word.forEach((item)=>{
//         let found=
//    })
// }
function uniqueWordCount(str) { 
    let set = new Set(str.split(" "));
    return set.size;
  }
console.log(uniqueWordCount(sentence));


const pattern =(n)=>{
    let result="";
   for( let i=1; i<=n;i++){
       for(let j=1; j<=i; j++){
          result +="#";
       }
       console.log(result);
       result="";
   }
}
pattern(7)

const sevenRandomNumber=()=>{
    let arr=[];
    while(arr.length < 7){
        let random=Math.floor(Math.random()*10)
        if(arr.indexOf(random) === -1 ){
            arr.push(random)
        }
    }
    return arr;
}

console.log(sevenRandomNumber());

const reverseArray=(data)=>{
  let reverseData=[];
 for(let i=data.length-1;i>=0;i--){
     reverseData.push(data[i])
 }
 return reverseData;
}
console.log(reverseArray(["A", "B", "C"]));

const checkUniqueness=(arr)=>{
  let set =new Set(arr)

  return set.size == arr.length ? true:false;
      
}

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));
const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));