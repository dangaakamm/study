//1、解决通过类名获取元素的兼容问题 2016.8.29
function getClass(classname,father){
	father = father || document;   //初始值
	if (father.getElementsByClassName) {
		return father.getElementsByClassName(classname);
		//如果是现代浏览器，返回类名
	}else{      //否则，IE浏览器中
		var newarr=[];
		//定义新数组
		var all=father.getElementsByTagName("*");
		//把所有的标签都存到一个all变量里
		for (var i = 0; i < all.length; i++) {
			//遍历all
			if (checkRep(classname,all[i].className)) {
				newarr.push(all[i]);
				//如果满足相等，将类名存储到一个新的数组
			}
		}
	    return newarr;
	    //返回新数组
	}
}
function checkRep(val,string){
	//函数判断是否有相等类名，解决IE8以下的兼容问题
	var arr=string.split(" ");
	//将要比较的类名的字符串替换成数组
	for(var i in arr){
		//遍历数组
		if (val==arr[i]) {
			//判断形参classname与数组中的元素是否相同
			return true;
			//如果有相同的，返回true;
	    }
    }
    return false;
    //如果没有相同的，返回false;
}

/************************************/
//2、获取样式的值的兼容问题  2016.8.30
function getStyle(obj,attr){
	if (obj.currentStyle) {    //IE
        return parseInt(obj.currentStyle[attr]);
	}else{                     //现代
		return parseInt(getComputedStyle(obj,null)[attr]);
	}
}



/************************************/
//3、获取元素的兼容函数（支持标签、id、class）
//8月31号
function $(selector,father){
	father = father || document;
    if (typeof selector=="string") {
    	selector=selector.replace(/^\s*|\s*$/g,"");
    	if (selector.charAt(0)==".") {
    		return getClass(selector.substring(1),father);
    	}else if (selector.charAt(0)=="#") {
    		return document.getElementById(selector.substring(1));
    	}else if (/^[a-z][1-6a-z]*/g.test()) {
    		return father.getElementsByTagName(selector);
    	};
    }else if (typeof selector=="function") {
    	// window.onload=function(){
    	// 	selector();
    	// }
    	addEvent(window,"load",function(){
    		selector();
    	})
    }
}



//4、获取所有子节点的兼容函数   2016.9.2
//father  指定父节点
//type:"a"   只有元素节点
//type:"b"   元素节点和文本节点

function getChild(father,type){
	var all=father.childNodes;
	var newarr=[];
	type = type || "a";
	for (var i = 0; i < all.length; i++) {
		if (type=="a") {
			if (all[i].nodeType==1) {
	           newarr.push(all[i]);
		    }
		}else if (type=="b") {
			if (all[i].nodeType==1 || (all[i].nodeType==3 && all[i].nodeValue.replace(/^\s*|\s*$/g,"")!="")) {
				newarr.push(all[i]);
			}
		}
		
    }
	return newarr; 
}




//5、获取第一个子节点  2016.9.2
function getFirst(father){
	return getChild(father)[0];
}



//6、获取最后一个子节点   2016.9.2
function getLast(father){
	return getChild(father)[getChild(father).length-1];
}


//7、获取指定的子节点  2016.9.2

	function getNum(father,xiabiao){
		return getChild(father)[xiabiao];
	}


//8、获取下一个兄弟节点  2016.9.2

function getNext(obj){
	var next=obj.nextSibling;
	if (!next) {
		return false;
	}
	while(next.nodeType==3 || next.nodeType==8){
        next=next.nextSibling;
        if (!next) {
			return false;
		}
	}
	return next;
}


//9、获取上一个兄弟节点  2016.9.2

function getPre(obj){
	var pre=obj.previousSibling;
	if (!pre) {
		return false;
	}
	while(pre.nodeType==3 || pre.nodeType==8){
		pre=pre.previousSibling;
		if (!pre) {
			return false;
		}
	}
	return pre;
}

//10、同一事件源绑定多个相同事件  2016.9.6


function addEvent(obj,event,fun){
	obj[fun]=function(){
		fun.call(obj);
	}
	if (obj.attachEvent) {
		obj.attachEvent("on"+event,obj[fun]);
	}else{
		obj.addEventListener(event,obj[fun],false);
	}
}


//11、同一事件源移出事件   2016.9.6


function removeEvent(obj,event,fun){
	if (obj.detachEvent) {
		obj.detachEvent("on"+event,obj[fun])
	}else{
		obj.removeEventListener(event,obj[fun],false);
	}
}


//12、阻止浏览器的默认行为的兼容问题  2016.9.6

function preventDefault(e){
	if (e.preventDefault) {  //现代阻止浏览器的默认行为
			e.preventDefault();
		}else{        //IE
			e.returnValue=false;
		}
}



//13、鼠标的滚轮事件   2016.9.7
//obj对象   up鼠标上滚   down鼠标下滚
	function mouseWheel(obj,up,down){
		if (obj.attachEvent) {
			obj.attachEvent("onmousewheel",scrollFn);
			//IE  opera
		}else if (obj.addEventListener) {
			obj.addEventListener("mousewheel",scrollFn,false);
			//chrome,safari    webkit
			obj.addEventListener("DOMMouseScroll",scrollFn,false);
			//firefox  moz
		}
		function scrollFn(e){
			e = e || window.event;
			var f=e.detail||e.wheelDelta;
			if (f==-3 || f==120) {
				if (up) {
					up();
				}
			}else if (f==3 || f==-120) {
				if (down) {
					down();
				}
			}
			
			// ff:-3:向上  3：向下
			//IE: 120向上  -120：向下
		}
	    
	}