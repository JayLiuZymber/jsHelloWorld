/* 
[ES6-重點紀錄] 樣板文字串 Template literals - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10195140
 */
// 可寫入多行的字串
/*
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);

// 等同於
$('#list').html(
    '<ul>\n' +
      '<li>first</li>\n' +
      '<li>second</li>\n' +
    '</ul>'
);
 */
// 可以嵌入變數
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
// 'Hello Bob, how are you today?'

// 可以嵌入任何表達式，例如函數、加減運算
let today = new Date();
let text = `The time and date is ${today.toLocaleString()}`;

console.log(text);
// The time and date is 2018/1/1 下午6:10:10
