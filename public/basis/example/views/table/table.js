import angular from 'angular';

const table = angular.module('table', [])
    .controller('table',($scope) => {

        // 表格 config 方法
        $scope.tableConfig = {
            /**
             * 表头
             * @type {Object} head
             * 表头的字段，
             * 表格的字段会按顺序进行排列
             * 如果字段中含有 sort 属性，表示排序，必须同时含有 sortEvent:(s)=>{} 属性，表示排序事件回调
             * sort属性要赋予初始值： 0，1，2，表示‘无’，‘升’，‘降’
             * links属性表示这一列包含超链接
             * powerSwitch属性表示这一列展示滑动开关
             */
            head: {
                avatar: {
                    title: '照片',
                    width: '10%',
                    /**
                     * normalPic 配置，参照 normalPic 组件
                     * @type {Object}
                     */
                    pictrueConfig: {
                        type: 'person',
                        style: {
                            width: '60px',
                            height: '60px',
                        },
                    },
                },
                name: {
                    title: '姓名',
                    width: '10%',
                },
                sex: {
                    title: '性别',
                    sort: 0, // 排序字段
                    sortEvent: (s) => {
                        // 排序事件
                        console.log(s);
                    },
                },
                times: {
                    title: '到店次数',
                    width: '7%',
                    sort: 1, // 排序字段
                    sortEvent: (s) => {
                        // 排序事件
                        console.log(s);
                    },
                },
                status: {
                    title: '状态',
                    width: '20%',
                    // 当前status这个字段含有powerSwitch: true,
                    // body中必须含有 ${key}powerSwitch 属性，key代表当前字段，
                    // 当前status这个字段是 statusPowerSwitch
                    powerSwitch: true,
                },
                ctrls: {
                    title: '操作（可自定义）',
                    width: '20%',
                    links: [{
                        title: '编辑',
                        clickEvent: (b) => {
                            console.log('----编辑事件----');
                            console.log(b);
                        },
                    }, {
                        title: '打印小票',
                        clickEvent: (b) => {
                            console.log('----打印小票事件----');
                            console.log(b);
                        },
                    }],
                }
            },
            /**
             * 表格主体数据
             * @type {Array} body
             * 数组中每个元素为 map 格式，
             * 如果key值 对应上面 head 中的 key值，则展示在表格中，
             * 如果 key值在head中没有，则value不显示在表格中，
             * 如果key值在head中，含有 pictrueConfig字段，body中对应的key的值应该是个图片格式的值
             */
            body: [{
                cardid: '001',
                // avatar: 'http://p1.qhimg.com/t0128ccabe35bd7817a.jpg',
                avatar: 'http://7xnztu.com2.z0.glb.qiniucdn.com/ACMK5DUHN.jpg',
                name: '张三',
                sex: '男',
                times: '1',
                status: '可以选填一些文字',
                statusPowerSwitch: {
                    titleLeft: '发送',
                    titleRight: '停发',
                    clickEvent: (b, c) => {
                        console.log(b);
                        console.log(c);
                    },
                },
                // ctrls: '',
            }, {
                cardid: '002',
                avatar: 'http://7xnztu.com2.z0.glb.qiniucdn.com/ACMK5CC2V.jpg',
                name: '李四',
                sex: '女',
                times: '2',
                status: '',
                statusPowerSwitch: {
                    titleLeft: '这是一个长选择',
                    titleRight: '关闭这个长选择',
                    isChecked: true,
                    clickEvent: (b, c) => {
                        console.log(b);
                        console.log(c);
                    },
                },
                ctrls: '可填写非超链接字段',
            }],
            /**
             * 主键
             * @type {String}
             * body 各项中的主键
             * 一般为各种id
             * 主键值不能重复
             */
            mainKey: 'cardid',
            /**
             * 是否包含多选
             * @type {Boolean} checkbox
             * 如果为true，表格第一列会有checkbox功能，
             * 如果为true，必须含有 checkboxChecked 字段，
             */
            checkbox: true,
            /**
             * 是否包含多选
             * @type {Array} checkboxChecked
             * 选中了body中哪些元素
             * 如果初始化时，想选中某一列，需将 body 中该项铺设到 checkboxChecked 中
             */
            checkboxChecked: [],
            // radio: true,
            // radioChecked: {},
            control: [{
                type: 'search',
                clickEvent: (b) => {
                    console.log('-----------查看--------------');
                    console.log(b);
                    // console.log(`查看${b}`);
                },
            }, {
                type: 'edit',
                clickEvent: (b) => {
                    console.log('-----------编辑--------------');
                    console.log(b);
                    // console.log(`编辑${b}`);
                },
            }, {
                type: 'drop',
                clickEvent: (b) => {
                    console.log('-----------删除--------------');
                    console.log(b);
                    // console.log(`删除${b}`);
                },
            }],
            /**
             * 是否具有全border样式，
             * 如果为true，表格有一像素边框
             * @type {Boolean} allBorder
             */
            ClassBorder: false,
            /**
             * 是否具有窄padding的样式，
             * 如果为true，表格的上、下padding值会短一些
             * @type {Boolean}
             */
            ClassThinPadding: false,
        };
    })

export default table;
