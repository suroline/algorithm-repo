//for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0){
    console.log(i);
  }  
}

//for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
// '' 표시를 해서, string 임을 declare
var str = '';

for (var i = 0; i < 10; i++) { 
  if (i % 2 === 0){
    str += i;
  }
}

console.log(str);

//for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (var i = 9; i >= 0; i--) {
  if (i % 2 !== 0){
    console.log(i);
  }
}


//while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
var i =0;

while(i <= 10) {
  if (i % 2 === 0){
    console.log(i);
  }
  i++;
}


//while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var i = 9;

while(i >= 0){
  if (i % 2 !== 0){
    console.log(i);
  }
  i--;
}




//for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
// 0값을 대입 해서, nymber 임을 declare
var sum = 0;

for (var i = 0; i < 10; i++) {
  if (i % 1 === 0) {
    sum += i;
  }
}
console.log (sum);


//1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

var sum = 0;

for (var i = 1; i <= 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum += i;
  }
}

console.log (sum);

//1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var sum = 0;

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum += i;
  }
}

console.log (sum);

//두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (var i = 1; i <=6; i ++) {
  for (var j = 1; j <=6; j++) {
    if (i+j === 6) {
      console.log('['+i+','+j+']');
    }
  }
}


//다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.

var sum='';

for (var i=1; i<6; i++) {
  sum += '*';
  console.log(sum);
}


//다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 높이가 3일때 + 높이가 5일때

var sum_1='';
var sum_2='';

for (var i=1; i<4; i++) {
  sum_1 += '*';
  console.log(sum_1);
}

for (var i=1; i<6; i++) {
  sum_2 += '*'; 
  console.log(sum_2);
}







