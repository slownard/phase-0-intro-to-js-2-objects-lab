// Write your solution in this file!

const employee = {
    name: "Bernard",
    streetAddress: {
        city: "Jersey City",
        state: "New Jersey"
    }
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    //spread operator copies all the elements of the existing array into the new one 
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return employee, newEmployee;
}

// this function updates employee; key & value and returns the updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

//deletes key from a clone of employee and returns the new employee 
function deleteFromEmployeeByKey(employee, key) {

    var newEmployee = { ...employee }
    delete newEmployee[key];
    return newEmployee;
}

//works the same as the previous function, should mutate employee object 
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}

