// 划过哪张小图，然后让其对应的大图和小图对应
// let imgs=document.getElementById('big').childNodes();
// $('#smallImg #small').mouseenter(function(){
//     for(let i=0;i<imgs.length;i++){
//         for(let j=1;j<6;j++){
//             imgs[i].src="img/shoppingInformationimg/aa+j+.jpg";
//         }
//     }
// })
// $('#smallONe').mouseenter(function(){
//     $('#bigONe').attr('src','img/shoppingInformationimg/aa1.jpg');
// })
// 侧边栏悬浮
$("#photo ").mouseenter(function () {
    $("#kuangkuang")[0].style.display = "block";
    $("#kuangkuang").animate(
        { left: '-130px' }
        , 350);
})
$("#gudingOne").mouseleave(function () {
    $("#kuangkuang")[0].style.display = "none";
    $("#kuangkuang")[0].style.left = "-170px";
})

$("#gudingThree #addOne").mouseenter(function () {
    $(".wenziya")[0].style.display = "block";
    $(".wenziya").animate(
        { left: '-100px' }
        , 350);
})
$("#gudingThree .addBox").mouseleave(function () {
    $(".wenziya")[0].style.display = "none";
    $(".wenziya")[0].style.left = "-150px";
})
$("#gudingThree #addTwo").mouseenter(function () {
    $(".wenziya")[1].style.display = "block";
    $(".wenziya").animate(
        { left: '-100px' }
        , 350);
})
$("#gudingThree .addBox").mouseleave(function () {
    $(".wenziya")[1].style.display = "none";
    $(".wenziya")[1].style.left = "-150px";
})
$("#gudingThree #addThree").mouseenter(function () {
    $(".wenziya")[2].style.display = "block";
    $(".wenziya").animate(
        { left: '-100px' }
        , 350);
})
$("#gudingThree .addBox").mouseleave(function () {
    $(".wenziya")[2].style.display = "none";
    $(".wenziya")[2].style.left = "-150px";
})
$("#gudingThree #addFour").mouseenter(function () {
    $(".wenziya")[3].style.display = "block";
    $(".wenziya").animate(
        { left: '-100px' }
        , 350);
})
$("#gudingThree .addBox").mouseleave(function () {
    $(".wenziya")[3].style.display = "none";
    $(".wenziya")[3].style.left = "-150px";
})
$("#gudingThree #addFive").mouseenter(function () {
    $(".wenziya")[4].style.display = "block";
    $(".wenziya").animate(
        { left: '-100px' }
        , 350);
})
$("#gudingThree .addBox").mouseleave(function () {
    $(".wenziya")[4].style.display = "none";
    $(".wenziya")[4].style.left = "-150px";
})
//秒杀倒计时函数

var daojishi = $(function () {
    var tid = setInterval(function () {
        var oTimebox = $(".timebox");
        var syTime = oTimebox.text();
        var totalSec = getTotalSecond(syTime) - 1;
        if (totalSec >= 0) {
            oTimebox.text(getNewSyTime(totalSec));
        } else {
            clearInterval(tid);
        }
    }, 1000);



    //根据剩余时间字符串计算出总秒数

    function getTotalSecond(timestr) {

        var reg = /\d+/g;

        var timenums = new Array();

        while ((r = reg.exec(timestr)) != null) {

            timenums.push(parseInt(r));

        }

        var second = 0, i = 0;

        if (timenums.length == 4) {

            second += timenums[0] * 24 * 3600;

            i = 1;

        }

        second += timenums[i] * 3600 + timenums[++i] * 60 + timenums[++i];

        return second;

    }
    //根据剩余秒数生成时间格式

    function getNewSyTime(sec) {

        var s = sec % 60;

        sec = (sec - s) / 60; //min

        var m = sec % 60;

        sec = (sec - m) / 60; //hour

        var h = sec % 24;

        var d = (sec - h) / 24;//day

        var syTimeStr = "";

        if (d > 0) {

            syTimeStr += d.toString() + "天";

        }
        syTimeStr += ("0" + h.toString()).substr(-2) + "时"

            + ("0" + m.toString()).substr(-2) + "分"

            + ("0" + s.toString()).substr(-2) + "秒";
        return syTimeStr;
    }
});
//  划过一定的高度让其固定 
window.onscroll = function () {
    var xuanfu = document.getElementById("xuanfu");
    var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
    document.title = _scroll;
    if (_scroll >= 700) {
        xuanfu.style.display = "block";
        xuanfu.style.position = "fixed";
        xuanfu.style.top = 0;
    } else {
        xuanfu.style.display = "none";
    }
}
// 点击导航时，让其下方出现线
let liobj = document.getElementById('yuanXian').children;
for (let i = 0; i < liobj.length; i++) {
    liobj[i].onclick = function () {
        for (let j = 0; j < liobj.length; j++) {
            liobj[j].style.borderBottom = 'none';
        }
        this.style.borderBottom = '3px solid red';
        stop.preventDefault();
    }
}

let xuanFuliobj = document.getElementById('xuanfu').children;
for (let i = 0; i < xuanFuliobj.length; i++) {
    xuanFuliobj[i].onclick = function () {
        for (let j = 0; j < xuanFuliobj.length; j++) {
            xuanFuliobj[j].style.borderBottom = 'none';
        }
        xuanFuliobj[i].style.borderBottom = '3px solid red';
    }
}
// 当点击数量键时，其值增加
$('#add').click(function () {
    let shiCountYa = $(this).prev();
    shiCountYa.val(parseInt(shiCountYa.val()) + 1);

})
// 当点击数量键时，其值增加
$('#reduce').click(function () {
    let shiCountYa = $(this).next();
    shiCountYa.val(parseInt(shiCountYa.val()) - 1);
    if (shiCountYa.val() == 0) {
        $('#reduce').attr('disabled', 'disabled');
        $('#reduce').css('color', '#888888');
    } else if (shiCountYa.val() != 0) {
        $('#reduce').css('color', '#666666');
    }
})

// 点击按钮，出现城市框,并且显示内容
$('#city').click(function () {
    $("#shengShi").css('display', 'block');
})
// $('#shengShi li').click(()=>{
//     $('#city').val()=$(this).html()
// })
let ssliobj = document.getElementById('ulsha').children;
let citys = document.getElementById('city');
for (let k = 0; k < ssliobj.length; k++) {
    ssliobj[k].onclick = function () {
        let zhi = this.innerHTML;
        citys.value=zhi;
    }
}
$('#shengShi').mouseup(function () {
    $("#shengShi").css('display', 'none');
})
// 省市联动
// var arr = new Array(4);
// //每个数组中第一个元素是省名称，后面的元素是省里面的城市
// arr[0] = ["甘肃", "兰州", "嘉峪关", "白银", "酒泉"];
// arr[1] = ["陕西", "西安", "宝鸡", "咸阳", "渭南"];
// arr[2] = ["四川", "成都", "绵阳", "泸州", "乐山"];
// arr[3] = ["山西", "太原", "大同", "晋城", "朔州"];

// function add1(val){
//     for(let i=0;i<arr.length;i++){
//         let v = arr[i];
//         if(v[0]==val.value){
//             let d = document.getElementById("city");
//             d.innerHTML = "";
//             for(let j=0;j<v.length;j++){
//                 let a = v[j];
//                 if(j==0){
//                     a="--请选择--";
//                 }
//                 let b = document.createElement("option");
//                 let c = document.createTextNode(a)
//                 b.appendChild(c);
//                 d.appendChild(b);
//             }
//         }
//     }
// }