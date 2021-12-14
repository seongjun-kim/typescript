{
  // Type Alias
  // 사용자가 원하는 타입을 정의할 수 있다.
  // 원시 타입(Primitive Type)뿐만 아니라
  // 객체 형태(Object Type), 문자열 타입(String Literal Type)

  type Text = string;
  const name: Text = "Watson";
  const address: Text = "Suwon";
  type Num = number;
  type Student = {
    name: Text;
    age: Num;
  };
  const student: Student = {
    // animal : 'dog', // 위 Student 타입에 정의되지 않은 사항이므로 에러!
    name: "Riley",
    age: 12,
  };

  // String Literal Types
  type Name = "name";
  let nameBox: Name;
  nameBox = "name";
  // nameBox = 'wow'; // Type '"wow"' is not assignable to type '"name"'.ts(2322)
  type JSON = "json";
  const json: JSON = "json";

  type Bool = true;
  const isCat: Bool = true;
  //   const isCat: Bool = false; // Type 'false' is not assignable to type 'true'.ts(2322)
}
