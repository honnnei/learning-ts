//compiler

// single file:
//tsc app.ts

//watch mode
// tsc app.ts --watch / -w

//multiple files?
// tsc --init --> initializes the whole project as ts project
// --> creates tsconfig.json file
// now we can run: tsc - compiles all the ts files

// you can also combine with watch mode:
// tsc --watch

//in the tsconfig you can:
// exclude (folders/files)
// include (folders)
//files (include files)

//options:
// es5 or es6 ?
// module ? modules in typescript?
// lib - please include some default libraries that I will name here
// the default is:
// "dom", "es6", "dom.iterable", "scripthost"

//sourcemap - ts files will be generated and you can see them in the dev tools in the sources

//ourDir - where to put the js files
//rootDir - where are our ts files 

//remove comments - true / false

//downLevelIterations - only turn this on if your loops behave weird

//no Emit on error - problematic files will not be generated




