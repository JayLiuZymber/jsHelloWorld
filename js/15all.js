/* 
JavaScript 從零開始 - Day15 - Object 物件的基本認識 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10235769
 */
var home ={
  dad: "Tim"
}

var home ={
  dad: "Tim",
  mom: "Min",
  son: "Joshua"
}

var home ={
  dad: "Tim",
  mom: "Min",
  son: ["Joshua","John"],
  chair:4
}
console.log(home.dad); //會得到 Tim 這個結果
console.log(home.son[0]) //會得到 Joshua 這個結果

home.dog = 1; //增加屬性 dog，值為 1 的內容到物件內
console.log(home.dog); //存取值就會得到 1
delete home.dog; //刪除物件 home 裡面的屬性 dog
console.log(home.dog); //存取值會得到 undefined
