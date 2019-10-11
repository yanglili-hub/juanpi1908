
//匹配1开头的11位手机号码

var regPhoneStr =/^1[0-9]{10}$/;
if($("#telphone").val==''){
    $(this).after("<div>请输入正确的手机号码</div>");
}


$("form-group input").blur(function(){
    $(this).css('color',"black");
})