
import { twoSum } from '../../src/leetcode/01.two-sum'

describe('twoSum', () => {

  test('[2,3,4] => 6', () => {
    expect(twoSum([2,3,4], 6)).toEqual([2,4]);
  })

  test('[1,2,3,4], 11', () => {
    expect(twoSum([1,2,3,4], 11)).toEqual([]);
  })
})
  