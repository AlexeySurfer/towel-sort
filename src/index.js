
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  let arr = [];
  matrix.map(function (e, index) {
    if ((index + 1) % 2 == 0) {
      e.reverse().forEach(element => {
        arr.push(element);
      });
    }
    else {
      e.forEach(element => {
        arr.push(element);
      });
    }
  });
  return arr;
}
