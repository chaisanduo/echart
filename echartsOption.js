//环图配置
AnnularOption = {
    title: {
        show: true,
        x: 'center',
        top: '18%',
        text: '',
        textStyle: {
            color: '#55d1ff',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    color: ['#348ad6', '#d87b7b', '#c8cEdd', '#f1bb52', '#32a8c1', '#df8d50'],
    legend: {
        data: [],
        right: '0',
        top: '40%',
        orient: 'vertical',
        textStyle: { color: '#eaedf1' },
        pageTextStyle: {
            color:'#fff'
        },
        itemWidth: 16,
        itemHeight: 10
    },
    series: [
        {
            name: '统计数量',
            type: 'pie',
            radius: ['50%', '75%'],
            center: ['34%', '50%'],
            data: [],
            label: {
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}'
                    },
                    labelLine: {
                        show: true,
                        length:8
                    }
                }
            }
        }
    ]
};

//环图配置封装函数
function AnnularFun(id,legendData,data) {
    var radioPie = echarts.init($("#"+id)[0]);
    AnnularOption = {
        backgroundColor: '',
        title: {
            show: true,
            x: 'center',
            top: '18%',
            text: '',
            textStyle: {
                color: '#55d1ff',
                fontSize: 16
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            backgroundColor: 'rgba(0,0,0,0.7)',
            textStyle: {
                fontSize: ''
            }
        },
        color: ['#348ad6', '#d87b7b', '#c8cEdd', '#f1bb52', '#32a8c1', '#df8d50'],
        legend: {
            data: legendData,
            right: '0',
            top: '40%',
            orient: 'vertical',
            textStyle: { color: '#eaedf1' },
            pageTextStyle: {
                color: '#fff'
            },
            itemWidth: 16,
            itemHeight: 10
        },
        series: [
            {
                name: '统计数量',
                type: 'pie',
                radius: ['50%', '75%'],
                center: ['34%', '50%'],
                data: data,
                label: {
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    },
                    normal: {
                        textStyle: {
                            fontSize: '14',
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: '{c}'
                        },
                        labelLine: {
                            show: true
                        }
                    }
                }
            }
        ]
    };
    this.radioPie = radioPie;
    window.addEventListener('resize', function () {
        radioPie.resize();
    });
}


//环图配置显示不下时
AnnularOption1 = {
    title: {
        show: true,
        x: 'center',
        top: '18%',
        text: '',
        textStyle: {
            color: '#55d1ff',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    color: ['#348ad6', '#d87b7b', '#c8cEdd', '#f1bb52', '#32a8c1', '#df8d50'],
    legend: {
        data: [],
        right: '0',
        top: '40%',
        orient: 'vertical',
        textStyle: { color: '#eaedf1' },
        itemWidth: 16,
        itemHeight: 10
    },
    series: [
        {
            name: '统计数量',
            type: 'pie',
            radius: ['50%', '75%'],
            center: ['50%', '50%'],
            data: [],
            label: {
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b}'
                    },
                    labelLine: {
                        show: true
                    }
                }
            }
        }
    ]
};




//柱状图配置
barOption = {
    title: {
        show: true,
        x: 'center',
        top: '18%',
        textStyle: {
            color: '#55d1ff',
            fontSize: 16
        }
    },
    color: ['#27a1f2', '#ff8079', '#30d58a'],
    grid: {
        top: '20%',
        right: '10%',
        left: '14%',
        bottom: '10%'
    },
    toolbox: {
        show: true

    },
    xAxis: [{
        data: [],
        axisLabel: {
            interval: 0,
                color: '#aaa'
        },
        axisLine: {
            lineStyle: {
                color: '#114c7d'
            }
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a}<br>{b} : {c}",
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    legend: {
        data: [],
        top: '6%',
        right: '10%',
        textStyle: { color: '#eaedf1' },
        itemWidth: 16,
        itemHeight: 10

    },
    yAxis: {
        type: 'value',
        axisLabel: {
                color: '#aaa'
        },
        axisLine: {
            lineStyle: {
                color: '#114c7d'
            }
        },
        splitLine: {    //网格颜色
            show: true,
            lineStyle: {
                color: '#114c7d',
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [
        {
            name: '111',
            type: 'bar',
            data: ['111']
        }
    ]
};


//柱状图配置滚动条
function barOptionF(id, xAxis, series,title) {
    var radioBar = echarts.init($("#"+id)[0]);
    barOptionZoom = {
     backgroundColor: '',
    title: {
        show: true,
            text: title,
        x: 'center',
        top: '18%',
        textStyle: {
            color: '#55d1ff',
            fontSize: 16
        }
    },
    color: ['#27a1f2', '#ff8079', '#30d58a'],
    grid: {
        top: '15%',
        right: '10%',
        left: '14%',
        bottom: '44'
    },
    toolbox: {
        show: true

    },
    xAxis: [{
            data: xAxis,
            axisLabel: {
                interval: 0,
                color: '#aaa',
                fontSize:''
            },
            axisLine: {
                lineStyle: {
                    color: '#114c7d'
                }
            }
    }],
    tooltip: {
            show: true, // 是否显示提示框组件
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            trigger: 'axis', //坐标轴触发，用在柱状图，折线图等会使用类目轴的图表中使用
            formatter: "{a}<br>{b} : {c}",
            textStyle: {
                fontSize: ''
            }
    },
    legend: {
        data: [],
        top: '6%',
        right: '10%',
        textStyle: { color: '#eaedf1' },
        itemWidth: 16,
        itemHeight: 10

    },
    yAxis: {
        type: 'value',
        name: '',
        nameTextStyle: {
            fontSize:''
        },
        axisLabel: {
            color: '#aaa',
            fontSize: ''
        },
        axisLine: {
            lineStyle: {
                color: '#114c7d'
            }
        },
        splitLine: {    //网格颜色
            show: true,
            lineStyle: {
                color: '#114c7d',
                width: 1,
                type: 'solid'
            }
        }
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 15,
       

    }, {
        start: 0,
        end: 15,
        height: 18,
        bottom: '0',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        textStyle: {
            color: '#eee'
        },
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
        series: series
    };
    this.radioBar = radioBar;
    window.addEventListener('resize', function () {
        radioBar.resize();
    });
}


function temoption(id,data1,data2,xData) {
    var myChart = echarts.init($('#' + id)[0]);
Temoption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data: ['未修复数','修复数'],
        right: '0',
        top: '10%',
        textStyle: { color: '#eaedf1' },
        itemWidth: 16,
        itemHeight: 10
    },
    xAxis:
    {
        type: 'category',
            data:xData,
        axisLabel: {
            interval: 0,
             rotate: 40,
            color: '#aaa',
            formatter: function (name) {
                return (name.length > 4 ? (name.slice(0, 4) + ".") : name);
            }
        }

    },
    yAxis: [
        {
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLabel: {
                    color: '#aaa'
            },
            axisLine: {
                lineStyle: {
                    color: '#53628c'
                }
            },
            splitLine: {    //网格颜色
                show: true,
                lineStyle: {
                    color: '#53628c',
                    width: 1,
                    type: 'solid'
                }
            }
        }
    ],
    series: [
        {
            name: '未修复总数',
            type: 'bar',
            stack: 'sum',
                //itemStyle: {
                //    normal: {
                //        color: 'tomato',
                //        label: {
                //            show: true,
                //            position: 'insideTop',
                //            textStyle: {
                //                color: '#fff'
                //            }
                //        }
                //    }
                //},
                data: data1
        },
        {
            name: '今日修复数',
            type: 'bar',
            stack: 'sum',
                //barCategoryGap: '50%',
                //itemStyle: {
                //    normal: {
                //        color: '#27a1f2',
                //        label: {
                //            show: true, position: 'top'
                //        }
                //    }
                //},
                data: data2
        }
    ]
};
    myChart.setOption(Temoption);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
}

//Y轴堆叠条形图
function CascadYOption(id, legendData, yAxisData, seriesData) {
    var yAxisBar = echarts.init($("#" + id)[0]);
    option = {
        backgroundColor:'rgba(255,255,255,0.1)',
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            top: '10',
            textStyle: { color: '#eee' },
            data: legendData
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisLabel: {
                color: '#eee',
                fontSize: ''
            },
            splitLine: {    //网格颜色
                show: true,
                lineStyle: {
                    color: '#aaa',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        yAxis: {
            type: 'category',
            data: yAxisData,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisLabel: {
                color: '#eee',
                fontSize: ''
            }
        },
        color: ["#887f83", "#d8361b", "#f16b4c", '#f7b4a9', '#b56e4c'],
        series: seriesData
    };
    yAxisBar.setOption(option);
    window.addEventListener('resize', function () {
        yAxisBar.resize();
    });
}


//层叠式柱状图
CascadOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: ""
    },
    legend: {
        data: [],
        right: '0',
        top: '0',
        textStyle: { color: '#eaedf1' },
        itemWidth: 16,
        itemHeight: 10
    },
    xAxis:
    {
        type: 'category',
        data: ['公司1'],
        axisLabel: {
            interval: 0,
            // rotate: 40,
                color: '#aaa'
        }

    },
    yAxis: [
        {
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLabel: {
                    color: '#aaa'
            },
            axisLine: {
                lineStyle: {
                    color: '#53628c'
                }
            },
            splitLine: {    //网格颜色
                show: true,
                lineStyle: {
                    color: '#53628c',
                    width: 1,
                    type: 'solid'
                }
            }
        }
    ],
    color: ['#348ad6', '#c8cEdd', '#f1bb52', '#32a8c1', '#df8d50'],
    series: [
        {
            name: '甲单位',
            type: 'bar',
            stack: 'sum',
            barCategoryGap: '50%',
            itemStyle: {
                normal: {
                    label: {
                        formatter: '{a} ',
                        //show: true, position: 'insideTop',
                       
                    }
                }
            },
            data: []
        },
        {
            name: '乙单位',
            type: 'bar',
            stack: 'sum',
            itemStyle: {
                normal: {
                    label: {
                        //show: true,
                        formatter: '{a} ',
                        position: 'insideTop',
                        
                    }
                }
            },
            data: []
        },
        {
            name: '丙单位',
            type: 'bar',
            stack: 'sum',
            itemStyle: {
                normal: {
                    label: {
                        //show: true,
                        formatter: '{a} ',
                        position: 'insideTop',
                        
                    }
                }
            },
            data: []
        },
        {
            name: '丁单位',
            type: 'bar',
            stack: 'sum',
            itemStyle: {
                normal: {
                    label: {
                        //show: true,
                        formatter: '{a} ',
                        position: 'insideTop',
                        
                    }
                }
            },
            data: []
        },
        {
            name: '故障数',
            type: 'line',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2]
        }
    ]
};


//横柱图
horizontalBarOption = {
    title: {
        show: true,
        text: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['高清', '130万高清', '200万高清']
    },
    series: [
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{b} : {c} '
                    },
                    labelLine: {
                        show: true
                    }
                }
            }
        }
    ]
};



//雷达图
radarOption = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    legend: {
        data: ['通道', '设备']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { "name": "大溪沟片区", "max": 1 }, { "name": "解放碑片区", "max": 1 }, { "name": "朝天门片区", "max": 1 }, { "name": "七星岗片区", "max": 1 }, { "name": "南纪门片区", "max": 1 }, { "name": "菜园坝片区", "max": 1 }, { "name": "两路口片区", "max": 1 }, { "name": "大阳沟片区", "max": 1 }, { "name": "较场口片区", "max": 1 }, { "name": "化龙桥片区", "max": 1 }, { "name": "治安卡口", "max": 1 }, { "name": "上清寺片区", "max": 1 }, { "name": "大坪片区", "max": 1 }, { "name": "石油路片区", "max": 1 }, { "name": "望龙门片区", "max": 1 }
        ]
    },
    series: [{
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [0.99, 0.95, 0.87, 0.99, 0.99, 0.99, 0.98, 0.81, 0.98, 0.97, 0.87, 0.94, 0.94, 0.94, 0.94],
                name: '通道'
            },
            {
                value: [0.99, 0.95, 0.87, 0.99, 0.99, 0.99, 0.98, 0.81, 0.98, 0.97, 0.87, 0.94, 0.94, 0.94, 0.94],
                name: '设备'
            }
        ]
    }]
};

//小雷达图
raderOptionSm = {
    radar: {
        indicator: [
            { name: '性能', max: '100' },
            { name: '在线率', max: '100' },
            { name: '稳定性', max: '100' }
        ],
        center: ['40%', '70%'],
        radius: '80%',
        startAngle: 90,
        splitNumber: 3,
        shape: 'polygon',
        name: {
            formatter: '{value}',
            textStyle: {
                color: '#eaedf1'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(32,187,233,0.6)', 'rgba(32,187,233,0.3)', 'rgba(32,187,233,0.15)', 'rgba(32,187,233,0.1)', 'rgba(32,187,233,0.05)']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#20bbe9'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#20bbe9'
            }
        }
    },
    series: [
        {
            type: 'radar',
            symbol: "none",
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.7)'
            },
            itemStyle: { normal: { lineStyle: { color: '#ffff00', width: 1 } } },
            data: [
                {
                    value: [60, 73, 85]
                }
            ]
        }]
};
//线图
lineOption = {
    isFirst: true,
    title: {
        text: '堆叠区域图',
        textStyle: {
            color: '#eee',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            if (params.seriesIndex == 0) {
                return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日 : ' + params.value[1] * 100 + '%';
            } else {
                return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + '点 : ' + params.value[1] * 100 + '%';
            }

        },
        backgroundColor: 'rgba(0,0,0,0.7)',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data: ['完好率', '高频完好率'],
        selectedMode: "single",
        right: 6,
        top: 30,
        textStyle: { color: '#ffffff' },
        itemWidth: 16,
        itemHeight: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: '',
            boundaryGap: false,
            splitNumber: 10,
            axisLabel: {
                interval: 0,
                rotate: 40,
                color: '#aaa'
            },
            axisLine: {
                lineStyle: {
                    color: '#53628c'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                    color: '#aaa'
            },
            axisLine: {
                lineStyle: {
                    color: '#53628c'
                }
            },
            splitLine: {    //网格颜色
                show: true,
                lineStyle: {
                    color: '#53628c',
                    width: 1,
                    type: 'solid'
                }
            }
        }
    ],
    series: [
        {
            name: '完好率',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: { //折线填充色
                normal: {
                    areaStyle: {
                        color: '#1a4d72'
                    },
                    lineStyle: {
                        color: '#348ad6'
                    },
                    color: '#348ad6'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '高频完好率',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: { //折线填充色
                normal: {
                    areaStyle: {
                        color: '#1a4d72'
                    },
                    lineStyle: {
                        color: '#d87b7b'
                    },
                    color: '#d87b7b'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        }
    ]
};
//竖型柱状图
var colorList = ['#d23030', '#e87621', '#ffbc3b', '#257ec4', '#1ec85a'];
verticalOption = {
    tooltip: {
        axisPointer: {
            type: 'shadow'
        },
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    grid: {
        top: '4%',
        left: '16%',
        right: '6%',
        bottom: '14%',
        containLabel: false
    },
    xAxis: [{
        type: 'value',
        position: 'bottom',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#eaedf1'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#4e8dc2',
                type: 'dashed',
                width: 1
            }
        },

    }],
    yAxis: [
        {
            type: 'category',
            data: ["视频监控系统", "研发系统", "拍卡口管理系统", "门禁一卡通", "出入卡口系统"],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#eaedf1'
                }
            },
        },
        //辅助x轴
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ["视频监控系统", "研发系统", "拍卡口管理系统", "门禁一卡通", "出入卡口系统"]
        }
    ],
    series: [{
        name: '',
        type: 'bar',
        barWidth: 16,
        itemStyle: {
            normal: {
                barBorderRadius: 100,
                color: function (params) {
                    return colorList[params.dataIndex]
                }
            },
        },

        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
            }
        },
        data: ["4", "1", "3", "5", "2"]
    },
    //背景
    {
        type: 'bar',
        barWidth: 16,
        yAxisIndex: 1,
        //颜色透明度
        itemStyle: {
            normal: {
                color: 'rgba(101, 101, 101,0.1)'
            }
        },
        //背景值
        data: ["5", "5", "5", "5", "5"]
    },
    ]

};

//曲线型折线图

lineOption = {
    title: {
        text:'',
        show: true,
        x: 'center',
        textStyle: {
            color: '#55d1ff',
            fontSize: 16
        }
    },
    color: ['#348ad6', '#d87b7b', '#c8cEdd', '#f1bb52', '#32a8c1', '#df8d50'],
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.7)',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#aaa'
            }
        },
        textStyle: {
            fontSize: ''
        }
    },
    grid: {
        bottom: '10%'
    },
    legend: {
        right: '10%',
        top: '10%',
        data: ['意向', '预购', '成交'],
        textStyle: {
            color: '#eaedf1',
            fontSize: ''
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            //interval: 0,
            color: '#eaedf1',
            fontSize: ''
        },
        axisLine: {
            lineStyle: {
                color: '#114c7d'
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#aaa',
            fontSize: ''
        },
        max:'',
        axisLine: {
            lineStyle: {
                color: '#114c7d'
            }
        },
        splitNumber:'',
        splitLine: {    //网格颜色
            show: true,
            lineStyle: {
                color: '#114c7d',
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{
        name: '成交',
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: [10, 12, 21, 54, 260, 830, 710]
    }]
};


//直线型折线图
beelineOption = {
    title: {
        left: 8,
        top: 8,
        textStyle: {
            color: '#eaedf1',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: "{a}: {c}<br>{b} ",
        backgroundColor: 'rgba(0,0,0,0.7)',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color:'#aaa'
            }
        }
    },
    grid: {
        bottom: '16%',
        left: '14%',
        top: '14%'
    },
    toolbox: {
        show: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            //interval: 0,
            //rotate: 40,
                color: '#eaedf1'
        },
        axisLine: {
            lineStyle: {
                color: '#53628c'
            }
        },
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel: {
                color: '#eaedf1'
        },
        axisLine: {
            lineStyle: {
                color: '#53628c'
            }
        },
        splitLine: {    //网格颜色
            show: true,
            lineStyle: {
                color: '#2f5678',
                width: 1,
                type: 'solid'
            }
        }
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 40,


    }, {
        start: 0,
        end: 40,
        height: 18,
        bottom: '0',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        textStyle: {
            color: '#eee'
        },
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [{
        name: '工单总数',
        padding: 10,
        type: 'line',
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: { //折线填充色
            normal: {
                areaStyle: {
                    color: '#1a4d72'
                },
                lineStyle: {
                    color: '#348ad6'
                },
                color: '#348ad6'
            }
        },
        data: []
    }]
}
//浅色界面折线图
//LightlineOption = {
//    title: {
//        left: 8,
//        top: 8,
//        textStyle: {
//            color: '#eaedf1',
//            fontSize: 16
//        }
//    },
//    legend: {
//        top: '10%',
//        right: '10%',
//        data: []
//    },
//    color:['#32dadd'],
//    tooltip: {
//        trigger: 'axis',
//        formatter: "{a}: {c}<br>{b} "
//    },
//    grid: {
//        top: '20%'
//    },
   
//    xAxis: {
//        type: 'category',
//        boundaryGap: false,
//        data: []
//    },
//    yAxis: {
//        type: 'value',
//        axisLabel: {
//            formatter: '{value}'
//        }
//    },
   
//    series: [{
//        name: '',
//        type: 'line',
//        markPoint: {
//            data: [
//                { type: 'max', name: '最大值' },
//                { type: 'min', name: '最小值' }
//            ]
//        },
//        markLine: {
//            data: [
//                { type: 'average', name: '平均值' }
//            ]
//        },
//        data: []
//    }]
//}

function LightlineOption(id,legendData,xdata, data) {
    var id = echarts.init($("#" + id)[0]);
    LightlineOption = {
        title: {
            left: 8,
            top: 8,
            textStyle: {
                color: '#eaedf1',
                fontSize: 16
            }
        },
        legend: {
            top: '10%',
            right: '10%',
            data: legendData
        },
        color: ['#32dadd'],
        tooltip: {
            trigger: 'axis',
            formatter: "{a}: {c}<br>{b} "
        },
        grid: {
            top: '20%'
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xdata
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },

        series: [{
            name: legendData,
            type: 'line',
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' }
                ]
            },
            markLine: {
                data: [
                    { type: 'average', name: '平均值' }
                ]
            },
            data: data
        }]
    }
    id.setOption(LightlineOption);
    id.on('click', function (params) {
        selectError(params);
    })
    window.addEventListener('resize', function () {
        id.resize();
    });
}

//仪表盘
gaugeOption = {
    title: {
        text: '',
        textStyle: {
            color: '#aaa',
            fontSize: 14
        }
    },
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%",
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    series: [
        {
            name: '完好率',
            type: 'gauge',
            radius: '100%',
            center: '',
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    shadowBlur: 0,
                    color: [
                        [0.2, '#ff4500'],
                        [0.8, '#4488bb'],
                        [1, '#228b22']
                    ]
                }
            },
            markLine: {

            },
            splitLine: {
                show: true,
                length: 20
            },
            detail: {
                formatter: '{value}%',
                offsetCenter: [0, '60%'],
                textStyle: {
                    fontSize: 20,
                    color: '#eee',
                }
            },
            data: [{ value: 50 }]
        }
    ]
};

//仪表盘小
gaugeOption1 = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%",
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    series: [
        {
            name: '严重度',
            type: 'gauge',
            radius: '100%',
            axisLine: {
                show: false,
                lineStyle: {
                    width: 10,
                    shadowBlur: 0,
                    color: [
                        [0.2, '#228b22'],
                        [0.8, '#4488bb'],
                        [1, '#ff4500']
                    ]
                }
            },
            markLine: {

            },
            axisTick: {            // 坐标轴小标记
                show: false
            },
            axisLabel: {            // 坐标轴小标记
                show: false
            },
            splitLine: {
                show: false,
                length: 10
            },
            pointer: {
                width: 5
            },
            detail: {
                formatter: '{value}%',
                //offsetCenter: [0, '60%'] ,
                textStyle: {
                    fontSize: 12,
                    color: '#eee',
                }
            },
            data: [{ value: 50 }]
        }
    ]
};


ContentPieoption = {
    title: {
        text: '2013',
        subtext: '丢失',
        left: 'center',
        y: '43%',
        textStyle: {
            fontSize: 16,
            color:'#fff'
        },
        subtextStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            color: '#fff'
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        data: [],
        right: '0',
        top: '40%',
        orient: 'vertical',
        textStyle: { color: '#eaedf1' },
        itemWidth: 16,
        itemHeight: 10
    },
    series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '54%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: []
    }]
};

//折线图加柱状图两个y轴工单混合统计
function LineABaroption(id, legendData, xData, yDataMax, series) {
    var radarInter = echarts.init($("#" + id)[0]);
    LineABarop = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
    },
            formatter: ""
        },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
            data: legendData,
        right: '0',
        top: '0',
        textStyle: { color: '#eaedf1' },
        itemWidth: 16,
        itemHeight: 10
    },

    xAxis: {
        type: 'category',
            data: xData,
        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
                color: '#aaa'
        }
    },

    yAxis: [
        {
            type: 'value',
            name: '数量',
            min: 0,
                max: yDataMax[0],
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: '#aaa',
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    color: '#53628c'
                },
                textStyle: {
                    color: '#aaa'
                }
            },
            splitLine: {    //网格颜色
                show: true,
                lineStyle: {
                    color: '#53628c',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        {
            type: 'value',
            name: '在线率',
            min: 0,
            color: '#fff',
                max: yDataMax[1],
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
               color: '#aaa',
                formatter: '{value}%'
            },
            textStyle: {
                color: '#aaa'
            },
            axisLine: {
                lineStyle: {
                    color: '#53628c'
                }
            },
            splitLine: {    //网格颜色
                show: false,
                lineStyle: {
                    color: '#53628c',
                    width: 1,
                    type: 'solid'
                }
            }
        }
    ],
        color: ['#348ad6', '#d87b7b', '#f1bb52', '#32a8c1', '#df8d50', '#c8cEdd'],
        series: series
    };
    //this.LineABarop = LineABarop;
    this.radarInter = radarInter;
    window.addEventListener('resize', function () {
        radarInter.resize();
    });
        }




//层叠式柱状图两个y轴
CascadOptionTwo = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: ""
    },
    legend: {
        data: [],
        right: '0',
        top: '0',
        textStyle: { color: '#eaedf1' },
        itemWidth: 16,
        itemHeight: 10
    },
    xAxis:
    {
        type: 'category',
        data: ['公司1'],
        axisLabel: {
            interval: 0,
            // rotate: 40,
            color: '#aaa'
        }

    },
    yAxis: [
        {
            type: 'value',
            name: '数量',
            min: 0,
            max: 100,
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: '#aaa',
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    color: '#53628c'
                },
                textStyle: {
                    color: '#aaa'
                }
            },
            splitLine: {    //网格颜色
                show: true,
                lineStyle: {
                    color: '#53628c',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        {
            type: 'value',
            name: '占比',
            min: 0,
            color: '#fff',
            max: 100,
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: '#aaa',
                formatter: '{value}%'
            },
            textStyle: {
                color: '#aaa'
            },
            axisLine: {
                lineStyle: {
                    color: '#53628c'
                }
            },
            splitLine: {    //网格颜色
                show: false,
                lineStyle: {
                    color: '#53628c',
                    width: 1,
                    type: 'solid'
                }
            }
        }
    ],
    color: ['#348ad6', '#d87b7b', '#c8cEdd', '#f1bb52', '#32a8c1', '#df8d50'],
    series: [
        {
            name: '修复数',
            type: 'bar',
            stack: 'sum',
            barCategoryGap: '50%',
            itemStyle: {
                normal: {
                    label: {
                        formatter: '{c} ',
                        show: true, position: 'insideTop'
                    }
                }
            },
            data: []
        },
        {
            name: '未修复数',
            type: 'bar',
            stack: 'sum',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c} ',
                        position: 'insideTop'
                    }
                }
            },
            data: []
        },
        {
            name: '修复率',
            type: 'line',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2]
        },
        {
            name: '平均修复率',
            type: 'line',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2]
        }
    ]
};

//工单流程图
function workgGraphoption(data, link, id) {
    var idChart = echarts.init($("#" + id)[0]);
    workgGraphoptions = {
        title: {
            top: '10px',
            left:'10px',
            text: '工单流程图',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            formatter: "<div id='select'>{b}</div>"
        },
        series: [
            {
                type: 'graph',
                symbolSize: 50,
                label: {
                    normal: {
                        show: true,
                        formatter: "{b}"
                    }
                },
                edgeLabel: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 13,
                            color:'#fff'
                        },
                        formatter: "{c}"
                    }
                },
               
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return params.data.name + "\n" + params.data.number;
                        }
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                data: data,
                // links: [],
                links: link,
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0,
                        textStyle: {
                            color: '#fff',
                        },
                        color: '#fff'
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            rotate: true,
                            show: false,
                            textStyle: {
                                color: '#fff',
                            }
                        },
                        color: '#ff7621'
                    },
                    emphasis: {
                        label: {
                            show: false,
                        }
                    }
                },
            }
        ]
    };

    idChart.setOption(workgGraphoptions);
    window.addEventListener('resize', function () {
        idChart.resize();
    });
}

function processGraphoption(data, link, id) {
    var idChart = echarts.init($("#" + id)[0]);
    processGraphoptions = {
        title: {
            top: '10px',
            left: '10px',
            text: '工程流程图',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            formatter: "<div id='select'>{b}</div>"
        },
        series: [
            {
                type: 'graph',
                symbolSize: [50, 50],
                label: {
                    normal: {
                        show: true,
                        formatter: "{b}"
                    }
                },
                edgeLabel: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 13,
                            color: '#fff'
                        },
                        formatter: "{c}"
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return params.data.name;
                        }
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                data: data,
                links: link,
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0,
                        textStyle: {
                            color: '#fff',
                        },
                        color: '#fff'
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            rotate: true,
                            show: false,
                            textStyle: {
                                color: '#fff',
                            }
                        },
                        color: '#ff7621'
                    },
                    emphasis: {
                        label: {
                            show: false,
                        }
                    }
                },
            }
        ]
    };

    idChart.setOption(processGraphoptions);
    window.addEventListener('resize', function () {
        idChart.resize();
    });
}

//桑基图
function sankeyOption(data, link, id) {
    var id = echarts.init($("#"+id)[0]);
    sankeyOption = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'

        },
        
        series: {
            type: 'sankey',
            layout: 'none',
            data: data,
            links: link,
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#aaa'
                }
            },
            lineStyle: {
                normal: {
                    curveness: 0.5
                }
            },
           label: {
                normal: {
                    textStyle:{
                        color:"#fff"
                     }
                },
           }
        }
    };

    id.setOption(sankeyOption);
    window.addEventListener('resize', function () {
        id.resize();
    });
}

//无横纵轴折线图
function simpleLine(id, x, data,color) {
    var id = echarts.init($("#" + id)[0]);
    simpleLineOption = {
        xAxis: {
            type: 'category',
            data: x,
            show: false,
            boundaryGap: false,
        },
        yAxis: {
            show: false,
            boundaryGap: false,
            axisLine: { onZero: true },//从坐标轴0开始绘制
        },
        color: color,
        grid: {
            x: 10,
            y: 10,
            x2: 10,
            y2: 10,
        },
        series: [{
            data: data,
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 2,
                shadowColor: 'rgba(255, 255, 255, 0.5)',
                shadowBlur: 10
            },
            type: 'line'
        }]
    };
    id.setOption(simpleLineOption);
    window.addEventListener('resize', function () {
        id.resize();
    });
}


//树图
function treeModel(id, data) {
    var id = echarts.init($("#"+ id)[0]);
    treeOption = {
        title: {
            top: '10px',
            left: '10px',
            text: '故障树',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: data,

                top: '1%',
                left: '14%',
                bottom: '1%',
                right: '6%',

                symbolSize: 7,
                lineStyle: {
                    color:'#aaa'
                },
                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 9,
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: false,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }
    id.setOption(treeOption);
    id.on('click', function (params) {
            selectError(params);
    })
    window.addEventListener('resize', function () {
        id.resize();
    });
}

///机房仪表盘
jifangoption = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
        name: '电压',
        type: 'gauge',
        min: 0,
        max: 360,
        detail: {
            formatter: '{value}V'
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        data: [{
            value: 50,
            name: '输入电压',
        }]

    }]
};


//机房服务器流量统计
flogOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        right: 20,
        data: ['下载', '上传']
    },
    xAxis: {
        type: 'category',
        data: '',
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#aaa']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#aaa'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#aaa']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#aaa'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [{
        name: '下载',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        data: '',
      
        itemStyle: {
            normal: {
                color: '#228b22'
            }
        },
        lineStyle: {
            normal: {
                width: 2
            }
        }
    }, {
        name: '上传',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        data: '',
       
        itemStyle: {
            normal: {
                color: '#4488bb'
            }
        },
        lineStyle: {
            normal: {
                width: 2
            }
        }
    }]
};


