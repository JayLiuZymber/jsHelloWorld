/* 
[ES6-重點紀錄] Module System 模組系統 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10196230
 */
// export let str = 'Hello';
// export const obj = {a: 1};

// export function foo() {
//     console.log('function test');
// }


// 使用大括號"{}"做統一輸出
let str = 'Hello';
const obj = {a: 1};

let foo = function() {
    console.log('function test');
}
// 也能使用 as 重新命名
export {str, obj, foo as fooTest};