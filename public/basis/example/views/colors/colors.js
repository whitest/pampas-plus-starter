import angular from 'angular';

import { replaceableColor, fixedColor, lightColor } from './colorsMap.js';
import { replaceableTemp, fixedTemp, lightTemp } from './temps.js';


const colors = angular.module('colors', [])
    .controller('colors', ($scope) => {

        $scope.replaceableColor = {};
        angular.forEach(replaceableColor, (map, key) => {
            angular.forEach(map, (el, i) => {
                $scope.replaceableColor[i] = angular.merge({}, { value: el }, replaceableTemp(key, i));
            });
        });

        $scope.fixedColor = {};
        angular.forEach(fixedColor, (map, key) => {
            angular.forEach(map, (el, i) => {
                $scope.fixedColor[i] = angular.merge({}, { value: el }, fixedTemp(key, i));
            });
        });

        $scope.lightColor = {};
        angular.forEach(lightColor, (map, key) => {
            angular.forEach(map, (el, i) => {
                $scope.lightColor[i] = angular.merge({}, { value: el }, lightTemp(key, i));
            });
        });


        // 点击颜色选择
        $scope.chooseColorEvent = (value, buffer) => {
            document.getElementById('colorsText').value = buffer;
            document.getElementById('colorsText').select();
            document.execCommand('copy');
            $scope.colorsShow = `色值：${value}，scss代码：${buffer}`;
            $scope.colorsShowColor = value;
        };

    });


export default colors;
