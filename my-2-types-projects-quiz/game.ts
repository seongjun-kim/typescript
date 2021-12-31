/**
 * Let's make a game 🕹
 */

// 모범답안에 따라 수정한 부분이 적어, 해당 라인 우측 주석(fix)으로 정리

type Direction = "up" | "down" | "left" | "right";
type Position = { x: number; y: number };

// let position: Position = { x: 0, y: 0 };
const position: Position = { x: 0, y: 0 }; // (fix) position 오브젝트의 선언을 let으로 할 필요가 없다.

// function move(direction: Direction): void {
function move(direction: Direction) {
  switch (direction) {
    case "up":
      //   position = { x: position.x, y: position.y + 1 };
      position.y += 1; // (fix) 해당 방향에 영향을 받는 오브젝트 내부 값만 수정하면 된다.
      break;
    case "down":
      //   position = { x: position.x, y: position.y - 1 };
      position.y -= 1;
      break;
    case "left":
      //   position = { x: position.x - 1, y: position.y };
      position.x -= 1;
      break;
    case "right":
      // position = { x: position.x + 1, y: position.y };
      position.x += 1;
      break;
    default:
      throw new Error("NO WAY TO GO :(");
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
