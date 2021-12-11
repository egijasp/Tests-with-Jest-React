export const fizzBuzz = (x: number) => {
  const arr = [];
  for (let i = 1; i <= x; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('fizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
};

export const taxAmount = (amount: number, tax: number) => {
  if (Number.isNaN(amount) || Number.isNaN(tax)) {
    throw new Error('One of the numbers is NaN');
  }

  if (amount < 0) {
    throw new Error('Amount cannot be negative');
  }
  if (tax < 0) {
    throw new Error('Tax cannot be negative');
  }

  return amount * tax;
};

export const armstrongNumber = (n: number) => {
  const str = n.toString().split('');

  const NewNum = str.map((a) => Number(a) ** str.length)
    .reduce((a, b) => a + b);

  return NewNum === n;
};

export const largerInteger = (num1: number, num2: number) => {
  if (num1 > num2) {
    return num1;
  } if (num1 === num2) {
    throw new Error('Both numbers are equal');
  }
  return num2;
};

export default fizzBuzz;
