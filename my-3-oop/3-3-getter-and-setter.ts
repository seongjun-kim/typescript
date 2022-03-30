{
  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${lastName} ${firstName}`;
    }
  }

  const user = new User("Alien", "Ray");
  console.log(user.fullName);
  user.firstName = "Human";
  console.log(user.fullName);
}
