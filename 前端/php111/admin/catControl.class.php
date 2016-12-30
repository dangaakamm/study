<?php
class catControl extends main{
	function showAdd(){
		$db=new db("category");
		$data=$db->select();
		function trees($data,$pid,$step){
              global $trees;
              foreach ($data as $v){
              	if($v["pid"]==$pid){
              		$flag=str_repeat("♣",$step);
              		$v["cname"]=$flag.$v["cname"];
              		$trees[]=$v;
              		trees($data,$v["cid"],$step+1);
              	}
              }
              return $trees;
		}
		$arr=trees($data,0,0);
		$this->smarty->assign("trees",$arr);
		$this->smarty->display("showAdd.html");
	}

	// 插入数据
	function addCat(){
		$db=new db("category");
		$cname=$_POST["cname"];
		$pid=$_POST["pid"];
		if($db->field("cname='{$cname}',pid='{$pid}'")->insert()>0){
			$this->smarty->assign("noticeTitle","添加成功");
			$this->smarty->assign("noticeCon","添加页");
			$this->smarty->assign("noticeUrl","index.php?m=admin&c=cat&a=showAdd");
			$this->smarty->display("notice.html");

		}
	}
	 function showCat(){
		$db=new db("category");
		$data=$db->select();
		function trees($data,$pid,$step){
              global $trees;
              foreach ($data as $v){
              	if($v["pid"]==$pid){
              		$flag=str_repeat("♣",$step);
              		$v["cname"]=$flag.$v["cname"];
              		$trees[]=$v;
              		trees($data,$v["cid"],$step+1);
              	}
              }
              return $trees;
		}
		$arr=trees($data,0,0);
		$this->smarty->assign("trees",$arr);
		$this->smarty->display("showCat.html");
	}

	// 删除分类
	function del($arg){
		$cid=$arg["cid"];
		$db=new db("category");
		$data=$db->select();
		if($this->sons($data,$cid)){
			$this->smarty->assign("noticeTitle","操作不成功");
			$this->smarty->assign("noticeCon","操作页");
			$this->smarty->assign("noticeUrl","index.php?m=admin&c=cat&a=showCat");
			$this->smarty->display("notice.html");
		}else{
			if($db->where("cid='{$cid}'")->del());
			$this->smarty->assign("noticeTitle","操作成功");
			$this->smarty->assign("noticeCon","操作页");
			$this->smarty->assign("noticeUrl","index.php?m=admin&c=cat&a=showCat");
			$this->smarty->display("notice.html");
		}
	}
	// 找出某类下面所有的子分类
	 function sons($data,$cid){
		   global $sons;
		  foreach($data as $v){
		 	if($v["pid"]==$cid){
		 		$sons[]=$v;
		 		$this->sons($data,$v["cid"]);
		 	}
		 }
		 return $sons;
	}
     

       // 查看编辑，点击查看的元素就要显示出来
	function showEdit($arg)
    {
        $cid = $arg["cid"];
        $db = new db("category");
        $data = $db->select();
        function trees($data, $pid, $step)
        {
            global $trees;
            foreach ($data as $v) {
                if ($v["pid"] == $pid) {
                    $flag = str_repeat("♣", $step);
                    $v["cname"] = $flag . $v["cname"];
                    $trees[] = $v;
                    trees($data, $v["cid"], $step + 1);
                }
            }
            return $trees;
        }

        $this->smarty->assign("trees", trees($data, 0, 0));
        $cname = $db->field("pid,cname")->where("cid={$cid}")->select();
        $this->smarty->assign("cname", $cname);
        $this->smarty->assign("pid", $cname[0]["pid"]);
        $this->smarty->assign("cid", $cid);
        $this->smarty->display("showEdit.html");
    }
	// 修改	
	function addEdit($arg){
		// 因为前面传了cid就要获取cid
		$cid=$arg["cid"];
		// 要修改名字就要先获取
		$cname=$_POST["cname"];
		// 连接表
		$db=new db("category");
		if($db->field("cname='{$cname}'")->where("cid={$cid}")->update()>0){
			// 发送
		$this->smarty->assign("noticeTitle","修改成功");
		$this->smarty->assign("noticeCon","操作页");
		$this->smarty->assign("noticeUrl","index.php?m=admin&c=cat&a=showEdit&cid={$cid}");
		$this->smarty->display("notice.html");
		}

	}

}

?>