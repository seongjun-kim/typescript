{
  // type을 강제하는 Type Assertion의 활용 또한 권장되지 않는다.
  // 하지만 타입을 활용하지 않는 자바스크립트와 연동되는 상황에서 불가피하게 활용해야 하는 아래와 같은 상황이 있다.
  function jsStrFunc(): any {
    // return "hello";
    return -3;
  }
  const result = jsStrFunc();
  // result.length;   // result를 any 타입으로 보고 있어서 length 메소드가 자동완성을 통해 추천되지 않았다.
  // result가 무.조.건 문자열일 것임을 확신하고 캐스팅(Type Assertion) 적용!
  //   console.log((result as string).length);  // 활용 예시 1
  console.log((<string>result).length); // 활용 예시 2

  // 아래와 같은 에러 케이스가 있으므로 활용에 주의를 해야한다.
  //   const wrong: any = 5;
  //   console.log((wrong as Array<number>).push(1)); // number array가 아닌 wrong 변수에 대해 push를 시도해서 에러 발생!

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // 여기에서 number[] 타입임을 확신을 더해 표현하기 위한 '!'를 넣어줄 수도 있고
  numbers.push(2); // 여기에서 확신을 표현하기 위해 numbers 다음에 '!'를 넣을 수도 있다.

  // '확신' 보다는 '확인'을 하는 방식
  const button = document.querySelector("class"); // querySelector가 null을 반환하는 경우도 있는데,
  if (button) {
    // button의 유무를 체크한 뒤에 button.nodeValue 등에 접근하는 방식으로
    // 타입에 대한 확신보다는 유/무 체크를 거치는 방식
  }
}
