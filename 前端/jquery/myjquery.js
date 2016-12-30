function jquery(seletor){   //构造函数
   if(typeof seletor=="string"){
   	// 查询功能
   	var obj=document.getElementsByTagName(seletor);
   	for (var i = 0; i < obj.length; i++) {
   		this[i]=obj[i];
   	};
   	this.length=obj.length;
   }
}
jquery.prototype={
	each:function(call){
        for (var i = 0; i < this.length; i++) {
        	call(i,this[i]);
        };
	},
	html:function(arr){
        // for (var i = 0; i < this.length; i++) {
        // 	this[i].innerHTML=arr;
        // };
        this.each(function(index,obj){
        	obj.innerHTML=arr;
        })
        return this;
	},
	css:function(attr){
        // for (var i = 0; i < this.length; i++) {
        // 	for(var j in attr){
        // 		this[i].style[j]=attr[j];
        // 	}
        // }
         this.each(function(index,obj){
        	for(var j in attr){
        		obj.style[j]=attr[j];
        	}
        })
         return this;
	},
	click:function(eve){
        this.each(function(index,obj){
        	obj.onclick=function(){
        		eve.call(obj)
        	}
        })
        return this;
	}
}
function $(sal){
	return new jquery(sal)
}