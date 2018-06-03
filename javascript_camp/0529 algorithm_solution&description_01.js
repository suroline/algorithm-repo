
/*
Q 1. Use the for statement to print only the even numbers from 0 to less than 10 integers.
(korean: for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.)
*/

for (var i = 0; i < 10; i++) {
  if (i % 2 === 0){
    console.log(i);
  }  
}

  // Description of solution in my way ))
  // when variable i is 0, it is less than 10 ===> condition is true so execute the for statement and print out i.
  // an expression to be evaluated before next evaluation of condition. this continues as long as condition is true.


/* 
Q 2. Use the for statement to print only the even numbers from the smallest number in the range of 0 to less than 10 integers.
(for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.)
'' 표시를 해서, string 임을 declare,  for문 안에 변수를 넣으면 지속적으로 초기화가 됨
*/

var str = '';

for (var i = 0; i < 10; i++) { 
  if (i % 2 === 0){
    str += i;
  }
}

console.log(str);


  // Description of solution in my way ))
  // variation str is declared empty string. As long as condition is true and variable remainder is 0, for statement executes and put the value in to the variation str.
  // when condition is false, looping ends and print out str value.



/* 
Q 3. Use the for statement to print only odd numbers from 0 to less than 10, starting with the largest number.
(for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.)
*/

for (var i = 9; i >= 0; i--) {
  if (i % 2 !== 0){
    console.log(i);
  }
}

  // Description of solution in my way ))
  // variation str is declared empty string. As long as condition is true and variable remainder is not 0, for statement executes and print out variable value.
  


/*
Q 4. Use the while statement to print only the even numbers from 0 to 10, whichever is smaller.
(while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.)
*/

var i =0;

while(i <= 10) {
  if (i % 2 === 0){
    console.log(i);
  }
  i++;
}

  // Description of solution in my way ))
  // variation i delared number 0. while i is equal and less than 10 and variable remainder is 0 print out variable value. 
  // After printing out, the variable increase until variable is more than 10.

/* 
Q 5. Use the while statement to print only odd numbers from 0 to less than 10, starting with the largest number.
(while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.)
*/

var i = 9;

while(i >= 0){
  if (i % 2 !== 0){
    console.log(i);
  }
  i--;
}

  // Description of solution in my way ))
  // variation i delared number 9. while i is equal and more than 0 and variable remainder is not 0 print out variable value. 
  // After printing out, the variable decrease until variable is less than 0.
