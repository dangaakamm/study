<?php
class catControl extends main{
	//显示添加分类
	function showadd(){
		$db=new db("category");
		$data=$db->select();
		$this->smarty->assign("trees",$this->tree($data,0,0));
		$this->smarty->display("showAdd.html");
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

	//添加分类
	function addcat(){
		$db=new db("category");
		$pid=$_POST["pid"];
		$cname=$_POST["cname"];
		if($db->field("pid='{$pid}',cname='{$cname}'")->insert()>0){
			$this->smarty->assign("noticTitle","添加分类成功");
			$this->smarty->assign("noticPage","返回添加页面");
			$this->smarty->assign("noticUrl","index.php?m=admin&c=cat&a=showadd");
			$this->smarty->display("notic.html");
		};
	}
	//显示所有分类
	function showcat(){
		$db=new db("category");
		$data=$db->select();
		$this->smarty->assign("trees",$this->tree($data,0,0));
		$this->smarty->display("showcat.html");
	}

	//删除分类下的所有子分类
	function del($arg){
        $cid=$arg["cid"];
		$db=new db("category");
		$data=$db->select();
		if($this->sons($data,$cid)){
            $this->smarty->assign("noticTitle","删除失败");
			$this->smarty->assign("noticPage","返回分类页面");
			$this->smarty->assign("noticUrl","index.php?m=admin&c=cat&a=showcat");
			$this->smarty->display("notic.html");
		}else{
			if($db->where("cid={$cid}")->delete()){
				$this->smarty->assign("noticTitle","删除成功");
				$this->smarty->assign("noticPage","返回分类页面");
				$this->smarty->assign("noticUrl","index.php?m=admin&c=cat&a=showcat");
				$this->smarty->display("notic.html");
		    }
	    }
		
	}
    //判断某类下面是否存在子类
	private function sons($data,$cid){
        global $sons;// 全局变量
        foreach($data as $v){
        	if($v["pid"]==$cid){
        		$cid=$v["cid"];
        		$sons[]=$v;
        		// 递归
        		$this->sons($data,$cid);
        	}
        }
        return $sons;
	}

	function showedit($arg){
        $cid=$arg["cid"];
        $db=new db("category");
		$data=$db->select();
		$this->smarty->assign("trees",$this->tree($data,0,0));
		$cname=$db->field("pid,cname")->where("cid={$cid}")->select();
		$this->smarty->assign("cname",$cname);
		$this->smarty->assign("pid",$cname[0]["pid"]);
		$this->smarty->assign("cid",$cid);
		$this->smarty->display("showedit.html");
	}

	function catedit($arg){
		$cid=$arg["cid"];
        $pid=$_POST["pid"];
        $cname=$_POST["cname"];
        $db=new db("category");
        if($db->field("pid='{$pid}',cname='{$cname}'")->where("cid={$cid}")->update()){
            $this->smarty->assign("noticTitle","修改成功");
			$this->smarty->assign("noticPage","返回修改页面");
			$this->smarty->assign("noticUrl","index.php?m=admin&c=cat&a=showedit&cid={$cid}");
			$this->smarty->display("notic.html");
        }else{
        	$this->smarty->assign("noticTitle","修改失败");
			$this->smarty->assign("noticPage","返回修改页面");
			$this->smarty->assign("noticUrl","index.php?m=admin&c=cat&a=showedit&cid={$cid}");
			$this->smarty->display("notic.html");
        }
	}
}
?>