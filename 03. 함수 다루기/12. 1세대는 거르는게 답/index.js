// 내가 한 풀이
// 여기에 코드를 작성하세요
function ignoreFirst(...args) {
  const newArgs = args.slice(1);
  for (const arg of newArgs) {
    console.log(arg);
  }
}

ignoreFirst("1세대", "2세대", "3세대");
ignoreFirst("곰팡이", "강아지", "고양이");
ignoreFirst(20, 9, 18, 19, 30, 34, 40);
console.log("=====================================");

// 다른 풀이(1)
// 여기에 코드를 작성하세요
function ignoreFirst1(...args) {
  args.shift();

  for (const arg of args) {
    console.log(arg);
  }
}

ignoreFirst1("1세대", "2세대", "3세대");
ignoreFirst1("곰팡이", "강아지", "고양이");
ignoreFirst1(20, 9, 18, 19, 30, 34, 40);
console.log("=====================================");

// 다른 풀이(2)
// 여기에 코드를 작성하세요
function ignoreFirst2(first, ...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

ignoreFirst2("1세대", "2세대", "3세대");
ignoreFirst2("곰팡이", "강아지", "고양이");
ignoreFirst2(20, 9, 18, 19, 30, 34, 40);
console.log("=====================================");
