const path=require('path')

// to get file path in directory ----------------------

const filepath="D:\Visual studio\React Projects\LLD4 Node Js\lecture2\path module\example.txt";
const direname=path.dirname(filepath);
// console.log(direname);

// base name -------------------------
const basename=path.basename(filepath)
// console.log(basename)

// base name without extension ---------------

const basenamewithoutExtension=path.basename(filepath,'.txt');
// console.log(basenamewithoutExtension)

// join path --------------
const directory='\lecture2';
const subfolder='\pathmodule';
const filename='file.txt';
const newfilepath=path.join(directory,subfolder,filename)
// console.log(newfilepath)

//absolut path  -----------------
const fullpath=path.resolve('docs','example.txt');
console.log(fullpath)