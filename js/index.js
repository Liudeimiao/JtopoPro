$(document).ready(function() {
    //**********topo图初始化*************************
    //画布对象：canvas
    var canvas = document.getElementById('canvas');
    //抽象的舞台对象对应一个Canvas对象，所有图形展示的地方
    var stage = new JTopo.Stage(canvas);
    //场景对象
    var scene = new JTopo.Scene(stage);
    //背景颜色设置
    scene.background='./img/bg2.jpg';

    //*********测试用数据*************************************************************************************************
    //

    //节点基础数据表
    const resNode = [
        {ID:'00001',name:'ROOT',type:'Wifi',group:'',x:528,y:295,width:100,height:80,fillColor:'255,1,255'},
        {ID:'10001',name:'Computer_1',type:'Client',group:'G1',x:525,y:159,width:60,height:60,fillColor:'255,100,255'},
        {ID:'10002',name:'Computer_2',type:'Client',group:'G1',x:525,y:159,width:60,height:60,fillColor:'255,200,255'},
        {ID:'10003',name:'Computer_3',type:'Client',group:'G1',x:525,y:159,width:60,height:60,fillColor:'255,255,1'},
        {ID:'10004',name:'Computer_4',type:'Client',group:'G1',x:525,y:159,width:60,height:60,fillColor:'1,1,255'},
        {ID:'10005',name:'Computer_5',type:'Client',group:'G1',x:525,y:159,width:60,height:60,fillColor:'55,1,255'},
        {ID:'10006',name:'Computer_6',type:'Client',group:'G1',x:525,y:159,width:60,height:60,fillColor:'255,1,5'},
        {ID:'10007',name:'Computer_7',type:'Client',group:'G1',x:525,y:159,width:60,height:60,fillColor:'255,1,5'},
        {ID:'10008',name:'Computer_8',type:'Client',group:'G1',x:525,y:159,width:60,height:60,fillColor:'255,1,5'},
        {ID:'10009',name:'Computer_9',type:'Client',group:'G3',x:525,y:159,width:60,height:60,fillColor:'255,1,5'},
        {ID:'20001',name:'Server_1',type:'Server',group:'G2',x:525,y:159,width:60,height:60,fillColor:'60,1,5'},
        {ID:'20002',name:'Server_2',type:'Server',group:'G2',x:525,y:159,width:60,height:60,fillColor:'60,1,5'},
        {ID:'20003',name:'Server_3',type:'Server',group:'G2',x:525,y:159,width:60,height:60,fillColor:'60,1,5'},
        {ID:'20004',name:'Server_6',type:'Server',group:'G2',x:525,y:159,width:60,height:60,fillColor:'60,1,5'}
    ];
    //容器分组样式表
    const resContainer = [
        {ID:'G1',name:'A',x:138,y:40,wdith:900,height:80,fillColor:'100,255,0',borderRadius:0},
        {ID:'G2',name:'B',x:384,y:500,wdith:400,height:80,fillColor:'100,255,0',borderRadius:0},
        {ID:'G3',name:'C',x:910,y:350,wdith:249,height:80,fillColor:'100,255,0',borderRadius:0},
    ];
    //设备类型节点样式表
    const resDevice = [
        {ID:'DT0001',name:'Server',icon:'./img/serIcon.png'},
        {ID:'DT0002',name:'Client',icon:'./img/cliIcon.png'},
        {ID:'DT0003',name:'Wifi',icon:'./img/wifIcon.png'}
    ];
    //设备间关系连线样式基础表
    const resTypeLineStyle=[
        {typeA:'Wifi',typeB:'Client',text:'',width:2,color:'',pattern:'',horizontal:'1'},
        {typeA:'Server',typeB:'Client',text:'SERVER-CLIENT',wdith:'',color:'',pattern:'',horizontal:'1'},
        {typeA:'Wifi',typeB:'Server',text:'WIFI-SERVER',width:6,color:'',pattern:10,horizontal:'2'}
    ];
    //节点间关系表
    const resLineStyle = [
        {nodeA:'10001',node1:'00001'},
        {nodeA:'10002',node1:'00001'},
        {nodeA:'10003',node1:'00001'},
        {nodeA:'10004',node1:'00001'},
        {nodeA:'10005',node1:'00001'},
        {nodeA:'10006',node1:'00001'},
        {nodeA:'10007',node1:'00001'},
        {nodeA:'10008',node1:'00001'},
        {nodeA:'10009',node1:'00001'},
        {nodeA:'20001',node1:'00001'},
        {nodeA:'20002',node1:'00001'},
        {nodeA:'20003',node1:'00001'},
        {nodeA:'20004',node1:'00001'}
    ];
    //具体动态数据表
    const resData = [
        //                  cpu使用率 频率  温度                                   内存使用率  已使用
        {ID:'00001',flag:'0',cpuRate:'0.3',cpuFrequency:'230',cpuTemperature:'62',ramRate:'0.7',ramUse:'0.35'},
        {ID:'10001',flag:'1',cpuRate:'0.3',cpuFrequency:'2301',cpuTemperature:'62',ramRate:'0.7',ramUse:'12.3'},
        {ID:'10002',flag:'0',cpuRate:'0.42',cpuFrequency:'2302',cpuTemperature:'62',ramRate:'0.7',ramUse:'12.3'},
        {ID:'10003',flag:'2',cpuRate:'0.91',cpuFrequency:'2303',cpuTemperature:'62',ramRate:'0.7',ramUse:'12.3'},
        {ID:'10004',flag:'0',cpuRate:'0.21',cpuFrequency:'2304',cpuTemperature:'62',ramRate:'0.7',ramUse:'12.3'},
        {ID:'10005',flag:'0',cpuRate:'0.37',cpuFrequency:'2305',cpuTemperature:'62',ramRate:'0.7',ramUse:'12.3'},
        {ID:'10006',flag:'0',cpuRate:'0.82',cpuFrequency:'2306',cpuTemperature:'62',ramRate:'0.7',ramUse:'12.3'},
        {ID:'10007',flag:'3',cpuRate:'0.72',cpuFrequency:'2307',cpuTemperature:'62',ramRate:'0.7',ramUse:'12.3'},
        {ID:'10008',flag:'0',cpuRate:'0.93',cpuFrequency:'2308',cpuTemperature:'62',ramRate:'0.7',ramUse:'12.3'},
        {ID:'10009',flag:'0',cpuRate:'0.67',cpuFrequency:'2309',cpuTemperature:'62',ramRate:'0.7',ramUse:'12.3'},
        {ID:'20001',flag:'0',cpuRate:'0.78',cpuFrequency:'2302',cpuTemperature:'62',ramRate:'0.7',ramUse:'22.4'},
        {ID:'20002',flag:'0',cpuRate:'0.49',cpuFrequency:'1472',cpuTemperature:'53',ramRate:'0.49',ramUse:'15.68'},
        {ID:'20003',flag:'2',cpuRate:'0.53',cpuFrequency:'1566',cpuTemperature:'55',ramRate:'0.4',ramUse:'12.8'},
        {ID:'20004',flag:'0',cpuRate:'0.12',cpuFrequency:'326',cpuTemperature:'41',ramRate:'0.2',ramUse:'12.3'}
    ];
    //指定节点样式表
    const resSpecifyNodeStyle = [
        {ID:'10001',img:'./img/cliSIcon.png',fontColor:'0,255,76',fillColor:'0,255,255'}
    ];
    //指定连线样式表
    const resSpecityLineStyle = [
        {nodeA:'10004',nodeB:'00001',text:'Specity-Line-1',width:'2',color:'255,0,0',pattern:1,horizontal:'1'},
        {nodeA:'10006',nodeB:'00001',text:'Specity-Line-2',width:'2',color:'255,0,0',pattern:3,horizontal:'2'},
        {nodeA:'20004',nodeB:'00001',text:'Specity-Line-3',width:'1',color:'255,0,0',horizontal:'3'}
    ];
    //Ajax*****************************************************************************************
    // setInterval(
    //     function(){
    //         $.ajax({
    //             url: "09-ajax-jquery.php",
    //             type: "get",
    //             data: "",
    //             success: function(xhr){
    //                 console.log(xhr);
    //             },
    //             error: function (xhr) {
    //                 alert(xhr.status);
    //             }
    //         });
    //     }, 3000);

    // 封装的函数***********************************************************************************
    //
    //给canvas设置宽高
    //设置响应式画板尺寸 画板宽高与 body 标签的宽高相等
    var canvasWidth = parseInt(document.body.clientWidth * 1);
    var canvasHeight = parseInt(document.body.clientHeight * 1);
    var canvas = document.getElementById('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    
    // 新建分组容器函数
    // 参数：分组ID 名字 在画板中的位置x,y 宽高 填充颜色 角的弧度
    function newContainer(ID,name,x,y,width,height,fillColor,borderRadius='0'){
        var container = new JTopo.Container(name);
        container.ID = ID;
        container.text = name;
        container.fillColor = fillColor;
        container.borderRadius = borderRadius;
        scene.add(container);
        container.x = x;
        container.y = y;
        container.width = width;
        container.height = height;
        // 默认流式布局
        //container.layout = JTopo.layout.FlowLayout(40, 20);
        //设置容器透明度
        container.alpha = 0;
        //container.layout = JTopo.layout.GridLayout(4, 3);
        container.textPosition = 'Middle_Center';
        container.fontColor = '100,255,0';
        container.font = '18pt 微软雅黑';
        container.borderColor = '255,0,0';
        container.borderRadius = 30; // 圆角
        return container;
    }
    
    //新建节点函数
    //参数：ID 名字 类型 所属组 位置x,y 宽高 填充颜色
    //注意：位置仅在未有分组时生效，有分组的节点自动分配位置
    function newNode({ID,name,type,group,x, y, width, height,fillColor}){
        debugger;
        var node = new JTopo.Node(name);
        node.ID = ID;
        node.type = type;
        node.group = group;
        //未放入容器中的需要设置节点位置
        if (x && y){
            node.setLocation(x, y);//位置
        }
        node.setSize(height, width);//尺寸
        node.fillColor = fillColor;
        node.text = name;
        scene.add(node);//添加
        node.dragable = false;
        return node;
    }
    
    //根据 ID 返回节点函数
    function selectNode(node_ID) {
        let node = stage.find('node');
        for (let i = 0; i < node.length; i++) {
            if (node[i].ID == node_ID){
                return node[i];
            }
        }
    }
    
    //增强连接函数
    //参数：节点A-ID 节点B-id 连线显示的文本 线宽 颜色 虚or实 连线样式(直 折 曲)
    function newLink({nodeA_ID,nodeB_ID,text,width,color,pattern,horizental='1'}) {
        let nodeA = selectNode(nodeA_ID);
        let nodeB = selectNode(nodeB_ID);
        if (horizental == '1'){
            var link = new JTopo.FlexionalLink(nodeA, nodeB, text);//垂直于节点，一小段后直连
        }
        else if (horizental == '2'){
            var link = new JTopo.FoldLink(nodeA, nodeB, text);//垂直连线
        }
        else if (horizental == '3'){
            var link = new JTopo.Link(nodeA, nodeB, text);//直连
        }

        link.text = text;
        link.lineWidth = width;
        if (pattern)
            link.dashedPattern = pattern;//数越大，虚线间隔越大
        if (color)
            link.strokeColor = color;
        else
            link.strokeColor =JTopo.util.randomColor();
        //link.bundleGap = 30;
        scene.add(link);
    }
    
    //增强节点放入容器函数
    function newInContainer(node_ID) {
        //拿到所有节点
        let node = stage.find('node');

        //遍历所有节点
        for (let i = 0; i < node.length; i++) {
            if (node[i].ID == node_ID){
                let container = stage.find('container');

                //判断节点所属组并加入该容器组
                for (let j = 0; j < container.length; j++) {
                    if (node[i].group == container[j].ID){
                        container[j].add(node[i]);
                    }
                }
            }
        }
    };
    
    //分配图标函数
    //根据设备类型确定图标样式
    function newIcon(node_ID) {
        let node = selectNode(node_ID);
        for (let i = 0; i < resDevice.length; i++) {
            if(node.type == resDevice[i].name) {
                node.setImage(resDevice[i].icon);
            }
        }
    }
    
    //设置线段样式函数
    function setLineStyle() {
        //循环节点关系表
        for (let i = 0; i < resLineStyle.length; i++) {
            //发射节点的类型(发射节点为nodeA）
            //判断 node 与 node1.2.3...是否已经连线
            var nodeA = selectNode(resLineStyle[i].nodeA);
            let key;
            for (key in resLineStyle[i]){
                //接收节点为node_ID
                //防止自己与自己连线
                if (resLineStyle[i][key] == resLineStyle[i].nodeA)
                    continue;
                var nodeB = selectNode(resLineStyle[i][key]);
                //遍历类型连线样式表
                for (let k = 0; k < resTypeLineStyle.length; k++) {
                    //判断 nodeA 与 nodedB 对应的设备关系连线样式
                    if (
                        (
                            nodeA.type == resTypeLineStyle[k].typeA
                            &&
                            nodeB.type == resTypeLineStyle[k].typeB)
                        ||
                        (
                            nodeA.type == resTypeLineStyle[k].typeB
                            &&
                            nodeB.type == resTypeLineStyle[k].typeA
                        )
                    )
                    {
                        //resSpecityLineStyle标志位
                        var lineFlag = 0;
                        for (let j = 0; j < resSpecityLineStyle.length; j++) {
                            //再判断指定样式连线表里是否含有这根线
                            if(
                                (
                                    nodeA.ID == resSpecityLineStyle[j].nodeA
                                    &&
                                    nodeB.ID == resSpecityLineStyle[j].nodeB
                                )
                                ||
                                (
                                    nodeA.ID == resSpecityLineStyle[j].nodeB
                                    &&
                                    nodeB.ID == resSpecityLineStyle[j].nodeA
                                )
                            )
                                lineFlag = 1;
                        }
                        //确定未有连线后
                        if (lineFlag != 1){
                            newLink({
                                nodeA_ID:nodeA.ID,
                                nodeB_ID:nodeB.ID,
                                text:resTypeLineStyle[k].text,
                                width:resTypeLineStyle[k].width,
                                color:resTypeLineStyle[k].color,
                                pattern:resTypeLineStyle[k].pattern,
                                horizental:resTypeLineStyle[k].horizontal
                            });
                        }
                    }
                }
            }
        }
    }
    
    //设置特殊线段样式函数
    function setSpecityLineStyle() {
        for(let i = 0; i < resSpecityLineStyle.length; i++){
            newLink({
                nodeA_ID:resSpecityLineStyle[i].nodeA,
                nodeB_ID:resSpecityLineStyle[i].nodeB,
                text:resSpecityLineStyle[i].text,
                width:resSpecityLineStyle[i].width,
                color:resSpecityLineStyle[i].color,
                pattern:resSpecityLineStyle[i].pattern,
                horizontal:resSpecityLineStyle[i].horizontal
            });
        }
    }
    
    //报警函数
    function setAlarm() {
        function Alarm() {
            delAlarm();
            for (let i = 0; i < resData.length; i++) {
                setNodeAlarm(resData[i].ID,resData[i].flag,i);
            }
        }
        //存储定时任务数组
        const setTimeMask = [[],[],[]];
        //节点报警函数
        function setNodeAlarm(nodeID,flag,i) {
            let node = selectNode(nodeID);
            if (flag == 1){
                setTimeMask[0][i] = setInterval(function(){
                    if(node.alarm == '一级告警'){
                        node.alarm = null;
                    }else{
                        node.alarm = '一级告警';
                        node.alarmColor =JTopo.util.randomColor();
                        node.alarmAlpha = 0.9;
                    }
                }, 600);
            }
            else if (flag == 2){
                setTimeMask[1][i] = setInterval(function(){
                    if(node.alarm == '二级告警'){
                        node.alarm = null;
                    }else{
                        node.alarm = '二级告警';
                        node.alarmColor = JTopo.util.randomColor();
                        node.alarmAlpha = 0.5;
                    }
                }, 600);
            }
            else if (flag == 3){
                setTimeMask[2][i] = setInterval(function(){
                    if(node.alarm == '三级告警'){
                        node.alarm = null;
                    }else{
                        node.alarm = '三级告警';
                        node.alarmColor = JTopo.util.randomColor();
                        node.alarmAlpha = 0.1;
                    }
                }, 600);
            }
        }
        
        //清空报警函数
        function delAlarm() {
            let node = stage.find('node');
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < node.length; j++) {
                    clearInterval(setTimeMask[i][j]);
                }
            }
        }
        Alarm();
        setInterval(Alarm, 5000);
    }
    
    //鼠标悬浮显示硬件使用情况
    function showData(i) {
        document.getElementsByClassName('a1')[0].innerHTML = '处理器使用率：'+resData[i].cpuRate*100+'%';
        document.getElementsByClassName('a2')[0].innerHTML = '处理器频率：'+resData[i].cpuFrequency+'MHz';
        document.getElementsByClassName('a3')[0].innerHTML = '处理器温度：'+resData[i].cpuTemperature+'℃';
        document.getElementsByClassName('a4')[0].innerHTML = '内存使用率：'+resData[i].ramRate*100+'%';
        document.getElementsByClassName('a5')[0].innerHTML = '内存已使用：'+resData[i].ramUse+'GB';
    }
    
    //对所有节点添加显示信息的事件
    function nodeEvent(node_ID) {
        let node = selectNode(node_ID);
        var dataShow = document.getElementsByClassName('data')[0];
        var setIntervalShow;

        //节点点击事件
        node.click(function () {
            for (let i = 0; i < resNode.length; i++) {
                if(node.ID == resNode[i].ID){
                    let temp = resNode[i];
                    console.log(`基础数据`);
                    console.log(temp);
                    window.location.href = `server.html?ID=${resNode[i].ID}`;
                }
            }
        });
        //节点鼠标移入事件
        node.mouseover(function () {
            for (let i = 0; i < resData.length; i++) {
                if(node.ID == resData[i].ID){
                    showData(i);
                    setIntervalShow = setInterval(function () {
                        showData(i);
                    },600);
                    var nodeBound = node.getBound();//获取节点坐标，提供显示的位置
                    dataShow.style.opacity = 0.8;
                    dataShow.style.top = nodeBound.top+nodeBound.height/2+'px';
                    dataShow.style.left = nodeBound.left+nodeBound.width+'px';
                }
            }
        });
        //节点鼠标移出事件
        node.mouseout(function () {
            dataShow.style.opacity = 0;
            dataShow.style.top = '-2000px';
            dataShow.style.left = '-2000px';
            clearInterval(setIntervalShow);
        });
    };
    //图表生成*******************************************************************************************************
    //
    
    //根据数据生成容器分组
    for (let i = 0; i < resContainer.length; i++) {
        let container = newContainer(
            resContainer[i].ID,
            resContainer[i].name,
            resContainer[i].x,
            resContainer[i].y,
            resContainer[i].wdith,
            resContainer[i].height,
            resContainer[i].fillColor,
            resContainer[i].borderRadius
        );
    }
    //读取数据生成节点
    for (let i = 0; i < resNode.length ; i++) {
        let node = newNode({
            ID:resNode[i].ID,
            name:resNode[i].name,
            type:resNode[i].type,
            group:resNode[i].group,
            fillColor:resNode[i].fillColor,
            x:resNode[i].x,
            y:resNode[i].y,
            width:resNode[i].width,
            height:resNode[i].height
        });
        //判断设备类型加载不同图标
        newIcon(node.ID);
        //设置指定样式
        for (let j = 0; j < resSpecifyNodeStyle.length; j++) {
            if(resSpecifyNodeStyle[j].ID == resNode[i].ID){
                node.setImage(resSpecifyNodeStyle[j].img);
                node.fontColor = resSpecifyNodeStyle[j].fontColor;
                node.fillColor = resSpecifyNodeStyle[j].fillColor;
            }
        }
        //加入到所属组
        newInContainer(node.ID);
        //添加事件
        nodeEvent(node.ID);
    }
    //指定样式连线
    setSpecityLineStyle();
    //连线
    setLineStyle();
    // //警报
    setAlarm();

});