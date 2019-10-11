//秒杀倒计时函数

var daojishi=$(function () {
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


    // 分页划过变色
    $("#fenye li").mouseenter(function(){
      $(this).css({background:"#ff464e",
                  color:"white"
      })
  })
  $("#fenye li").not($("#fenye li")[1]).mouseleave(function(){
      $(this).css({background:"white",
                  color:"#919191"
      })
  })
  $("#fenye li").eq(1).css('background',"#ff464e",
                          'color',"white"
  );

  // 下面的小导航滚动
  $(window).ready(function(){
      setInterval(function(){
          $(".navTwo ").slideToggle("slow");
          $(".navOne ").slideToggle('slow');
      },3000)
  })
  
window.onscroll = function(){
  var xuanfu = document.getElementById("xuanfu");
  var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
  document.title = _scroll;
  if(_scroll >= 1100){
          xuanfu.style.display="block";
    xuanfu.style.position = "fixed";
    xuanfu.style.top = 0;
  } else {
          xuanfu.style.display="none";
  }
}
  $(window).scroll(function(){
      if($("#addFive").scrollTop(1000)){
          $("#addFive")[0].style.display="block";
      }else if($("#addFive").scrollTop(1000)){
          $("#addFive")[0].style.display="none";
      }
  })
  // 侧边栏悬浮
  $("#photo ").mouseenter(function(){
      $("#kuangkuang")[0].style.display="block";
          $("#kuangkuang").animate(
              {left:'-130px'}
          ,350);
  })
  $("#gudingOne").mouseleave(function(){
          $("#kuangkuang")[0].style.display="none";
          $("#kuangkuang")[0].style.left="-170px";
  })

  $("#gudingThree #addOne").mouseenter(function(){
      $(".wenziya")[0].style.display="block";
          $(".wenziya").animate(
              {left:'-100px'}
          ,350);
  })
  $("#gudingThree .addBox").mouseleave(function(){
          $(".wenziya")[0].style.display="none";
          $(".wenziya")[0].style.left="-150px";
  })
$("#gudingThree #addTwo").mouseenter(function(){
      $(".wenziya")[1].style.display="block";
          $(".wenziya").animate(
              {left:'-100px'}
          ,350);
  })
  $("#gudingThree .addBox").mouseleave(function(){
          $(".wenziya")[1].style.display="none";
          $(".wenziya")[1].style.left="-150px";
  })
  $("#gudingThree #addThree").mouseenter(function(){
      $(".wenziya")[2].style.display="block";
          $(".wenziya").animate(
              {left:'-100px'}
          ,350);
  })
  $("#gudingThree .addBox").mouseleave(function(){
          $(".wenziya")[2].style.display="none";
          $(".wenziya")[2].style.left="-150px";
  })
  $("#gudingThree #addFour").mouseenter(function(){
      $(".wenziya")[3].style.display="block";
          $(".wenziya").animate(
              {left:'-100px'}
          ,350);
  })
  $("#gudingThree .addBox").mouseleave(function(){
          $(".wenziya")[3].style.display="none";
          $(".wenziya")[3].style.left="-150px";
  })
  $("#gudingThree #addFive").mouseenter(function(){
      $(".wenziya")[4].style.display="block";
          $(".wenziya").animate(
              {left:'-100px'}
          ,350);
  })
  $("#gudingThree .addBox").mouseleave(function(){
          $(".wenziya")[4].style.display="none";
          $(".wenziya")[4].style.left="-150px";
  })

  // 分页跳页
