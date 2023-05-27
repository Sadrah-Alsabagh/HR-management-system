"use strict";

let id = 1000;
const allEmployees = [];

function Employee(fullName, department, level, image) {
    this.id = function () {
        id++;
        console.log(id);
        return id;
    };
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = function (level) {
        const levelSalary = {
            "Senior": { min: 1500, max: 2000 },
            "Mid-Senior": { min: 1000, max: 1500 },
            "Junior": { min: 500, max: 1000 }
        };

        const min = levelSalary[level].min;
        const max = levelSalary[level].max;

        // Calculate random salary 
        const randomSalary = min + Math.random() * (max - min + 1);

        const netSalary = Math.floor(randomSalary - (randomSalary * 0.075));
        return netSalary;
    };

    allEmployees.push(this);
}

// 5.Render employees
let gazi = new Employee("Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg");
let safi = new Employee("Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg");

let lana = new Employee("Lana Ali", "Finance", "Senior", "./assets/Lana.jpg");
let hadi = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg");

let omar = new Employee("Omar Ziad", "Development", "Senior", "./assets/Omar.jpg");
let rana = new Employee("Rana Saleh", "Development", "Junior", "./assets/Rana.jpg");

let tamara = new Employee("Tamara Ayoub", "Marketing", "Senior", "./assets/Tamara.jpg");

Employee.prototype.renderEmployees = function () {
    let body = document.getElementsByTagName("body")[0];

    //Department Sections
    //Stretch goal
    let departmentSection = document.createElement('div');
    departmentSection.id = this.department;
    let depSec = document.getElementById(this.department);
    if (!depSec) {
        departmentSection = document.createElement('div');
        departmentSection.id = this.department;
        body.appendChild(departmentSection);

        departmentSection.setAttribute('class', 'department');

        let h2Department = document.createElement('h2');
        h2Department.textContent = this.department;
        departmentSection.appendChild(h2Department);
    }

    //Cards
    let cardsContainer = document.createElement('div');
    cardsContainer.setAttribute('class', 'cardsContainer');
    body.appendChild(cardsContainer);

    let cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card');
    cardsContainer.appendChild(cardDiv);

    let imgE = document.createElement('img');
    imgE.setAttribute('src', this.image);
    cardDiv.appendChild(imgE);

    let nameID = document.createElement('p');
    nameID.textContent = `Name: ${this.fullName} - ID: ${this.id()}`;;
    nameID.classList.add("empData");
    cardDiv.appendChild(nameID);

    let depLevel = document.createElement('p');
    depLevel.textContent = `Department: ${this.department} - Level: ${this.level}`;
    depLevel.classList.add("empData");
    cardDiv.appendChild(depLevel);

    let salary = document.createElement('p');
    salary.textContent = this.salary(this.level);
    salary.classList.add("empData");
    cardDiv.appendChild(salary);

}

for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].renderEmployees();
}

