/* 
Q. How many l is in Hello?
'Hello' 에서 l 이 몇개인가요?
*/

/*
Q.1 ~10000의 숫자 중 8이 등장하는 횟수 구하기 
*/

// function getCounts () {
//   var num = 0;
//   for (var i =0; i < 10000; i++) {
//     for (var j =0; j < str.length; j++) {
//       if (  ) {
//         num += j
//       };
//     }
//   }
//   console.log(num);
// }

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

// str = str.concat(name); str에 name을 연결한다.

// 많이 쓰임: String.prototype.replace(searchValue: string | RegExp, replaceValue: string): string
// String.prototype.split(separator: string | RegExp, limit?: number): string[]
// * 젤중요: String.prototype.substring(start: number, end=this.length): string

/*
Q. 핸드폰 번호 가리기 

뒤에 4자리는 무조건 *로 만든다. 

*/

function hideNumbers(str) {

//  서브 스트링으로 뒤에 4자리 빼고 모두 반환하여 변수 1에 넣어둠
//  뒤에 4자리가 들어갈 변수 2를 만들어둠 
//  변수 2을 별로 replace 함
//  변수 1과 변수 2를 합하여 리턴함   

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

// static method (함수 부르듯이 호출할 수 있음) vs prototype method (객체가 있어야 함)
//* 젤중요: Number.prototype.toFixed(digits=0): string 

/* 
Q. 짝수와 홀수. 
evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. 
num이 짝수일 경우 Even을 반환하고 홀수인 경우 Odd를 반환하도록 evenOrOdd에 코드를 작성하라.  
단 if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시해야한다.
*/

// num % 2 === 0이면 Even, num % 2 !== 0 Odd

function evenOrOdd (num) {
  if (num % 2 === 0) {
    return Even;
  }
  even (num % 2 !== 0) {
    return Odd;
  }
}

/* 
Q 3. 문자열 다루기
alphaString46 함수는 문자열 s를 매개변수로 입력받는다. 
s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라. 
예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다
*/

function alphaString46 (s) {
  // s의 str.length는 4와 6사이 && typeof === Number ===> return true , else false.
  // if (s.length >= 4 && s.length <= 6) {
  //   if (typeof Number) {
  //     return true;
  //   }
  // }
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
Q 4. 문자열 내 p와 y의 개수
numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 
'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다. 예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다 
*/

// 문자열인지 아닌지 확인 
// 문자열에서 p의 갯수가 들어간 변수 와 y의 갯수가 들어간 변수 의 갯수를 비교, 같으면 true 아니면 false
// 문자열에서 p와 y가 모두 없을 경우 항상 true


function numPY (s) {

  // 문자열 s가 들어왔을 때, 변수 안에 s를 모두 잘라서 넣어둔다. var splitStr = str.split('');
  // 해당 변수에서 p의 개수를 새로운 변수에 담아둔다. 
  // 해당 변수에서 s의 개수를 새로운 변수에 담아운다. 
  // if (str[j] === 'p') {
    // count ++;
  // }
  // p와 s의 갯수를 비교하여 
}



/*
Q 5. 이상한 문자만들기
toWeirdCase함수는 문자열 s를 매개변수로 입력받는다. 
문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라. 
예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다. 
*/



/*
 Q 6. 핸드폰번호 가리기
핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 *으로 바꿔야 한다. 
전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라 
예를들어 s가 '01033334444'면 *******4444를 리턴하고, '027778888'인 경우는 *****8888을 리턴한다.
 */

function hideNumbers (str) {
  
  // 뒤에 4개를 제외한 앞에 숫자를 잘라서 변수에 담아둔다.
  // 해당 자른 것들을 *로 만들어 준다. 
  // 별로 만든 변수랑 별로 만든 것들을 뺀 애들의 값을 같이 더해서 리턴한다.

  var len = str.length - 4;
  var star = '';
  for (var i = 0; i < len; i++) {
  star += '*';
  }
  var left = str.substring(len);
  
  return star + left;
}

console.log(hideNumbers('01033334444'));

// setTimeout , setInterver 시간을 관리

function printNow() {
  var today = new Date();

  var dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];

  var day = dayNames[today.getDay()]
  
}