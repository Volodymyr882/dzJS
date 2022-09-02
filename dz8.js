//1
function upperCase(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("String's starts with uppercase character");
    } 
    else
    {
      console.log("String's not starts with uppercase character");
    }
}
upperCase('regexp');
upperCase('RegExp');
upperCase('regexp');



//2
function checkEmail(string) {
    let regexp = /\w+@\w\.\w{2,3}/
    if (regexp.test(string)){
        return true;
    } else {
        return false;
    }
}

alert(checkEmail("user@mail.com"))

//3--------------------------------------------
let regexp=/d(b+)(d)/i;
let str="cdbBdbsbz";
console.log(str.match(regexp))

//4
console.log("Java Script")
let regexp=/([A-Za-z]+)\s([A-Za-z]+)/;
let str="Java Script";
let newstr=str.replace(regexp, '$2, $1');
console.log(newstr);

//5
function z(str){
    let regexp= /\d{4}-\d{4}-\d{4}-\d{4}/
    if (regexp.test(str)){
        return true;
    } else {
        return false;
    }
}
console.log(z("1111-2222-3333-4444"))

/^\d{4}-\d{4}-\d{4}-\d{4}/.test('1111-2222-333-4444')

//6
function checkEmail(string) {
    let regexp = /^\w+-?_?@\w+\.\w{2,3}/;
    if (regexp.test(string)){
        return "Email is correct!";
    } else {
        return "Email is not correct!";
    }
}

console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));

//7
function checkLogin(data){
    let reg= /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    let reqNamber=/[0-9\.]+/g;
    let resultNumber=data.match(reqNamber);
    let result =reg.test(data);
    console.log(`${data}is${result}-${resultNumber}`);
  }
  
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3'); 
checkLogin('eerewrgswr11ret323tdgdfr'); 
