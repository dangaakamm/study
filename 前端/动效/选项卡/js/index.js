window.onload=function(){     // window添加onload
   var con=getClass("con");     // 获取元素
   var word=getClass("word_con");     // 获取元素
   for(var i=0;i<word.length;i++){    //遍历字
   	    word[i].name=i;                //给字一个共同属性
        word[i].onmouseover=function(){    //字添加移入事件
      	    for(var j=0;j<con.length;j++){    //遍历图
      		    word[j].className="word_con";   //把字和图都给一个共同的类名
      		    con[j].className="con";
      	    }
        con[this.name].className="con over";    //字的下标给图，然后图的类名是移入后的状态
        this.className="word_con one"    //this移入谁指谁	      
        }    
	}
}





