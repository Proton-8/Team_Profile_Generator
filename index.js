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

const teamArray = [];

// add a team member
function addTeam() {

    inquirer
        .prompt([
            {
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
  )]
.then (async (data) =>{
    if (position === "Engineer") {
        keyInfo = await inquirer.prompt([
          { type: "input", message: "What is your Github?", name: "key" },
        ]);

        let newTeamMember = new Engineer(name, id, email, keyInfo.key);
        teamArray.push(newTeamMember);
      } else if (position === "Intern") {
        keyInfo = await inquirer.prompt([
          { type: "input", message: "What is your school?", name: "key" },
        ]);

        let newTeamMember = new Intern(name, id, email, keyInfo.key);
        teamArray.push(newTeamMember);
      } else {
        //   defaults to manager
        specificInfo = await inquirer.prompt([
          {
            type: "input",
            message: "What is your office number?",
            name: "key",
          },


}
}
