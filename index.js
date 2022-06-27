const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const generateSite = require('./src/generate-site');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//const outputStyling = path.join(OUTPUT_DIR, "style.css");
//const styleDir = path.resolve(__dirname, "./style");
//const cssOnPage = fs.readFileSync(path.resolve(styleDir, "style.css"), "utf8");
const teamMembers = [];

const promptManager = () => {
  return inquirer.prompt([
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
  ])
  .then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptMenu();
  })
};

const promptMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Please select which option to continue with:',
      choices: ['add an employer', 'add an intern', 'finish building my team']
    }
  ])
  .then(userChoice => {
    switch (userChoice.menu) {
      case "add an engineer":
        promptEngineer();
        break;
      case "add an intern":
        promptIntern();
        break;
      default:
        buildTeam();
    }
  });
};
const promptEngineer = () => {
  console.log(`
  ================
  Add a new Engineer
  =================
  `);
return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the engineer? (Required)',
    validate: engineerName => {
      if (engineerName) {
        return true;
      } else { 
        console.log('Please enter engineer name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'employeeId',
    message: 'Enter employee ID (Required)',
    validate: employeeId => {
      if (employeeId) {
        return true;
      } else {
        console.log('Please enter employee ID!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email address (Required)',
    validate: email => {
      if (email) {
        return true;
      } else {
        console.log('Please enter email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter GitHub username!');
        return false;
      }
    }
  },
]).then(answers => {
  console.log(answers);
  const engineer =new Engineer(answers.name, answers.employeeId, answers.email, answers.githubInput);
  teamMembers.push(engineer);
  promptMenu();
})
};

const promptIntern = () => {
  console.log(`
  ===============
  Add a New Intern
  ===============
  `);

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Intern? (Required)',
      validate: InternName => {
        if (InternName) {
          return true;
        } else { 
          console.log('Please enter Intern name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter employee ID (Required)',
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log('Please enter employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter email address (Required)',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter GitHub username!');
          return false;
        }
      }
    },
  ]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.githubInput);
    teamMembers.push(intern);
    promptMenu();
  })
};

const buildTeam = () => {
  console.log(`
=============
Team complete!
=============
`);

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}
promptManager();

////////////////////////////////////////
///////////////////////////////////////






//  const employeeQuestions = [
//    {
//      type: 'input',
//      name: 'name',
//      message: 'What is your name? (Required)',
//      validate: nameInput => {
//        if (nameInput) {
//          return true;
//        } else { 
//          console.log('Please enter your name!');
//          return false;
//        }
//      }
//    },
//    {
//      type: 'input',
//      name: 'employeeId',
//      message: 'Enter your employee ID (Required)',
//      validate: employeeId => {
//        if (employeeId) {
//          return true;
//        } else {
//          console.log('Please enter your employee ID!');
//          return false;
//        }
//      }
//    },
//    {
//      type: 'input',
//      name: 'email',
//      message: 'Enter your email address (Required)',
//      validate: email => {
//        if (email) {
//          return true;
//        } else {
//          console.log('Please enter your email address!');
//          return false;
//        }
//      }
//    },
//    {
//      type: 'input',
//      name: 'officeNumber',
//      message: 'Enter your office number (Required)',
//      validate: officeNumber => {
//        if (officeNumber) {
//          return true;
//        } else {
//          console.log('Please enter your office number!');
//          return false;
//        }
//      }
//    },
//  ]
//  const managerQuestions = [
//    {
//      type: 'input',
//      name: 'manager_name',
//      message: 'What is your name? (Required)',
//      validate: managerNameInput => {
//        if (managerNameInput) {
//          return true;
//        } else { 
//          console.log('Please enter your name!');
//          return false;
//        }
//      }
//    },
//    {
//      type: 'input',
//      name: 'manager_email',
//      message: 'Enter your email address (Required)',
//      validate: managerEmail => {
//        if (managerEmail) {
//          return true;
//        } else {
//          console.log('Please enter your email address!');
//          return false;
//        }
//      }
//    },
//    {
//      type: 'input',
//      name: 'employeeId',
//      message: 'Enter your employee ID (Required)',
//      validate: employeeId => {
//        if (employeeId) {
//          return true;
//        } else {
//          console.log('Please enter your employee ID!');
//          return false;
//        }
//      }
//    },
//    {
//      type: 'input',
//      name: 'officeNumber',
//      message: 'Enter your office number (Required)',
//      validate: officeNumber => {
//        if (officeNumber) {
//          return true;
//        } else {
//          console.log('Please enter your office number!');
//          return false;
//        }
//      }
//    },
//    {
//      type: 'list',
//      name: 'team_member',
//      message: 'Would you like to add a team member?',
//      choices: ['Engineer', 'Intern'],
//    },


//  ]
//  const engineerQuestions = () => {
//    inquirer.prompt(employeeQuestions).then(answers => {
//      console.log(answers);
//    })
//  }
//  const internQuestions = () => {
//    inquirer.prompt(employeeQuestions).then(answers => {
//      console.log(answers);
//  })
//  }
//  const promptUser = () => {
//      inquirer.prompt(managerQuestions).then(answers => {
//        console.log(answers);

//        if(answers.team_member === "Engineer") {
//          engineerQuestions()

//        } else if (answers.team_member === "Intern") {
//          internQuestions()
//        } 
//      })
//    }

//  const outputFIle = (file_name, data) => {
//    fs.writeFileSync(`./outputData/${file_name}`)
//  }


//  promptUser()
 
