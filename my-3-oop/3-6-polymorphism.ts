{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 5;
    private coffeeBeans: number = 0;

    // public 또는 자식 클래스에서만 접근 가능하도록 protected로 생성자를 정의
    public constructor(coffeeBeans: number) {
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
      console.log(`grinding beans for ${shots}`);
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

  // interface를 구현할 때는 implements,
  // 다른 class를 활용(상속)할 때는 extends
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk...🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  // coffeeCup에 설탕을 추가한 커피 제공
  class SweetCoffeeMaker extends CoffeeMachine {
    // 부모 클래스에서의 생성자와 달리 생성자 부분을 통해 수행할 별도의 작업이 없다면 생략 가능!
    // constructor(beans: number) {
    //   super(beans);
    // }
    private addSugar(): void {
      console.log("Add some sugar...🍬");
    }
    // makeCoffee(shots: number): { shots: number; hasSugar: boolean } {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  //   const sweetCoffeeMachine = new SweetCoffeeMaker(23);
  //   const coffee = sweetCoffeeMachine.makeCoffee(1);
  //   console.log(coffee);

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "sss-392"),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "sss-584"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("---------------------");
    machine.makeCoffee(1); // 다형성의 장점 활용 부분: 다양하게 내부 구성을 변경할 수 있지만 부모/자식간 **통일된 인터페이스**를 갖는다!
  });
}
