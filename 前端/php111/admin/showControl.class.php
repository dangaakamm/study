<?php
   class showControl extends main{
      function showCon(){
          $db = new db("category");
          $data = $db->select();
          $this->smarty->assign("trees",$this->trees($data,0,0));
          $this->smarty->display("showCon.html");
      }

      private function trees($data,$pid,$step){
          global $tree;
          foreach ($data as $v){
              if($v["pid"]==$pid){
                  $zifu = str_repeat("→",$step);
                  $v["cname"] = $zifu.$v["cname"];
                  $tree[] = $v;
                  $this->trees($data,$v["cid"],$step+1);
              }
          }
          return $tree;
      }
      function upload(){
          if(is_uploaded_file($_FILES["file"]["tmp_name"])){
              move_uploaded_file($_FILES["file"]["tmp_name"],UPLOAD_PATH.$_FILES["file"]["name"]);
              echo WEB_PATH."upload/".$_FILES["file"]["name"];
          };
      }

       /**
        *
        */
       function addCon(){
          $cid = $_POST["cid"];
          $title=$_POST["title"];
          $con = $_POST["con"];
          $imgurl = $_POST["imgurl"];
          $status = $_POST["status"];
          $url = WEB_URL."?m=index&c=show&a=show&sid=";
          $aid = $_SESSION["aid"];
          $db = new db("shows");
          if($db->field("cid='{$cid}',title='{$title}',con='{$con}',imgurl='{$imgurl}',status='{$status}',aid='{$aid}'")->insert()){
             if($db->field("url='{$url}{$db->db->insert_id}'")->where("sid='{$db->db->insert_id}'")->update()){
                 $this->smarty->assign("noticeTitle","添加成功");
                 $this->smarty->assign("noticeCon","添加页");
                 $this->smarty->assign("noticeUrl","index.php?m=admin&c=show&a=showCon");
                 $this->smarty->display("notice.html");
             }
          }
      }
      function showText(){
          $db = new db("shows");
          $data = $db->select("select shows.*,admin.auser,category.cname from shows left join admin on admin.aid = shows.aid left join category on category.cid = shows.cid");
          $this->smarty->assign("data",$data);
          $this->smarty->display("showText.html");
      }
      function delText($param){
          $sid = $param["sid"];
          $db = new db("shows");
          if($db->where("sid={$sid}")->del()){
              $this->smarty->assign("noticeTitle","删除成功");
              $this->smarty->assign("noticeCon","查看页");
              $this->smarty->assign("noticeUrl","index.php?m=admin&c=show&a=showText");
              $this->smarty->display("notice.html");
          }
      }
      function update(){
          $sid = $_POST["sid"];
          $attr = $_POST["attr"];
          $val = $_POST["val"];
          $db = new db("shows");
          if($db->update("update shows set {$attr}='{$val}' where sid = {$sid}")){
              echo "ok";
          }
      }
   }
?>