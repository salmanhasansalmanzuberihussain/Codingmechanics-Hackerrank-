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
