// function openNav() {

//   if(document.getElementById("mySidebar").style.display== "block")
//   {
//     document.getElementById("mySidebar").style.display= "none"
//   }
//   else
//   {
//     document.getElementById("mySidebar").style.display= "block"
//   }
// }

// function closeNav() {
//   document.getElementById("mySidebar").style.display = "none";
// }

// before using this function install exceljs module

// function getData(){

  const ExcelJS = require('exceljs');
  const workbook = new ExcelJS.Workbook("./Data/All Data.xlsx");

  workbook.xlsx.readFile("./Data/All Data.xlsx", {sheetStubs: true})
  .then(function () {
    var worksheet = workbook.getWorksheet('Sheet1');

    var col = worksheet.getColumn(6).values;
    console.log(col);

  });
// };