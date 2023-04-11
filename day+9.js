/* 
重新認識 JavaScript: Day 09 流程判斷與迴圈 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10191453
 */
var month = 12;
// 註：Math.ceil(n) 代表將 n 數值無條件進位
if( Math.ceil( month/3 ) === 1 ){
    console.log('春天');
}
else if( Math.ceil( month/3 ) === 2 ){
    console.log('夏天');
}
else if( Math.ceil( month/3 ) === 3 ){
    onsole.log('秋天');
}
else if( Math.ceil( month/3 ) === 4 ){
    console.log('冬天');
}
else{
    console.log('月份錯誤');
}

var month = 12;
switch ( Math.ceil(month/3) ){
    case 1:
        console.log('春天');
        break;
    case 2:
        console.log('夏天');
        break;
    case 3:
        console.log('秋天');
        break;
    case 4:
        console.log('冬天');
        break;
    default:
        console.log('月份錯誤');
        break;
}

console.log('---');

var month = 1;
switch ( Math.ceil(month/3) ){
    case 1:
        console.log('春天');
    case 2:
        console.log('夏天');
    case 3:
        console.log('秋天');
    case 4:
        console.log('冬天');
    default:
        console.log('月份錯誤');
}

console.log('---');

var month = 1;
switch ( month ){
    case 1:
    case 2:
    case 3:
        console.log('春天');
        break;
    case 4:
    case 5:
    case 6:
        console.log('夏天');
        break;
    case 7:
    case 8:
    case 9:
        console.log('秋天');
        break;
    case 10:
    case 11:
    case 12:
        console.log('冬天');
        break;
    default:
        console.log('月份錯誤');
}

var age = 18;
var status = (age >= 18) ? '成人' : '小孩';

console.log('---')

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

console.log('---')

var i;
for (i = 0; i < 10; i++) {
    // 做某件事
}

for (var i = 0; i < 10; i++) {
    // 做某件事
}

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('---')

var i = 1;
while ( i <= 10 ){
  console.log( i );
  i++;
}

console.log('---')

/* 
var i = 1;
// 結束迴圈時， i 的值仍然是 1
while ( i <= 10 ){
  console.log( i );
}
 */
for (var i = 1; i <= 10; i++) {
    // i 能被 3 整除表示 i 是 3 的倍數，遇到 continue 就會跳過這次
    if( i % 3 === 0){
        continue;
    }
    console.log(i);
}

console.log('---')

// 假設陣列是這樣包含一堆 0 與若干其他數字
var arr = [0,0,0,0,7,0,9,0,4,8,0];
for(var i = 0; i < arr.length; i++ ) {
    if( arr[i] !== 0 ){
        // 找到那個不是 0 的數字，印出後退出迴圈
        console.log( arr[i] );
        break;
    }
}

console.log('---')

var lottery = [];
var n;
// 直到陣列 lottery 選滿 6 球
while(lottery.length < 6) {
    // 取一隨機 1 ~ 49 數字
    // Math.floor(n)回傳比n小的正整數
    n = Math.floor( Math.random() * 49 ) + 1;
    // 如果選出來的 n 不存在，就放入陣列
    if( lottery.indexOf( n ) === -1 ){
        lottery.push( n );
        console.log( n );
    }
}
