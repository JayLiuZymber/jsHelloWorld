/* 
JavaScript 從零開始 - Day20 - 認識 for 迴圈 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10235778
 */
var length = 4
for (var i = 0; i < length; i++) {
    //使用 for 迴圈 (初始狀態；條件;更新內容)
    console.log(i); //執行內容
}

// if(0) //for node.js
if(1) //for html
{
    var a = [2, 3, 4, 5, 6, 7, 8, 9]; //乘數
    var b = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //被乘數
    var el = document.querySelectorAll(".box"); //選取全部的 box

    var aLen = a.length;
    // console.log(aLen); //結果為 8
    var bLen = b.length;
    // console.log(bLen); //結果為 9

    for (var i = 0; i < aLen; i++) {
        //乘數迴圈
        var str = ""; // 預計將結果填入 str
        for (var j = 0; j < bLen; j++) {
            //被乘數迴圈
            var count = a[i] + "*" + b[j] + "=" + a[i] * b[j]; //組字串
            // 2*1=2
            console.log(count); //結果為九九乘法表
            // <div>2*1=2</div>
            str += "<div>" + count + "</div>"; //將結果套回 str
            el[i].innerHTML = str; // 將 box 裡的乘數，透過 innerHTML 渲染於網頁
        }
    }
}
