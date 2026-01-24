var TotalSalaryLib = (() => {

    var getTotalSalary = (BasicSalary) => {
        
        var pf = BasicSalary * 0.12;
        var hra = BasicSalary * 0.24;
        var totalAmount = BasicSalary + pf + hra;
        return totalAmount;
    }

    return {
        gettotalSal(BasicSalary) {
            return getTotalSalary(BasicSalary);
        }
    }

})();