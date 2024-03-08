export function capitalize(word) {
  const firstLitter = word.charAt(0);
  const CapFirstLitter = firstLitter.toUpperCase();
  const remainingLetters = word.slice(1);
  return CapFirstLitter + remainingLetters;
}
export function reverseString(word) {
  const splitArray = word.split("");
  const reverseArray = splitArray.reverse();
  const result = reverseArray.join("");
  return result;
}
export const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  divide(x, y) {
    return x / y;
  },
  multiply(x, y) {
    return x * y;
  },
};
export function caesarCipher(message, shift) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char.match(/[a-z]/i)) {
      const code = message.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    result += char;
  }
  return result;
}
export function analyzeArray(array) {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return { average, min, max, length };
}
