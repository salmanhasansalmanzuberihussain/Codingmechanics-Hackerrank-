//Hackerrank 3 month preperation kit

//Plus Minus
function plusMinus(array) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let len = array.length;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive += 1;
    } else if (array[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }

  let pos = positive / len;
  let neg = negative / len;
  let zer = zero / len;

  console.log(pos.toFixed(6));
  console.log(neg.toFixed(6));
  console.log(zer.toFixed(6));
}

//Mini Max Sum
function miniMaxSum(arr) {
  let sum = 0;
  let arrs = arr.sort();

  for (i = 0; i < arrs.length; i++) {
    sum += arrs[i];
  }

  let max = sum - arrs[0];
  let min = sum - arrs[arrs.length - 1];

  console.log(min, max);
}

//Time Conversion
function timeConversion(s) {
  let late = s.includes('PM');
  if (!late) {
    s = s.split('AM');
    s = s[0].split(':');
    if (s[0] === '12') s[0] = '00';
    return s.join(':');
  } else {
    s = s.split('PM');
    s = s[0].split(':');
    if (s[0] !== '12') s[0] = (parseInt(s[0]) + 12).toString();
    return s.join(':');
  }
}

//Maria plays college basketball and wants to go pro
function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let mini = 0;
  let maxi = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      maxi++;
    } else if (min > scores[i]) {
      min = scores[i];
      mini++;
    }
  }
  return [maxi, mini];
}

//Divisible Sum Pairs
function divisibleSumPairs(n, k, ar) {
  let pairs = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        pairs++;
      }
    }
  }
  return pairs;
}

//Spase Arrays [Solution 1]
function matchingStrings(strings, queries) {
  let storage = {};
  for (let val of strings) {
    storage[val] = (storage[val] || 0) + 1;
  }

  return queries.map((query) => storage[query] || 0);
}

//Lonely Integer [Solution 1]
function lonelyinteger(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result ^= a[i];
  }
  return result;
}

//Lonely Integer [Solution 2]
function lonelyinteger(a) {
  let result = {};
  for (let val of a) {
    result[val] = (result[val] || 0) + 1;
  }

  for (let key in result) {
    if (result[key] === 1) {
      return key;
    }
  }
}

//Grading students [Solution 1]
function gradingStudents(grades) {
  let result = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      result.push(grades[i]);
    } else {
      if ((grades[i] + 1) % 5 == 0) {
        result.push(grades[i] + 1);
      } else if ((grades[i] + 2) % 5 == 0) {
        result.push(grades[i] + 2);
      } else {
        result.push(grades[i]);
      }
    }
  }
  return result;
}

//Grading students [Solution 2]
function gradingStudents(grades) {
  let result = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38 || grades[i] % 5 < 3) {
      result.push(grades[i]);
    } else {
      result.push(grades[i] + 5 - (grades[i] % 5));
    }
  }
  return result;
}

//Flipping bits
function flippingBits(n) {
  return 2 ** 32 - n - 1;
}

//diagonal difference
function diagonalDifference(arr) {
  let n = arr.length;
  let leftsum = 0;
  let rightsum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftsum += arr[i][i];
    rightsum += arr[i][n - 1 - i];
  }
  return Math.abs(leftsum - rightsum);
}

//Socks Merchant
function sockMerchant(n, ar) {
  let pairs = 0; //incrementing
  let map = {}; //map an object were storing the data in an object
  for (let val of ar) {
    //for(let val of ar) //val is basically the 1,2,1,2,1
    map[val] = (map[val] || 0) + 1; //add the val and the map[val] ||0 +1 thats just a syntax thing as i looked it up
    if (map[val] % 2 === 0) {
      //if map[val %2===0] what we want to do is basically increment the pairs, pairs++
      pairs++;
    }
  }
  return pairs;
}

//Migratory Birds
function migratoryBirds(arr) {
  let newarr = new Array(6).fill(0);
  for (const val of arr) newarr[val]++;
  return newarr.indexOf(Math.max(...newarr));
}

//Maxiumum triangle
function maximumPerimeterTriangle(sticks) {
  sticks.sort((a, b) => b - a);
  for (let i = 0; i < sticks.length - 2; i++) {
    if (sticks[i] < sticks[i + 1] + sticks[i + 2]) {
      return [sticks[i + 2], sticks[i + 1], sticks[i]];
    }
  }
  return [-1];
}

function pageCount(n, p) {
  var frontflip = Math.floor(p / 2);
  var backflip = Math.floor(n / 2 - frontflip);
  var result = Math.min(frontflip, backflip);
  return result;
}
