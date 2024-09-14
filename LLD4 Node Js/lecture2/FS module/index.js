// fs module

// by default async manner system will run
const { error } = require("console");
const fs=require("fs");
// console.log("statement1 printed")
// fs.readFile("example11.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(data)
// })

// console.log("statement 3 printed")

// fs files read in sync

// const fs=require("fs");
// console.log("statement1 printed")
// const data=fs.readFileSync("example11.txt",'utf-8')
// console.log(data)
// console.log("statement 3 printed")

// to handle error

// const fs=require("fs");
// console.log("statement1 printed")
// try{
//     const data=fs.readFileSync("example11.txt",'utf-8')

//     console.log(data)
// }catch{
// console.log("error occured in file")
// }

// console.log("statement 3 printed")

// write a file  --------------------------
// write file in async manner

// console.log("statement 1 printed")
// fs.writeFile("example2.txt","this file is overdien by system in fs module",'utf-8',(err)=>{
// if(err){
//     console.log(err);
//     return;
// }
// console.log("file created successfully")
// })
// console.log("statement 3 printed")

// write file in sync manner

// console.log("statment 1 prinited")
// try{
//     fs.writeFileSync("example3.txt","this file is creted by system in fs module",'utf-8')
// console.log("file creted successfully")
// }catch(error){
//     console.error(error)
// }
// console.log("statment 3 prinited")

// make directry ----------------------
// fs.rmdirSync
// remove directry -----------------
// fs.rmdir

// rename the exsiting file ----------------
// console.log("statment 1 prinited")
// fs.rename("example3.txt","example33.text",(err)=>{
//     if(err){
//         console.error(err)
//     }
//     console.log("file renamed success fully")
// })

// console.log("statment 3 prinited")

// make a directory  ----------------------
// console.log("statment 1 prinited")
// fs.mkdir("my-directory",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("new directory created succesfully")
// })
// console.log("statment 3 prinited")

// delete a particuar file in async manner --------------------
// console.log("statment 1 prinited")
// fs.unlink("example33.text",(error)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("file deleted successfully") 
//     }
// })
// console.log("statment 1 prinited")

//remove a directory --------------------

// console.log("statment 1 prinited")
// fs.rmdir("my-directory",{recursive:true},(error)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("directory deleted successfully") 
//     }
// })
// console.log("statment 3 prinited")

// file exists path checking -------------

console.log("statment 1 prinited")
const path='\Visual studio\React Projects\LLD4 Node Js\lecture2\FS module\example2.txt';

if(fs.existsSync(path)){
    console.log(`${path} deleted successfully`)
}else{
    console.log("path not exisits")
}

console.log("statment 3 prinited")