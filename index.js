const mysql = require ('mysql2');
const inquirer = require ('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Casca21casca', //add password
        database: 'company_db'
    },
    console.log(`Connected to company_db.`)
);

const initQuestions = [
    {
        type: 'list',
        message: 'What do you want to do?',
        name: "whatToDo",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
    }
]

const addDepartment = [
    {
        type: 'input',
        message: 'Enter name of department you would like to add.',
        name: 'addDepartment',
    }
]

const addRole = [
    {
        type: 'input',
        message: 'Enter name of role you would like to add.',
        name: 'addRole', 
    }
]
const addEmployee = [
    {
        type: 'input',
        message: 'Enter first name of Employee you would like to add.',
        name: 'firstName', 
    },
    {
        type: 'input',
        message: 'Enter last name of Employee you would like to add.',
        name: 'lastName', 
    },
    {
        type: 'input',
        message: 'Enter role of Employee you would like to add.',
        name: 'employeeRole', 
    },
    {
        type: 'input',
        message: 'Enter Manager name of Employee you would like to add.',
        name: 'employeeManager', 
    },
]

const updateEmployee = [
    {
        type: 'list',
        message: 'Chose employee to update.',
        choices: [],
    },
]


function init () {

    console.log(`
    ***************EMPLOYEE TRACKER****************
    `)

    inquirer.prompt(initQuestions).then((response) => {
        if (response.whatToDo[0]) {
            viewDepartment();
        }
        if (response.whatToDo[1]) {
            viewRole();
        }
        if (response.whatToDo[2]) {
            viewEmployee();
        }
        if (response.whatToDo[3]) {
            console.log('Add a department')
            addDepartmentPrompt();
        }
        if (response.whatToDo[4]) {
            console.log('add a role');
            addRolePrompt();
        }
        if (response.whatToDo[5]) {
            console.log('add an employee');
            addEmployeePrompt();
        }
    });
};

function viewDepartment() {
    db.query(`SELECT * FROM department `, function (err, results) {
        if (err) {
            console.error(err);
        }
        console.table(results);
        init();
    });
};

function viewRole() {
    db.query(`SELECT * FROM role `, function (err, results) {
        if (err) {
            console.error(err);
        }
        console.table(results);
        init();
    });
};

function viewEmployee() {
    db.query(`SELECT * FROM employee `, function (err, results) {
        if (err) {
            console.error(err);
        }
        console.table(results);
        init();
    });
};


function addDepartmentPrompt() {
    inquirer.prompt(addDepartment).then((response) => {

    })
};

function addRolePrompt() {
    inquirer.prompt(addRole).then((response) => {

    })

};

function addEmployeePrompt() {
inquirer.prompt(addEmployee).then((response) => {

})
}





init();