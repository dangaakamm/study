<?php
   class messageControl extends index{
      function addmessage(){
          if(isset($_SESSION["userlogin"])){
              $db = new db("message");
              $sid = $_POST["sid"];
              $con = $_POST["con"];
              $uid = $_SESSION["uid"];
              if($db->field("sid='{$sid}',con='{$con}',uid='{$uid}'")->insert()){
                  echo '{"result":"ok"}';
              }
          }else{
              $_SESSION["conblogurl"] = "index.php?m=index&c=show&a=show&sid={$_POST["sid"]}";
              echo '{"result":"error"}';
          }
      }
      function addreply(){
          $db = new db("reply");
          $mid = $_POST["mid"];
          $con = $_POST["con"];
          $uid = $_SESSION["uid"];
          if($db->field("mid='{$mid}',con='{$con}',uid='{$uid}'")->insert()){
              echo '{"result":"ok"}';
          }
      }
   }
?>