// 커맨드 창에서
// ts-node 1-2-function.ts
// 명령어로 실행 가능!

{
  // JavaScript에서의 함수의 문제
  // 1. 어떤 타입의 인자를 다루고, 어떤 타입의 값을 반환하는지 명시되어있지 않다.
  // 2. num1, num2 자리에 문자열이 들어오면 '+' 연산을 통해 문자열을 붙여주게 된다.
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // TypeScript
  // 타입을 기입하므로서 문서화(코드의 정보를 설명)
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript에서의 함수의 문제
  //   function jsFetchNum(id) {
  //     // ... code ...
  //     // ... code ...
  //     // ... code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   // TypeScript
  //   function tsFetchNum(id: string): Promise<number> {
  //     // ... code ...
  //     // ... code ...
  //     // ... code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // 최신 JavaScript 문법을 활용 + TypeScript에서만 제공하는 문법 활용
  // 함수 정의 예시

  // Optional Parameter
  //   function printName(firstName:string, lastName:string) { // An argument for 'lastName' was not
  //   function printName(firstName: string, lastName: string | undefined) { // 이 경우, 두 번째 파라미터를 넣지 않은 케이스에 대해서는 에러가 발생!
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Shawn", "James");
  printName("Louis", undefined);
  printName("Rocky");

  // Default Parameter
  // function printMessage(message: null | string = "Default Message") {
  function printMessage(message: string = "Default Message") {
    console.log(message);
  }
  printMessage();
  printMessage(undefined);
  // printMessage(null); // 위 두 케이스와 달리, null은 'null'로 출력된다!
  printMessage("wow");

  // Rest Parameter
  function addNumbers(...nums: number[]): number {
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // return nums.reduce(reducer);
    return nums.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8));
}
