#!/usr/bien  //buscar las 2
"use strict" // buscar tambien
//fetch package 
const fetch = require("node-fetch");
const FileHound = require('filehound');
const mdLink =require('./md-Links');
const fs = require("fs");
var markdownLinkExtractor = require('markdown-link-extractor');
const path = require('path'); // pasra que me reconozca la ruta absoluta


//filehound busca en la carpeta 

const files = FileHound.create()
  .paths('/home/laboratoria/Escritorio/blabla')
  .ext('md')
  .find();

files.then(res=>{
    res.forEach(function (fileAll) {
       

//markdown 
var markdown = fs.readFileSync(fileAll).toString();  // imprime toooooodoo los .md
// console.log(markdown);

function checkStatus(res){
  if (res.ok) {
    console.log(res.ok)
      return true;
  } else {
    // console.log(res.ok)
    // console.log(res)
      return false;
      
  }
 }

//links lee los links dentro de los archivos
let links = markdownLinkExtractor(markdown);
let validLinks = 0;
let invalidLinks = 0;

links.forEach(function (link) { // lee cada link de readme
    let result;
    result = fetch(link)
    .then(checkStatus)
    .catch(error => console.log("Error catched: " + error.message));
    if (checkStatus.ok) {
      validLinks += 1;
    } else {
      invalidLinks += 1;
    }
});
    
links.forEach(function (link) { // lee cada link de readme
  console.log(link + '  ' +checkStatus(link));
});
console.log('From total links ' + links.length + ', valid are ' + validLinks + ' and invalid ' + invalidLinks);

});
});
