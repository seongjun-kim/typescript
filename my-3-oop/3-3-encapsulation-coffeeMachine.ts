{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // public
    // private: 클래스 외부 어디에서도 접근 불가
    // protected: CoffeeMaker를 상속한 다른 클래스 내부에서만 접근이 가능
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;
    //   private coffeeBeans: number = 0;

    // 아래 static으로 선언된 makeMochine 메소드를 통해 CoffeeMaker 오브젝트 만들 수 있기 때문에,
    // constructor를 private으로 막아두어 static 메소드를 활용하게 유도하는 것이 일반적!
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0!");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not Enough Coffee Beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(32);       // constructor가 private으로 막힘!
  const maker = CoffeeMaker.makeMachine(32); // 별도의 static 함수로 생성자를 대신함
  // maker.coffeeBeans = 3                    // private 멤버 변수로 접근이 불가!
}
