{
  // 여러 관련 상수를 한 곳에 모아서 정의할 수 있도록 도와주는 타입
  // 자바스크립트에는 존재하지 않고, 타입스크립트에서만 지원되는 타입
  // 해당 타입에 대한 보장(어떠한 내용들을 담고 있는지)과 불변하도록 막아 안정적

  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  // const MONDAY = 0;
  // const TUESDAY = 1;
  // const WEDNESDAY = 2;
  // ...

  // [JavaScript]
  // 자바스크립트에서는 Object.freeze를 활용해서
  // enum 기능을 유사하게 활용할 수 있다.
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
    FRIDAY: 4,
    SATURDAY: 5,
    SUNDAY: 6,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // [TypeScript]
  // + enum 변수는 전체 단어를 대문자로 적지 않고, 맨 앞글자만 대문자로 적어준다
  enum Days {
    Monday = 1, // 이렇게 1부터 지정을 하지 않으면 0부터 시작된다.
    Tuesday,
    Wednesday,
    Thursday,
    // 문자열로도 할당 가능한데, 그 경우 순차적으로 매칭이 안되기 때문에 이후 값들에 대해서도 수동적으로 다 입력을 해주어야 한다.
    // Friday= "금요일",
    Friday,
    Saturday,
    Sunday,
  }
  // console.log(Days.Sunday);

  // [결론] 타입스크립트에서 enum 쓰지 말자!
  // 타입의 완벽한 보장이 이뤄지지 못한다.
  let day: Days = Days.Saturday; // 타입 추론에 의해 day변수는 Days enum 변수를 할당 받을 수 있다.
  day = Days.Thursday;
  day = 10; // enum을 통해 정의한 범주를 벗어남에도 정상적으로 컴파일이 된다!? => 타입 보장이 안된다...!
  console.log(day);

  // [대안] enum 대신 Union Type을 통해 타입 범위 명시함으로써 통제
  // 단, Android/iOS와 같은 모바일 클라이언트 개발에 쓰이는 네이티브 프로그래밍 언어에서는
  // Union Type을 표시할 수 있는 방법이 없기 때문에 enum을 사용해야 했다!
  type DaysOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  let dayOfWeek: DaysOfWeek = "Mon";
  // dayOfWeek = 'ELELELE';  // Type '"ELELELE"' is not assignable to type 'DaysOfWeek'.ts(2322)
}
