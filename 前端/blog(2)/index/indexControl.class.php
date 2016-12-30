<?php
class indexControl extends index{
	function index(){
		$cid=1;
		$db=new db("category");
		$data=$db->select();
		function aa($data){
			$i=0;
			foreach($data as $v){
				if($v["pid"]==0){
					$arr[$i]=$v;
					foreach($data as $v1){
						if(@$v["cid"]==$v1["pid"]){
							$arr[$i]["son"][]=$v1;
						}
					}
					// var_dump($arr[$i]["son"]);
					$i++;
				}
			}
			return $arr;
		}
		$this->smarty->assign("data",aa($data));
		$db=new db("shows");
		$lists=$db->select();
		$this->smarty->assign("lists",$lists);
		$this->smarty->display("index.html");
	}
    

    function lists($arg){
        $cid=$arg["cid"];
        $db=new db("shows");
        $data=$db->where("cid={$cid}")->select();
        $this->smarty->assign("data",$data);
        
		$this->smarty->display("lists.html");
    }
	

}


?>