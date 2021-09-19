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