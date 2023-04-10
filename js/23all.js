/* 
JavaScript - 從零開始 - Day23 - for 迴圈，i++、加總、break 的使用 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10241366
 */
var i = 0;
console.log(i); //結果會是 0
i = i + 1;
console.log(i); //結果會是 1
// i + 1 = 2; // (1+1 =2)
// i++ = 1;
//不斷反覆輸入 i++ 就會一直累加前一次的結果，會變成 2, 3, 4...

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

var shopsTotal = shops.length; //先抓取店面的資料
console.log(shopsTotal); //結果會得到 3
var cokeTotal = 0; //先預設數量為 0
for (var i = 0; i < shopsTotal; i++) {
  //從第一個開始迴圈；在店家數以內條件以內；加總
  cokeTotal += shops[i].coke; //"+=" 要寫在一起，不能空白
}
console.log("今年的可樂銷售額為: " + cokeTotal); //結果會得到 今年的可樂銷售額為: 388

for (var i = 0; i < shopsTotal; i++) {
    console.log(i);
    break; //跑到這裡就停止
}

var shopsTotal = shops.length;
console.log(shopsTotal);
for (var i = 0; i < shopsTotal; i++) {
    if (shops[i].chicken > 100) {
        console.log(shops[i].captain + "的店家有足夠 100 份炸雞");
        // 結果會得到:
        // Tim的店家有足夠 100 份炸雞
        // Mike的店家有足夠 100 份炸雞
    }
}

var shopsTotal = shops.length;
console.log(shopsTotal);
for (var i = 0; i < shopsTotal; i++) {
    if (shops[i].chicken > 100) {
        console.log(shops[i].captain + "的店家有足夠 100 份炸雞"); //Tim的店家有足夠 100 份炸雞
        shops[i].chicken -= 100;
        console.log(
            shops[i].captain + "的店家還剩下 " + shops[i].chicken + " 份炸雞"
        ); //Tim的店家還剩下 50 份炸雞
        break;
    }
}
