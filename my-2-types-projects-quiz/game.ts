/**
 * Let's make a game ๐น
 */

// ๋ชจ๋ฒ๋ต์์ ๋ฐ๋ผ ์์ ํ ๋ถ๋ถ์ด ์ ์ด, ํด๋น ๋ผ์ธ ์ฐ์ธก ์ฃผ์(fix)์ผ๋ก ์ ๋ฆฌ

type Direction = "up" | "down" | "left" | "right";
type Position = { x: number; y: number };

// let position: Position = { x: 0, y: 0 };
const position: Position = { x: 0, y: 0 }; // (fix) position ์ค๋ธ์ ํธ์ ์ ์ธ์ let์ผ๋ก ํ  ํ์๊ฐ ์๋ค.

// function move(direction: Direction): void {
function move(direction: Direction) {
  switch (direction) {
    case "up":
      //   position = { x: position.x, y: position.y + 1 };
      position.y += 1; // (fix) ํด๋น ๋ฐฉํฅ์ ์ํฅ์ ๋ฐ๋ ์ค๋ธ์ ํธ ๋ด๋ถ ๊ฐ๋ง ์์ ํ๋ฉด ๋๋ค.
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
