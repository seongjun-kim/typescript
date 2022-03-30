// Imperative & Procedural Programming

// let coffeeBean: number = 10;
// type Shots = "one" | "two";
// function makeCoffee(shots: Shots): number {
//   let coffee = 0;
//   switch (shots) {
//     case "two":
//       console.log("TWO SHOTS COFFEE!");
//       coffee += 1;
//     case "one":
//       console.log("ONE SHOT COFFEE!");
//       coffee += 1;
//       break;
//     default:
//       throw new Error("Invalid Shots!");
//   }
//   return coffee;
// }

// while (coffeeBean) {
//   if (coffeeBean % 2 === 0) coffeeBean -= makeCoffee("two");
//   else coffeeBean -= makeCoffee("one");
// }

// 로컬 스코프를 두어 내부에서만 쓰일 수 있도록 제한
{
  const BEANS_GRAM_PER_SHOT: number = 5;
  let coffeeBeans: number = 0;

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not Enough Coffee Beans!");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
