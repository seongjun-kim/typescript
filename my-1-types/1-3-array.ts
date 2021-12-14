{
  // Array
  const fruits: string[] = ["Apple", "Tomato"];
  // const numbers: number[] = [1,3,4,5];
  const numbers: Array<number> = [1, 3, 4, 5]; // generics 형태로 배열 정의
  // readonly
  // Array<number> 형태는 readonly 적용 불가!
  //   function printArray(fruits: readonly Array<number>) {
  function printArray(fruits: readonly string[]) {
    // fruits.push("Banana"); // readonly 옵션에 의해 배열 변경 불가!
  }

  // Tuple: Array와 달리 서로 다른 타입의 데이터들을 담을 수 있음
  let student: [string, number];
  student = ["C", 75];
  console.log(student[0]); // C
  console.log(student[1]); // 75
  // 이처럼 튜플은 "인덱스를 통해 데이터 접근"하기 떄문에 비효율적
  // => 가독성을 높이는 Interface, type alias, class를 활용하는게 더 낫다!
  // 아래는 destruction을 활용해 좀 더 명시적으로 데이터 활용한 예시
  // react useState처럼 사용자가 받아서 사용할 이름을 정의해서 사용하는 경우에 적합
  const [grade, score] = student; // student 객체의 각 인자가 의미하는 바를 사용자가 정의해야 함
}
