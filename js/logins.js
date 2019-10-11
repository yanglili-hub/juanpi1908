
// 划过登录按钮背景色以动画的形式变化
$("#boxs .btn-default").mouseenter(function(){
    $(this).css({
        background:'#ff464e',
        border:'#ff464e'
    })
})
$("#boxs .btn-default").mouseleaver(function(){
    $(this).css({
        background:'#ff464e',
        border:'#ff464e'
    })
})
// $("#boxs .btn-default").mouseup(function(){
//     $(this).css({
//         background:'#ff464e',
//         border:'#ff464e'
//     })
// })
// $("#boxs .btn-default").bind({
//     mouseover:function(){
//         $("#boxs .btn-default").css({
//             background:'#ff464e',
//             border:'#ff464e'
//         });
//     },
//     mouseout:function(){
//         $("#boxs .btn-default").css({
//             background:'#666666',
//             border:'#666666',
//         });
//     }
// $("#boxs .btn-default").mouseleave(function(){
//     $(this).css({
//         background:'#666666',
//         border:'#666666'
//     })
// })

// 14天之内免登录
    $("#btn-default").onclick=function(){
        if($("#checkbox").val=checked){
            var d = new Date();
            var currentTime = d.getTime();
            currentTime += 14*24*60*60*1000;
            d.setTime(currentTime);
            console.log(username);
            console.log(password);
            document.cookie = "username="+username+";expires="+d;
            document.cookie = "password="+password+";expires="+d;
        }
    }
