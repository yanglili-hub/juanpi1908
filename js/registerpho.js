let zhuceya=document.getElementsByClassName('zhuceya');

zhuceya[0].onclick=function(){
    // 非空判断
    let telphone=document.getElementById('telphone');
    let createPass=document.getElementById('createPass');
    let querenPass=document.getElementById('querenPass');
    let telphoneMes=document.getElementById('telphoneMes')
    let passya=document.getElementById('passya');
    let spans=document.getElementsByClassName('spans');
    let qiangdu=document.getElementById("qiangdu");
    let weak=document.getElementById('weak');
    let middle=document.getElementById('middle');
    let strong=document.getElementById('strong');
    if(telphone.value==''||createPass.value==''||querenPass.value==''){
        alert('亲，输入的内容不能为空');
        return false;
    }
    // 确认两次输入密码是否一致
    if(querenPass.value!=createPass.value){
        passya.innerHTML='两次密码输入不一样';
        return false;
        }else{
        passya.innerHTML='';

        }
    // 匹配1开头的11位手机号码
    // 手机号判断
    var phreg=/^1[3|5|7|8|][0-9]{9}$/
    if(telphone.value!=""){
        if(phreg.test(telphone.value)){
            spans[0].style.background=`url(../img/registerimg/error.gif) no-repeat -38px -17px`;
            
            alert('dui');
            return true;
        }else {
            spans[0].style.background=`url(../img/registerimg/error.gif) no-repeat -7px -17px`;
            telphoneMes.innerHTML="请输入正确的手机号";
            return false;
        }
    }else{
        alert('请输入手机号');
        telphoneMes.innerHTML('请输入手机号')
        }   
}

// 边输入边显示密码强度
createPass.onblur=function(){
    if(createPass.value=''){
        qiangdu.innerHTML='请输入6-16位的数字密码';
    }else{
        $("#qiangdu").show();
        weak.style.backgroundColor='';
        middle.style.backgroundColor='';
        strong.style.backgroundColor='';
        if(this)value.length==0){

        }else if($(this).val.length<=6){
            $("#weak")[0].style.backgroundColor='#ff464e';
        }else if($(this).val.length<=10){
            $("#middle")[0].style.backgroundColor='#ff464e';
        }else if($(this).val.length<=16){
            $("#strong")[0].style.backgroundColor='#ff464e';
        }
    }
    
}
// 确认密码

//验证码
$("#yanZhengMa").click(function(){
    // $('#querenPass + .message').show();
    $('#yanZhengMa + .message').css(margin-top,'-108px')
    $('#yanZhengMa + .message').html('请输入验证码');
})




    

