#!/usr/bien  //buscar las 2
"use strict" // buscar tambien
//fetch package 
const fetch = require("fetch");
const fetchUrl = fetch.fetchUrl;
const FileHound = require('filehound');
const mdLink =require('./md-Links');
const fs = require("fs");
var markdownLinkExtractor = require('markdown-link-extractor');


//filehound busca en la carpeta 

const files = FileHound.create()
  .paths('/home/laboratoria/Escritorio/proyecto-basico-master')
  .ext('md')
  .find();

files.then(res=>{
    res.forEach(function (fileAll) {
       
//markdown 
var markdown = fs.readFileSync(fileAll).toString();  // imprime toooooodoo los .md
// console.log(markdown);

//links lee los links dentro de los archivos
let links = markdownLinkExtractor(markdown);
// console.log(links)
links.forEach(function (link) { // lee cada link de readme
    console.log(link);
});
});
});








// links.forEach(function(linkStatus){
    
// });
  

// // ve si el link esta funcionando o no 
// // isLinkWorking(url, options) -> Promise

