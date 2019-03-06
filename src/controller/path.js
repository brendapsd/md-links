const path = require('path');
const fs = require('fs'); 
const marked = require('marked'); 

export const pathIsAbsolute = (pathEvaluate) => {
    return path.isAbsolute(pathEvaluate) 
}

export const convertRelativeToAbsolute = (pathRelative) => {
    return path.resolve(pathRelative)
}

export const pathIsDirectory = (pathEvaluate) => {
    return fs.lstatSync(pathEvaluate).isDirectory();
}

export const pathIsFile = (pathEvaluate) => {
    return fs.lstatSync(pathEvaluate).isFile();
}

export const readDirectory = (directory) => {
    return fs.readdirSync(directory); 
}

export const fileIsMD = (file) => {
   return path.extname(file);
}

// export const readFiles = (info) => {
//     return fs.readFileSync(info, 'utf8');
// }

export const getMDFiles = (router) => {
    let arrayMDFiles = [];
    if (pathIsFile(router) === true){
        if (fileIsMD(router) === '.md'){
            arrayMDFiles.push(router);
        }
    }
    if (pathIsDirectory(router) === true){
      const arrNameContent =  readDirectory(router);
      arrNameContent.forEach(name => {
          const newRouter = path.join(router, name)
           arrayMDFiles = arrayMDFiles.concat(getMDFiles(newRouter));
      })

    }
    return arrayMDFiles; 
}

export const getMDLinks = (routerMD) => {
    const readFiles =  fs.readFileSync(routerMD, 'utf8');
    let arrayLinks = [];
    const renderer = new marked.Renderer(); 
    renderer.link = (href, title, text) => {
        arrayLinks.push({ href, text, file: routerMD }); 
        return ''; 
    }; 
    marked(readFiles, {renderer}); 
    return arrayLinks;
};

// console.log(getMDLinks('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md')); 
// const inputTerminal = process.argv[2];
// console.log(inputTerminal);
// console.log(getMDFiles(process.argv[2])); 