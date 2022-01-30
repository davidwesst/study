# Arrays and Strings

## Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

### Constraints:
> 1 <= s.length <= 1000
> s consist of only digits and English letters.

#### Example 1:

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

#### Example 2:

```
Input: s = "cbbd"
Output: "bb"
```

## Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

### Constraints:

```
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
```
 

#### Example 1:

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

![](./assets/rainwatertrap.png)

Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.


#### Example 2:
```
Input: height = [4,2,0,3,2,5]
Output: 9
```

## Set Matrix Zeros
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.

### Constraints

```
m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
```

#### Example 1

![](./assets/mat1.jpg)

```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

#### Example 2

![](./assets/mat2.jpg)

```
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```



