// Write a Nodejs script to take 5 single digit elements separated by white space in .txt file
// using .sort method. Print sorted array of these 5 elements on Node Js server.
var ps=require("fs")
ps.writeFileSync("s1.txt","5 9 6 1 2 0")
data=ps.readFileSync("s1.txt",'UTF-8')
data=data.split(" ")
data.sort()
console.log(data)
//output - ['0','1','2','5','6','9']