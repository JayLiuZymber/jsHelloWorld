/*
JavaScript 從零開始 - Day17 - 控制判斷 (比較運算子、邏輯運算子) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10235774
 */
var a = 1;
var b = 1;
console.log(a == b); //結果會得到 true
console.log(a !== b); //結果會得到 false
console.log(a != b); //結果會得到 false
var c = '1';
console.log(a == c); //結果會得到 true
console.log(a !== c); //結果會得到 true
console.log(a != c); //結果會得到 false

// if(0) //for node.js
if(1) //for html
{
    var myBirthdayMonth = 3; //我的生日月份
    var nowMonth = 12; //本月壽星
    var birthdayMonthCheck = myBirthdayMonth == nowMonth; //判斷我是否為本月壽星
    document.getElementById("birthdayId").textContent = birthdayMonthCheck; //本月為 12 月，我是 3 月壽星，故結果會得到 false
}

console.log(1 == "1")
//會得到結果是 true，可是一邊是數字，另一邊是字串，資料型別不同啊?

console.log(1 === "1")
//得到的結果就會是 false

console.log(3 > 2)
console.log(7 < 8)
console.log(13 >= 13)
console.log(15 <= 21)

var passport = true; //有帶護照
var ticket = true; //有帶機票
var pass = passport == true && ticket == true; // 出入境條件
console.log(pass); // 結果會是 true

var passport = true; //有帶護照
var ticket = false; //沒帶機票
var pass = passport == true && ticket == true; // 出入境條件
console.log(pass); // 結果會是 false

//餐廳折扣優惠
var myBirthdMonth = true; //當月壽星禮
var fbTag = true; //臉書打卡
var discount = myBirthdMonth == true || fbTag == true; // 符合折扣條件
console.log(discount); // 結果會是 true

console.log(2 < 3) //true
console.log(!(2 < 3)) // false
