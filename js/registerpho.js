
//匹配1开头的11位手机号码
// 手机号判断
    var ph=/^1[3|5|7|8|][0-9]{9}$/
    if($("#telphone").val()!=""){
        if(!(ph.test($("#telphone").val()))){
            $("#telphoneMes").text("请输入正确手机号");
            // return false;
        }else if(ph){
            $("#telphoneMes").text("");
            // return true;
        }
    }else{
            $("#telphoneMes").text("");
        }
    

$("form-group input").blur(function(){
    $(this).css('border',"black");
})
// 边输入边显示密码强度
$("#col-sm-10 #createPass").blur(function(){
    if($("#createPass").val=''){
        $("#qiangdu").show();
        $("#qiangdu").val='';
        $("#qiangdu").val='请输入6-16位的数字密码';
    }else{
        $("#qiangdu").show();
        $("#weak")[0].style.backgroundColor='';
        $("#middle")[0].style.backgroundColor='';
        $("#strong")[0].style.backgroundColor='';
        if($(this).val.length==0){

        }else if($(this).val.length<=6){
            $("#weak")[0].style.backgroundColor='#red';
        }else if($(this).val.length<=10){
            $("#middle")[0].style.backgroundColor='#red';
        }else if($(this).val.length<=16){
            $("#strong")[0].style.backgroundColor='#red';
        }
    }
    
})
// 确认密码
$('#querenPass').input(function(){
    if($(this).val==''){
        $('#querenPass + .message').html='请再次输入密码';
    }else if($(this).val!==$('#createPass').val){
        $('#querenPass + .message').html='两次密码输入不一样';
    }
})
//验证码
$("#yanZhengMa").click(function(){
    // $('#querenPass + .message').show();
    $('#yanZhengMa + .message').css(margin-top,'-108px')
    $('#yanZhengMa + .message').html('请输入验证码');
})

// ajax请求
$("#zhuceya").onclick = function(){
    //1、
    let xhr = new XMLHttpRequest();

    xhr.open("post","php/regSave.php",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="-1"){
                $('.col-sm-10 .form-control+span').style.background=`url(../img/registerimg/error.gif) no-repeat`;
                $('.col-sm-10 .form-control+span').style.backgroundposition=`1px -17px`;
                $("#telphoneMes").innerHTML ="用户名被人使用";
            }else if(xhr.responseText=="1"){
                $('.col-sm-10 .form-control+span').style.background=`url(../img/registerimg/error.gif) no-repeat`;
                $('.col-sm-10 .form-control+span').style.backgroundposition=`-38px -17px`;
                $("#messageBox").innerHTML ="注册成功，请<a href='login.html'>登录</a>";
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `username=${$("#createPass").value}&userpass=${$("#querenPass").value}`;
    xhr.send(sendstr);

}
