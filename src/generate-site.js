const generateTeam = (team) => {
  console.log(team);
  const html = [];
  const generateManager = manager => {
    console.log(manager);
    let managerHtml = `
    

    <h1>${manager.name}</h1>
    <ul>
      <li>${manager.id}</li>
      <l1>${manager.email}</li>
      <li>${manager.officeNumber}</li>
    </ul>
  `;
  html.push(managerhtml);
  }
  const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHtml = `
    <h1>${engineer.name}</h1>
    <ul>
      <li>${engineer.id}</li>
      <l1>${engineer.email}</li>
      <li>${engineer.githubInput}</li>
    </ul>
    `;
    html.push(engineerHtml);
  }
  const generateIntern = intern => {
    console.log(intern);
    let internHtml = `
    <h1>${intern.name}</h1>
    <ul>
      <li>${intern.id}</li>
      <l1>${intern.email}</li>
      <li>${intern.githubInput}</li>
    </ul>
    `;
    html.push(internHtml);
  }
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      generateIntern(team[i]);
    }
  }
  return html.join('');

}
module.exports = team => {

  return `
  <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
       <h1>My Team</h1>
      </header>
      <main> ${generateTeam(team)} </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
  
  `
}


   
    
  