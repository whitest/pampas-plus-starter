/**
 * 根入口
 */

const customer = require('./customer/customer.js');

exports = module.exports = {
    type: 'app',
    filesName: 'app',
    enforce: true,
    // enforce: ['rootModule', 'rootScss'],
    description: 'app',
    children: {
        customer,
    },
};
