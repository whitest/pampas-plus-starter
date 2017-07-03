/* 验证浏览器是否没有连接互联网  export 对外模块封装 */

function main() {
    return !window.navigator.onLine;
};

const offline = main();

export default offline;
