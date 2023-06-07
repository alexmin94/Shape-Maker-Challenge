const inquirer = require("inquirer")
const fs = require("fs")
const {Circle,Square,Triangle} = require("./lib/shapes")
const SVG = require ("./lib/svg")



function promtUser(){
    inquirer.prompt([
//create inquirer questions
    ]).then((answers)=>{
//use a switch case for the differnt shapes
//set the logo color and the text color
    })
    //use the right to file function to render the logo
    //use chat gpt to research fs.write file
}