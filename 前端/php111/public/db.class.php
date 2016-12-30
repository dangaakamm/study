<?php
header("Content-Type:text/html;charset=utf-8");
class db{
 protected $host="localhost";
 protected $user="root";
 protected $pass="";
 protected $database="blog";
 protected $options;
 function __construct($table){
    $this->table=$table;
    $this->config($table);
 }
 protected function config ($table){
    $this->db=new mysqli($this->host,$this->user,$this->pass,$this->database);
    $this->db->query("set names utf8");
    $this->options["field"]="*";
    $this->options["where"]=$this->options["order"]=$this->options["limit"]="";
 }
  public function select($sql=""){
        $sql=!empty($sql)?$sql:"select {$this->options['field']} from {$this->table} {$this->options['where']} {$this->options['order']} {$this->options['limit']}";
        $result = $this->db->query($sql);
//          echo $sql;
//          exit;
        while($row = $result->fetch_assoc()){
            $arr[] = $row;
        }
        return $arr;
    }
 public function field($sql=""){
 	$this->options["field"]=empty("$sql")?"*":$sql;
 	return $this;
 }
 public function where($sql=""){
   $this->options["where"]=empty("$sql")?"":" WHERE ".$sql;
   return $this;
 }
 public function order($sql=""){
   $this->options["order"]=empty("$sql")?"":" WHERE ".$sql;
   return $this;
 }
 public function limit($sql=""){
   $this->options["limit"]=empty("$sql")?"":" WHERE ".$sql;
   return $this;
 }
 // 更改
 public function update($sql=""){
    $sql=!empty($sql)?$sql:"update {$this->table} set {$this->options['field']} {$this->options['where']} {$this->options['order']} {$this->options['limit']}";
     $this->db->query($sql);
    return  $this->db->affected_rows;
 }
 public function del($sql=""){
 	$sql=!empty($sql)?$sql:"delete from  {$this->table} {$this->options['where']}  {$this->options['order']} {$this->options['limit']}"; 
    
 	 $this->db->query($sql);
 	return  $this->db->affected_rows;
 }
 public function insert($sql=""){
 	$keys="";
 	$values="";
 	if(empty($sql)){
 		$arr=explode(",",$this->options["field"]);
 		foreach($arr as $v){
 			$arr1=explode("=",$v);
 			$keys.=$arr1[0].",";
 			$values.=$arr1[1].",";
 		}
 		$keys=substr($keys,0,-1);
 		$values=substr($values,0,-1);
 		$sql="insert into {$this->table} ($keys) values($values)";
    $this->db->query($sql);
            return $this->db->affected_rows;
 	}else{
 		$sql=$sql;
    $this->db->query($sql);
     return $this->db->affected_rows;
 	     }
 	 
    }
}
 
?>