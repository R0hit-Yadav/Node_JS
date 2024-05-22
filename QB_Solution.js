//========================================>CH-1-JSON<===================================================================
//QB-24 Write a script of JSON array containing objects and display the same in console.
const people = [
    {
        "name": "Alice",
        "age": 30
    },
    {
        "name": "Bob",
        "age": 25
    },
    {
        "name": "Charlie",
        "age": 35
    }
];

const jsonString = JSON.stringify(people, null, 2);
console.log(jsonString);



//QB-25 Write a JSON script by entering user detail of three different person having same age group in string format method. 
//Print the following result in object form. (1) User Details (2) Name of 2nd person and his/her age.
const users = [
    {
        "name": "Alice",
        "age": "30",
        "email": "alice@example.com"
    },
    {
        "name": "Bob",
        "age": "30",
        "email": "bob@example.com"
    },
    {
        "name": "Charlie",
        "age": "30",
        "email": "charlie@example.com"
    }
];
const jsonString = JSON.stringify(users);
const userArray = JSON.parse(jsonString);
console.log("User Details:", userArray);
const secondPerson = userArray[1];
console.log("Name of 2nd Person:", secondPerson.name, "and Age:", secondPerson.age);



//QB-26 Write a JSON script to store information related to books based on their id, topic,edition and author. 
//(Minimum details of three books having id=1,2,3)
// JSON data as a string
const jsonString = 
{
  "books": [
    {
      "id": 1,
      "topic": "Programming",
      "edition": "3rd",
      "author": "John Doe"
    },
    {
      "id": 2,
      "topic": "Data Science",
      "edition": "2nd",
      "author": "Jane Smith"
    },
    {
      "id": 3,
      "topic": "Web Development",
      "edition": "1st",
      "author": "Alice Johnson"
    }
  ]
};


//QB-27 Write a function 'FirstAndLast' that takes in an array, and returns an object with: 
//1) the first element of the array as the object's key, and
//2) the last element of the array as that key's value. 
//(Example input: ['ABC', 'DEF', 'Employee', 'Manager'] output: ABC : 'Manager')
function FirstAndLast(arr) 
{
    if (arr.length < 2)
	{
        throw new Error("Array should contain at least two elements");
    }
    const key = arr[0];
    const value = arr[arr.length - 1];
    const result = {};
    result[key] = value;

    return result;
}
// Example usage:
const inputArray = ['ABC', 'DEF', 'Employee', 'Manager'];
const outputObject = FirstAndLast(inputArray);
console.log(outputObject);  // Output: { ABC: 'Manager' }



//QB-28 Table Question it's method not answer of question
const sub = { 
"FSD": [ 
{ 
"Topic": "HTML", "course": "Beginer", "content": ["tags", "table", "form"], }, 
{ 
"Topic": "CSS", "course": "Beginer", "content": ["tags", "table", "form"] } 
] 
}; 
var temp = "<table border='2px'>"; temp += "<tr>"; 
for (x in sub.FSD[0]) { temp += "<th>" + x + "</th>"; } 
temp += "</tr>"; for (x in sub.FSD) { console.log(x); temp += "<tr>"; 
for (y in sub.FSD[x]) { 
temp += "<td>" + sub.FSD[x][y] + "</td>"; } 
temp += "</tr>"; 
} 
temp += "</table>"; //console.log(temp); document.write(temp); 


//QB-29 Write a JSON script to define Name,DOB,Age and birthplace of one person. 
//Then print his birthdate in console as well as in chrome after clicking birthdate button.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Print Birthdate</title>
</head>
<body>
  <button id="birthdateButton">Show Birthdate</button>
  <script src="script.js"></script>
</body>
</html>


document.getElementById('birthdateButton').addEventListener('click', function() 
{
  var personData = 
  {
    "person": 
	{
      "name": "John Doe",
      "DOB": "1990-05-22",
      "age": 34,
      "birthplace": "New York, USA"
    }
  };

  var birthdate = personData.person.DOB;
  console.log("Birthdate:", birthdate);
});



//QB-30 Write a script to define two JSON objects named as “division1” and “division2” having an array to 
//store  5 names of students along with their roll number and list of subjects they opted. 
var division1 = 
{
  "students": [
    {
      "name": "John",
      "rollNumber": "101",
      "subjects": ["Math", "Science", "English"]
    },
    {
      "name": "Alice",
      "rollNumber": "102",
      "subjects": ["History", "Geography", "Math"]
    },
    {
      "name": "Bob",
      "rollNumber": "103",
      "subjects": ["Physics", "Chemistry", "Biology"]
    },
    {
      "name": "Emma",
      "rollNumber": "104",
      "subjects": ["Computer Science", "Math", "English"]
    },
    {
      "name": "Sam",
      "rollNumber": "105",
      "subjects": ["Art", "Music", "Drama"]
    }
  ]
};

var division2 = 
{
  "students": [
    {
      "name": "Sarah",
      "rollNumber": "201",
      "subjects": ["Math", "Physics", "Chemistry"]
    },
    {
      "name": "Michael",
      "rollNumber": "202",
      "subjects": ["Biology", "Science", "Geography"]
    },
    {
      "name": "Emily",
      "rollNumber": "203",
      "subjects": ["English", "History", "Computer Science"]
    },
    {
      "name": "David",
      "rollNumber": "204",
      "subjects": ["Music", "Art", "Drama"]
    },
    {
      "name": "Sophia",
      "rollNumber": "205",
      "subjects": ["Math", "Science", "Physics"]
    }
  ]
};

console.log("Division 1:", division1);
console.log("Division 2:", division2);



//QB-31 Write a JS to store an array of objects having height and name. display name and height of person with highest height.
var people = [
  { "name": "John", "height": 175 },
  { "name": "Alice", "height": 160 },
  { "name": "Bob", "height": 180 },
  { "name": "Emma", "height": 165 },
  { "name": "Sam", "height": 190 }
];
function findTallestPerson(peopleArray) 
{
  var tallestPerson = peopleArray[0];
  for (var i = 1; i < peopleArray.length; i++) 
  {
    if (peopleArray[i].height > tallestPerson.height) 
	{
      tallestPerson = peopleArray[i];
    }
  }
  return tallestPerson;
}

var tallest = findTallestPerson(people);
console.log("Name of the tallest person:", tallest.name);
console.log("Height of the tallest person:", tallest.height);


//QB-32 Write a script to define two JSON objects named as “division1” and “division2” having an array to store names of students. 
//These name should be sorted alphabetically in the object and should be be written to the file. 
//At last, both division objects should be visible with names sorted alphabetically in file.
const fs = require('fs');

const division1 = 
{
  "students": ["Alice", "Bob", "John", "Sam", "Zoe"]
};

const division2 = 
{
  "students": ["David", "Emily", "Michael", "Sarah", "Sophia"]
};

const division1JSON = JSON.stringify(division1);
const division2JSON = JSON.stringify(division2);


fs.writeFileSync('division1.json', division1JSON);
console.log('Division 1 data written to division1.json');

fs.writeFileSync('division2.json', division2JSON);
console.log('Division 2 data written to division2.json');


//QB-33 Write a JSON object which contains array of 3 objects. Each object contains 2 properties name and age. 
//Now, sort an array values by age in descending order. Print name in terminal as per the sorted age.
const jsonData = 
{
  "people": 
  [
    { "name": "Alice", "age": 25 },
    { "name": "Bob", "age": 30 },
    { "name": "Charlie", "age": 20 }
  ]
};

jsonData.people.sort((a, b) => b.age - a.age);

console.log("Names sorted by age in descending order:");
jsonData.people.forEach(person => 
{
  console.log(person.name);
});


//QB-34 Write one JSON string with date property (yyyy-mm-dd) and print date in India standard time. 
const jsonData = 
{
  "date": "2024-05-22"
};

const dateString = jsonData.date;
const dateObject = new Date(dateString);

const ISTDateString = dateObject.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
console.log("Date in India Standard Time:", ISTDateString);


//QB-35 Create a JSON object named Home Expenses in which you have to add monthly expenses of transport , 
//food bill and  names of different family members including mother,father,brother and sister.
//Print the expenses of father with his name.
const homeExpenses = 
{
  "transport": 200,
  "food_bill": 400,
  "family_members": 
  {
    "mother": "Alice",
    "father": 
	{
      "name": "John",
      "expenses": 300
    },
    "brother": "Tom",
    "sister": "Emily"
  }
};
console.log("Father's name:", homeExpenses.family_members.father.name);
console.log("Father's expenses:", homeExpenses.family_members.father.expenses);


//QB-36 Write a script to define two JSON objects named as “division1” and “division2” having an array to store 5 integer numbers. 
//Write this object in a file named XYZ.txt using file system. Define third array  as result which gives output as explained below: 
//Suppose first array contains base value and second array contains power value and then third array will give output 
//as: a^b.For 
//example: first array[0]=2 and second array[0]=3 then it should return 8 in third array[0] 
//.Also append this result in XYZ.txt and as well as on console.
const fs = require('fs');

const division1 = 
{
  "numbers": [2, 3, 4, 5, 6]
};

const division2 = 
{
  "numbers": [3, 2, 1, 4, 2]
};

const result = [];

for (let i = 0; i < division1.numbers.length; i++) 
{
  result.push(Math.pow(division1.numbers[i], division2.numbers[i]));
}

const resultString = "Result array: " + JSON.stringify(result);

fs.appendFileSync('XYZ.txt', resultString + "\n");
console.log(resultString);


//QB-37 Below JSON object a is given. Print below sentence in console from the given object.
//Hi ! We are students of LJU . 
//Exam - FSD2 
//const a = { 
    //"A" : "LJU",
    //"B" : ["CSE", { 'M' : [ { "N" : "FSD2" } , "Exam" ]}],     "C" : [ {
            //"D" : "Hi",
            //"E" : ['are', 4, {'F' : ['semester', 'We']} ]
        //}],
    //"G" : {"H" : "students", "I" : ["of","!"] },
    //"J" : [{"K" :".", "L":"-"},"FSD-2"] 
 //}
const a = { 
    "A" : "LJU",
    "B" : ["CSE", { 'M' : [ { "N" : "FSD2" } , "Exam" ]}],     
    "C" : [ {
            "D" : "Hi",
            "E" : ['are', 4, {'F' : ['semester', 'We']} ]
        }],
    "G" : {"H" : "students", "I" : ["of","!"] },
    "J" : [{"K" :".", "L":"-"},"FSD-2"] 
};
const university = a["A"];
const exam = a["B"][1]["M"][0]["N"];
const students = a["G"]["H"];
const punctuation1 = a["J"][0]["K"];
const punctuation2 = a["J"][0]["L"];

const sentence = `Hi ! We are ${students} of ${university}.\nExam ${punctuation1} ${exam} ${punctuation2}`;
console.log(sentence);



//QB-38 Print following statement in console from given JSON objects.
/* const a = {"Name" : "Ramesh",
            "Subects" : ["Maths", "Scence" , "chemistry"],             
			"Grade" : {"Type" : "marks","Total" : [88,90,99,87]},             
			"Range" : {"opt" : "100", "type" : ["secure","subject","class"]},             
			"achive" : [{"Rank" :"rank", "place":[1,2,3]}, {"Ordinalindicator":"st"},"12"],
            "joints" : ['outof','got','and']
          } */
/* Output: Ramesh got 99 outof 100 marks and secure 1st rank */
const a = 
{
  "Name": "Ramesh",
  "Subjects": ["Maths", "Science", "Chemistry"],
  "Grade": 
  {
    "Type": "marks",
    "Total": [88, 90, 99, 87]
  },
  "Range": 
  {
    "opt": "100",
    "type": ["secure", "subject", "class"]
  },
  "Achieve": [
    { "Rank": "rank", "Place": [1, 2, 3] },
    { "OrdinalIndicator": "st" },
    "12"
  ],
  "Joints": ['outof', 'got', 'and']
};


const name = a["Name"];
const highestGrade = Math.max(...a["Grade"]["Total"]);
const rank = a["Achieve"][0]["Place"][a["Achieve"][0]["Place"].indexOf(1) + 1] + a["Achieve"][1]["OrdinalIndicator"];
const rangeOpt = a["Range"]["opt"];
const joints = a["Joints"];

const sentence = `${name} ${joints[1]} ${highestGrade} ${joints[0]} ${rangeOpt} ${a["Grade"]["Type"]} ${joints[2]} ${a["Range"]["type"][0]} ${rank}`;

console.log(sentence);





//<===========================================>CH-2-NodeJS-1<=============================================>

//QB-79 
/* Write a Node.Js program to sort an interger array, where all element are available in a file separated by white space. 
Print sorted array elements on node.js server */
const fs = require('fs');

const fileContent = fs.readFileSync('input.txt', 'utf8');
const integerArray = fileContent.split(/\s+/).map(Number);

integerArray.sort((a, b) => a - b);
console.log(integerArray);

const http = require('http');

const server = http.createServer((req, res) => 
{
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Sorted Array: ${integerArray.join(', ')}\n`);
}).listen(2024);




//QB-80
/*Write Node.Js code that display "Hello" with incresing font-size in interval of 50 miliseconds in blue color. 
When font-size reaches to 50 pixel it should stop.*/
const http = require('http');
const fs = require('fs');

const htmlContent = fs.readFileSync('index.html');

let fontSize = 10; 
const interval = setInterval(() => 
{
  fontSize += 1; 
  if (fontSize <= 50) 
  {
    
    const updatedHtmlContent = htmlContent.toString().replace('{fontSize}', fontSize);
    server.on('request', (req, res) => 
	{
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(updatedHtmlContent);
    });
  } 
  else 
  {
    clearInterval(interval); 
  }
}, 50);


//QB-81
/*Write node.js script to copy content of one file to the other file. data should be fetched from source.txt and insert to destination.txt*/
var ps=require("fs"); 
ps.writeFileSync("source.txt","ABC"); 
ps.appendFileSync("source.txt","DEF"); 
data=ps.readFileSync("Source.txt","utf-8"); 
ps.writeFileSync("destination.txt",data); 
data1=ps.readFileSync("destination.txt","utf-8"); 
console.log(data.toString()); 


//QB-82
/*Write node.js script to print “Welcome Admin” on home page of server. 
If user request for second page it display “This is second page” in italic font-style and if any other request is 
requested it shows “Page not found” message.*/
const https = require('https');
const fs = require('fs');

const options = 
{
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt')
};

const server = https.createServer(options, (req, res) => 
{
  if (req.url === '/') 
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Welcome Admin</h1>');
  } 
  else if (req.url === '/second-page') 
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<i>This is second page</i>');
  } 
  else 
  {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page not found</h1>');
  }
}).listen(2024);




//QB-83
/*Write a script to display sum of two numbers which are passed as an argument in function named Total. 
the sum should display in any html element. Use callback as third argument in Total function.*/
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sum Display</title>
</head>
<body>
  <div id="sumDisplay"></div>
  <script src="script.js"></script>
</body>
</html>
function Total(num1, num2, callback) 
{
  const sum = num1 + num2;
  callback(sum);
}

Total(5, 7, function(result) 
{
  const sumDisplay = document.getElementById('sumDisplay');
  sumDisplay.innerText = 'The sum is: ' + result;
});

//QB-84
/*Write a script to define two JSON objects named as “division1” and “division2” having an array to store names of students. 
These names should be sorted alphabetically in the object and should be written to the file. 
At last, both division objects should be visible with names sorted alphabetically in file.*/
const fs = require('fs');
const division1 = 
{
  division: 'Division 1',
  students: ['John', 'Alice', 'Bob', 'Emily']
};

const division2 = 
{
  division: 'Division 2',
  students: ['Eva', 'Daniel', 'Grace', 'Charles']
};
division1.students.sort();
division2.students.sort();

const divisions = [division1, division2];

const divisionsJSON = JSON.stringify(divisions);

fs.writeFile('divisions.json', divisionsJSON, (err) => 
{
  if (err) throw err;
  console.log('Divisions data has been written to divisions.json');
});


//QB-85
/*Write a node.js script to write contents to the file in original manner. Delete file after finishing writing*/
const fs = require('fs');

const content = "This is the content that will be written to the file.";

const filePath = 'example.txt';

fs.writeFile(filePath, content, () => 
{
  console.log("Content has been written to the file successfully.");

  fs.unlink(filePath, () => 
  {
    console.log("File has been deleted successfully.");
  });
});



//QB-86
/*Write a program to demonstrate various methods of path module in Node.js.*/
const path = require('path');

const filePath = '/path/to/file.txt';
console.log('basename:', path.basename(filePath));
console.log('dirname:', path.dirname(filePath));
console.log('extension:', path.extname(filePath));

const messyPath = '/path/to/../file.txt';
console.log('normalized path:', path.normalize(messyPath));

const segment1 = 'path';
const segment2 = 'to';
const segment3 = 'file.txt';
console.log('joined path:', path.join(segment1, segment2, segment3));

console.log('resolved path:', path.resolve('index.js'));

const parsedPath = path.parse(filePath);
console.log('parsed path:', parsedPath);


//QB-87
/*Write a node.js script to jump on a specific code by  specifying path on address bar of browser.*/
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => 
{
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/jump') 
  {
    const jumpTo = parsedUrl.query.jump;
    if (jumpTo === 'specificCode')
		{
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Jumped to specific code!');
    } 
	else 
	{
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Invalid jump parameter');
    }
  } 
  else 
  {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
}).listen(2024);




//QB-88
/*Write a program to demonstrate various methods of os module in Node.js.*/
const os = require('os');

// Get the hostname of the operating system
console.log('Hostname:', os.hostname());

// Get the type of operating system
console.log('Type:', os.type());

// Get the platform of the operating system
console.log('Platform:', os.platform());

// Get the architecture of the operating system
console.log('Architecture:', os.arch());

// Get information about the CPUs of the operating system
console.log('CPUs:', os.cpus());

// Get the total amount of system memory in bytes
console.log('Total memory:', os.totalmem(), 'bytes');

// Get the amount of free system memory in bytes
console.log('Free memory:', os.freemem(), 'bytes');

// Get the home directory of the current user
console.log('Home directory:', os.homedir());

// Get the temporary directory
console.log('Temporary directory:', os.tmpdir());

// Get the network interfaces available on the system
console.log('Network interfaces:', os.networkInterfaces());


//QB-89
/*Write a node.js script to print 3 different JSON objects by specifying corresponding object name on address bar.*/
const http = require('http');
const url = require('url');

const jsonObjects = 
{
  object1: { message: "This is JSON object 1" },
  object2: { message: "This is JSON object 2" },
  object3: { message: "This is JSON object 3" }
};

const server = http.createServer((req, res) => 
{
  const parsedUrl = url.parse(req.url, true);
  const objectName = parsedUrl.query.object;

  if (jsonObjects.hasOwnProperty(objectName)) 
  {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(jsonObjects[objectName]));
  } 
  else 
  {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Object not found');
  }
}).listen(2024);



//QB-90
/*Write a node js script to write the text “You are creating a file” to help.txt file. 
After that append the text “you are appending data” to same help.txt file. 
After that read the file and print file contents on console. After finishing read operation , 
print the line “Thanks for using my program” on console. write ,append,read sequence must be maintain. 
all read ,write and append operations are  asynchronous.*/
const fs = require('fs');

fs.writeFile('help.txt', 'You are creating a file', (err) => 
{
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('You are creating a file');
  
  fs.appendFile('help.txt', '\nYou are appending data', (err) =>
  {
    if (err) {
      console.error('Error appending to file:', err);
      return;
    }
    console.log('You are appending data');
    
    fs.readFile('help.txt', 'utf8', (err, data) => 
	{
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('File contents:', data);
      
      console.log('Thanks for using my program');
    });
  });
});


//QB-91
/*Write a node.js script to print 1st 10 prime numbers on browser in table of 10 rows. Odd no. 
of rows should render in blue color and even no. of rows should render in red color.*/
const https = require('https');
const fs = require('fs');

function isPrime(num) 
{
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function generatePrimes() 
{
  const primes = [];
  let num = 2;
  while (primes.length < 10) 
  {
    if (isPrime(num)) 
	{
      primes.push(num);
    }
    num++;
  }
  return primes;
}


const server = https.createServer(options, (req, res) => 
{
  const primes = generatePrimes();

  let html = '<table border="1">';
  for (let i = 0; i < primes.length; i++) 
  {
    if (i % 2 === 0) 
	{
      html += '<tr style="background-color: red;">';
    } 
	else 
	{
      html += '<tr style="background-color: blue;">';
    }
    html += `<td>${primes[i]}</td></tr>`;
  }
  html += '</table>';

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
});




//QB-92
/*Write a nodeJS script to print “My PC is on fire” on server at port no 5555 if having more than 4gb physical available 
memory otherwise,”I need more more memory” should get displayed.*/
const os = require('os');
const http = require('http');

function checkMemory() 
{
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const availableMemory = freeMemory / 1024 / 1024 / 1024; // Convert bytes to gigabytes
  return availableMemory;
}

const server = http.createServer((req, res) => 
{
  const availableMemory = checkMemory();
  let message = '';

  if (availableMemory > 4) 
  {
    message = 'My PC is on fire';
  } 
  else 
  {
    message = 'I need more memory';
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message);
}).listen(2024);




//QB-93
/*Write a node.js script to write the text “This is data” to new.txt file. After that append the text “That is data” to same new.txt file. 
After that read the file & print the file content on console. 
After finishing read operation print the line “Thank you for using program”. 
Write, append & read sequence must be maintained & all operations are asynchronous.*/
const fs = require('fs');

fs.writeFile('new.txt', 'This is data', (err) => 
{
  if (err) 
  {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Data has been written to the file.');
  
  fs.appendFile('new.txt', '\nThat is data', (err) => 
  {
    if (err) 
	{
      console.error('Error appending to file:', err);
      return;
    }
    console.log('Data has been appended to the file.');
    
    fs.readFile('new.txt', 'utf8', (err, data) => 
	{
      if (err) 
	  {
        console.error('Error reading file:', err);
        return;
      }
      console.log('File contents:', data);
      
      console.log('Thank you for using program');
    });
  });
});


//QB-94
/*Write a Node.Js program for following action
1.Write a file having five random elements separated by white space in .txt file. 
2.append sorted array of these 5 elements in same file along with message : “Sorted array:” in new line.
3.Find maximum number from that and append with message “maximum number=” in same file. */
const fs = require('fs');
function generateRandomNumbers() 
{
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 100)); // Generate random numbers between 0 and 100
  }
  return numbers;
}

function writeNumbersToFile(numbers) 
{
  fs.writeFile('numbers.txt', numbers.join(' '), (err) => 
  {
    if (err) 
	{
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Numbers have been written to the file.');
    
    numbers.sort((a, b) => a - b);
    
    fs.appendFile('numbers.txt', '\nSorted array: ' + numbers.join(' '), (err) => 
	{
      if (err) 
	  {
        console.error('Error appending to file:', err);
        return;
      }
      console.log('Sorted array has been appended to the file.');
      
      const maxNumber = Math.max(...numbers);
      
      fs.appendFile('numbers.txt', '\nMaximum number: ' + maxNumber, (err) => 
	  {
        if (err) 
		{
          console.error('Error appending to file:', err);
          return;
        }
        console.log('Maximum number has been appended to the file.');
        console.log('Actions completed successfully.');
      });
    });
  });
}
const randomNumbers = generateRandomNumbers();
writeNumbersToFile(randomNumbers);


//QB-95
/*Create HTTP webpages where Admin page display “Sufficient Memory:” in bold blue color with font size of 
24px along with available memory in GB with font size 32px and red color if available physical memory 
of the system is greater than 1 GB.
Else it shows “Not Sufficient Memory” in simple text. 
For any other page requested then shows “You are not admin” message.*/
const http = require('http');
const os = require('os');

function checkMemory() 
{
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const availableMemory = freeMemory / 1024 / 1024 / 1024; // Convert bytes to GB
  return availableMemory;
}

const server = http.createServer((req, res) => 
{
	if (req.url === '/admin') 
	{
    const availableMemory = checkMemory();
    let message = '';

    if (availableMemory > 1) 
	{
      message = `<div style="font-size: 24px; color: blue;"><b>Sufficient Memory:</b></div><div style="font-size: 32px; color: red;">${availableMemory.toFixed(2)} GB</div>`;
    } 
	else 
	{
      message = '<div style="font-size: 24px; color: blue;"><b>Not Sufficient Memory</b></div>';
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(message);
  } 
  else 
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<div style="font-size: 24px; color: red;">You are not admin</div>');
  }
}).listen(2024);




//QB-96
/*Write a function 'ArrayToObject' which takes in an array of arrays, and returns an object with each pair of 
elements in the array as a key-value pair and store the result in one arraytoobject.txt file.
Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]] 
Output= { Country  : ' India ', State  : ' Gujarat ',  City  :  ‘Ahmedabad’ }*/
const fs = require('fs');

function ArrayToObject(array) 
{
  const obj = {};
  for (let i = 0; i < array.length; i++) 
  {
    obj[array[i][0]] = array[i][1];
  }
  return obj;
}

const inputArray = [['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']];
const outputObject = ArrayToObject(inputArray);

fs.writeFile('arraytoobject.txt', JSON.stringify(outputObject, null, 2), (err) => 
{
  if (err) 
  {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Data has been written to arraytoobject.txt file.');
});


//QB-97
/*Write a Node.js program to CRUD operation of file management.                        
1)Create folder named "Hello".                                                                          
2) Create file in it named abc.txt and enter data in to it.                                                      
3) Add more data at last in file.                                                                           
4) Read data without getting buffer data at first.                                                                         
5) rename file                                                                                               
6) Delete both file and folder.*/
const fs = require('fs');
const path = require('path');

// 1) Create folder named "Hello"
const folderPath = path.join(__dirname, 'Hello');

fs.mkdir(folderPath, (err) => 
{
  if (err) 
  {
    console.error('Error creating folder:', err);
    return;
  }
  console.log('Folder "Hello" created successfully.');

  // 2) Create file in it named abc.txt and enter data in to it.
  const filePath = path.join(folderPath, 'abc.txt');
  const fileContent = 'This is the initial data in the file.';
  
  fs.writeFile(filePath, fileContent, (err) => 
  {
    if (err) 
	{
      console.error('Error creating file:', err);
      return;
    }
    console.log('File "abc.txt" created and initial data written successfully.');

    // 3) Add more data at last in file.
    const additionalData = '\nThis is additional data appended to the file.';
    fs.appendFile(filePath, additionalData, (err) => 
	{
      if (err) 
	  {
        console.error('Error appending data to file:', err);
        return;
      }
      console.log('Additional data appended to the file.');

      // 4) Read data without getting buffer data at first.
      fs.readFile(filePath, 'utf8', (err, data) => 
	  {
        if (err) 
		{
          console.error('Error reading file:', err);
          return;
        }
        console.log('File contents:', data);

        // 5) Rename file
        const newFilePath = path.join(folderPath, 'newfile.txt');
        fs.rename(filePath, newFilePath, (err) => {
          if (err) {
            console.error('Error renaming file:', err);
            return;
          }
          console.log('File renamed successfully.');

          // 6) Delete both file and folder.
          fs.unlink(newFilePath, (err) => {
            if (err) {
              console.error('Error deleting file:', err);
              return;
            }
            console.log('File deleted successfully.');

            fs.rmdir(folderPath, (err) => {
              if (err) {
                console.error('Error deleting folder:', err);
                return;
              }
              console.log('Folder deleted successfully.');
            });
          });
        });
      });
    });
  });
});


var fs=require("fs"); 
fs.mkdirSync("Hello");             
 
fs.writeFileSync("Hello/user.txt","Hello");  // Insert File user.txt in Hello folder with data 
fs.appendFileSync("Hello/user.txt","\nWorld"); // append the data 
var data=fs.readFileSync("Hello/user.txt","utf-8"); // Read data 
fs.renameSync("Hello/user.txt","Hello/user1.txt"); // Rename file name 
console.log(data.toString()); 
fs.unlinkSync("Hello/user1.txt");   
 
fs.rmdirSync("Hello");  
// Delete Folder (Folder Must be empty) 

//QB-98
/*Write node.js script to print “Welcome to Home Page” with two links containing two pages named as “About Us” and 
“Contact Us” on home page of server. If user request for About Us page it should display “Welcome to LJ University” 
in bold font-style with blue color and if user request for Contact Us page it should display “Email:abc@ljinstitutes.edu.in” 
in italic font-style with red color if any other request is requested it shows “Page not found” message in plaintext.*/
const http = require('http');
const server = http.createServer((req, res) => 
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  if (req.url === '/') 
  {
    // Home page
    res.write('<h1>Welcome to Home Page</h1>');
    res.write('<a href="/about">About Us</a><br>');
    res.write('<a href="/contact">Contact Us</a>');
    res.end();
  } 
  else if (req.url === '/about') 
  {
    // About Us page
    res.write('<h1 style="color: blue;">Welcome to LJ University</h1>');
    res.end();
  } 
  else if (req.url === '/contact') 
  {
    // Contact Us page
    res.write('<p style="font-style: italic; color: red;">Email: abc@ljinstitutes.edu.in</p>');
    res.end();
  } 
  else 
  {
    // Page not found
    res.write('Page not found');
    res.end();
  }
}).listen(2024);




//<===========================================>CH-3-NodeJS-2<=============================================>

//QB-136
/*Write a node.js script to create my own module to calculate reverse of a given number. 
That module should be use to compute all numbers between 1 to 100 in which square of reverse & reverse of sqaure is same. 
This has call of reverse twice so call it from module. Also keep a function to compute average of any number of elements.*/

// reverseNumber.js
function reverseNumber(num) 
{
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed);
}

function isSquareReverseEqual(num) 
{
    const square = num * num;
    const reverseSquare = reverseNumber(square);
    return square === reverseNumber(reverseSquare);
}

function findNumbers() 
{
    const numbers = [];
    for (let i = 1; i <= 100; i++)
	{
        if (isSquareReverseEqual(i)) 
		{
            numbers.push(i);
        }
    }
    return numbers;
}

function calculateAverage(...nums) 
{
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}

module.exports = 
{
    reverseNumber,
    isSquareReverseEqual,
    findNumbers,
    calculateAverage
};

// main.js
const { findNumbers, calculateAverage } = require('./reverseNumber');

const numbers = findNumbers();
console.log("Numbers between 1 to 100 where square of reverse & reverse of square is same:", numbers);

const avg = calculateAverage(10, 20, 30, 40, 50);
console.log("Average:", avg);


//QB-137
/*Write a node.js script to print query string of URL on console as well as on file using ES6 Callback.*/

// queryString.js
const fs = require('fs');

function extractQueryString(url, callback) 
{
    const queryString = new URL(url).searchParams.toString();
    console.log("Query String:", queryString);

    // Write to file
    fs.writeFile('queryString.txt', queryString, (err) => 
	{
        if (err) 
		{
            console.error("Error writing to file:", err);
            callback(err, null);
            return;
        }
        console.log("Query String written to file 'queryString.txt'");
        callback(null, queryString);
    });
}

module.exports = extractQueryString;

// main.js
const extractQueryString = require('./queryString');
const url = 'https://example.com/path?param1=value1&param2=value2';

extractQueryString(url, (err, queryString) => 
{
    if (err) 
	{
        console.error("Error:", err);
        return;
    }
    console.log("Query String:", queryString);
});


//QB-138
/*Write a node.js script to load a simple.html file on nodejs web server & prints its contents as an html content.*/
// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => 
{
    const filePath = path.join(__dirname, 'simple.html');
    
    // Check if the requested URL is for the HTML file
    if (req.url === '/' && req.method === 'GET') 
	{
        // Read the HTML file
        fs.readFile(filePath, 'utf8', (err, data) => {
			
            if (err) 
			{
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } 
	else 
	{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page Not Found');
    }
}).listen(2024);




//QB-139
/*Write a node.js script to find all prime no.s between 1-50 using external module having a function checkPrime(). 
This function returns Boolean value on the basis of a no. is prime or not prime. Write all necessary .js files.*/

// primeChecker.js
function checkPrime(num) 
{
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) 
	{
        if (num % i === 0) return false;
    }
    return true;
}

module.exports = checkPrime;

// findPrimes.js
const checkPrime = require('./primeChecker');

function findPrimesInRange(start, end) 
{
    const primes = [];
    for (let i = start; i <= end; i++) 
	{
        if (checkPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

module.exports = findPrimesInRange;

const primes = findPrimesInRange(1, 50);
console.log("Prime numbers between 1 to 50:", primes);



//QB-140
/*Write a node.js script using event handling to consider an errorneous triangle to find area. Take fix values of all three sides. 
(1) If any of the side is negative, then print the message “Sides must be positive” using event handler. 
(2) If perimeter of triangle is negative then print the message “Perimeter must be positive” using event handler.
(3) Both above messages must be printed in sequence.*/
// triangleCalculator.js
const EventEmitter = require('events');

class TriangleCalculator extends EventEmitter 
{
    constructor(side1, side2, side3) 
	{
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    calculateArea() 
	{
        if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) 
		{
            this.emit('error', new Error("Sides must be positive"));
            return;
        }

        const perimeter = this.side1 + this.side2 + this.side3;
        if (perimeter <= 0) 
		{
            this.emit('error', new Error("Perimeter must be positive"));
            return;
        }

        const s = perimeter / 2;
        const area = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
        return area;
    }
}

module.exports = TriangleCalculator;


// main.js
const TriangleCalculator = require('./triangleCalculator');

const triangle = new TriangleCalculator(3, 4, -5);

triangle.on('error', (err) => 
{
    console.error(err.message);
});

const area = triangle.calculateArea();
if (area !== undefined) 
{
    console.log("Area of the triangle:", area);
}


//QB-141
/*Write a node.js script to create two listeners for a common event call their respective callbacks. 
Print number of events associated with an emitter. Remove one of the listeners & call remaining listners again. 
Print number of remaining listners also.*/
// eventHandlers.js
const EventEmitter = require('events');
const myEmitter = new MyEmitter();

function firstListener() 
{
    console.log('First listener called');
}

function secondListener() 
{
    console.log('Second listener called');
}

myEmitter.on('commonEvent', firstListener);
myEmitter.on('commonEvent', secondListener);

console.log('Number of listeners:', myEmitter.listenerCount('commonEvent'));

myEmitter.removeListener('commonEvent', firstListener);

console.log('Number of remaining listeners:', myEmitter.listenerCount('commonEvent'));

myEmitter.emit('commonEvent');



//QB-142
/*Write a Node.js script to create a class student by assigning name & result in form of members. 
Create one member function named as topper of X which returns topper student object. 
Details of this topper student should be printed on file as well as on console.*/
// student.js
const fs = require('fs');

class Student 
{
    constructor(name, result) 
	{
        this.name = name;
        this.result = result;
    }

    static topperOfX(students) 
	{
        if (!Array.isArray(students) || students.length === 0) 
		{
            throw new Error('Invalid input');
        }

        let topper = students[0];
        for (let i = 1; i < students.length; i++) 
		{
            if (students[i].result > topper.result) 
			{
                topper = students[i];
            }
        }

        const details = `Name: ${topper.name}, Result: ${topper.result}`;
        console.log("Topper of X:", details);
        
        fs.writeFile('topper.txt', details, (err) => 
		{
            if (err) 
			{
                console.error("Error writing to file:", err);
            } 
			else 
			{
                console.log("Details of the topper student written to 'topper.txt'");
            }
        });

        return topper;
    }
}

module.exports = Student;

// main.js
const fs = require('fs');
const Student = require('./student');

const students = [
    new Student('Alice', 85),
    new Student('Bob', 72),
    new Student('Charlie', 90)
];

const topper = Student.topperOfX(students);


//QB-143
/*Write a Node.js script to create a class person by assigning name & age in form of members. 
Create one member function named as elder of X which returns elder person object. 
Details of this elder person should be printed on file as well as on console.*/

// person.js
const fs = require('fs');

class Person 
{
    constructor(name, age) 
	{
        this.name = name;
        this.age = age;
    }

    static elderOfX(people) 
	{
        if (!Array.isArray(people) || people.length === 0) 
		{
            throw new Error('Invalid input');
        }

        let elder = people[0];
        for (let i = 1; i < people.length; i++) 
		{
            if (people[i].age > elder.age) 
			{
                elder = people[i];
            }
        }

        const details = `Name: ${elder.name}, Age: ${elder.age}`;
        console.log("Elder of X:", details);
        
        fs.writeFile('elder.txt', details, (err) => 
		{
            if (err) 
			{
                console.error("Error writing to file:", err);
            } 
			else 
			{
                console.log("Details of the elder person written to 'elder.txt'");
            }
        });

        return elder;
    }
}

module.exports = Person;

// main.js
const fs = require('fs');
const Person = require('./person');

const people = [
    new Person('Alice', 35),
    new Person('Bob', 42),
    new Person('Charlie', 30)
];

const elderPerson = Person.elderOfX(people);


//QB-144
/*Write a node.js script to create a class time & assign members hour, minute & second. 
Create two objects of time class & add both the time objects so that it should return is third time object. 
Third time object should have hour, minute & second such that after addition if second exceeds 60 then minute 
value should be incremented. If minute exceeds 60 then hour value should be incremented.*/

// time.js
class Time 
{
    constructor(hour, minute, second) 
	{
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    static add(time1, time2) 
	{
        let totalSecond = time1.second + time2.second;
        let totalMinute = time1.minute + time2.minute;
        let totalHour = time1.hour + time2.hour;

        if (totalSecond >= 60) 
		{
            totalSecond -= 60;
            totalMinute++;
        }

        if (totalMinute >= 60) 
		{
            totalMinute -= 60;
            totalHour++;
        }

        return new Time(totalHour, totalMinute, totalSecond);
    }

    printTime() 
	{
        console.log(`${this.hour}:${this.minute}:${this.second}`);
    }
}

const time1 = new Time(1, 30, 45);
const time2 = new Time(2, 45, 15);

const totalTime = Time.add(time1, time2);

console.log("Resultant Time:");
totalTime.printTime();


//QB-145
/*Explain node js own module with suitable example. Write necessary js file.*/
// mathOperations.js
function add(a, b) 
{
    return a + b;
}

function subtract(a, b) 
{
    return a - b;
}

function multiply(a, b) 
{
    return a * b;
}

function divide(a, b) 
{
    if (b === 0) 
	{
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Exporting functions to make them accessible outside the module
module.exports = 
{
    add,
    subtract,
    multiply,
    divide
};

// main.js
const mathOperations = require('./mathOperations');

console.log("Addition:", mathOperations.add(5, 3));
console.log("Subtraction:", mathOperations.subtract(5, 3));
console.log("Multiplication:", mathOperations.multiply(5, 3));
console.log("Division:", mathOperations.divide(5, 3));



//QB-146
/*Explain the purpose of module.exports.*/
// mathOperations.js
function add(a, b) 
{
    return a + b;
}

module.exports = 
{
    add
};

// mathOperations.js
function add(a, b) 
{
    return a + b;
}

function subtract(a, b) 
{
    return a - b;
}

module.exports = 
{
    add,
    subtract
};

// mathOperations.js
function add(a, b) 
{
    return a + b;
}

module.exports = add;

// mathOperations.js
function add(a, b) 
{
    return a + b;
}

function subtract(a, b) 
{
    return a - b;
}

module.exports = 
{
    add,
    subtract,
    author: 'John Doe'
};


//QB-147
/*What do you understand by an Event Emitter in Node.js?*/
const EventEmitter = require('events');

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on('greet', (name) => 
{
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'John');



//QB-148
/*Write a node.js script to create calculator using external module having a function add(), sub(), mul(), div(). 
This function returns result of calculation. Write all necessary .js files.*/
// calculator.js
function add(a, b) 
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b) 
{
    return a * b;
}

function divide(a, b) 
{
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

module.exports = 
{
    add,
    subtract,
    multiply,
    divide
};

// main.js
const calculator = require('./calculator');

const a = 10;
const b = 5;

console.log("Addition:", calculator.add(a, b));
console.log("Subtraction:", calculator.subtract(a, b));
console.log("Multiplication:", calculator.multiply(a, b));
console.log("Division:", calculator.divide(a, b));


//QB-149
/*Explain URL module with appropriate example.*/
const url = require('url');

const urlString = 'https://www.example.com/path?query=example';
const parsedUrl = url.parse(urlString);

console.log("Parsed URL Object:");
console.log(parsedUrl);

const formattedUrl = url.format({
    protocol: 'https:',
    hostname: 'www.example.com',
    pathname: '/path',
    query: 'query=example'
});

console.log("\nFormatted URL String:");
console.log(formattedUrl);

const base = 'https://www.example.com/';
const relative = 'page';
const resolvedUrl = url.resolve(base, relative);

console.log("\nResolved URL:");
console.log(resolvedUrl);


//QB-150
/*What do you mean by QueryString?*/
https://www.example.com/search?q=node.js&category=tutorials&page=1


//QB-151
/*Create an event emitter instance and register a couple of callbacks.*/


const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', () => 
{
    console.log('Hello, World!');
});

myEmitter.on('greet', (name) => 
{
    console.log(`Hello, ${name}!`);
});

myEmitter.emit('greet', 'Alice');


//QB-152
/*Explain node js events with appropriate example with all event methods.*/

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', () => 
{
    console.log('Listener 1: Event occurred');
});

myEmitter.on('event', () =>
 {
    console.log('Listener 2: Event occurred');
});

myEmitter.once('onceEvent', () => 
{
    console.log('Listener: Event occurred once');
});

myEmitter.emit('event');
myEmitter.emit('onceEvent');

const listenerFunction = () => 
{
    console.log('Listener: This listener will be removed');
};
myEmitter.on('removeListenerEvent', listenerFunction);
myEmitter.removeListener('removeListenerEvent', listenerFunction);
myEmitter.emit('removeListenerEvent');

const count = myEmitter.listenerCount('event');
console.log('Number of listeners for event:', count);



//QB-153
/*Write a node js script to demonstrate Chalk module*/

const chalk = require('chalk');

console.log(chalk.blue('Hello, ') + chalk.red('Node.js') + chalk.green(' with Chalk!'));

console.log(chalk.bold('Bold text'));
console.log(chalk.italic('Italic text'));
console.log(chalk.underline('Underlined text'));

console.log(chalk.bold.italic('Bold and italic text'));
console.log(chalk.red.bold('Red and bold text'));
console.log(chalk.bgYellow.black('Text with yellow background and black text'));


//QB-154
/*Explain validator in NPMjs.*/
const validator = require('validator');

// Validate an email address
const email = 'example@example.com';
if (validator.isEmail(email)) 
{
    console.log(`${email} is a valid email address.`);
} 
else 
{
    console.log(`${email} is not a valid email address.`);
}



//QB-155
/*How JSON processing is done in node js? Explain with suitable example.*/

// JSON data as a string
const jsonData = '{"name": "John", "age": 30, "city": "New York"}';
const parsedData = JSON.parse(jsonData);

console.log('Parsed JSON Data:');
console.log(parsedData);

const person = 
{
    name: 'Alice',
    age: 25,
    city: 'London'
};

const jsonString = JSON.stringify(person);

console.log('\nStringified JSON Data:');
console.log(jsonString);


//QB-156
/*Calculate following series for given values of x and n.  x and n are any positive integers statically.
Ans=1-(x/1!)+(x2/2!)-(x3/3!)+…..+(xn/n!)
Create separate module function to compute factorial used in denominator.*/

// factorial.js
function factorial(n) 
{
    if (n === 0 || n === 1) 
	{
        return 1;
    } else 
	{
        let result = 1;
        for (let i = 2; i <= n; i++) 
		{
            result *= i;
        }
        return result;
    }
}

module.exports = factorial;

// main.js
const factorial = require('./factorial');

function calculateSeries(x, n) 
{
    let result = 1;
    let sign = -1;
    for (let i = 1; i <= n; i++) 
	{
        sign *= -1;
        let term = Math.pow(x, i) / factorial(i);
        result += sign * term;
    }
    return result;
}

const x = 2;
const n = 5;

const seriesResult = calculateSeries(x, n);

console.log("Series result:", seriesResult);



//QB-157
/*Write a nodeJS script to fire an event named calculate which calculates the total marks of 5 subjects about of 25 marks and displays 
the total marks on console as an output.The calculate event fires another event name percentage which takes total marks as argument 
and percentage should get displayed in console.*/

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('calculate', (marks) => 
{
    const totalMarks = marks.reduce((total, mark) => total + mark, 0);
    console.log(`Total Marks: ${totalMarks}`);
    
    eventEmitter.emit('percentage', totalMarks);
});

eventEmitter.on('percentage', (totalMarks) => {
    const percentage = (totalMarks / (5 * 25)) * 100;
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
});

const marks = [20, 22, 23, 24, 25];
eventEmitter.emit('calculate', marks);
 

//QB-158
/*Write node.js script to create a file named “new.txt”. Now, check if available memory of the system is greater than 1 GB then print message 
“Sufficient Memory”in the file, else print message “Low Memory” in file.*/

const fs = require('fs');
const os = require('os');

fs.writeFile('new.txt', '', (err) => 
{
    if (err) 
	{
        console.error('Error creating file:', err);
        return;
    }
    
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    
    const totalMemoryGB = totalMemory / (1024 * 1024 * 1024);
    const freeMemoryGB = freeMemory / (1024 * 1024 * 1024);
    
    const message = (freeMemoryGB > 1) ? 'Sufficient Memory' : 'Low Memory';
    
    fs.writeFile('new.txt', message, (err) => 
	{
        if (err) 
		{
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Message written to file:', message);
    });
});



//QB-159
/*Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array  after 3 seconds.*/
function sumAfterDelay(numbers) 
{
    return new Promise((resolve) => 
	{
        setTimeout(() => 
		{
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            resolve(sum);
        }, 3000);
    });
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

sumAfterDelay(numbers).then(sum => 
{
    console.log('Sum:', sum); // Output after 3 seconds
});


//QB-160
/*Write a node.js script using Event handling to perform following tasks in sequence:
a) Create file in it named abc.txt and enter data into it.
b) Append data to that file abc.txt and print message “Data Appended Successfully”.
c) Read the content of the file abc.txt and print the content on http web server. 
d) Do all the operations of File using asynchronous file system module. 
And Lastly print the message “All operations performed successfully” on console.*/

const fs = require('fs');
const http = require('http');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const filePath = 'abc.txt';
const initialData = 'This is the initial data.';
const appendData = '\nThis data is appended.';

myEmitter.on('createFile', () => 
{
    fs.writeFile(filePath, initialData, (err) => 
	{
        if (err) throw err;
        console.log('File created and data written.');
        myEmitter.emit('appendData');
    });
});

myEmitter.on('appendData', () => 
{
    fs.appendFile(filePath, appendData, (err) => 
	{
        if (err) throw err;
        console.log('Data Appended Successfully.');
        myEmitter.emit('readFile');
    });
});

myEmitter.on('readFile', () => 
{
    fs.readFile(filePath, 'utf8', (err, data) => 
	{
        if (err) throw err;

        const server = http.createServer((req, res) => 
		{
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data);
            res.end();
        });

        server.listen(3000, () => 
		{
            console.log('Server running at http://localhost:3000/');
        });

        myEmitter.emit('done');
    });
});

myEmitter.on('done', () => 
{
    console.log('All operations performed successfully');
});

// Start the sequence of events
myEmitter.emit('createFile');


//QB-161
/*Write node js script to fetch values from url given below and display output as asked. 
"https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3= Welcome+to+LJU#AllTheBest"
1) Data must be written as below in file named “exam.txt”. File name must be fetched from
the url given above.
Output:
Hello!
Welcome to LJU FSD2 T1 Test
#AllTheBest
2) Read content from file “exam.txt” and send response to server and display data in “/” page
in same format as above but in H1 tag and in red color.
3) If any other page is requested it shows “Page not found” message in plain text.*/

const fs = require('fs');
const http = require('http');
const url = require('url');

const inputUrl = 'https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest';

const parsedUrl = url.parse(inputUrl, true);

const c1 = parsedUrl.query.c1;
const c2 = parsedUrl.query.c2;
const c3 = parsedUrl.query.c3;
const hash = parsedUrl.hash;

const fileName = parsedUrl.pathname.split('/').pop();

const content = `${c1}!\n${c3} ${c2}\n${hash}`;

fs.writeFile(fileName, content, (err) => 
{
    if (err) throw err;
    console.log(`Data written to ${fileName}`);
    
    const server = http.createServer((req, res) => 
	{
        if (req.url === '/') 
		{
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) throw err;

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<html><body style="color:red;">');
                res.write('<h1>' + data.replace(/\n/g, '</h1><h1>') + '</h1>');
                res.write('</body></html>');
                res.end();
            });
        } 
		else 
		{
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
        }
    }).listen(2024);
});


//QB-162
/*Create HTTP webpage on which Home page display “Welcome to Log in page” in blue color and font size must be 32px, 
Login page shows one HTML file from static URL having Form with detail for Username, Password, submit and reset button,  
 Gallery page   reflect one Image “hello.jpg” and any other page shows “Page Not found”.  
Write all necessary files to perform task. (Image already exist in same folder)*/


<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <h2>Login Form</h2>
    <form action="/submit" method="post">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </form>
</body>
</html>



const http = require('http');
const fs = require('fs');
const path = require('path');

function serveFile(res, filePath, contentType, responseCode = 200) 
{
    fs.readFile(filePath, (err, data) => 
	{
        if (err) 
		{
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } 
		else 
		{
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

http.createServer((req, res) => 
{
    const urlPath = req.url.toLowerCase();
    switch (urlPath) 
	{
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<html><body style="color:blue; font-size:32px;">Welcome to Log in page</body></html>');
            break;

        case '/login':
            serveFile(res, path.join(__dirname, 'login.html'), 'text/html');
            break;

        case '/gallery':
            serveFile(res, path.join(__dirname, 'hello.jpg'), 'image/jpeg');
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page Not Found');
            break;
    }
}).listen(3000);

