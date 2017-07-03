import angular from 'angular';

const contract = angular.module('contract', [])
    .controller('contract',($scope,$timeout) => {

        // 点击打印合同
        $scope.clickEvent = () => {
            const t = $timeout(() => {
                document.querySelector('[name="printBtn"]')
                    .click();
                $timeout.cancel(t);
            });
        }
        // 配置合同信息
        $scope.contractConfig = {
              "address":"",
              "amount":800,
              "amountUnit":800,
              "arrears":"￥0.00",
              "birthD":"",
              "birthM":"",
              "birthY":"",
              "birthday":"",
              "buyNumber":1,
              "cardNo":"01111",
              "company":"",
              "contacts":"",
              "contactsPhone":"",
              "coverNo":"1111",
              "creator":"a1_test",
              "creatorId":"a1",
              dealPrice:"￥800.00(原价￥800.00)",
              "endTime":"2018-06-23 23:59:59",
              "handsel":0,
              "idCard":"",
              "memberId":"ACL8DGC87",
              "memberName":"11hhhhhh",
              "memberPhone":"15678765432",
              "memberSex":1,
              "memberSexShow":"男",
              "orderId":"ACMMLL62S",
              "orderTime":"2017-06-23 14:41:32",
              "payType":1,
              "payTypeShow":"微信",
              "productEndD":"23",
              "productEndM":"06",
              "productEndY":"2018",
              "productName":"储值卡-储值卡-储值卡1000元",
              "productNum":"1000元",
              "productStartD":"23",
              "productStartM":"06",
              "productStartY":"2017",
              "productType":"储值卡",
              "realAmount":800,
              "realAmountShow":"￥800.00",
              "realAmountUnit":800,
              "remark":"",
              "startTime":"2017-06-23 00:00:00",
              "thirdCatId":"C00000005",
              "totalValue":1000,
              "wareBrandId":"PK0000004",
              "wareTitle":"储值卡1000元",
        }

    })

export default contract;
