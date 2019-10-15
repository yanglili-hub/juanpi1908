
// 划过登录按钮背景色以动画的形式变化
$("#boxs .btn-default").mouseenter(function(){
    $(this).css({
        background:'#ff464e',
        border:'#ff464e'
    })
})
$("#boxs .btn-default").mouseout(function(){
    $(this).css({
        background:'#ff464e',
        border:'#ff464e'
    })
})
$('#wenzi #left span').mouseenter(function(){
    $(this).css({
        opacity:.8,
        color:"#ff464e"

    })
})
$('#wenzi #left span').mouseout(function(){
    $(this).css({
        opacity:1,
        color:"#444444"
    })
})
// ajax请求
$("#denglu").click(function(){
    //1、
    let xhr = new XMLHttpRequest();

    xhr.open("post","../php/2loginCheck.php",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="1"){
                // addCookie("username",$("#username").value,14);
                location.href="index.html";
            }else{
                $("#messageBox").css(show());
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `username=${$("#username").value}&userpass=${$("#passname").value}`;
    xhr.send(sendstr);
}) 
    

// 14天之内免登录
    // $("#btn-default").onclick=function(){
    //     if($("#checkbox").val=checked){
    //         var d = new Date();
    //         var currentTime = d.getTime();
    //         currentTime += 14*24*60*60*1000;
    //         d.setTime(currentTime);
    //         console.log(username);
    //         console.log(password);
    //         document.cookie = "username="+username+";expires="+d;
    //         document.cookie = "password="+password+";expires="+d;
    //     }
    // }
