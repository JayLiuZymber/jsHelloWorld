/* 
JavaScript 從零開始 - Day12- function 函式 Hoisting 提升觀念 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10235763
 */
console.log(a); //undefind
var a = 1;
console.log(a); //1

count();// hello!
function count(){
 console.log('hello!'); 
}
