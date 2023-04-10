/* 
JavaScript 從零開始 - Day19 - 控制判斷(if、else if、switch) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10235777
 */
var name = 101;
if (name == 101) { //判斷式
    console.log('name == 101') //陳述式
}

var name = 102;
if (name == 101) { //判斷式
    console.log('name == 101') //陳述式
}else if(name == 102){
    //倘若第一個陳述式沒有滿足條件，就會執行 else 裡面的程式碼
    // else if 可以很多程式碼
    console.log('name == 102')
}else{
    //最後結尾會執行 else 的程式碼
    console.log('name != 101')
    console.log('name != 102')
};

var key = 333
switch (key) { //設定一個表達式，且包含條件
    case 111: //要先寫一個 case 然後加上**變數名稱**(字串要加引號，不用小括弧)，給一個冒號：寫裡面的內容，結尾用分號 ; ，結束有點像 CSS
        console.log('key == 111')
        break; //每個 case 都要用一個 break 做結束。
    
    case 222:
        console.log('key == 222')
        break;

    default: //defalt 用法有點像 else，就如果沒有滿足的條件就會執行這個內容，但其位置可以任意放置，但我會習慣放在最後面，這樣寫程式碼比較有邏輯一點
        console.log('key != 111')
        console.log('key != 222')
        break; // 結束也要用一個 break 當作結束。
}

var name = 109;
function showname(params) {
  console.log(params);
}
var key = 123
switch (key) {
    case 121: //case1
        console.log('key == 121')
        break;

    case 123: //case2
        showname(123); //帶入 function
        break;

    default:
        console.log('key !== 121')
        console.log('key !== 123')
        break;
}