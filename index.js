const employee = {
   name: 'Cat',
   streetAddress: '11 Spring St'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = '12 Broadway';
    return employee
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee}
    newEmployee[name] = undefined
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name]
    return employee;
}
 


//     const newEmployee = {...employee}
//     delete employee.name
//     employee[name] = undefined;
//     employee = newEmployee;
//     return newEmployee
// }