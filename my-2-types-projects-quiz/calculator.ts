/**
 * Let's make a calculator 🧮
 */

// 내가 작성했던 코드
/*
function calculate(
  operator: string,
  firstNum: number,
  secondNum: number
): number {
  let result = 0;
  switch (operator) {
    case "add":
      result = firstNum + secondNum;
      break;
    case "substract":
      result = firstNum - secondNum;
      break;
    case "multiply":
      result = firstNum * secondNum;
      break;
    case "divide":
      result = firstNum / secondNum;
      break;
    case "remainder":
      result = firstNum % secondNum;
      break;
    default:
      break;
  }
  return result;
}
*/

// 모범 답안 포인트
//  1. 첫 인자 'command'로 들어올 문자열은 정해져있으므로 union type으로 지정할 수 있다.
//    하지만 함수 정의부에 유니온 타입을 모두 나열하면 가독성이 떨어지므로, 별도 타입을 명시해 사용했다.
//  2. result 변수를 별도로 정의하고 마지막에 따로 return문을 써주지 않아도 됐다.
//  3. 에러처리 구문을 넣어주는 습관을 들여두자.
type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(command: Command, a: number, b: number): number {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw new Error("Unknow Error");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
