// function sortQuick(collection, left, right) {
//   let i = left;
//   let j = right;

//   let pivot = collection[parseInt((left + right) / 2)];
//   while (i <= j) {
//     while (collection[i] < pivot) i++;
//     while (collection[j] > pivot) j--;

//     if (i <= j) {
//       let t = collection[i];
//       collection[i] = collection[j];
//       collection[j] = t;
//       i++;
//       j--;
//     }
//   }

//   if (i < right) sortQuick(collection, i, right);
//   if (left < j) sortQuick(collection, left, j);

//   return collection;
// }

// let col = [1, 5, 1, 9, 9, 4, 10, 1];

// document.write(`${col} <br>`);
// document.write(sortQuick(col, 0, col.length - 1) + "<br>");
// document.write("end");

// var show = true;

// function mergeSort(arr, gen, sp = "") {
//   if (arr.length < 2) {
//     if (show)
//       document.write(
//         ` ${sp} <font color='blue'>${gen}</font> [${arr}]  <font color='gray' size='1'>arr</font><br>`
//       );
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   if (show) {
//     document.write(
//       ` ${sp} <font color='blue'>${gen}</font> [${left}] <font color='green' size='1'>left</font><br>`
//     );
//     document.write(
//       ` ${sp} <font color='blue'>${gen}</font> [${right}] <font color='blue' size='1'>right</font><br>`
//     );
//   }

//   return merge(
//     mergeSort(left, gen + 1, sp + "  "),
//     mergeSort(right, gen + 1, sp + "  "),
//     gen,
//     (sp = "  ")
//   );
// }

// function merge(left, right, gen, sp) {
//   const result = [];

//   while (left.length && right.length) {
//     if (left[0] <= right[0]) result.push(left.shift());
//     else result.push(right.shift());
//   }

//   while (left.length) result.push(left.shift());
//   while (right.length) result.push(right.shift());

//   if (show)
//     document.write(
//       ` ${sp} <font color='blue'>${gen}</font> [${result}] <font color='red' size='1'>result</font><br>`
//     );

//   return result;
// }

// const arr = [5, 8, 3, 6, 1, 9, 2, 7, 4];
// console.log("MergeSort");
// console.log(mergeSort(arr));

// let a = [38, 27, 43, 3, 9, 82, 10];
// document.write(`a = ${a}<br>`);

// let generation = 1;
// document.write(`${mergeSort(a, generation)} << mergeSort<br>`);
// document.write(`${a.sort((x, y) => x - y)} << expected<br>`);

//   if (i <= j) {
//     let t = collection[i];
//     collection[i] = collection[j];
//     collection[j] = t;
//     i++;
//     j--;
//   }

// let pivot = collection[parseInt((left + right) / 2)];

// function sortQuick(collection, left, right) {
//     let i = left;
//     let j = right;

//     while (i <= j) {
//         while (collection[i] < pivot) i++;
//         while (collection[j] > pivot) j--;

function quickSort(arr, start, end) {
  if (start < end) {
    let p = helperP(arr, start, end);
    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
  }
}

function helperP(arr, start, end) {
  let p = arr[end];
  let i = start;
  let j = 0;
  for (let j = start; j <= end; j++) {
    if (arr[j] < p) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, j);
  return i;
}

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

let col = [7, -2, 4, 1, 6, 5, 0, -4, 2];
console.log(col);
quickSort(col, 0, col.length - 1);
console.log(col);
