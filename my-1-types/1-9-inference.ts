{
  let text = "hello"; // type inference에 의해 string 변수로 할당됨
  // text = 5; // Type 'number' is not assignable to type 'string'.ts(2322)

  //   function print(message: string) {
  function print(message = "[default message]") {
    console.log(message);
  }
  print("hello");
  // default value 할당을 통한 type inference가 적용되어서 아래 error 발생!
  //   print(1); // Argument of type '1' is not assignable to parameter of type 'string | undefined'.ts(2345)

  function add(x: number, y: number) {
    return x + y; // 두 number 인자를 활용한 값을 반환하므로 자동적으로 반환형이 number임이 추론되었다!
  }
  const result = add(1, 2); // result 또한 type inference에 의해 number임이 확인된다.

  // 원시 타입 변수가 아닌 함수의 경우에는 반환값이 없는 void 함수 외에는
  // 타입 명시를 해주는것이 가독성을 높일 수 있어 좋다.
  // 가독성을 생각해서 팀 내 규칙을 정해서 적용하는 것이 중요
}
