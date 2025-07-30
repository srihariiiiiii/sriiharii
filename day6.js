let employees = [];

function addEmp(id, name, salary = true) {
    employees.push({ id, name, salary });
    console.log("Employee added:", employees);
}

addEmp(1, "santo", 20000);
addEmp(2, "saii", 30000);
addEmp(3, "rishii", 400);

function updateEmp(id, newDetail) {
    const emp = employees.find(e => e.id === id);
    if (emp) {
        Object.assign(emp, newDetail);
        console.log("Employee updated:", employees);
    } else {
        console.log("Employee not found");
    }
}

updateEmp(3, { name: "srihari" });

function removeEmp(id) {
    const index = employees.findIndex(e => e.id === id);
    if (index !== -1) {
        employees.splice(index, 1);  // 
        console.log("Employee removed:", employees);
    } else {
        console.log("Employee not found");
    }
}

removeEmp(1);

//calculate total salary
function totalSalary(){
    const total=employees.reduce((sum,emp)=>sum+emp.salary,0);
    console.log("total salary is",total);

}
totalSalary()
