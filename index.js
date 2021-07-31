const employee = new Object();

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 

    return employee;
  }  

// function updateEmployeeWithKeyAndValue() { 

// }

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };

    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

