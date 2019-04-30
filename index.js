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

// recorre los .md
files.then(res=>{
    res.forEach(function (fileAll) {
        
       
//markdown imprime toooooodoo los .md

fs.readFile(fileAll, (err, data) => {
  if (err) throw err;
  processMarkdown(data.toString());
});  

function processMarkdown(markdown) {
  //links lee los links dentro de los archivos
  let links = markdownLinkExtractor(markdown);
  let validLinks = 0;
  let invalidLinks = 0;


  // lee cada link de readme
  links.forEach(function (link) { 
      fetch(link)
      .then(res => {
        if (res.ok) {  // console.log(res.ok)
          validLinks += 1;
        } else { // console.log(res.ok) // console.log(res)
          invalidLinks += 1;
        }
      })
      .catch(error => {
        console.log("Error catched: " + error.message);
        validLinks -= 1;
        invalidLinks += 1;
      });
  });
      
  console.log('From total links ' + links.length + ', valid are ' + validLinks + ' and invalid ' + invalidLinks);
}

});
});