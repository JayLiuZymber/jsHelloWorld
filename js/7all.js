/* 
JavaScript 從零開始 - Day7- function 的語法範疇 Lexical Scope - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10234438
 */
function peopleName() {
    var boy = "男生";
    console.log(boy); //男生
}
peopleName();
// console.log(boy); //boy is not defined

var value = 1;
function fn1() {
    console.log(value);
}
function fn2() {
    var value = 2;
    fn1();
}
fn2();
