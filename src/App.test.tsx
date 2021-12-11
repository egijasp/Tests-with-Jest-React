import {
  fizzBuzz, taxAmount, armstrongNumber, largerInteger,
} from './utils';

describe('fizzBuzz()', () => {
  it('should print integers from 1 to N', () => {
    const result = fizzBuzz(3);

    expect(result).toEqual([1, 2, 'fizz']);
  });

  it('should print fizz if an integer is divisible by 3', () => {
    const result = fizzBuzz(6);

    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz']);
  });

  it('should print buzz if an integer is divisible by 5', () => {
    const result = fizzBuzz(5);

    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz']);
  });

  it('should print fizzBuzz if integer is divisible by both 3 and 5', () => {
    const result = fizzBuzz(15);

    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzBuzz']);
  });
});

describe('taxAmount', () => {
  it('should return tax amount from given amount in dollars and tax percentage in cents', () => {
    const result = taxAmount(100, 10);
    expect(result).toEqual(1000);
  });

  it('should show error if one of the numbers is NaN', () => {
    expect(() => taxAmount(NaN, 5)).toThrowError('One of the numbers is NaN');
    expect(() => taxAmount(200, NaN)).toThrowError('One of the numbers is NaN');
  });

  it('should show error if one of the numbers is negative', () => {
    expect(() => taxAmount(-200, 18)).toThrowError('Amount cannot be negative');
    expect(() => taxAmount(200, -18)).toThrowError('Tax cannot be negative');
  });
});

describe('armstrongNumber', () => {
  it('should return true if number is Armstrong Number', () => {
    expect(armstrongNumber(153)).toEqual(true);
  });

  it('should return false if number is not Armstrong Number', () => {
    expect(armstrongNumber(190)).toEqual(false);
  });
});

describe('largerInteger', () => {
  it('should return larger integer', () => {
    expect(largerInteger(4, 5)).toEqual(5);
    expect(largerInteger(8, 5)).toEqual(8);
  });

  it('should show error if both number if they are equal', () => {
    expect(largerInteger(5, 5)).toThrowError('Both numbers are equal');
  });
});
