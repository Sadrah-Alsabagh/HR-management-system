"use strict";
let id = 1000; // Starting employee ID

    //1. display the employees using a literal object
   const employees = [
      {
        id: generateID(),
        fullName: 'Ghazi Samer',
        department: 'Administration',
        level: 'Senior',
        imageUrl: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        salary: calculateSalary('Senior'),
      },
      {
        id: generateID(),
        fullName: 'Lana Ali',
        department: 'Finance',
        level: 'Senior',
        imageUrl: 'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        salary: calculateSalary('Senior'),
      },
      {
        id: generateID(),
        fullName: 'Tamara Ayoub',
        department: 'Marketing',
        level: 'Senior',
        imageUrl: 'https://images.pexels.com/photos/3747446/pexels-photo-3747446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        salary: calculateSalary('Senior'),
      },
      {
        id: generateID(),
        fullName: 'Safi Walid',
        department: 'Administration',
        level: 'Mid-Senior',
        imageUrl: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        salary: calculateSalary('Mid-Senior'),
      },
      {
        id: generateID(),
        fullName: 'Omar Zaid',
        department: 'Development',
        level: 'Senior',
        imageUrl: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        salary: calculateSalary('Senior'),
      },
      {
        id: generateID(),
        fullName: 'Rana Saleh',
        department: 'Development',
        level: 'Junior',
        imageUrl: 'https://images.pexels.com/photos/7552568/pexels-photo-7552568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        salary: calculateSalary('Junior'),
      },
      {
        id: generateID(),
        fullName: 'Hadi Ahmad',
        department: 'Finance',
        level: 'Mid-Senior',
        imageUrl: 'https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        salary: calculateSalary('Mid-Senior'),
      }
    ];



//2.Create a method to generate a unique four digits employee id number.
function generateID() {
  id++;
  console.log(id);
  return id;
}


    //3+4.Calculating salary.
    function calculateSalary(level) {
      const levelData = {
        'Senior': { min: 1500, max: 2000 },
        'Mid-Senior': { min: 1000, max: 1500 },
        'Junior': { min: 500, max: 1000 }
      };
      const { min, max } = levelData[level];
      const salary = Math.floor(min + Math.random() * (max - min + 1));
      const netSalary = salary - (salary * 0.075); // 7.5% tax
      return netSalary;
    }


    // 5.Render employees
    function renderEmployees() {
      const employeeList = document.getElementById('employeeList');
      employees.forEach(employee => {
        const employeeInfo = document.createElement('p');
        employeeInfo.innerHTML = `Employee name: ${employee.fullName}<br>Employee salary: ${employee.salary}<br><br>`;
        employeeList.appendChild(employeeInfo);
      });
    }

    // Call the function to display the employees
    renderEmployees();