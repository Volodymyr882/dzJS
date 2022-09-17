//1
const httpp=require("http");
const os=require("os");
const path=require("path");

httpp.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});

    response.write("<h2>System information</h2>");
    response.write("Current user name: "+os.userInfo().username);
    response.write("<br>");
    response.write("OS type: "+os.type());
    response.write("<br>");
    response.write("System work time: "+(os.uptime()/60).toFixed(2)+"minutes");
    response.write("<br>");
    response.write("Current work directory: "+path.dirname(__filename));
    response.write("<br>");
    response.end("Server files name: "+path.dirname(__filename));
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/ ...')

//2
const currentDate=new Date();
module.export.date=currentDate;

module.export.showMessage=function(name){
    const hour=currentDate.getHour();

    switch(true){
        case hour >=5&&hour<11:
            returne `Good morning,${name}`;
        case hour >=11&&hour<17:
             returne `Good day,${name}`;    
        case hour >=17&&hour<23:
            returne `Good evening,${name}`;
        case hour >23&&hour<5:
            returne `Goodnight,${name}`;

    }
}