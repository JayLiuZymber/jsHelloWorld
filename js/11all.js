/* 
JavaScript 從零開始 - Day11- 函式 function 搭配 return - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10235073
 */
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 2)); //3

function count(price) {
	return price * 0.8; // 商品價格要打八折時
}
function addtax(price) { // 當商品要開立發票時
	return price * 1.05;
}
console.log(count(500)); // 500 * 0.8 = 400
console.log(addtax(1000)); // 1000* 1.05 = 1050
