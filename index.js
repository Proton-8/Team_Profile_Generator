// required 'variables'
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// start with the top level (parent)
const Team = require('./info/team');

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

}
