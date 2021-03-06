/**
 * Let's make a calculator ๐งฎ
 */

// ๋ด๊ฐ ์์ฑํ๋ ์ฝ๋
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

// ๋ชจ๋ฒ ๋ต์ ํฌ์ธํธ
//  1. ์ฒซ ์ธ์ 'command'๋ก ๋ค์ด์ฌ ๋ฌธ์์ด์ ์ ํด์ ธ์์ผ๋ฏ๋ก union type์ผ๋ก ์ง์ ํ  ์ ์๋ค.
//    ํ์ง๋ง ํจ์ ์ ์๋ถ์ ์ ๋์จ ํ์์ ๋ชจ๋ ๋์ดํ๋ฉด ๊ฐ๋์ฑ์ด ๋จ์ด์ง๋ฏ๋ก, ๋ณ๋ ํ์์ ๋ช์ํด ์ฌ์ฉํ๋ค.
//  2. result ๋ณ์๋ฅผ ๋ณ๋๋ก ์ ์ํ๊ณ  ๋ง์ง๋ง์ ๋ฐ๋ก return๋ฌธ์ ์จ์ฃผ์ง ์์๋ ๋๋ค.
//  3. ์๋ฌ์ฒ๋ฆฌ ๊ตฌ๋ฌธ์ ๋ฃ์ด์ฃผ๋ ์ต๊ด์ ๋ค์ฌ๋์.
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
