let zhuceya=document.getElementsByClassName('zhuceya');
let weak=document.getElementById('weak');
let middle=document.getElementById('middle');
let strong=document.getElementById('strong');
let qiangdu=document.getElementById("qiangdu");
let telphone=document.getElementById('telphone');
let createPass=document.getElementById('createPass');
let querenPass=document.getElementById('querenPass');
let telphoneMes=document.getElementById('telphoneMes')
let passya=document.getElementById('passya');
let spans=document.getElementsByClassName('spans');
let huoquMA=document.getElementById('huoquMA');
let yanZhengMa=document.getElementById('yanZhengMa');
let huoQu=document.getElementById('huoQu');
let fangZhi=document.getElementById('fangZhi');

zhuceya[0].onclick=function(){
    // 非空判断
   
    if(telphone.value==''&&createPass.value==''&&querenPass.value==''){
        telphoneMes.innerHTML='请输入正确的手机号！';
        qiangdu.innerHTML='请输入密码！';
        passya.innerHTML='请再次输入密码！';
        huoquMA.innerHTML='验证码不能为空!';
        telphone.style.borderColor='#ff464e';
        createPass.style.borderColor='#ff464e';
        querenPass.style.borderColor='#ff464e';
        yanZhengMa.style.borderColor='#ff464e';
        spans.style.background='url(../img/registerimg/error.gif) no-repeat -7px -17px';
        spans.style.backgroundPosition='1px -17px';
    
        return false;
    }else{
        // telphoneMes.innerHTML='请输入11位手机号！';
        // qiangdu.innerHTML='请输入密码！';
        // passya.innerHTML='请输入确认密码！';        
        // huoquMA.innerHTML='请输入短信验证码!';
        telphone.style.borderColor='#666666';
        createPass.style.borderColor='#666666';
        querenPass.style.borderColor='#666666';
        yanZhengMa.style.borderColor='#666666'; 
    } 

// ajax请求
// zhuceya[0].onclick=function(){
    // 1、
    let xhr = new XMLHttpRequest();

    xhr.open("post","php/regSave.php",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="-1"){
                // spans[0].style.background=`url(../img/registerimg/error.gif) `;

                // spans[0].style.backgroundPosition=`1px -17px`;
                
            telphoneMes.innerHTML='该手机号已注册过,请登录<a href="index.html"></a>' ;
            }else if(xhr.responseText=="1"){
                // spans[0].style.background=`url(../img/registerimg/error.gif) no-repeat`;
                // spans[0].style.backgroundPosition=`-38px -17px`;
            
            telphoneMes.innerHTML='恭喜你，注册成功 ，请<a href="index.html">登录</a>' ;
             }else if(xhr.responseText=="0"){
                // spans[0].style.background=`url(../img/registerimg/error.gif) no-repeat`;
                // spans[0].style.backgroundPosition=`1px -17px`;
                alert("注册失败，请重新注册");
            // telphoneMes.innerHTML='恭喜你，注册成功 ，请<a href="index.html">登录</a>' ;

            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `username=${telphone.value}&userpass=${createPass.value}`;
    xhr.send(sendstr);
}
// }
telphone.onblur=function(){
    tel();
}
querenPass.onblur=function(){
    pass();
}
createPass.oninput=function(){
    // passQiangdu();
}
huoQu.onclick=function(){
    alert(getMa(6)); 
}
yanZhengMa.oninput=function(){
    panduanMa();
}
// 确认两次输入密码是否一致
function pass(){
    if(querenPass.value!=createPass.value){
        createPass.style.borderColor='#ff464e';
        querenPass.style.borderColor='#ff464e';
        passya.innerHTML='两次密码输入不一致';
        // spans.style.background='url(../img/registerimg/error.gif) no-repeat -7px -17px';
        // spans.style.backgroundPosition='1px -17px';
        return 0;
    }else{
        createPass.style.borderColor='#666666';
        querenPass.style.borderColor='#666666';
        passya.innerHTML='';
        return 1;
        }
}
function tel(){
    var phreg=/^1[3|5|7|8|][0-9]{9}$/;
        if(phreg.test(telphone.value)){
            telphone.style.borderColor='#666666';
            telphoneMes.innerHTML='';
            // √
            // spans[0].style.background='url(../img/registerimg/error.gif) no-repeat -38px -17px';  
            return 1;
        }else {
            telphone.style.borderColor='#ff464e';
            // spans[0].style.background='url(../img/registerimg/error.gif) no-repeat 1px -17px';
            telphoneMes.innerHTML="请输入正确的手机号";
            return 0;
        }
    } 
// 获得验证码
function getMa(n){

    var str="";
    for(var i=0;i<n;i++){
        str+=parseInt(Math.random()*10);
    }
    fangZhi.innerHTML=str;

    return  str;

}

// 判断验证码输入是否一致
function panduanMa(){
    if(yanZhengMa.value!=fangZhi.innerHTML){
        yanZhengMa.style.borderColor='#ff464e';
        huoquMA.innerHTML='验证码输入错误';
        // spans.style.background='url(../img/registerimg/error.gif) no-repeat -7px -17px';
        // spans.style.backgroundPosition='1px -17px';
        return 0;
    }else{
        yanZhengMa.style.borderColor='#666666';
        yanZhengMa.style.borderColor='#666666';
        huoquMA.innerHTML='';
        return 1;
        }
}
// 边输入边显示密码强度
// let qiangduSpan=document.getElementById('qiangdu').children;
// function passQiangdu(){
//     if(createPass.value==''){
//         qiangdu.innerHTML='请输入6-16位的数字密码';
//     }else{
//         qiangduSpan.style.dispaly='block';
//         weak.style.backgroundColor='';
//         middle.style.backgroundColor='';
//         strong.style.backgroundColor='';
//         if((this).value.length==0){
//              qiangduSpan.style.dispaly='none';
//              qiangdu.innerHTML='请输入6-16位的数字密码';
//         }else if((this).value.length<=6){
//             weak.style.backgroundColor='#ff464e';
//         }else if((this).value.length<=10){
//             middle.style.backgroundColor='#ff464e';
//         }else if((this).value.length<=16){
//             strong.style.backgroundColor='#ff464e';
//         }
//     }
    
// }



    

