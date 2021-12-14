{
  // Union Type과 반대로
  // 두 타입을 겹쳐 사용하는 타입 형태

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "Lay",
    score: 80,
    employeeId: 157,
    work: () => {},
  });
}
