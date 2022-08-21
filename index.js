const mysql = require ('mysql2');
const inquirer = require ('inquirer');

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
    inquirer.prompt(initQuestions).then((response) => {
        if (response.whatToDo === "View all departments") {
            console.log('view departments');
            // return init();
        }
        if (response.whatToDo === "View all roles") {
            console.log('view roles');
            // return init();
        }
        if (response.whatToDo === "View all employees") {
            console.log('view employees');
            // return init();
        }
        if (response.whatToDo === "Add a department") {
            console.log('Add a department')
            addDepartmentPrompt();
        }
        if (response.whatToDo ==="Add a role") {
            console.log('add a role');
            addRolePrompt();
        }
        if (response.whatToDo === "Add an employee") {
            console.log('add an employee');
            addEmployeePrompt();
        }
    });
};


function addDepartmentPrompt() {

};

function addRolePrompt() {

};

function addEmployeePrompt() {

}





init();