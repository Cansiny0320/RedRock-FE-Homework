/* eslint-disable no-console */
const arrary = [1, 2, [3, 4], [5, 6, [7, 8]]];

function flatten1(arr) {
  let cahr = arr.toString();// 转换为字符串
  cahr = cahr.split(',');// 通过，切割为一个数组
  for (let i = 0; i < cahr.length; i += 1) {
    cahr[i] = parseInt(cahr[i], 10);
  }
  console.log(cahr);
}

function flatten2(arr) {
  let newArr = [];
  newArr = arr.join(',').split(',').map((item) => parseInt(item, 10));
  console.log(newArr);
}

function flatten3(arr) {
  let rets = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      rets = rets.concat(flatten3(arr[i]));
    } else {
      rets.push(arr[i]);
    }
  }
  return rets;
}

function curryingAdd(x) {
  return (y) => console.log(x + y);
}

flatten1(arrary);
flatten2(arrary);
const newArr = flatten3(arrary);
console.log(newArr);
curryingAdd(1)(2);
