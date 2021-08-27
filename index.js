// required 'variables'
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// start with the top level (parent)
const TeamMember = require('./info/teamMember');

// create the three 'options'
const Manager = require('./info/manager');
const Engineer = require('./info/engineer');
const Intern = require('./info/intern');
const {
  create
} = require('domain');
// create an empty array to start
const teamArray = [];

// add a team member
function addTeamMember() {

  // ask the questions -------

  inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name ?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your ID ?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email ?',
      },

      {
        type: 'checkbox',
        name: "position",
        message: "Please select your position",
        choices: ['Manager', 'Engineer', 'Intern'],
      },
    ])
    .then(async (data) => {
      const {
        name,
        id,
        email,
        role
      } = data;
      let keyInfo;
      if (position === "Engineer") {
        keyInfo = await inquirer.prompt([{
          type: "input",
          message: "What is your Github name?",
          name: "key"
        }, ]);
        let newTeamMember = new Engineer(name, id, email, keyInfo.key);
        teamArray.push(newTeamMember);
      } else if (position === "Intern") {
        keyInfo = await inquirer.prompt([{
          type: "input",
          message: "What is your school?",
          name: "key"
        }, ]);

        let newTeamMember = new Intern(name, id, email, keyInfo.key);
        teamArray.push(newTeamMember);
      } else {
        //   defaults to manager
        specificInfo = await inquirer.prompt([{
          type: "input",
          message: "What is your office number?",
          name: "key",
        }, ]);

        let newTeamMember = new Manager(name, id, email, keyInfo.key);

        teamArray.push(newTeamMember);
      }

      let {
        add
      } = await inquirer.prompt([{
        type: "list",
        message: "Do you want to add another employee?",
        name: "add",
        choices: ["Yes", "No"],
      }, ]);
      console.log(add);
      if (add === "Yes") {
        addTeamMember();
      } else {
        writeFile();
      }
    })
    .catch(function () {
      console.log("Great job, It was a Success!");
    });
}

// write the code to create the HTML here. to be updated soon.......

// from the nini project with some modifications   

function createChart() {
// create a limited list of team members
  for (i = 0; i < 5; i++) {
    console.log(employeeArray[i]);

    const generateHTML = (answers) =>
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">My role is ${answers.role}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">email: ${answers.email}</li>
    </ul>
  </div>
</div>
</body>
</html>`

    // 
    // 

    const filename = path.join(__dirname, "", "index.html");

    fs.createChart(filename, generateHTML, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }
}
    addTeamMember();
    createChart();