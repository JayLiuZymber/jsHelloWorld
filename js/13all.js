/*
JavaScript 從零開始 - Day13 - 利用函式 function 寫一個計算題 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10235766
 */
if (0) //for node.js
// if (1)//for html
{
    document.getElementById('countId').onclick = function () {
        //button 使用getElementById (後面不用加點，直接套 id 名稱) 加上一個 onclick 事件，並執行 function 內容
        var hamPrice = 120;
        var cokePrice = 60;
        //定義變數的內容
        var hamNum = parseInt(document.getElementById('hamNumId').value) * hamPrice;
        var cokeNum = parseInt(document.getElementById('cokeNumId').value) * cokePrice;
        //命名變數為抓取 input 裡面的數值
        //將要在 id 所得到的值用 parseInt 語法轉換成數字。
        document.getElementById('totalId').textContent = hamNum + cokeNum
        //最終結算的結果
    }
}

function count(price) {
    return addTax(price * 0.8);
}
//商品價格要打八折時

function addTax(price) {
    return price * 1.05;
}
//當商品要開立發票時

console.log(count(500));
//return 會把 count 的參數 500，套回 function 中，會得到下面結果
// 500 * 0.8
// 500 * 1.05
