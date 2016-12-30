jQuery.fn.extend({
	mousewheel:function(up,down){//给对象加方法
        this.each(function(i,obj){
           if(obj.attachEvent){
           	obj.attachEvent("onmousewheel",scrollFn);
           }else if(obj.addEventListener){
           	obj.addEventListener("mousewheel",scrollFn,false)
           	obj.addEventListener("DOMMouseScroll",scrollFn,false)
           }
           function scrollFn(e){
	           	e=e||window.event;
	           	if(e.preventDefault){
	           		e.preventDefault();
	           	}else{
	           		returnValue=false;
	           	}
	           	var f=e.detail||e.wheelDelta;
	           	if(f==-3||f==120){
	           		if(up){
	           			up.call(obj);
	           		}
	           	}else if(f==3||f==-120){
	           		if(down){
	           			down.call(obj);
	           		}
	           	}
           }

        })
	}
})