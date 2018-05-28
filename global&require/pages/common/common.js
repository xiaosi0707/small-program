function sayHello() {
  console.log(`Hello ${name}!`);
}

function sayGoodbye() {
  console.log(`GoodBye ${name}!`);
}

module.exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;