/* 
JavaScript 從零開始 - Day22- for 迴圈 + if 的使用練習 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10241365
 */
var shops = [
    {
        captain: "Tim",
        chicken: 150,
        coke: 200,
        fries: 70,
        set: 99,
    },
    {
        captain: "Min",
        chicken: 99,
        coke: 77,
        fries: 55,
        set: 101,
    },
    {
        captain: "Mike",
        chicken: 105,
        coke: 111,
        fries: 75,
        set: 130,
    },
];
//陣列資料
var setTotal = shops.length;
console.log(setTotal); //結果會得到 3

for (i = 0; i < setTotal; i++) {
    if (shops[i].set > 100) {
        console.log(shops[i].captain + "的套餐在本月賣超過 100 套，以資鼓勵");
    }
}

shops.filter( shops => shops.set > 100)
     .forEach(shops => console.log(shops.captain + "的套餐在本月賣超過 100 套，以資鼓勵") )
