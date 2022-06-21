{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 5;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0!");
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log("cleaning the machine...🧼");
    }

    private preHeat() {
      console.log("Heating Up...🔥");
    }
    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not Enough Coffee Beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }
    private extract(shots: number): CoffeeCup {
      console.log(
        `Extract ${shots} coffee shots! / coffee beans remains: ${this.coffeeBeans}`
      );
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.preHeat();
      this.grindBeans(shots);
      return this.extract(shots);
    }
  }

  // makeMachine 내부 동작인 preHeat, grindBeans, extract를 private으로 가둬두었기 때문에
  // 사용자는 'CoffeeMachine.' 이후 활용 가능한 API 중 명확하게 makeMachine이나 fillCoffeeBeans만 선택할 수 있게 된다!
  //   const maker1: CoffeeMachine = CoffeeMachine.makeMachine(20);
  //   maker1.fillCoffeeBeans(20);
  //   maker1.makeCoffee(2); // Extract 2 coffee shots! / coffee beans remains: 30

  //   const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(20);
  //   maker2.fillCoffeeBeans(32); // CoffeeMaker 인터페이스 정의에서는 fillCoffeeBeans가 없으므로 사용 할 수 없다!
  //   maker2.makeCoffee(2); // Extract 2 coffee shots! / coffee beans remains: 10
  //   maker2.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  //   const amateur = new AmateurUser(maker);
  //   amateur.makeCoffee();
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
