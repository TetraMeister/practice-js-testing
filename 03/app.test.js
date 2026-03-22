import { describe } from 'node:test';
import randomNumber from './app';

describe('randomNumber(min, max)', () => {
  it('returns 1 if min and max properties are set to 1', () => {
    expect(randomNumber(1, 1)).toBe(1)
  })
  it('throws an error if min property is not a number', () => {
    expect(() => randomNumber('1', 1)).toThrow()
  })
  it('throws an error if max property is not a number', () => {
    expect(() => randomNumber(1, '1')).toThrow()
  })
})