/* 
JavaScript 從零開始 - Day4 - 執行環境與執行堆疊 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10234175
 */
function sayHi(name) {
  var greeting = "hi";
  return greeting + " ! " + name; //1 "hi ! Mary"
}

function doSomething() {
  var mom = "Mary";
  console.log(1, sayHi(mom));
}
doSomething();
