// Rest Parameter
function printArguments(...args) {
  for (const arg of args) {
    console.log(arg); // 각 인수를 출력
  }
  console.log("-------------");
}

printArguments("javascript");
printArguments("red", "yellow");
printArguments("apple", "banana", "cherry");

function printArguments2(...args) {
  console.log(args.splice(0, 2));
  // console.log(arguments.splice(0, 2)); Error: arguments.splice is not a function
  console.log("-------------");
}

printArguments2("javascript");
printArguments2("red", "yellow");
printArguments2("apple", "banana", "cherry");

function printRank(first, second, ...others) {
  console.log("우승:", first);
  console.log("준우승:", second);
  for (const arg of others) {
    console.log(`참가자:, ${arg}`);
  }
  console.log("-------------");
}

printRank("Tom", "Jerry", "Mike", "John", "Jane");