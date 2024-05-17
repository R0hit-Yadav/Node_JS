// Write node Example with File system methods.
// 1. To create folder
// 2. Create one file inside that folder
// 3. Append some data to that file.
// 4. Read data from the file
// 5. Rename that file
// 6. Delete File
// 7. Delete Folder

var fs=require("fs")
fs.mkdirSync("CRUD_Folder")
fs.writeFileSync("CRUD_Folder/CRUD.txt","JAY SHREE RAM")
fs.appendFileSync("CRUD_Folder/CRUD.txt"," I am a student of LJIET")

var data=fs.readFileSync("CRUD_Folder/CRUD.txt","UTF-8")
console.log(data)

fs.renameSync("CRUD_Folder/CRUD.txt","CRUD_Folder/CRUD_CHANGE.txt")
console.log(data.toString())

fs.unlinkSync("CRUD_Folder/CRUD_CHANGE.txt")

fs.rmdirSync("CRUD")