const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = []

//get the information about team members needed to be added by user
function teamDevelopment() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "member",
                message: "what team member need to be added",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more members"
                ]
            }
        ]).then(userChoice => {
            switch(userChoice.member) {
                case "Manager": manager();
                break;
                case "Engineer": engineer();
                break;
                case "Intern": intern();
                break;
                case "No more members": 
                 fs.writeFile(outputPath, render(employees), (error) => {
                    if (error) throw error;
                  } ); 
                break;
            }
        })

function manager() {

    inquirer
    .prompt([

        {
            type: "input",
            message: "What is your first name?",
            name: "managerName"
        },

        {
            type: "input",
            message: "What is your employee ID?",
            name: "managerID"
        },

        {
            type: "input",
            message: "What is your email?",
            name: "managerEmail"
        },

        {
            type: "input",
            message: "What is your office number?",
            name: "managerOfficeNumber"
        }
    ]).then(userChoice => {
        console.log(userChoice);

        const addManager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)

        employees.push(addManager)

        teamDevelopment();

    })

}

function engineer() {
    inquirer
        .prompt([

            {
                type: "input",
                message: "What is your first name?",
                name: "engineerName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "engineerID"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "engineerEmail"
            },

            {
                type: "input",
                message: "What is your GitHub username?",
                name: "gitHubUsername"
            }
        ]).then(userChoice => {
            console.log(userChoice);

            const addEngineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)

            employees.push(addEngineer)

            teamDevelopment();

        })
}

function intern() {

    inquirer
        .prompt([

            {
                type: "input",
                message: "What is your first name?",
                name: "internName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "internID"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "internEmail"
            },

            {
                type: "input",
                message: "What is your school?",
                name: "internSchool"
            }
        ]).then(userChoice => {
            console.log(userChoice);

            const addIntern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)

            employees.push(addIntern)

            teamDevelopment();
        })
}

}


teamDevelopment();





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
