let firstNum = parseFloat(prompt("Enter first number"));
      let operator = prompt("Enter the operator from the list below(+,-,*,/)");
      let secondNum = parseFloat(prompt("Enter second number"));
      //the firstNum and secondNum was passed with parseFloat, so it can collect numbers for both integer and float(decimal).

      let answer;
      if (operator === "+") {
        answer = firstNum + secondNum;
      } else if (operator === "-") {
        answer = firstNum - secondNum;
      } else if (operator === "/") {
        answer = firstNum / secondNum;
      } else if (operator === "*") {
        answer = firstNum * secondNum;
      } else {
        alert(`This is a wrong alert`);
      }
      alert(`answer: ${answer}`);