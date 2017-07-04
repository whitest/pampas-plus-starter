/**
 * console.error封装
 */


const chalk = require('chalk');

exports = module.exports = function(msg){
    console.error('\n***************************************************************');
    console.error('*');
    console.error('*   ' + chalk.red(msg));
    console.error('*');
    console.error('***************************************************************\n');
};
