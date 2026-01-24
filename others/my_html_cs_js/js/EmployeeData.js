var empClosure = (() => {

    var empDataObj = {};

    empDataObj.refreshData = () => {

        document.querySelector("#ename").value = "";
        document.querySelector("#eage").value = "";
        document.querySelector("#basicSalary").value = "";
        // document.querySelector("#empDept").value = "";

        empDataObj.Name = "";
        empDataObj.Age = "";
        empDataObj.Gender = "";
        empDataObj.BasicSalary = "";
        empDataObj.Dept = "";

    };

    empDataObj.generateCard = () => {
        try 
        {
            empDataObj.Name = document.querySelector("#ename").value;
            empDataObj.Age = document.querySelector("#eage").value;
            empDataObj.Gender = document.querySelector("input[name = 'gender']:checked").value;
            empDataObj.BasicSalary = document.querySelector("#basicSalary").value;
            empDataObj.Dept = document.querySelector("#empDept").value;

            if(empDataObj.Name == "")
            { 
                throw 'nameErr';
            }
            else if(empDataObj.Age == "")
            {
                throw 'ageErr';
            }
            else if(empDataObj.BasicSalary == "")
            {
                throw 'basicSalary';
            }
            else
            {

                var main_div = document.querySelector('.right');
            
                var div = document.createElement('div');
                div.setAttribute('class', 'card');
                main_div.append(div);
            
                var ul = document.createElement('ul');
                ul.setAttribute('class', 'cardList');
                div.append(ul);
            
                var li = document.createElement('li');
                ul.append(li);
            
                var div2 = document.createElement('div');
                div2.setAttribute('class', 'label');
                div2.innerHTML = 'Employee Name : ';
                var div3 = document.createElement('div');
                div3.setAttribute('class', 'lblTxt');
                div3.innerHTML = empDataObj.Name;
            
                li.append(div2);
                li.append(div3);
            
                var li2 = document.createElement('li');
                ul.append(li2);
            
                var div4 = document.createElement('div');
                div4.setAttribute('class', 'label');
                div4.innerHTML = 'Employee Gender : ';
                var div5 = document.createElement('div');
                div5.setAttribute('class', 'lblTxt');
                div5.innerHTML = empDataObj.Gender;
            
                li2.append(div4);
                li2.append(div5);
            
                var li3 = document.createElement('li');
                ul.append(li3);
            
                var div6 = document.createElement('div');
                div6.setAttribute('class', 'label');
                div6.innerHTML = 'Employee Department : ';
                var div7 = document.createElement('div');
                div7.setAttribute('class', 'lblTxt');
                div7.innerHTML = empDataObj.Dept;
            
                li3.append(div6);
                li3.append(div7);
            
                var li4 = document.createElement('li');
                ul.append(li4);
            
                var div8 = document.createElement('div');
                div8.setAttribute('class', 'label');
                div8.innerHTML = 'Employee Basic Salary : ';
                var div9 = document.createElement('div');
                div9.setAttribute('class', 'lblTxt');
                div9.innerHTML = empDataObj.BasicSalary;
            
                li4.append(div8);
                li4.append(div9);
            
                var li5 = document.createElement('li');
                ul.append(li5);
            
                var div10 = document.createElement('div');
                div10.setAttribute('class', 'label');
                div10.innerHTML = 'Employee Total Salary : ';
                var div11 = document.createElement('div');
                div11.setAttribute('class', 'lblTxt');
                div11.innerHTML = TotalSalaryLib.gettotalSal(parseInt(empDataObj.BasicSalary));
            
                li5.append(div10);
                li5.append(div11);

                empDataObj.refreshData();
                
            }

        }
        
        catch(error)
        {
            if(error == 'nameErr')
            {
                document.querySelector('.nameErr').style.display = "block";
            }
            else if(error == 'ageErr')
            {
                document.querySelector('.ageErr').style.display = "block";
            }
            else if(error == 'basicSalary')
            {
                document.querySelector('.salaryErr').style.display = "block";
            }
        }

    };

    return {
        getDataObj(){
            return empDataObj.generateCard()
        }
        
    }
})();

generatePaySlip = () =>
{
    empClosure.getDataObj();
}

var removeNameAlert = () => {
    document.querySelector('.nameErr').style.display = "none";
}
var removeAgeAlert = () => {
    document.querySelector('.ageErr').style.display = "none";
}
var removeSalaryAlert = () => {
    document.querySelector('.salaryErr').style.display = "none";
}

