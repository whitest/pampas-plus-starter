/* 金钱展示格式化  export 对外模块封装 */


export default function moneyShow(money) {
    let m = new Number(money);
    return `￥${m.toFixed(2)}`;
};
