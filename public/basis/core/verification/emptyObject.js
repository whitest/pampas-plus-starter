/* 验证对象是否为空  export 对外模块封装 */


export default function emptyObject(obj) {
    for (let name in obj) {
        return false;
    }
    return true;
};
