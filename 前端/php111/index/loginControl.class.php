<?php
  class loginControl extends index{
     function login(){
             $this->smarty->display("login.html");
         }

     function reg(){
         $this->smarty->display("reg.html");
     }
     function addUser(){
         $db=new db("user");
         if(isset($_POST["username"])){
             $username=$_POST["username"];

         }else{
             $this->login();
             exit;
         }
         if(isset($_POST["password"])){
             $password=md5($_POST["password"]);

         }else{
             $this->login();
             exit;
         }
         if($db->field("username='{$username}',password='{$password}'")->insert()>0){
             $this->smarty->assign("noticeTitle","注册成功");
             $this->smarty->assign("noticeCon","登录页");
             $this->smarty->assign("noticeUrl","index.php?m=index&c=login&a=login");
             $this->smarty->display("notice.html");

         }else{
             $this->smarty->assign("noticeTitle","注册失败");
             $this->smarty->assign("noticeCon","注册页");
             $this->smarty->assign("noticeUrl","index.php?m=index&c=login&a=reg");
             $this->smarty->display("notice.html");
         }
     }
     function checkLogin(){
         $db=new db("user");
         if(isset($_POST["username"])){
             $username=$_POST["username"];
         }else{
             $this->login();
             exit;
         }
         if(isset($_POST["password"])){
             $password=md5($_POST["password"]);
         }else{
             $this->login();
             exit;
         }
         $data=$db->select();
         foreach ($data as $v){
             if($v["username"]==$username){
                 if($v["password"]==$password){
                     $_SESSION["userlogin"]=1;
                     $_SESSION["username"]=$username;
                     $_SESSION["uid"]=$v["uid"];
                     $_SESSION["utime"]=$v["utime"];
                     $this->smarty->assign("noticeTitle","登录成功");
                     $this->smarty->assign("noticeCon","主页");
                     if(isset($_SESSION["conblogurl"])){
                         $this->smarty->assign("noticeUrl",$_SESSION["conblogurl"]);
                         unset($_SESSION["conblogurl"]);
                     }else{
                         $this->smarty->assign("noticeUrl","index.php");
                     }
                     $this->smarty->display("notice.html");
                     exit;

                 }
             }
         }
         $this->smarty->assign("noticeTitle","登录失败");
         $this->smarty->assign("noticeCon","登录页");
         $this->smarty->assign("noticeUrl","index.php?m=index&c=login&a=login");
         $this->smarty->display("notice.html");
     }
     function loginOut(){
         unset($_SESSION["userlogin"]);
         unset($_SESSION["username"]);
         unset($_SESSION["uid"]);
         unset($_SESSION["utime"]);
         $this->smarty->assign("noticeTitle","注销成功");
         $this->smarty->assign("noticeCon","主页");
         $this->smarty->assign("noticeUrl","index.php");
         $this->smarty->display("notice.html");
     }
  }
?>