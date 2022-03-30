// {
//   class Coffee {
//     shots: number;
//     hasMilk: boolean;

//     constructor() {
//       this.shots = 0;
//       this.hasMilk = false;
//     }
//   }
//   class CoffeeMachine {
//     coffeeBeans: number;
//     BEANS_PER_SHOT: number;

//     constructor() {
//       this.coffeeBeans = 0;
//       this.BEANS_PER_SHOT = 5;
//     }

//     makeCoffee(shots: number): Coffee {
//       if (shots * this.BEANS_PER_SHOT > this.coffeeBeans) {
//         throw new Error("NOT ENOUGH BEANS IN COFFEE MACHINE...");
//       }

//       const coffeeCup = new Coffee();
//       coffeeCup.shots = shots;
//       coffeeCup.hasMilk = false;
//       return coffeeCup;
//     }
//   }

//   const coffeeMachine = new CoffeeMachine();
//   coffeeMachine.coffeeBeans = 30;
//   console.log(coffeeMachine.makeCoffee(2));
// }

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // BEANS_GRAM_PER_SHOT: number = 7; // static으로 "클래스 레벨"로 지정: 오브젝트마다 생성되지 않아 메모리 낭비 막음!
    static BEANS_GRAM_PER_SHOT: number = 7; // static으로 "클래스 레벨"로 지정: 오브젝트마다 생성되지 않아 메모리 낭비 막음!
    // static 멤버 변수로 지정하면 기존에 this.BEANS_GRAM_PER_SHOT로 썼던 부분들을
    // CoffeeMaker.BEANS_GRAM_PER_SHOT으로 수정해야 함
    // - 외부에 노출되지 않게 됨
    // - 변수 뿐만 아니라 함수에도 적용 가능!

    coffeeBeans: number = 0; // 인스턴스(오브젝트) 레벨 멤버 변수: 오브젝트마다 할당됨

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 아래 함수는 위 어떤 멤버 변수의 활용도 없으므로 static 정의 가능
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      // if (this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT) {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not Enough Coffee Beans!");
      }
      // this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT;
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(20);
  console.log(maker2);
  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);

  const coffee = maker.makeCoffee(2);
  console.log(coffee);
}
