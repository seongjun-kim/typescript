{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 5;
    private coffeeBeans: number = 0;

    // public 또는 자식 클래스에서만 접근 가능하도록 protected로 생성자를 정의
    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // abstract로 정의된 클래스이므로 객체(Object) 생성 불가!
    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0!");
      }
      this.coffeeBeans += beans;
    }

    // [기존 extract 메소드]
    // private extract(shots: number): CoffeeCup {
    //     console.log(
    //       `Extract ${shots} coffee shots! / coffee beans remains: ${this.coffeeBeans}`
    //     );
    //     return {
    //       shots,
    //       hasMilk: false,
    //     };
    //   }
    //
    // [추상화 된 extract 메소드]
    // 자식 클래스에서 활용할 수 있도록 protected를 붙여주고,
    // 자식 클래스마다 원하는 동작 정의가 가능하도록 abstract도 붙여주었다.
    protected abstract extract(shots: number): CoffeeCup;

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
    // makeCoffee(shots: number): CoffeeCup {
    //   const coffee = super.makeCoffee(shots);
    //   this.steamMilk();
    //   return {
    //     ...coffee,
    //     hasMilk: true,
    //   };
    // }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
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
    // makeCoffee(shots: number): CoffeeCup {
    //   const coffee = super.makeCoffee(shots);
    //   this.addSugar();
    //   return {
    //     ...coffee,
    //     hasSugar: true,
    //   };
    // }
    protected extract(shots: number): CoffeeCup {
      this.addSugar();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  //   const sweetCoffeeMachine = new SweetCoffeeMaker(23);
  //   const coffee = sweetCoffeeMachine.makeCoffee(1);
  //   console.log(coffee);

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "sss-392"),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, "sss-584"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("---------------------");
    machine.makeCoffee(1); // 다형성의 장점 활용 부분: 다양하게 내부 구성을 변경할 수 있지만 부모/자식간 **통일된 인터페이스**를 갖는다!
  });
}
