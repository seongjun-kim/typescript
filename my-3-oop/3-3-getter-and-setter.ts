{
  class User {
    get fullName(): string {
      return `${this.lastName} ${this.firstName}`;
    }
    set fullName(name: string) {
      const words = name?.split(" ");
      if (words.length !== 2) {
        throw new Error(
          "New name should have only one blank(' ') between two words!"
        );
      }
      this.firstName = words[0];
      this.lastName = words[1];
    }
    // constructor 매개변수 정의부에서 private/public/protected와 함께 정의한 변수는 자동적으로 멤버 변수로 활용 가능하다!
    // constructor(private firstName: string, private lastName: string) {}
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Sohyun", "Kim");
  console.log(user.fullName); // Kim Sohyun
  //   user.fullName("Human"); // 정의부에서는 함수형태로 작성하지만, 호출형이 아님! (not callable)
  user.fullName = "Huisoo Jung";
  console.log(user.fullName); // Jung Huisoo
  //   user.fullName = "Human"; // Erro Case
  //   console.log(user.fullName);
}
