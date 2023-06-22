const inquirer = require("inquirer")
const fs = require("fs")
const {Circle,Square,Triangle} = require("./lib/shapes")
const SVG = require ("./lib/svg")

function writeToFile(fileName, answers){
        
    fs.writeFile(fileName,answers,(err)=> {
     err? console.log(err) : console.log ("generated logo.svg");
    });
};

function promptUser(){
    inquirer.prompt([
//create inquirer questions
{
    type: "input",
    name: "text",
    message: "Please enter text for logo. (Text should be up to be 3 characters)",
},
{
    type: "input",
    name: "textcolor",
    message: "Please enter a text color (Enter keyword or a hexadecimal number):",
},
{

    type: "input",
    name: "textbackgroundColor",
    message: "Please enter shape color (Enter keyword (or a hexadecimal number):",
},
{
    type: "list",
    name: "shape",
    message: "Please choose which shape you would like?",
    choices: ["Circle", "Square", "Triangle"],
},
    ]).then((answers)=>{
        let logo;
             switch(answers.shape){
                case "Circle": 
                 logo = new Circle()
                 break;

                 case "Square": 
                 logo = new Square()
                 break;
                 
                 case "Triangle": 
                 logo = new Triangle()
                 break;
             }
             logo.setColor(answers.textbackgroundColor)
             const myLogo = new SVG()
             myLogo.setShape(logo)
             myLogo.setText(answers.text,answers.textcolor)
              if (answers.text.length > 3) {
                   console.log("Please no more than 3 characters");
                   promptUser();
               } else {
                   writeToFile("logo.svg", myLogo.render());
               }
//use a switch case for the differnt shapes
//set the logo color and the text color
    })
    //use the right to file function to render the logo
    //use chat gpt to research fs.write file
}
promptUser()