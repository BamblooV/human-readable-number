module.exports = function toReadable(number) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'hundred'
  ];
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hundreds = (number -  number % 100) / 100;
  const dozens = (number -  number % 10) / 10 % 10;
  const units = number % 10;

  let result = [];
  if (!hundreds && !dozens && !units) return numbers[number]

  if (hundreds) {
    result.push(numbers[hundreds]);
    result.push(numbers[numbers.length - 1]);
  }

  if (dozens) {
    if (dozens > 1) {
      result.push(tens[dozens - 2]);
    } else {
      result.push(numbers[10 * dozens + units]);
      return result.join(' ')
    }
  }

  if (units) {
    result.push(numbers[units]);
    return result.join(' ')
  }
  return result.join(' ')
}
