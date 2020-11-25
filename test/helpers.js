const chai = require('chai')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code

jsdom({
  html, src
});

document.querySelector("main#main").remove();
let newHeader = document.createElement("h1")
document.body.appendChild(newHeader);
newHeader.id="victory";
newHeader.innerHTML="YOUR-NAME is the champion"; 
