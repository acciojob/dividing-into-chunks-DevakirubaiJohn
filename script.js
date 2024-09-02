const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 let result = [];
  let current = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > n) {
      result.push(current);
      current = [];
      currentSum = 0;
    }
    current.push(arr[i]);
    currentSum += arr[i];
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
