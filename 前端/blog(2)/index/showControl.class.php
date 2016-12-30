<?php
class showControl extends index{
	function show($arg){
		$sid=$arg["id"];
		$db=new db("shows");
		$data=$db->where("sid={$sid}")->select();
		$title=$data[0]["title"];
		$con=$data[0]["con"];
		$imgurl=$data[0]["imgurl"];
		$status=$data[0]["status"];
		$db=new db("message");
		@$message=$db->where("sid={$sid}")->select();
		if($message){
			foreach(@$message as $k=>$v){
				$arr[$k]=$v;
				$db=new db("replay");
				$arr[$k]["son"]=@$db->where("mid={$v['mid']}")->select();
			}
		}
		
		if($status==0){
			$this->smarty->assign("message",@$arr);
			$this->smarty->assign("title",$title);
			$this->smarty->assign("con",$con);
			$this->smarty->assign("imgurl",$imgurl);
			$this->smarty->assign("sid",$sid);
			$this->smarty->display("show.html");
		}else{
			if(isset($_SESSION["indexlogin"])){
				$this->smarty->assign("message",$arr);
				$this->smarty->assign("title",$title);
				$this->smarty->assign("con",$con);
				$this->smarty->assign("imgurl",$imgurl);
				$this->smarty->assign("sid",$sid);
				$this->smarty->display("show.html");
			}else{
				$this->smarty->display("login.html");
				$_SESSION["currenturl"]="index.php?m=index&c=show&a=show&id={$sid}";
			}
		}
		
	}
}
?>