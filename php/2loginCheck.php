<?php
header("Content-type:text/html;charset=utf-8");
$username=$_POST['username'];
$passname=$_POST['passname'];
//连接数据库
$con=mysql_connect('localhost','root','root');
if(!$con){
    echo ('数据库连接出错'.mysql_error());
}else{
    mysql_select_db('student',$con);
    $sqrStr="select *from vip where username='$username'and passname='$passname'";
    $result=mysql_query($sqrStr,$con);
    $rows=mysql_num_rows($result);
    mysql_close($con);
    if($rows>0){
       echo '-1';//表示用户名已存在,可以登录
    }else{
        echo '1';//该用户名在数据库中不存在，不可以登录
    }
}

?>