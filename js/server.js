//测试数据
//
//机柜结构数据
let elementData = '123232341';
//板卡槽数量
let bordersNumber = 20;
// 组件高宽
let elementSize = [
    ['4%','100%'],//风扇
    ['25%','100%'],//机仓warehouse
    ['3.5%','100%'],//散热孔
    ['5%','100%'],//网线端口区域
    ['10%','30%']//整个机柜大小（相对于左半页面）（两个侧边及中间核心高度均为100%）（宽度不应超过百分之50）
];
//板卡数据 字段意义：设备ID、类型、状态、内存、CPU
const serverData = [
    [
        // {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        // {ID:'40002',type:'A',status:'',ram:'',cpu:''},
        {ID:'40003',type:'B',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40004',type:'A',status:'',ram:'',cpu:''},
        // {ID:'40005',type:'A',status:'',ram:'',cpu:''},
        // {ID:'40006',type:'A',status:'',ram:'',cpu:''},
        // {ID:'40007',type:'A',status:'',ram:'',cpu:''},
        // {ID:'40008',type:'A',status:'',ram:'',cpu:''},
        {ID:'40009',type:'A',status:'',ram:'',cpu:''},
        {ID:'40010',type:'A',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40011',type:'A',status:'',ram:'',cpu:''},
        {ID:'40012',type:'A',status:'',ram:'',cpu:''},
        // {ID:'40013',type:'A',status:'',ram:'',cpu:''},
        // {ID:'40014',type:'A',status:'',ram:'',cpu:''},
        {ID:'40015',type:'A',status:'',ram:'',cpu:''},
        {ID:'40016',type:'A',status:'',ram:'',cpu:''},
        {ID:'40017',type:'B',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
    ],
    [
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40002',type:'A',status:'',ram:'',cpu:''},
        {ID:'40003',type:'B',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40004',type:'A',status:'',ram:'',cpu:''},
        {ID:'40005',type:'A',status:'',ram:'',cpu:''},
        {ID:'40006',type:'A',status:'',ram:'',cpu:''},
        {ID:'40007',type:'A',status:'',ram:'',cpu:''},
        {ID:'40008',type:'B',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40010',type:'A',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40011',type:'A',status:'',ram:'',cpu:''},
        {ID:'40012',type:'A',status:'',ram:'',cpu:''},
        {ID:'40013',type:'A',status:'',ram:'',cpu:''},
        {ID:'40014',type:'A',status:'',ram:'',cpu:''},
        {ID:'40015',type:'A',status:'',ram:'',cpu:''},
        {ID:'40016',type:'A',status:'',ram:'',cpu:''},
        {ID:'40017',type:'A',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
    ],
    [
        {ID:'40001',type:'B',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40003',type:'B',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40004',type:'A',status:'',ram:'',cpu:''},
        {ID:'40005',type:'A',status:'',ram:'',cpu:''},
        {ID:'40006',type:'A',status:'',ram:'',cpu:''},
        {ID:'40007',type:'A',status:'',ram:'',cpu:''},
        {ID:'40008',type:'A',status:'',ram:'',cpu:''},
        {ID:'40009',type:'A',status:'',ram:'',cpu:''},
        {ID:'40010',type:'A',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40011',type:'A',status:'',ram:'',cpu:''},
        {ID:'40012',type:'A',status:'',ram:'',cpu:''},
        {ID:'40013',type:'A',status:'',ram:'',cpu:''},
        {ID:'40014',type:'B',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40016',type:'A',status:'',ram:'',cpu:''},
        {ID:'40017',type:'A',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'',type:'',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
        {ID:'40001',type:'A',status:'',ram:'',cpu:''},
    ]
];
//随机数据 连上数据库后删掉
for (let i = 0; i < serverData.length; i++) {
    for (let j = 0; j < serverData[i].length; j++) {
        if (serverData[i][j].ID){
            serverData[i][j].status =Math.ceil(Math.random()*10);
            serverData[i][j].ram =Math.ceil(Math.random()*10)*Math.ceil(Math.random()*10);
            serverData[i][j].cpu =Math.ceil(Math.random()*10)*Math.ceil(Math.random()*10);
        }
    }
}

//各组件的构建函数--------------------------------------------
//
//风扇（位于顶部与底部）
function fanTopBottom() {
    $('.cabinet').append(`
        <div class="topBottom" style="height: ${elementSize[0][0]}"></div>
    `);
    for (let j = 1; j <= 5; j++) {
        $('.topBottom:last-child').append(`
            <div class="outlet-box" >
                <div class="outlet">
                    <img alt="fan" class="turbine" style="width: 100%;height: 100%;" src="./img/turbine.png">
                </div>
            </div>
        `);
    }
}
//设置风扇转速、风扇宽高、网络端口大小
function setFanMove() {
    //设置网线端口css宽高
    var portWidth = $('.portbox-port').width();
    $('.portbox-port').height(portWidth);
    //设置风扇宽高
    var fanWidth = $('.outlet-box').height();
    $('.outlet').width(fanWidth);
    //设置风扇旋转
    for (let i = 1; i <= 10; i++) {
        $('.turbine').propeller({inertia: 1, speed: 4});
    }
}
//小散热口 网状（位于机仓上面或下面）
function littleExhaust(){
    $('.cabinet').append(`
        <div class="fan" >
            <img src="./img/mini-port.png" style="width: 100%;height: 100%;"  alt="散热口">
        </div>
    `);
}
//板卡插槽 一排
function boardSlot() {
    //机仓大框
    $('.cabinet').append(`
        <div class="warehouse">
            <div class="label-box" ></div>
            <div class="board-box" ></div>
        </div>
    `);
}
//板槽号（参数为 设置的板槽数量）
function boardNumber(bordersNumber) {
    for (let i = 1; i <= bordersNumber; i++) {
        if (i<=9){
            $('.label-box').append(`
                <div class="label" ><div>0${i}</div></div>
            `);
        }
        else {
            $('.label-box').append(`
                <div class="label" ><div>${i}</div></div>
            `);
        }
    }
}
//网线端口
function networkPort() {
    $('.cabinet').append(`
        <div class="portbox" ></div>
    `);
    for (let i = 0; i < 2; i++) {
        $('.portbox').append(`
            <div class="portbox-row"></div>
        `);
    }
    for (let i = 0; i < 40; i++) {
        $('.portbox-row').append(`
            <img src="./img/port.png" alt="" style="height: 100%;justify-content: space-around;">
        `);
    }
}
//设置板卡宽度(根据机仓宽度自动等分)
function setBoardWidth(){
    let boadrXWidth = $('.label:first-child').width();
    $('.board-A').width(boadrXWidth);
    $('.board-B').width(boadrXWidth*2);
    $('.board-O').width(boadrXWidth);
}
//设置机柜在网页中的位置
function setPosition() {
    let bodyHeight = $('body').height();
    let borderSideHeight = $('.borderSide').height();
    let marginTop = (bodyHeight - borderSideHeight) /2;
    if (marginTop > 1){
        $('.borderSide').css('marginTop',marginTop);
    }

    let marginLeft = (50 - parseInt(elementSize[4][1] )) / 2 + '%';
    console.log(marginLeft);
    //设定机柜远离左半边的距离
    $('.borderSide').css('marginLeft',marginLeft);
}
//开始生成-------------------------------------------------
//
//外部大容器
function superContainer() {
    $('body').prepend(`
        <div class="borderSide" ></div>
    `);
    //左边边框及螺丝样式
    $('.borderSide').append(`
            <div class="knob-left" ></div>
    `);
    for (let i = 0; i < 5; i++) {
        $('.knob-left').append(`
            <div class="knob-icon" >
                <img src="./img/knob.png" alt="" style="width: 100%;">
            </div>

        `);
    }

    //右边边框及螺丝样式
    $('.borderSide').append(`
            <div class="knob-right" ></div>
    `);
    for (let i = 0; i < 5; i++) {
        $('.knob-right').append(`
            <div class="knob-icon" >
                <img src="./img/knob.png" alt="" style="width: 100%;">
            </div>
        `);
    }

    //中间大框
    $('.borderSide').append(`
        <div class="cabinet" ></div>
    `);
}
//根据数据自定义外部大容器高度宽度
function setSuperContainerSize(elementSize) {
    $('.borderSide').height(elementSize[4][0]);
    $('.borderSide').width(elementSize[4][1]);
}
//根据数据调用各个函数生成组件（除板卡）（只有元素无尺寸大小）
function create(elementData) {

    for (let i = 0; i < elementData.length; i++) {
        if(elementData[i] == 1){
            //顶部与底部旋转风扇
            fanTopBottom();
        }
        else if(elementData[i] == 2){
            //机仓
            boardSlot();
        }
        else if (elementData[i] == 3){
            //网状散热口
            littleExhaust();
        }
        else if (elementData[i] == 4){
            //网线端口
            networkPort();
        }
    }
    //板槽序号
    boardNumber(bordersNumber);
}
//根据内部组件*重新*确定部分组件（外部大容器、两侧边栏图标位置、板槽号居中）的高度
function setAllSize(elementSize){
    let borderSideHeight = 0;
    let outSuperContainer = $('body').height() * parseInt(elementSize[4][0]) / 100;
    console.log(outSuperContainer);
    // 先获取大容器的高度
    // 计算每一个组件百分比高度与其最小高度
    // 若百分比高度小于最小高度，则外部大容器应加上最小高度
    // 若百分比高度大于最小高度，则外部大容器应加上百分比高度
    for (let i = 0; i < elementData.length; i++) {
        if(elementData[i] == 1){
            //风扇
            let fanHeight = outSuperContainer * parseInt(elementSize[0][0]) / 100;
            if (fanHeight > 25){
                $('.topBottom').height(fanHeight);
                borderSideHeight += fanHeight;
            }
            else{
                $('.topBottom').height(25);
                borderSideHeight += 25;
            }
        }
        else if(elementData[i] == 2){
            //一排板载
            let boardHeight = outSuperContainer * parseInt(elementSize[1][0]) / 100;
            if (boardHeight > 180){
                $('.warehouse').height(boardHeight);
                borderSideHeight += boardHeight;
            }
            else{
                $('.warehouse').height(180);
                borderSideHeight += 180;
            }
        }
        else if (elementData[i] == 3){
            //散热口
            let minifanHeight = outSuperContainer * parseInt(elementSize[2][0]) / 100;
            if (minifanHeight > 20){
                $('.fan').height(minifanHeight);
                borderSideHeight += minifanHeight;
            }
            else{
                $('.fan').height(20);
                borderSideHeight += 20;
            }
        }
        else if (elementData[i] == 4){
            //网线端口
            let portHeight = outSuperContainer * parseInt(elementSize[3][0]) / 100;
            if (portHeight > 35){
                $('.portbox').height(portHeight);
                borderSideHeight += portHeight;
            }
            else{
                $('.portbox').height(35);
                borderSideHeight += 35;
            }
        }
    }
    // console.log(borderSideHeight);

    $('.borderSide').height(borderSideHeight);

    //为侧边栏上的螺钉图标确定位置
    let iconHeight = $('.knob-icon').height();
    // console.log('图标'+iconHeight);
    let knobHeight = $('.knob-left').height();
    // console.log('侧边栏'+knobHeight);
    let iconMargin = (knobHeight - iconHeight * 5) / 4;
    // console.log('间距'+iconMargin);
    $('.knob-icon').css('marginBottom',iconMargin);

    //为板槽上的数字设置动态字号并垂直居中
    $('.label').css('fontSize',$('.label').width()/2);
    let labelHeight = $('.label').height();
    let fontSize = $('.label > div').height();
    let fontMarginTop = (labelHeight - fontSize) / 2;
    $('.label > div').css('marginTop',fontMarginTop);
}

//生成结束------------------------------------------------

//板卡故障告警函数
function serverAlarm(i,j) {
    let row = serverData[i].length;
    //找到第 i 排，第 j 个 input 的父亲（board）
    //因为 borad 样式不一致，所以名字亦不一致，但都有 input
    //console.log($('.warehouse').eq(i).find('input').eq(j));
    setInterval(function () {
        if ($('.warehouse').eq(i).find('input').eq(j).parent().css('background-color') == "rgb(255, 255, 255)")
            $('.warehouse').eq(i).find('input').eq(j).parent().css("background","red");
        else
            $('.warehouse').eq(i).find('input').eq(j).parent().css("background","rgb(255, 255, 255)");
    },500);
}

//获取第一次接收到的设备的所有 *静态* 数据
//const returnAjaxData = new Object();

//获取上个页面 get 传来的值
const GetRequest = () => {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    var str = url.substr('?');
    str = str.substr(1);
    var strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
        theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
    }
    return theRequest;
}
var Request = new Object();
Request = GetRequest();

//发送 ajax ，请求后台静态数据
// function getStaticData(){
//     var ID = Request.ID;
//     var bigData = new Object();
//     $.ajax({
//         url: "XXXXXXXXXXXXX",
//         type: "get",
//         data: {"ID":ID},
//         success: function(xhr){
//             console.log(xhr);
//             returnAjax(xhr);
//         },
//         error: function (xhr) {
//             alert(xhr.status);
//         }
//     });
// }
//将ajax所请求的数据赋给 returnAjaxData 对象
// const returnAjax = (xhr) => {returnAjaxData = xhr;}

$(document).ready(function () {
    //外部大盒子所有情况都要先构建
    superContainer();
    //设置外部大框子高宽
    setSuperContainerSize(elementSize);
    //构建页面（除板卡）
    create(elementData);
    //重新设置外部容器
    setAllSize(elementSize);
    //设置机柜位置
    setPosition();
    //添加板卡
    for (let i = 0; i < serverData.length; i++) {
        let number = 1;
        for (let j = 0; j < serverData[i].length; j++) {
            //B类型板卡
            if (serverData[i][j].type == 'B'){
                $('.board-box').eq(i).append(`
                        <div class="board board-B">
                            <div class="board-B-top" ></div>

                            <div class="board-B-port-group-2" >
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                            </div>
                            <div class="board-B-top" style="bottom:0;"></div>
                            <input type="range" min="${i}" max="${j}" value="123" >
                        </div>
                `);
            }
            //加载A类型板卡
            else if (serverData[i][j].type == 'A'){
                $('.board-box').eq(i).append(`
                        <div class="board board-A">
                            <div class="board-A-top" > </div>
                            <div class="board-A-light" >
                                <div class="light-red" ></div>
                                <div class="light-green" ></div>
                                <div class="light-blue" ></div>
                                <div class="light-gold" ></div>
                            </div>
                            <div class="board-A-port-group-1" >
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                            </div>
                            <div class="board-A-port-group-2" >
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                                <div class="mini-port" ></div>
                            </div>
                            <div class="board-A-top" style="bottom:0;"> </div>
                            <input type="range" min="${i}" max="${j}" value="123" >
                        </div>
                `);
            }
            //该数据为空且上一张板卡非 占用两卡槽 位置的板卡 则说明该卡槽无板卡
            else if (!serverData[i][j].type && serverData[i][j-1].type != 'B'  ){
                $('.board-box').eq(i).append(`
                    <div class="board board-O">
                    <div class="empty1" ></div>
                    <div class="empty2">
                        <p>该卡槽未检测到板卡</p>
                    </div>
                        <input type="range" min="${i}" max="${j}" value="123" >
                    </div>
                    `);
            }
            //上一张卡槽为B类型说明占两个卡槽位置
                //该卡槽不需要元素显示，用来占位，其size为0
            else if (serverData[i][j-1].type == 'B'){
                $('.board-box').eq(i).append(`
                    <div class="board board-x">
                        <input type="range" min="${i}" max="${j}" value="123" >
                    </div>
                    `);
            }
            //这里设置警告的条件***************************
            if (parseInt(serverData[i][j].status) > 9){
                serverAlarm(i,j);
            }
        }
    }
    //设置板卡宽度
    setBoardWidth();
    //风扇效果
    setFanMove();
    //给板卡位置添加点击效果，被选中模式，数据板展示其数据
    $('input').bind('click',function () {
        let row= this.min;
        let col = this.max;
        //先将之前变色 board 的重置颜色
        $('.board').each(function () {
            $(this).css("background","white");
            $(this).parent().find('.mini-port').css("background","rgb(0, 0, 0)")
        });

        $(this).parent().css("background","rgb(90, 94, 89)");
        //将单击后的 board 黑点变为黄色
        $(this).parent().find('.mini-port').css("background","rgb(255, 215, 0)");

        //设置数据展板的内容
        $('.data-board').text('');
        $('.data-board').append(`<h2>板载数据</h2>`);
        $('.data-board').append("<h3>板卡位置：第"+row+"排第"+col+"列</h3>"+'<br>');
        $('.data-board').append("<h3>板卡类型：</h3>"+serverData[row][col].type+'<br>');
        $('.data-board').append("<h3>板卡RAM：</h3>"+serverData[row][col].ram+"%<br>");
        $('.data-board').append("<h3>板卡CPU：</h3>"+serverData[row][col].cpu+"%<br>");

        //此处 if 条件设置为警告条件
        if (parseInt(serverData[row][col].status) > 9)
            $('.data-board').append("<h3>板卡状态：危险!</h3>"+'<br>');
        else if(serverData[row][col].status)
            $('.data-board').append("<h3>板卡状态：正常!</h3>"+'<br>');
    });
    //双击板卡取消选中
    $('input').bind('dblclick',function () {
        $(this).parent().css("background","rgb(255, 255, 255)");
        $(this).parent().find('.mini-port').css("background","rgb(0, 0, 0)")
    });

    //给板卡位置添加悬浮效果
    //设置一个大小与 board 相等的 input 并隐藏掉
    // 作用：
    // 1. 用于记录其在板载的得位置 min 为 所在行 max 为所占卡槽第一个
    // 2. 用于 hover 抓取
    $("input").hover(function(){
        if($(this).parent().css('background-color') == "rgb(255, 255, 255)")
            $(this).parent().css("background","rgb(186, 188 ,175)");
        let row= this.min;
        let col = this.max;
        var newPos=new Object();
        newPos.left=$(this).offset().left+5;
        newPos.top=$(this).offset().top+30;
        $('.hoverData').text("板卡编号："+serverData[row][col].ID);
        $('.hoverData').offset(newPos);
    },function(){
        if($(this).parent().css('background-color') == "rgb(186, 188, 175)")
            $(this).parent().css("background","rgb(255, 255, 255)");

        //默认位置在（-2000,-2000）位置，表示为隐藏
        var newPos=new Object();
        newPos.left="-2000";
        newPos.top="-2000";
        $('.hoverData').text("");
        $('.hoverData').offset(newPos);
    });
});