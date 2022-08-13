//1
let a=[2, 3, 4, 5];
let res=a.reduce((acc, rec) => acc * rec);
console.log(res);

//2
for (let x=0;x<=15;x++){
    console.log(x+" is even")
}


//3
let k=[];
k.push(Math.floor(Math.random()*501)+1);
k.push(Math.floor(Math.random()*501)+1);
k.push(Math.floor(Math.random()*501)+1);
k.push(Math.floor(Math.random()*501)+1);
k.push(Math.floor(Math.random()*501)+1);
console.log(k);

//4
function raiseToDegree (a,b){
    let r=a**b;
    if(Number.isInteger(a) && Number.isInteger(b)){
      console.log(r);
    } else {
      console.log('please use integer number');
    }
    
  };
  raiseToDegree(2,3);

  //5
  function findMin (){
    let min=arguments[0];
  for (i = 1; i < arguments.length; ++i){
    if (arguments[i] < min) min = arguments[i];
  }
  return min;
};
console.log(findMin(2,3,5,-1));

//6
function findUnique(arr){
    for (let i=0; i<arr.length; i++){
        for (let j=(i+1);j<arr.lenght;j++){
            if(arr[i]===arr[j]){
                return false;
            }
        }
    }
};
console.log(findUnique(2,3,3,3,5,2,-1));

//7
function lastElem(arr,count){
    if (count==null){
        console.log(arr.pop())
    }
    else {
        console.log(arr.slice(-count));
    }
}
console.log(lastElem([2,3,3,3,5,2,-1],3));

//8
function m(str){
    const word=str.split(' ');
    const words=[];
  for (let i = 0; i < word.length; i++)
   { words.push(word[i].charAt(0).toUpperCase()+word[i].slice(1));
} return words.join(" "); 
}
console.log(m('i love java script'));