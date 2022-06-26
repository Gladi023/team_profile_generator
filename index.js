const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');

const employeeQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else { 
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'employeeId',
    message: 'Enter your employee ID (Required)',
    validate: employeeId => {
      if (employeeId) {
        return true;
      } else {
        console.log('Please enter your employee ID!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address (Required)',
    validate: email => {
      if (email) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Enter your office number (Required)',
    validate: officeNumber => {
      if (officeNumber) {
        return true;
      } else {
        console.log('Please enter your office number!');
        return false;
      }
    }
  },
]
const managerQuestions = [
  {
    type: 'input',
    name: 'manager_name',
    message: 'What is your name? (Required)',
    validate: managerNameInput => {
      if (managerNameInput) {
        return true;
      } else { 
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'manager_email',
    message: 'Enter your email address (Required)',
    validate: managerEmail => {
      if (managerEmail) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'employeeId',
    message: 'Enter your employee ID (Required)',
    validate: employeeId => {
      if (employeeId) {
        return true;
      } else {
        console.log('Please enter your employee ID!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Enter your office number (Required)',
    validate: officeNumber => {
      if (officeNumber) {
        return true;
      } else {
        console.log('Please enter your office number!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'team_member',
    message: 'Would you like to add a team member?',
    choices: ['Engineer', 'Intern'],
  },
  

]
const engineerQuestions = () => {
  inquirer.prompt(employeeQuestions).then(answers => {
    console.log(answers);
  })
}
const internQuestions = () => {
  inquirer.prompt(employeeQuestions).then(answers => {
    console.log(answers);
})
}
const promptUser = () => {
    inquirer.prompt(managerQuestions).then(answers => {
      console.log(answers);

      if(answers.team_member === "Engineer") {
        engineerQuestions()

      } else if (answers.team_member === "Intern") {
        internQuestions()
      } 
    })
  }
      
const outputFIle = (file_name, data) => {
  fs.writeFileSync(`./outputData/${file_name}`)
}



 promptUser()


