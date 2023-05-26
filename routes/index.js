var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/menu", function (req, res, next) {
  const menu = [
    {
      "id": "64",
      "name": "首页",
      "flag": "home",
      "icon_class": "anicon-home",
      "url": "newapp/home",
      "type": "4",
      "pid": "0",
      "level": "1",
      "child": [],
      "child_menu_hidden": true
    },
    {
      "id": "6",
      "name": "客源",
      "flag": "deal-manager",
      "icon_class": "anicon-order",
      "url": "",
      "type": "3",
      "pid": "0",
      "level": "1",
      "child": [
        {
          "id": "38",
          "name": "私客",
          "flag": "zx-order",
          "icon_class": "",
          "url": "",
          "type": "3",
          "pid": "6",
          "level": "2",
          "child": [
            {
              "id": "39",
              "name": "私客",
              "flag": "dingdanliebiao",
              "icon_class": "",
              "url": "/index.php?r=zx-order%2Findex",
              "type": "1",
              "pid": "38",
              "level": "3",
              "child": []
            },
            {
              "id": "52",
              "name": "未及时跟进",
              "flag": "weijishigenjinliebiao",
              "icon_class": "",
              "url": "/index.php?r=zx-order%2Ffollow-delay",
              "type": "1",
              "pid": "38",
              "level": "3",
              "child": []
            },
            {
              "id": "58",
              "name": "成交客",
              "flag": "chengjiaokeliebiao",
              "icon_class": "",
              "url": "/index.php?r=zx-order%2Fdeal",
              "type": "1",
              "pid": "38",
              "level": "3",
              "child": []
            },
            {
              "id": "51",
              "name": "已掉公",
              "flag": "guanbidingdanliebiao",
              "icon_class": "",
              "url": "/index.php?r=zx-order%2Fclosed-list",
              "type": "1",
              "pid": "38",
              "level": "3",
              "child": []
            }
          ]
        },
        {
          "id": "40",
          "name": "联系",
          "flag": "zx-contact",
          "icon_class": "",
          "url": "",
          "type": "3",
          "pid": "6",
          "level": "2",
          "child": [
            {
              "id": "41",
              "name": "实际联系",
              "flag": "lianxiliebiao",
              "icon_class": "",
              "url": "/index.php?r=zx-contact%2Findex",
              "type": "1",
              "pid": "40",
              "level": "3",
              "child": []
            },
            {
              "id": "53",
              "name": "今日联系计划",
              "flag": "jinrilianxijihua",
              "icon_class": "",
              "url": "/index.php?r=zx-contact-plan%2Findex",
              "type": "1",
              "pid": "40",
              "level": "3",
              "child": []
            },
            {
              "id": "43",
              "name": "通话明细",
              "flag": "lianximingxiliebiao",
              "icon_class": "",
              "url": "/index.php?r=zx-contact%2Fdetail-list",
              "type": "1",
              "pid": "40",
              "level": "3",
              "child": []
            }
          ]
        },
        {
          "id": "44",
          "name": "带看",
          "flag": "daikan",
          "icon_class": "",
          "url": "",
          "type": "3",
          "pid": "6",
          "level": "2",
          "child": [
            {
              "id": "69",
              "name": "带看楼盘",
              "flag": "daikanloupan",
              "icon_class": "",
              "url": "/index.php?r=zx-see-loupan%2Findex",
              "type": "1",
              "pid": "44",
              "level": "3",
              "child": []
            },
            {
              "id": "45",
              "name": "实际带看",
              "flag": "suoyoudaikan",
              "icon_class": "",
              "url": "/index.php?r=zx-see%2Findex",
              "type": "1",
              "pid": "44",
              "level": "3",
              "child": []
            },
            {
              "id": "46",
              "name": "预约带看",
              "flag": "yuyuedaikan",
              "icon_class": "",
              "url": "/index.php?r=zx-see%2Fsubscribe",
              "type": "1",
              "pid": "44",
              "level": "3",
              "child": []
            },
            {
              "id": "63",
              "name": "带看评价",
              "flag": "daikanpingjia",
              "icon_class": "",
              "url": "/index.php?r=zx-feedback%2Findex",
              "type": "1",
              "pid": "44",
              "level": "3",
              "child": []
            }
          ]
        },
        {
          "id": "37",
          "name": "成交",
          "flag": "chengjiao",
          "icon_class": "",
          "url": "",
          "type": "3",
          "pid": "6",
          "level": "2",
          "child": [
            {
              "id": "7",
              "name": "订单列表",
              "flag": "zixunshidingdanliebiao",
              "icon_class": "",
              "url": "/index.php?r=order-list%2Findex",
              "type": "1",
              "pid": "37",
              "level": "3",
              "child": []
            },
            {
              "id": "21",
              "name": "认购列表",
              "flag": "rengouliebiao",
              "icon_class": "",
              "url": "/index.php?r=zx-subscribe%2Findex",
              "type": "1",
              "pid": "37",
              "level": "3",
              "child": []
            },
            {
              "id": "20",
              "name": "草签列表",
              "flag": "grass_index",
              "icon_class": "",
              "url": "/index.php?r=zx-sign-contract-draft%2Findex",
              "type": "1",
              "pid": "37",
              "level": "3",
              "child": []
            },
            {
              "id": "19",
              "name": "网签列表",
              "flag": "sign-contract",
              "icon_class": "",
              "url": "/index.php?r=zx-sign-contract%2Findex",
              "type": "1",
              "pid": "37",
              "level": "3",
              "child": []
            },
            {
              "id": "24",
              "name": "问题成交单",
              "flag": "wentichengjiaodan",
              "icon_class": "",
              "url": "/index.php?r=order-monitor%2Fproblem-list",
              "type": "1",
              "pid": "37",
              "level": "3",
              "child": []
            }
          ]
        }
      ],
      "child_menu_hidden": false
    },
    {
      "id": "54",
      "name": "数据",
      "flag": "xingpan",
      "icon_class": "anicon-piechart",
      "url": "/index.php?r=xingpan%2Findex",
      "type": "1",
      "pid": "0",
      "level": "1",
      "child": [],
      "child_menu_hidden": true
    },
    {
      "id": "65",
      "name": "分析",
      "flag": "data_analysis",
      "icon_class": "anicon-piechart",
      "url": "",
      "type": "3",
      "pid": "0",
      "level": "1",
      "child": [
        {
          "id": "66",
          "name": "客增分析",
          "flag": "da_cusadd",
          "icon_class": "",
          "url": "newapp/dataBoard/customerAnalysis",
          "type": "4",
          "pid": "65",
          "level": "2",
          "child": []
        },
        {
          "id": "67",
          "name": "客增转化",
          "flag": "da_cusadd_conversion",
          "icon_class": "",
          "url": "newapp/dataBoard/customerTransformation",
          "type": "4",
          "pid": "65",
          "level": "2",
          "child": []
        },
        {
          "id": "72",
          "name": "通话分析",
          "flag": "da_phone",
          "icon_class": "",
          "url": "newapp/dataBoard/contact",
          "type": "4",
          "pid": "65",
          "level": "2",
          "child": []
        },
        {
          "id": "73",
          "name": "带看分析",
          "flag": "da_see",
          "icon_class": "",
          "url": "newapp/dataBoard/see",
          "type": "4",
          "pid": "65",
          "level": "2",
          "child": []
        },
        {
          "id": "74",
          "name": "预警分析",
          "flag": "da_warn",
          "icon_class": "",
          "url": "newapp/dataBoard/warning",
          "type": "4",
          "pid": "65",
          "level": "2",
          "child": []
        }
      ],
      "child_menu_hidden": false
    },
    {
      "id": "55",
      "name": "交易",
      "flag": "jiaoyi",
      "icon_class": "anicon-moneycollect",
      "url": "",
      "type": "3",
      "pid": "0",
      "level": "1",
      "child": [
        {
          "id": "60",
          "name": "交易相关",
          "flag": "jiaoyixiangguan",
          "icon_class": "",
          "url": "",
          "type": "3",
          "pid": "55",
          "level": "2",
          "child": [
            {
              "id": "56",
              "name": "我的交易",
              "flag": "wodejiaoyi",
              "icon_class": "",
              "url": "/index.php?r=qiaofang-trade%2Fself-trade",
              "type": "1",
              "pid": "60",
              "level": "3",
              "child": []
            },
            {
              "id": "57",
              "name": "分成交易",
              "flag": "fenchengjiaoyi",
              "icon_class": "",
              "url": "/index.php?r=qiaofang-trade%2Fshare-trade",
              "type": "1",
              "pid": "60",
              "level": "3",
              "child": []
            }
          ]
        }
      ],
      "child_menu_hidden": false
    },
    {
      "id": "23",
      "name": "客服工作台",
      "flag": "kefudingdanliebiao",
      "icon_class": "anicon-customerservice",
      "url": "/index.php?r=server%2Fdefault",
      "type": "1",
      "pid": "0",
      "level": "1",
      "child": [],
      "child_menu_hidden": true
    },
    {
      "id": "35",
      "name": "更多功能",
      "flag": "more",
      "icon_class": "anicon-appstore",
      "url": "",
      "type": "3",
      "pid": "0",
      "level": "1",
      "child": [
        {
          "id": "36",
          "name": "分配管理",
          "flag": "fenpeiguanli",
          "icon_class": "",
          "url": "",
          "type": "3",
          "pid": "35",
          "level": "2",
          "child": [
            {
              "id": "27",
              "name": "私客分配列表",
              "flag": "dingdanfenpeiliebiao",
              "icon_class": "",
              "url": "/index.php?r=zx-alloc-consult-record%2Findex",
              "type": "1",
              "pid": "36",
              "level": "3",
              "child": []
            },
            {
              "id": "32",
              "name": "咨询师分配列表",
              "flag": "zxshfplb",
              "icon_class": "",
              "url": "/index.php?r=zx-alloc-consult-config%2Findex",
              "type": "1",
              "pid": "36",
              "level": "3",
              "child": []
            },
            {
              "id": "61",
              "name": "订单分配排序",
              "flag": "ddfppx",
              "icon_class": "",
              "url": "/index.php?r=zx-alloc-range%2Findex",
              "type": "1",
              "pid": "36",
              "level": "3",
              "child": []
            }
          ]
        },
        {
          "id": "70",
          "name": "系统工具",
          "flag": "xitonggongju",
          "icon_class": "",
          "url": "",
          "type": "3",
          "pid": "35",
          "level": "2",
          "child": [
            {
              "id": "71",
              "name": "跳公查询",
              "flag": "tiaogongchaxun",
              "icon_class": "",
              "url": "/index.php?r=tools%2Fcustomer-pool%2Fjump",
              "type": "1",
              "pid": "70",
              "level": "3",
              "child": []
            }
          ]
        },
        {
          "id": "1",
          "name": "系统管理",
          "flag": "xitongguanli",
          "icon_class": "",
          "url": "",
          "type": "3",
          "pid": "35",
          "level": "2",
          "child": [
            {
              "id": "3",
              "name": "角色管理",
              "flag": "jueseguanli",
              "icon_class": "",
              "url": "/index.php?r=auth-role%2Findex",
              "type": "1",
              "pid": "1",
              "level": "3",
              "child": []
            },
            {
              "id": "4",
              "name": "员工管理",
              "flag": "yuangongguanli",
              "icon_class": "",
              "url": "/index.php?r=zx-employee%2Findex",
              "type": "1",
              "pid": "1",
              "level": "3",
              "child": []
            },
            {
              "id": "5",
              "name": "部门管理",
              "flag": "bumenguanli",
              "icon_class": "",
              "url": "/index.php?r=zx-depart%2Findex",
              "type": "1",
              "pid": "1",
              "level": "3",
              "child": []
            },
            {
              "id": "2",
              "name": "权限列表",
              "flag": "quanxianliebiao",
              "icon_class": "",
              "url": "/index.php?r=auth-item%2Findex",
              "type": "1",
              "pid": "1",
              "level": "3",
              "child": []
            },
            {
              "id": "59",
              "name": "配置列表",
              "flag": "peizhiliebiao",
              "icon_class": "",
              "url": "/index.php?r=zx-config%2Findex",
              "type": "1",
              "pid": "1",
              "level": "3",
              "child": []
            },
            {
              "id": "49",
              "name": "SOP标签",
              "flag": "sop_config",
              "icon_class": "",
              "url": "/index.php?r=zx-sop-config%2Findex",
              "type": "1",
              "pid": "1",
              "level": "3",
              "child": []
            },
            {
              "id": "48",
              "name": "SOP规则",
              "flag": "sop_rule",
              "icon_class": "",
              "url": "/index.php?r=zx-sop-rule%2Findex",
              "type": "1",
              "pid": "1",
              "level": "3",
              "child": []
            },
            {
              "id": "25",
              "name": "APP升级",
              "flag": "app-upgrade",
              "icon_class": "",
              "url": "/index.php?r=app-upgrade%2Findex",
              "type": "1",
              "pid": "1",
              "level": "3",
              "child": []
            }
          ]
        },
        {
          "id": "29",
          "name": "测试相关",
          "flag": "test",
          "icon_class": "",
          "url": "",
          "type": "3",
          "pid": "35",
          "level": "2",
          "child": [
            {
              "id": "30",
              "name": "测试部门列表",
              "flag": "depart-test-list",
              "icon_class": "",
              "url": "/index.php?r=zx-depart%2Ftest-list",
              "type": "1",
              "pid": "29",
              "level": "3",
              "child": []
            },
            {
              "id": "31",
              "name": "测试员工列表",
              "flag": "employee-test-list",
              "icon_class": "",
              "url": "/index.php?r=zx-employee%2Flist-test",
              "type": "1",
              "pid": "29",
              "level": "3",
              "child": []
            }
          ]
        }
      ],
      "child_menu_hidden": false
    }
  ];
  const data = {
    code: 200,
    data: menu,
    message: "success"
  };
  res.send(data);
});

module.exports = router;
