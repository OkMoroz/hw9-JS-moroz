function getCounter() {
  let sum = 0;
  return function (element) {
    return (sum += element);
  };
}
const sum = getCounter();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
