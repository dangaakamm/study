<?php
  class showControl extends index{
      function show($param){
          $sid = $param["sid"];
          $db = new db("shows");
          $data = $db->where("sid={$sid}")->select();
          $this->smarty->assign("sid",$sid);
          $status = $data[0]["status"];
          $this->smarty->assign("data",$data);
          $db = new db("message");
          $messageDate = $db->where("sid='{$sid}'")->select();
          foreach ($messageDate as $k=>$v){
              $arr[$k] = $v;
              $db->table = "reply";
              $arr[$k]["son"] = @$db->where("mid={$v['mid']}")->select();
          }
          $this->smarty->assign("arr",$arr);
          if($status==0){
              $this->smarty->display("show.html");
              $this->smarty->assign("arr",$arr);
          }else{
              if(isset($_SESSION["userlogin"])){
                  $this->smarty->display("show.html");
                  $this->smarty->assign("arr",$arr);
              }else{
                  $url = $data[0]["url"];
                  $_SESSION["conblogurl"] = $url;
                  $this->smarty->assign("arr",$arr);
                  $this->smarty->assign("noticeTitle","请登录");
                  $this->smarty->assign("noticeCon","登录页");
                  $this->smarty->assign("noticeUrl","index.php?m=index&c=login&a=login");
                  $this->smarty->display("notice.html");

              }
          }

      }
  }
?>