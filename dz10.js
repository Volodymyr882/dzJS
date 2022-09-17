//1 
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y,,z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

//2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names:[name,nam1,name2],ages:[age0,age1,age2]} = data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26

 //3
 function mul(...args) {
    let el=1;
    arguments.forEach(element=>{
        if (!isNaN(element)) {
            el *= element;
    }
    else{
        return 0;
    }
 });
 return el;
}
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0

//4

let server = {
  data: 0,
  convertToString: function (callback) {
    // callback(function () {
    //     return this.data + "";
    //   }.bind(this)
    // );
    callback(() => {
        return this.data + "";
    });
  },
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
//     return function (callback) {
//       this.result = callback();
//     }.bind(this);
//   },
    return (callback) => {
      this.result = callback();
    };
  },
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//5

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder (k, v) {
    let mapOfData = new Map();
    for (let i = 0; i < k.length; i++) {
        mapOfData.set(k[i], v[i]);
    }
    return mapOfData;
}
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"




