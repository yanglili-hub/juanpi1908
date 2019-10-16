
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

    xhr.open("post","php/2loginCheck.php",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="1"){
                if($('#mianDengLu').status='checked'){
                    addCookie("username",$("#username").val(),14);
                    addCookie("passname",$("#passname").val(),14);
                    location.href="index.html";
                }
            }else if(xhr.responseText=='0'){
                $("#messageBox img").show();
               // 点击插插符号
                $('#messageBox img').click(function(){
                    $(this).hide();
                    $('#passname').html('');
                })
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `username=${$("#username").val()}&userpass=${$("#passname").val()}`;
    xhr.send(sendstr);
}) 
