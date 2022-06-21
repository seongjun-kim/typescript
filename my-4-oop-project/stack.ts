// // my
// {
//   class Stack {
//     // private stack: Array<String> = [];
//     private stack: String[];

//     public constructor(stack?: String[]) {
//       this.stack = stack || [];
//     }
//     push(input: String): void {
//       this.stack = [...this.stack, input];
//     }
//     pop(): void {
//       this.stack.splice(this.stack.length - 1, 1);
//     }
//   }

//   const s = new Stack();
//   console.log("\n init!:", s);

//   s.push("kkk");
//   s.push("lll");
//   console.log("\n after pushing two strings: ", s);

//   s.pop();
//   console.log("\n after popping once: ", s);
//   s.pop();
//   console.log("\n after popping twice: ", s);
// }

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string | undefined;
}

type StackNode = {
  readonly next?: StackNode | undefined;
  readonly value: string;
};

// class MyStack implements Stack {
class StackImpl implements Stack {
  // size: number = 0;
  //   readonly size: number = 0;
  private _size: number = 0;
  private head?: StackNode;

  get size() {
    return this._size;
  }

  constructor(private capacity: number) {}

  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error(`[Stack is FULL] initial capacity: ${this.capacity}`);
    }

    // this.head.next = { next: this.head.next, value };
    const node: StackNode = { value, next: this.head };
    this.head = node;
    // this._size += 1;
    this._size++;
  }

  // 반환 형태에 undefined를 포함하게 되면 api 사용 위치에서
  // 모두가 null/undefined 체크를 해야하는 불편함을 감수해야 한다.
  //   pop(): string | undefined {
  pop(): string {
    // if(!this.head) {
    // null !== undefined 지만 null == undefined임을 활용
    if (this.head == null) {
      throw new Error("[Stack is EMPTY]");
    }
    // const { value: lastValue } = this.head;
    const lastValue = this.head?.value;
    // this.head.next = this.head.next?.next || undefined;
    this.head = this.head?.next;

    // this._size -= 1;
    this._size--;
    return lastValue;
  }
}

/*
const s = new StackImpl();
console.log("\n init!:", s);

s.push("kkk");
s.push("lll");
console.log("\n after pushing two strings: ", s);

s.pop();
console.log("\n after popping once: ", s);
s.pop();
console.log("\n after popping twice: ", s);

console.log("\n check size before trying to change directly: ", s.size);
// s.size -= 1;
// console.log("\n check size after trying to change directly: ", s.size);
*/
const stack = new StackImpl(2);
stack.push("A 1");
stack.push("BB 2");
stack.push("CCC 3");
while (stack.size > 0) {
  console.log(stack.pop());
}
// stack.pop(); // Error 처리부 확인!
