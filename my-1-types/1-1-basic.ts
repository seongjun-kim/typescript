{
  // es5까지 쓰이던 var는 호이스팅이나 기타 불명확한 코드를 만들어낼 수 있고,
  // 타겟 버전을 낮은 버전으로 선택해 전환이 가능하기 때문에 브라우저(버전) 호환성 문제도 걱정할 필요가 없다!
  // var name = 'Jake';
  // name = 'Wiley';

  // let은 es6부터 도입된 문법
  let name = "Jake";
  name = "Wiley";

  const age = 25;
  // age = 30; // const는 불변 변수 선언 방식이므로 재할당 불가!

  // Javascript 타입
  // 1. Primitive Type: number, string, boolean, bigint, symbol, null, undefined
  // 2. Object Type: 그 외 모든 타입 (function, array, ...)

  // Typescript에서의 분명한 타입 구분

  // number
  // const num:number = 'what?'; // [Error] Type 'string' is not assignable to type 'number'.ts(2322)
  const num: number = -6;

  // string
  const str: string = "wow";

  // boolean
  const bool: boolean = false;

  // undefined
  // let school:undefined = 'SOO Univ'; // undefined 타입은 최초 선언에 사용하기보다는
  let school: string | undefined = "SOO Univ"; // 유니온 타입('|': 또는(or)을 의미)을 활용해 Optional Type 방식으로 선언
  school = undefined; // 윗줄에서 Optional Type 선언해두어서 가능!
  school = "SNU";
  // 함수에서 반환할 값이 없는 경우 undefined를 반환
  function findSchoolName(): string | undefined {
    return undefined;
  }

  // null
  let score: number | null = 90;
  // 함수에서 반환할 값에 대한 결정을 못한 경우 undefined 쓴다면,
  //  값이 없다는 의미를 명시적으로 나타낼 때 null을 사용
  score = null;
  score = 80;

  // unknown
  // 타입이 없는 자바스크립트와 연동하기 위해 쓰임
  // 자바스크립트 라이브러리를 연동하는 상황에서 리턴 타입을 모르는 경우 활용
  // 가급적이면 타입을 명확히 지정해서 사용하는것이 좋다.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any
  // unknown과 마찬가지로 any도 타입을 결정하지 않고 변수를 유동적으로 활용할 수 있음.
  let anything: any = 0;
  anything = "wow";

  // 함수 타입을 지정할 때 쓰이는 타입: void, never
  // void
  // 아래 함수 끝에 'return;' 라인이 없더라도
  // 단순 로그 출력 외에 별도의 return 사항이 없는 함수의 경우,
  //  자동적으로 void 함수로 할당됨
  //   function print() {
  function print(): void {
    console.log("wowowow");
    // return;
  }

  // never
  // 에러를 던지는(throw) 경우 또는 'while(true)'와 같이 반환하는 값이 없는 함수의 경우
  // never 타입으로 지정함으로써 해당 함수를 활용하는 개발자가
  // 반환되는 부분이 없음을 인지할 수 있도록 구분해주는 부분
  function throwError(message: string): never {
    //   sendMessageToServer(message); // message를 서버에 보내 서버에도 에러 로그 남김
    throw new Error(message);
    // while (true) {}
  }

  // object
  //   let obj: object;
  //   obj = ["가", "나"];
  //   obj = { age: 30 };
  function acceptSomeObject(obj: object) {
    console.log(obj);
  }
  acceptSomeObject({ name: "Kim" });
  acceptSomeObject({ animal: "Horse" });
}
