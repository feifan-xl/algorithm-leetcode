/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 求出a、b的最大公约数。
 * @param a int 
 * @param b int 
 * @return int
 */
 function gcd( a ,  b ) {
  if (a < b)  {
    [a, b] = [b, a]
  }
  while (b >= 1) {
    if (a % b === 0) {
      return b
    }
    const temp = a - b
    a = b
    b = temp
  }
  return 1
}
