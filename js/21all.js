/* 
JavaScript - 從零開始 - Day21 - for 迴圈 + array 陣列的使用方法 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10241359
 */
var shops = [
    {
        captain: "Tim",
        coke: 10,
        cookie: 25,
        egg: 170,
    },
    {
        captain: "Min",
        coke: 77,
        cookie: 44,
        egg: 58,
    },
];
//陣列資料
console.log(shops.length); //結果會得到 2

var captainTotal = shops.length;
console.log(captainTotal); //結果會得到 2

for (i = 0; i < captainTotal; i++) {
    console.log(shops[0].captain);
    //帶入陣列長度的變數。
}

for (i = 0; i < captainTotal; i++) {
    console.log(shops[i].captain);
    //帶入陣列長度的變數。
    //陣列裡改成 i
}

