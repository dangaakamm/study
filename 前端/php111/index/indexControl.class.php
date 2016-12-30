<?php
  class indexControl extends index{
     function index(){
         $db = new db("category");
         $data = $db->select();
         function aa($data,$cid){
             $i=0;
             foreach($data as $v){
                 if($v["pid"]==$cid){
                     $arr[$i] = $v;
                     foreach($data as $v1){
                         if($v["cid"]==$v1["pid"]){
                             $arr[$i]["son"][] = $v1;
                         }
                     }
                     $i++;
                 }
             }
             return $arr;
         }
         $this->smarty->assign("menu",aa($data,0));
         $this->smarty->display("index.html");
     }
     function lists($param){
         $cid= $param["cid"];
         $db = new db("shows");
         $data = $db->where("cid={$cid}")->select();
         $this->smarty->assign("data",$data);
         $this->smarty->display("lists.html");
     }
  }
?>