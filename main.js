function get_calc(btn) {
  if(btn.value == "=") {
    document.calc.display.value = eval(document.calc.display.value);
  } else if (btn.value == "AC") {
    document.calc.display.value = "";
  } else if (btn.value == "00" && document.calc.display.value == "") {
    document.calc.display.value = "";
  } else if (btn.value == "00" && document.calc.display.value == "0") {
    document.calc.display.value = "0";
  } else if (btn.value == "1" && document.calc.display.value == "0") {
    document.calc.display.value = btn.value;
  } else if (btn.value == "2" && document.calc.display.value == "0") {
    document.calc.display.value = btn.value;
  } else if (btn.value == "3" && document.calc.display.value == "0") {
    document.calc.display.value = btn.value;
  } else if (btn.value == "4" && document.calc.display.value == "0") {
    document.calc.display.value = btn.value;
  } else if (btn.value == "5" && document.calc.display.value == "0") {
    document.calc.display.value = btn.value;
  } else if (btn.value == "6" && document.calc.display.value == "0") {
    document.calc.display.value = btn.value;
  } else if (btn.value == "7" && document.calc.display.value == "0") {
    document.calc.display.value = btn.value;
  } else if (btn.value == "8" && document.calc.display.value == "0") {
    document.calc.display.value = btn.value;
  } else if (btn.value == "9" && document.calc.display.value == "0") {
    document.calc.display.value = btn.value;
  } else{
    document.calc.display.value += btn.value;
  }
}


function get_mark(btn) {
  if(document.calc.display.value.slice(-1) == "+" || document.calc.display.value.slice(-1) == "-" || document.calc.display.value.slice(-1) == "*" || document.calc.display.value.slice(-1) == "/" || document.calc.display.value.slice(-1) == ".") {
    const f = document.calc.display.value.slice(0,-1);
    document.calc.display.value = f + btn.value;
  } else if (document.calc.display.value == "") {
    document.calc.display.value = "";
  } else{
    document.calc.display.value += btn.value;
  }
}