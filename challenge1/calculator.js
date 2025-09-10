function grossPay(salary, allowance, benefits){// amount of money gained
    return salary + allowance + benefits;
}

function totalDeductions(gross){// the money that gets deducted
    let shif = gross * 0.025;
    let houseLevy = gross * 0.015;
    return shif + houseLevy;
}

function getNetSalary(salary, allowance, benefits){// money after the deductions
    let gross = grossPay(salary, allowance, benefits);// adds up the amount in the brackets
    let deductions = totalDeductions(salary, allowance, benefits);
    let net = gross - deductions;

    return {
        gross: gross.toFixed(2),// makes the number have 2 deciaml places
        deductions: deductions.toFixed(2),
        net: net.toFixed(2)
    };
}// returns the function
