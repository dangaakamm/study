<?php
class showControl extends main{
	function addconcon(){
		$db=new db("shows");
        $cid=$_POST["pid"];
		$title=$_POST["title"];
		$con=$_POST["con"];
		$status=$_POST["status"];
		$imgurl=$_POST["imgurl"];
		$aid=$_SESSION["aid"];
		$url=WEB_URL."?m=index&c=show&a=show&id=";
		if($db->field("cid='{$cid}',title='{$title}',con='{$con}',status='{$status}',imgurl='{$imgurl}',aid='{$aid}'")->insert()>0){
            $db->field("url='{$url}{$db->db->insert_id}'")->where("sid={$db->db->insert_id}")->update();
			$this->smarty->assign("noticTitle","添加内容成功");
			$this->smarty->assign("noticPage","返回添加内容页面");
			$this->smarty->assign("noticUrl","index.php?m=admin&c=show&a=addcon");
			$this->smarty->display("notic.html");
		};
	}

	function addcon(){
		$db=new db("category");
		$data=$db->select();
		$this->smarty->assign("trees",$this->tree($data,0,0));
		$this->smarty->display("addcon.html");

	}

	private function tree($data,$pid,$step){//添加无限分类
        global $trees;
        // 全局变量
		// $db=new db("category");
		// $data=$db->select();
        foreach($data as $v){
        	if($v["pid"]==$pid){
        		$flag=str_repeat("𠃊",$step);
        		// 重复
        		$v["cname"]=$flag.$v["cname"];
        		$trees[]=$v;
        		// 递归
        		$this->tree($data,$v["cid"],$step+1);
        	}
        }
        return $trees;
	}

	function upload(){
		if(is_uploaded_file($_FILES["file"]["tmp_name"])){
			$filename=ROOT_PATH."upload/".$_FILES["file"]["name"];
			$filename1=WEB_PATH."upload/".$_FILES["file"]["name"];
			move_uploaded_file($_FILES["file"]["tmp_name"],$filename);
			echo "{$filename1}";
		}
	}

}
?>