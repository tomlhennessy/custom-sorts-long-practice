function ageSort(users) {
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    const isAOdd = a % 2 !== 0;
    const isBOdd = b % 2 !== 0;

    if (isAOdd && !isBOdd) return -1; // a is odd, b is even, a should come first
    if (!isAOdd && isBOdd) return 1; // a is even, b is odd, b should come first
    return a - b; // both are either odd or even, sort normally
  })
}

function validAnagrams(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    const aLength = a.toString().length;
    const bLength = b.toString().length;

    if (aLength !== bLength) {
      return bLength - aLength; // sort by length of number in descending order
    }

    return a - b; // sort by value in ascending order with the same length
  })
}

function frequencySort(arr) {
  const frequencyMap = {};

  // count frequency of each element
  arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  })

  // sort based on frequency and then by value descending
  return arr.sort((a, b) => {
    const freqA = frequencyMap[a];
    const freqB = frequencyMap[b];

    if (freqA !== freqB) {
      return freqA - freqB; // sort by frequency in ascending order
    }

    return b - a; // if the same frequency, sort by value in descending order

  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
