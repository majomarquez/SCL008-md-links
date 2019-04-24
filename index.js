lee cada link de readme
const mdLink =require('./md-Links');
const fs = require("fs");
var markdownLinkExtractor = require('markdown-link-extractor');

var markdown = fs.readFileSync('README.md').toString();

var links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link);
});




// ve si el link esta funcionando o no 
// isLinkWorking(url, options) -> Promise

const isLinkWorking = require('is-link-working');
 
isLinkWorking('https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback')
.then((working) => console.log('working', working))
.catch((err) => console.log('err while checking', err));


