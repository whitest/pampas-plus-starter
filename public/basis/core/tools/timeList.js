/* 时间相关  export 对外模块封装 */

const getList = (o) => {
    var a = [],
        i = o.first,
        s = '';
    for (;;) {
        if (i > o.last) break;
        s = i;
        if (s < 10) {
            s = '0' + s;
            a.push(s);
            i += o.least;
        } else {
            a.push(String(s));
            i += o.least;
        }
    }
    return a;
};

export const hours = ({
    first = 0,
    last = 23,
    least = 1,
} = {}) => {
    return getList({
        first: first,
        last: last,
        least: least,
    });
};

export const minutes = ({
    first = 0,
    last = 59,
    least = 1,
} = {}) => {
    return getList({
        first: first,
        last: last,
        least: least,
    });
};
