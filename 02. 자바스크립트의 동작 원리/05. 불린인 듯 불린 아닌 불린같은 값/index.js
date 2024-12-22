console.log(`false => 타입: ${typeof false} 불리안: ${Boolean(false)}`);                                                     // false
console.log(`0 => 타입: ${typeof 0} 불리안: ${Boolean(0)}`);                                                                 // false
console.log(`null => 타입: ${typeof null} 불리안: ${Boolean(null)}`);                                                        // false
console.log(`undefined => 타입: ${typeof undefined} 불리안: ${Boolean(undefined)}`);                                         // false
console.log(`NaN => 타입: ${typeof NaN} 불리안: ${Boolean(NaN)}`);                                                           // false
console.log(`"" => 타입: ${typeof ""} 불리안: ${Boolean("")}`);                                                              // false

console.log(`true => 타입: ${typeof true} 불리안: ${Boolean(true)}`);                                                         // true
console.log(`123 => 타입: ${typeof 123} 불리안: ${Boolean(123)}`);                                                            // true
console.log(`-123 => 타입: ${typeof -123} 불리안: ${Boolean(-123)}`);                                                         // true
console.log(`Infinity => 타입: ${typeof Infinity} 불리안: ${Boolean(Infinity)}`)                                              // true
console.log(`"123" => 타입: ${typeof "123"} 불리안: ${Boolean("123")}`);                                                      // true
console.log(`"true" => 타입: ${typeof "true"} 불리안: ${Boolean("true")}`);                                                   // true
console.log(`[] => 타입: ${typeof []} 불리안: ${Boolean([])}`);                                                               // true
console.log(`{} => 타입: ${typeof {}} 불리안: ${Boolean({})}`);                                                               // true
console.log(`!null => 타입: ${typeof !null} 불리안: ${Boolean(!null)}`);                                                      // true
console.log(`new Boolean(false) => 타입: ${typeof new Boolean(false)} 불리안: ${Boolean(new Boolean(false))}`);               // true

const flowers = ['장미', '수국', '백합', '튤립', '진달래'];

for (let i = 4; i; i = i - 2) {
  console.log(flowers[i]);
}

if (flowers.length) {
  console.log(flowers[3]);
}

if (Number('codeit')) { // NaN
  console.log(flowers[1]);
}
