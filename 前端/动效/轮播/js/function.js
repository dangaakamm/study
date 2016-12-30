//1.解决通过类名获取元素的兼容问题
function getClass(classname,father){
	//判断浏览器
	father=father || document;  //默认father值
	if(father.getElementsByClassName){//现代浏览器
       return father.getElementsByClassName(classname) //返回父类的类名   if是对于w3c浏览器
	}else{
        var all=father.getElementsByTagName("*"); // 所有的标签都获取
        var newarr=[];                             //定义一个新数组
        for (var i =0; i <all.length ; i++) {        //遍历数组
        	if(rep(classname,all[i].className)){       //如果条件（为一个函数）为真，给新数组放值
                newarr.push(all[i]);
        	}
        }
        return newarr;     //返回新数组
	}
}
function rep(val,str){    //定义新函数，以便做上头if的判断条件
  var arr=str.split(" ");     //将字符串转换成数组并存放在新变量里
  for(var i in arr){          //遍历数组
      if(arr[i]==val){        //如果数组值和形参相等。返回真，上头if再执行
      	return true;
      }
  }
  return false;
}
// 判断浏览器
// ff：现有方法
// ie：获取所有标签；遍历，判断；条件满足，就保留标签；返回新数组



// 获取样式值得兼容函数
function getStyle(obj,attr){
  if(obj.currentStyle){
     return obj.currentStyle[attr];
  }else{
     return getComputedStyle(obj,null)[attr];
  }
}



//获取元素的兼容函数，可以支持类名，标签
function $(selector,father){//father是缩小了选择范围
  father=father||document;
    if(typeof selector=="string"){
      selector=selector.replace(/^\s*|\s*$/g,"")//replace支持正则   去字符串的空格
      if(selector.charAt(0)=="."){
       return getClass(selector.substring(1),father);
      }else if(selector.charAt(0)=="#"){
        return document.getElementById(selector.substring(1));
      }else if(/^[a-z][1-6a-z]*/g.test(selector)){
         return father.getElementsByTagName(selector)
      }
    }else if(typeof selector=="function"){
      window.onload=function(){
          selector();
      }
    }
}


//获取所有的子节点的兼容函数
//father指父节点
//type指节点类型
function getChild(father,type){
  type=type||"a"
  var all=father.childNodes;//集合   所有的子节点
  var newarr=[];
  for (var i = 0; i <all.length; i++) {  //遍历所有的子节点
    if(type=="a"){   //判断
      if(all[i].nodeType==1){   //节点类型为1
       newarr.push(all[i]);      //给新数组添加元素
      }
    }else if(type=="b"){
      if(all[i].nodeType==1 || (all[i].nodeType==3
       && all[i].nodeValue.replace(/^\s*|\s*$/g,"")!="")){ 
       //如果元素节点类型为1和元素节点类型为3且元素节点值替换为空后不等于空
       newarr.push(all[i]);
      }
    }
    
  }
  return newarr;
}


// 获取第一个子节点
function getFirst(father){
   return getChild(father)[0];
}


// 获取最后一个子节点
function getLast(father){
   return getChild(father)[getChild(father).length-1];
}


// 获取指定子节点
function getNum(father,xiabiao){
  return getChild(father)[xiabiao];
}


//获取下一个兄弟节点
function getNext(obj){
   var next=obj.nextSibling;
   if(!next){
    return false;
   }
   while(next.nodeType==3 || next.nodeType==8){
    next=next.nextSibling;
    if(!next){
      return false;
    }
   }
   return next;
}


//获取上一个兄弟节点
function getBefore(obj){
   var before=obj.previousSibling;
   if(!before){
    return false;
   }
   while(before.nodeType==3 || before.nodeType==8){
    before=before.previousSibling;
    if(!before){
      return false;
    }
   }
   return before;
}