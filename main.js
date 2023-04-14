// 基本使用，假設輸出模組的檔案名稱為 myModule.js
import {str, obj, fooTest} from './myModule.js';

fooTest();

// 使用萬用字元*
import * as module from './myModule.js';

console.log(module.str); 
console.log(module.obj);

// 直接加載整個模組名稱
// import 'jquery'; 