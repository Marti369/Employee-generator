//require fs and inquirer to be able to use them
const fs = require('fs');
const inquirer = require('inquirer');

//this is require to import code from employees
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const html = require('./src/html.js');
const { generatePage, newMemberGenerate } = require('./src/html.js');

//Anwers create a new array
const answersEmployees = [];
//arrow function to ask questions for Manager
const questionsManager = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the Managers name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter a Managers name!");
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter an Employee ID number:',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter an employee ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter an email address:',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter an Email address!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'phone',
                message: 'Please enter the Managers Office Number:',
                validate: phoneInput => {
                    if (phoneInput) {
                        return true;
                    } else {
                        console.log("Please enter the Managers Office Number!")
                        return false;
                    }
                }
            },
            /* {
                type: 'input',
                name: 'github',
                message: 'Please enter Managers Github username:',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter an Managers Github Username!")
                        return false;
                    }
                }
            } */
        ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.phone, /* response.github */ );
            answersEmployees.push(manager);
        })

}

//to add another employee

const addEmployee = () => {
    console.log(`
    ===============================
    Add Another Intern, Engineer or Done
    ===============================
    `);
    return inquirer.prompt([{
            type: 'list',
            name: 'team',
            message: 'Please select if you would like to add an Intern, Engineer, or Finish My Team',
            choices: ['Intern', 'Engineer', 'Finish Team'],
        }])
        .then((response) => {
            if (response.team === 'Intern') {
                return questionsIntern();
            } else if (response.team === 'Engineer') {
                return questionsEngineer();
            } else if (response.team === 'Finish Team') {
                /* HTML(); */
            }
        });
}



const questionsEngineer = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Please enter engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter engineer's name");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter Engineers ID",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter Engineers ID number");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter engineer's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter engineer's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter engineers's Github username?",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter engineer's Github username!");
                        return false;
                    }
                }
            }
        ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            answersEmployees.push(engineer);
        })
        .then(addEmployee);
}

//this will ask for Intern

const questionsIntern = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "Enter the Intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Intern's name")
                    return false;
                }
            }
        },
        {
            input: 'input',
            name: 'id',
            message: 'Please enter u your Intern ID:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter an Intern ID number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter Inter's email address:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an Intern Email Address!")
                    return false;
                }
            }
        },
        /* {
            type: 'input',
            name: 'github',
            message: 'Please enter Interns Github username:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter an Inter Github Username!")
                    return false;
                }
            }
        }, */
        {
            type: 'input',
            name: 'school',
            mesage: 'Please enter Intern Schools name:',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the name of Interns school:")
                }
            }
        }

    ])

    .then(response => {
        const intern = new Intern(response.name, response.id, response.email, /* response.github */ response.school);
        answersEmployees.push(intern);
    })

    //this will prompt again if want to add intern enineer or done
    .then(addEmployee);
}



let employees = ``;

const HTML = function() {
    for (let i = 0; i < answersEmployees.length; i++) {
        employees = employees + newMemberGenerate(answersEmployees[i]);
    }

    let generateHtml = generatePage(employees)

    // write file with fsWriteFile 
    fs.writeFile('./dist/index.html', generateHtml, err => {
        if (err) throw err;
        console.log("Your Employee Team has been created!");
    });
};


//call function to run

questionsManager()
    .then(addEmployee)
    .then(HTML);