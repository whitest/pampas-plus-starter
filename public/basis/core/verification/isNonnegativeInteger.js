/* 验证是否是非负整数（正整数或0）  export 对外模块封装 */

/**
 * isNonnegativeInteger
 * @param  {[type]} val [description]
 * @return {boolean} boolean  true 表示是正整数或0 ， false表示不是正整数或0
 */
export default function(val) {
    if(isNaN(val)) return false; // NaN
    if (!(/^(0|[1-9]\d*)$/).test(val)) {
        return false;
    }
    return true;
};
