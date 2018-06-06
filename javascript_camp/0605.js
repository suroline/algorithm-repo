/*
Q1.1 ~10000의 숫자 중 8이 등장하는 횟수 구하기 
*/


function getCounts () {
  var str = '';
  for (var i =0; i <= 10000; i++) {
    str += i;
  }
  var count = 0;
  for (var j =0; j < str.length; j++) {
    if (str[j] === '8') {
      count ++;
    }
  }
  return count;
}
console.log (getCounts);


/*
Q2. 핸드폰 번호 가리기 
뒤에 4자리는 무조건 *로 만든다. 
*/

//  서브 스트링으로 뒤에 4자리 빼고 모두 반환하여 변수 1에 넣어둠
//  뒤에 4자리가 들어갈 변수 2를 만들어둠 
//  변수 2을 별로 replace 함
//  변수 1과 변수 2를 합하여 리턴함 

function hideNumbers(str) {
 var len = str.length - 4;
//  var star = '';
//  for (var i = 0; i < len; i++) {
//   star += '*';
//  } ===> '*'.repeat(len);


//  console.log(str);

//  var last = str.substring(len);
//  console.log(last);

//  return star + last;
  return '*'.repeat(len) + str.substring(len);
}



/* 
Q3. 짝수와 홀수. 
evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. 
num이 짝수일 경우 Even을 반환하고 홀수인 경우 Odd를 반환하도록 evenOrOdd에 코드를 작성하라.  
단 if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시해야한다.
*/

// num % 2 === 0이면 Even, num % 2 !== 0 Odd

// 1. if statement
function evenOrOdd (num) {
  if (num % 2 === 0) {
    return Even;
  }
  even (num % 2 !== 0) {
    return Odd;
  }
}

// 2. ternary operator

var num = 0;
var result = num % 2 ? 'even' : 'odd';
console.log(result);




/* 
Q4. 문자열 다루기
alphaString46 함수는 문자열 s를 매개변수로 입력받는다. 
s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라. 
예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다
*/

function alphaString46 (s) {
 
  if ((s.length >= 4 && s.length <= 6) && !isNaN(s)){
    return true;
  } else {
    return false;
  }
}

function alphaString46 (s) {
  // s 가 undefined 이면, false가 나오도록 한다.
  if (!s) return false;
  return ((s.length >= 4 && s.length <= 6) && !isNaN(s));
}


/*
Q5. 문자열 내 p와 y의 개수
numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 
'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다. 예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다 
*/

// 들어온 매개변수에서 p를 검색하여 해당 변수 내 p만 담은 변수를 만듦
// 들어온 매개변수에서 y를 검색하여 해당 변수 내 y만 담은 변수를 만듦
// 두 변수의 length 값을 비교해서 같으면 true, 아니면 false, 두개의 length 합이 0이면 true를 반환

function numPY (s) {
    var p = /p/gi;
    var y = /y/gi;

    if ((s.match(p).length === s.match(y).length) || (s.match(p),s.match(y) === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(numPY('pyyy'));



/*
Q6. 이상한 문자만들기
toWeirdCase함수는 문자열 s를 매개변수로 입력받는다. 
문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라. 
예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다. 
*/

// couldn't figure out yet



/*
Q7. 핸드폰번호 가리기
핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 *으로 바꿔야 한다. 
전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라 
예를들어 s가 '01033334444'면 *******4444를 리턴하고, '027778888'인 경우는 *****8888을 리턴한다.
 */

// 뒤에 4개를 제외한 앞에 숫자를 잘라서 변수에 담아둔다.
// 해당 자른 것들을 *로 만들어 준다. 
// 별로 만든 변수랑 별로 만든 것들을 뺀 애들의 값을 같이 더해서 리턴한다.

function hideNumbers (str) {
 
  var len = str.length - 4;
  var star = '';
  for (var i = 0; i < len; i++) {
  star += '*';
  }
  var left = str.substring(len);
  
  return star + left;
}

console.log(hideNumbers('01033334444'));

