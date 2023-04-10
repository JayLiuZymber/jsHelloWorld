/* 
JavaScript 從零開始 - Day8- 執行緒與同步、非同步 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10234439
 */
let btn = document.querySelector(".btn");
let content = document.querySelector(".content");
btn.addEventListener("click", click, false);

function click() {
	let str = `<p>按鈕的非同步事件</p>`;
	content.innerHTML = str;
}
