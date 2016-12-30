<?php
header("Content-Type:text/html;charset=utf-8");
class db{
	protected $host="sqld.duapp.com:4050";
	protected $user="e692507a31ed474eaa256d2c1b56eb24";
	protected $pass="18a4940554e746c79b0dad42637bc86d";
	protected $database="sOljHKGfDkuIOEdIcLrj";
	protected $table="";
	protected $options;//为了存放相同类的数据，定义的数组，后面晚绑定；
	function __construct($table){
		$this->table=$table;
		$this->config($table);
	}
	protected function config($table){
		$this->db=new mysqli($this->host,$this->user,$this->pass,$this->database);
		$this->db->query("set names utf8");
		$this->options["field"]="*";
		$this->options["where"]=$this->options["order"]=$this->options["limit"]="";
	}
	public function select($sql=""){
		$sql=!empty($sql)?$sql:"select {$this->options['field']} from {$this->table} {$this->options['where']}  {$this->options['order']} {$this->options['limit']}";
		$result=$this->db->query($sql);
		// echo $sql;
        while($row=$result->fetch_assoc()){
        	$array[]=$row;
        }
        return $array;
	}
	public function field($field){
		$this->options["field"]=is_string($field)?$field:"";
		return $this;
	}
	public function where($where){
		$this->options["where"]=is_string($where)?" where ".$where:"";
		return $this;
	}
	public function order($order){
		$this->options["order"]=is_string($order)?" order by ".$order:"";
		return $this;
	}
	public function limit($limit){
		$this->options["limit"]=is_string($limit)?" limit ".$limit:"";
		return $this;
	}
	public function update($sql=""){
		$sql=!empty($sql)?$sql:"update {$this->table} set {$this->options['field']} {$this->options['where']} {$this->options['order']} {$this->options['limit']}";
		$this->db->query($sql);
		return $this->db->affected_rows;
	}
	public function delete($sql=""){
    	$sql=!empty($sql)?$sql:"delete from {$this->table} {$this->options['where']} ";
    	$this->db->query($sql);
    	return $this->db->affected_rows;
    }
    public function insert($sql=""){
    	if(empty($sql)){
    		$arr=explode(",",$this->options['field']);
    		$keys="";
    		$values="";
    		foreach ($arr as $v){
    			$arr1=explode("=",$v);
    			$keys.=$arr1[0].",";
    			$values.=$arr1[1].",";
    		}
    		$keys=substr($keys,0,-1);
    		$values=substr($values,0,-1);
    	}
    	$sql="insert into {$this->table} ({$keys}) values ({$values}) ";
		$this->db->query($sql);
    	return $this->db->affected_rows;
    	
    }
}


// $db=new db("admin");
// var_dump($db->where("id=15")->select());
// var_dump($db->field("title='挑剔'")->where("id=47")->order("id desc")->limit("1")->update());
// var_dump($db->field("title='挑剔',con='neihfh'")->insert());
// var_dump($db->field("title='charu ',con='neihfh'")->insert());
?>