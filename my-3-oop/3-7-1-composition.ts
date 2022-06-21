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

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  // 고급 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Fancy Steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Cold Steaming some milk...🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 사탕깨서 설탕이라며 섞어주는 기계
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from candy!?!🍬");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar...🍯");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // Dependency Injection
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: MilkFrother
    ) {
      super(beans);
    }
    // private steamMilk(): void {
    //   console.log("Steaming some milk...🥛");
    // }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // this.steamMilk();

      // return {
      //   ...coffee,
      //   hasMilk: true,
      // };
      return this.milkFrother.makeMilk(coffee);
    }
  }

  // coffeeCup에 설탕을 추가한 커피 제공
  class SweetCoffeeMaker extends CoffeeMachine {
    // constructor(private beans: number, private sugar: CandySugarMixer) {
    constructor(private beans: number, private sugar: SugarProvider) {
      super(beans);
    }
    // private addSugar(): void {
    //   console.log("Add some sugar...🍬");
    // }
    // makeCoffee(shots: number): { shots: number; hasSugar: boolean } {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // this.addSugar();
      // return {
      //   ...coffee,
      //   hasSugar: true,
      // };
      return this.sugar.addSugar(coffee);
    }
  }

  // SweetCaffeLatteMachine 클래스에서는
  // milk, sugar 관련된 작업에 대해서는 알지 못하더라도
  // 해당 기능들을 활용할 수 있게된다! (의존성 주입)
  // <-> 이로인해 CheapMilkSteamer, CandySugarMixer에 대한
  // 의존성이 높아진다. (커플링 발생)
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      // let coffee = super.makeCoffee(shots);
      // coffee = this.sugar.addSugar(coffee);
      // coffee = this.milk.makeMilk(coffee);
      // return coffee;
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();

  // 원하는 용도에 따라 인터페이스 상으로 정의한 sugarMixer를 갈아끼울 수 있게 되었다!
  const sweetCandyCoffeeMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetSugarCoffeeMachine = new SweetCoffeeMaker(12, sugar);

  // 우유 거품기 또한 원하는대로 선택해서 넣을 수 있다
  const latteMachine = new CaffeLatteMachine(12, "SD-KK98", cheapMilkMaker);
  const coldLatteMachine = new CaffeLatteMachine(12, "SD-KK98", coldMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(
    12,
    cheapMilkMaker,
    candySugar
  );
}
