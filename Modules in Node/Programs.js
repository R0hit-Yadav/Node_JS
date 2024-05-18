// Write a Nodejs script to take 5 single digit elements separated by white space in .txt file
// using .sort method. Print sorted array of these 5 elements on Node Js server.
var ps=require("fs")
ps.writeFileSync("s1.txt","5 9 6 1 2 0")
data=ps.readFileSync("s1.txt",'UTF-8')
data=data.split(" ")
data.sort()
console.log(data)
//output - ['0','1','2','5','6','9']

//integer format
var ps=require("fs");
ps.writeFileSync("task.txt","5 9 6 1 2 0");
data=ps.readFileSync("task.txt","utf-8")
console.log(data);
data=data.split(" ");
console.log(data);
for(i=0;i<data.length;i++){
data[i]=parseInt(data[i]);}
d1=data.sort();
console.log(d1);
// Output:
// 5 9 6 1 2 0
// [ '5', '9', '6', '1', '2', '0' ]
// [ 0, 1, 2, 5, 6, 9 ]


// Write a node.js script to write and copy contents of one file to another file. Data should be
// fetched from Source.txt and insert to destination.txt.
var ps=require("fs");
ps.writeFileSync("source.txt","ABC");
ps.appendFileSync("source.txt","DEF");
data=ps.readFileSync("Source.txt","utf-8");
ps.writeFileSync("destination.txt",data);
data1=ps.readFileSync("destination.txt","utf-8");
console.log(data.toString());
// Output:
// ABCDEF



//Write file using one JSON Object and read file which gives you Same JSON object
// in console.
var ps=require("fs");
var data={"Name":"PKP"}
ps.writeFileSync("abc183.txt",JSON.stringify(data));
console.log("Entered data=")
console.log(data) //check same data will be stored in abc183.txt
var data2=ps.readFileSync("abc183.txt","utf-8");
console.log("Read data=")
var obj=JSON.parse(data2)
console.log(obj);
// Output
// Entered data=
// { Name: 'PKP' }
// Read data=
// { Name: 'PKP' }



// Write file using having one JSON array of two Object and read file which gives you
// Same JSON object in console.
var ps=require("fs");
var data={"Name":[{"Firstname":"ROHIT"},{"Lastname":"YADAV"}]}
ps.writeFileSync("h1.txt",JSON.stringify(data));
console.log(data) // Data in file
console.log(data.Name[0].Firstname)
var data2=ps.readFileSync("h1.txt","utf-8");
var obj=JSON.parse(data2) //stored data in string formate so require to convert in object form/
console.log(obj.Name[0].Firstname +" "+ obj.Name[1].Lastname);
// Output:
// { Name: [ { Firstname: 'ROHIT' }, { Lastname: 'YADAV' } ] }
// ROHIT
// ROHIT YADAV



// Write node.js script to create file named “temp.txt”. Now, check if available physical
// memory of the system is greater than 1 GB then print message “Sufficient Memory” in the
// file, else print message “Low Memory” in file.
var ps=require("fs");
var os=require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
freemem=os.freemem()/1024/1024/1024;
if(freemem > 1){
ps.writeFileSync("temp.txt","Sufficient memory")
}
else{
 ps.writeFileSync("temp.txt","Low memory")
}
// Output:
// x64
// DESKTOP-B48OJU5
// win32
// C:\Users\HOME\AppData\Local\Temp


// Write node.js script to create a folder named “AA” at temp folder. Also, create file named
// “temp1.txt” inside “AA” folder. Now, check if working on 32 bit plateform then print You
// are working on windows 32 bit else print You are working on windows 64 bit.






