/* 
JavaScript 從零開始 - Day8- 執行緒與同步、非同步 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10234439
 */
function A() {
    console.log('work A');
}

function B() {
    console.log('work B');
}

function C() {
    console.log('work C');
}

function D() {
    A();
    B();
    C();
}
D();

function toilet() {
    console.log('上廁所');
}

function Eat() {
    console.log('吃早餐');
}

function school(doSomething) {
    console.log('上學');
    setTimeout(function () {
        console.log('揹書包' + doSomething);
    }, 1000);
}

function Go() {
    toilet();
    Eat();
    school();
}
Go();
