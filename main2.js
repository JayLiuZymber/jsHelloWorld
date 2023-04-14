// 檔名: main.js 
// import module from './myModule.js';
import module from './import.js';

// export { obj, foo } from './lib.js';
// 等同於
// import { obj, foo } from './lib.js';
// export { obj, foo };

// 改成默認的介面輸出
export { foo as default } from './lib.js';
// 等同於
// import { foo } from './lib.js';
// export default foo;
