/* 会员模块 主要 module */
import * as angular from 'angular';
import * as C from 'core';

import config from './customer.config';

const appCustomer = angular
    .module('appCustomer', [])
    .config(config)

export default appCustomer;
