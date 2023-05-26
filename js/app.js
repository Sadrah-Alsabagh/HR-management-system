"use strict";
// Lab 09

let id = 1000;
const allEmployees = [];

function Employee(fullName, department, level, imageUrl) {
    this.id = function(){
         id++;
        console.log(id);
        return id;
    };
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = function(level) {
        const levelSalary = {
            "Senior": { min: 1500, max: 2000 },
            "Mid-Senior": { min: 1000, max: 1500 },
            "Junior": { min: 500, max: 1000 }
        };
    
        const min = levelSalary[level].min;
        const max = levelSalary[level].max;
    
        // Calculate random salary 
        const randomSalary = Math.floor(min + Math.random() * (max - min + 1));
    
        const netSalary = randomSalary - (randomSalary * 0.075);
        return netSalary;
    };
    
    allEmployees.push(this);
}

// 5.Render employees


let gazi = new Employee("Ghazi Samer", "Administration", "Senior", "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
let lana = new Employee("Lana Ali", "Finance", "Senior", "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
let tamara = new Employee("Tamara Ayoub", "Marketing", "Senior", "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
let safi = new Employee("Safi Walid", "Administration", "Mid-Senior", "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
let omar = new Employee("Omar Ziad", "Development", "Senior", "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
let rana = new Employee("Rana Saleh", "Development", "Junior", "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
let hadi = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

Employee.prototype.renderEmployees = function () {
    const employeeInfo = `<p>Employee name: ${this.fullName}<br>Department: ${this.department}<br>Employee salary: ${this.salary(this.level)}</p><br><br>`;
    document.write(employeeInfo);
};


for (let i = 0; i < allEmployees.length; i++){
    allEmployees[i].renderEmployees();
}





