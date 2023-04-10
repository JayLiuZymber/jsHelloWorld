/* 
JavaScript 從零開始 - Day16 - Object & Array 物件與陣列的綜合應用 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10235772
 */
var home = {
    dad: "Tim",
    mom: "Min",
    son: ["Joshua", "John"],
    chair: 4,
    table: 3,
    dinner: function () {
      //建立函式
      console.log(home.dad + "，該吃晚餐囉!"); //函式執行內容
    }, //新增新物件要用逗點隔開
    furniture: function () {
      var furnitureNum = home.chair + home.table; //增加一個區域變數，把物件中的要抓取的屬性放進來
      console.log(furnitureNum); //執行函式中的區域變數內容
    },
};

home.dinner(); //執行物件 home 裡面的函式 dinner 的內容 ()
home.furniture(); //執行物件 home 裡面的函式中的區域變數，結果會得到 7

var homes = [
    {
      dad: "Tim",
      mom: "Min",
      son: ["Joshua", "John"],
      chair: 4,
      table: 3,
    },
    {
      dad: "Jerry",
      mom: "Nancy",
      son: ["Ethan", "Elijah", "Emma"],
      chair: 5,
      table: 4,
    },
];

console.log(homes[0].dad);
//會找到陣列中第一筆物件的資料，再找到裡面的 dad 的值，結果會是 Tim
console.log(homes[1].son[2]);
//會找到陣列中第二筆物件的資料，再找到裡面的 son 的第三個值，結果會是 Emma
