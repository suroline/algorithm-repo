
/* 
Q 6. Use the for statement to print the sum of integers from 0 to less than 10. 
(for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.)
*/

var sum = 0;

for (var i = 0; i < 10; i++) {
  if (i % 1 === 0) {
    sum += i;
  }
}
console.log (sum);

  // Description of solution in my way ))
  // declare variable sum and assign 0 so its data type can be number.
  // sum = sum + i:  sum = 0 + 1, sum = 1 + 2, sum = 3 + 3, sum = 6 + 4, sum = 10 + 5 ....continues as long as i is less then 10.
  // print the last value of sum.



/* 
Q 7. Find the sum of integers from 1 to 20 that is not a multiple of 2 or 3.
(1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.)
*/

var sum = 0;

for (var i = 1; i <= 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum += i;
  }
}

console.log (sum);

  // Description of solution in my way ))
  // declare variable sum and assign 0 so its data type can be number.
  // as long as i is less than or equal to 20, sum the value of i that is not multiple of 2 or 3. 
  // print out the last value of sum.



/* 
Q 8. Calculate the sum of integers from 1 to 20, which is a multiple of 2 or 3.
(1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.)
*/

var sum = 0;

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum += i;
  }
}

console.log (sum);

  // Description of solution in my way ))
  // declare variable sum and assign 0 so its data type can be number.
  // as long as i is less than or equal to 20, sum the value of i that is multiple of 2 or 3. 
  // print out the last value of sum. 



/* 
Q 9. When throwing two dice, print the number of all cases where the sum of the eyes is six.
(두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.)
*/

for (var i = 1; i <=6; i ++) {
  for (var j = 1; j <=6; j++) {
    if (i+j === 6) {
      console.log('['+i+','+j+']');
    }
  }
}
  // Description of solution in my way ))
  // when variable i is 1, print if variable i and j sum is 6 and loops until it is less than 7.
  // this will cuntinue as long as i is less than 7.
  // print will come out [i,j] template.



/* 
 Q 10. Complete the string with a height of 5 (var line = 5) as a * (star) with reference to the following. 
 (다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.)
 */

var star = ''
  for(var i = 0; i < 3; i++){
  	for(var j = 0; j <= i; j++){
    	star += '*';
    }
    star += '\n';
  }
console.log (star);

  // Description of solution in my way ))
  // declare variable star and assign empty string.
  // i = 0 / j = 0 ===> *
  // i = 1 / j = 0/1 ===> **
  // i = 2 / j = 0/1/2 ===> ***
  // print out all the stars but it will comes out like a triangle because of \n 



/* 
 Q 11. Complete the tree with a * (star) as a string, referring to the following. 
       - Height is 3 + Height is 5
 (다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 높이가 3일때 + 높이가 5일때)
 */

function tree(num) {
	var star ='';
	for (var i =0; i<num; i++){
		for (var j=0; j<=i; j++){
			star += '*';}
		star += '\n';}
return star;}

var tree_1 = tree(3);
var tree_2 = tree(5);

console.log(tree_1+tree_2);

  // Description of solution in my way ))
  // make as a function because the height 3 tree and height 5 tree's algorithm would be same. 
       






