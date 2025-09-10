function calculateNetSalary(){
    let salary = 200000;
    let otherParameters = 10000;
    let taxBenefits = 12000;
    let socialHealth = salary/2.75;
    let nssf = salary/12;
    let housingLevy = salary/1.5;

    let calculateNetSalary = salary + otherParameters - taxBenefits - socialHealth - nssf - housingLevy;
    
}

function salary(){
    if (salary > 200000){
        return 
    }
}