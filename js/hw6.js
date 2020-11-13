//<!--hw6.js
//Heron Melo
//heron_melo@student.uml.edu
//Student of GUI Programming I 91.61 - UML
//File Created on: 11/12/2020
//In this assignment we will create a dynamic table using JQuery for validation.-->


// jQuery Validation
$(document).ready(function () { $(".form").submit(function (e) {
      e.preventDefault();readInput();})
    // Validation rules
    .validate({
      rules: {
        minColValInput: {required: true, range: [-60, 60],},
        maxColValInput: {required: true, range: [-60, 60], greaterThan: "#minColValInput",},
        minRowValInput: {required: true, range: [-60, 60],},
        maxRowValInput: {required: true, range: [-60, 60], greaterThan: "#minRowValInput",},},
      // Error messages
      messages: {
        minColValInput: {required: "Min Col Value Required!", range: "Must be between -50 to 50.",},
        maxColValInput: {required: "Max Col Value Required!", range: "Must be between -50 to 50.",},
        minRowValInput: {required: "Min Row Value Required!", range: "Must be between -50 to 50.",},
        maxRowValInput: {required: "Max Row Value Required!", range: "Must be between -50 to 50.",},
      },
    });
});


// check if min > max
$.validator.addMethod(
  "greaterThan",
  function (value, element, param) {
    if (this.optional(element)) return true;
    var $otherElement = $(param);
    return parseInt(value, 10) >= parseInt($otherElement.val(), 10);
  },
  "Min Value Needs To Be Smaller Than Max Value!"
);

// Read input from form
function readInput() {

  var minColVal = parseInt(document.getElementById("minColValInput").value);
  var maxColVal = parseInt(document.getElementById("maxColValInput").value);
  var minRowVal = parseInt(document.getElementById("minRowValInput").value);
  var maxRowVal = parseInt(document.getElementById("maxRowValInput").value);

//check for errors
  if (minColVal > maxColVal) {return;}
  else if (minRowVal>maxRowVal){return;}

  createTable(minColVal, maxColVal, minRowVal, maxRowVal);
}

function createTable(minColVal, maxColVal, minRowVal, maxRowVal) {
  var j, i;
  var table = "";

  // Create table
  for (j = minRowVal - 1; j <= maxRowVal; j++) {
    table += "<tr>";
    if (j == minRowVal - 1) {
      table += "<td></td>"; // empty cell
      for (i = minColVal; i <= maxColVal; i++) {
        table += "<td>" + i + "</td>";
      }
    } else {
      table += "<td>" + j + "</td>";
      for (i = minColVal; i <= maxColVal; i++) {
        table += "<td>" + i * j + "</td>";
      }
    }
    table += "</tr>";
  }

  // Insert table
  document.getElementById("multiplicationTable").innerHTML = table;
}

// invalid chars
var invalidChars = ["+", "e", ".", "/","-","*","#","$","%","&","!"];
inputArray.forEach(function (element) {
  element.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
});


// check input

var minColValInput = document.getElementById("minColValInput");
var maxColValInput = document.getElementById("maxColValInput");
var minRowValInput = document.getElementById("minRowValInput");
var maxRowValInput = document.getElementById("maxRowValInput");
var inputArray = [minColValInput, maxColValInput, minRowValInput, maxRowValInput];
