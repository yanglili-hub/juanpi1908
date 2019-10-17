$(function(){
    $('.add').click(function(){
        let twoCount=$(this).prev();
        twoCount.val(parseInt(twoCount.val())+1);
        if((twoCount).val()>10){
            alert('亲，本商品限购10件')
        }
        twoCount.val()==10;
        calMoney();
    })
    $('.reduce').click(function(){
        let twoCount=$(this).next();
        twoCount.val(parseInt(twoCount.val())-1);
        if((twoCount).val()<=0){
            alert('亲，请重新选择该商品')
        }
        twoCount.val()==1;
        calMoney();
    })
   $('#allCheckBox').bindCheckBox($('.goodsBox :checkbox'),calMoney);
})

let count=document.getElementById('count');
function calMoney(){
    let money = 0;
    let $subCheckBox = $(".goodsBox");
    for(let i=0;i<$subCheckBox.length;i++){
        if($subCheckBox[i].checked){
            let $goodsBox = $($subCheckBox[i].$('#price'));
            let $num=$($subCheckBox[i].$('.twoCount'));
            money += parseFloat($num.val())*parseFloat($goodsBox.html());
        }
    }
    $("#informations em").html(money);
}
// 显示用户名
function showUser(){
    let username = getCookie('username');
    if(username!=null){
        $("#yongHuName").html(username);
        $(".dropdown").show();
        $(".dropdown").next('.myOne').hide();
        $('#myTwo').hide();
    }else{
      $(".dropdown").hide();
      $(".dropdown").next('.myOne').show();
      $('#myTwo').show();
    }
}
window.onload = function(){
  showUser(); 
  
  $(".dropdown-menu").last().click(function(){
      removeCookie("username");
      showUser();
  })
}
