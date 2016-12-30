$(function(){
	var grup=$("span",$(".grup")[0])[0];
    var life=$("span",$(".life")[0])[0];
    var grade=$("span",$(".grade")[0])[0];
    var gradenum=0;
    var grupnum=1;
    var lifenum=5;
	var letterArr=[{"zimu":"A","src":"img/a.png"},{"zimu":"B","src":"img/b.png"},{"zimu":"C","src":"img/c.png"},{"zimu":"D","src":"img/d.png"},{"zimu":"E","src":"img/e.png"},{"zimu":"F","src":"img/f.png"},{"zimu":"G","src":"img/g.png"},{"zimu":"H","src":"img/h.png"},{"zimu":"I","src":"img/i.png"},{"zimu":"J","src":"img/j.png"},{"zimu":"K","src":"img/k.png"},{"zimu":"L","src":"img/l.png"},{"zimu":"M","src":"img/m.png"},{"zimu":"N","src":"img/n.png"},{"zimu":"O","src":"img/o.png"},{"zimu":"P","src":"img/p.png"},{"zimu":"Q","src":"img/q.png"},{"zimu":"R","src":"img/r.png"},{"zimu":"S","src":"img/s.png"},{"zimu":"T","src":"img/t.png"},{"zimu":"U","src":"img/u.png"},{"zimu":"V","src":"img/v.png"},{"zimu":"W","src":"img/w.png"},{"zimu":"X","src":"img/x.png"},{"zimu":"Y","src":"img/y.png"},{"zimu":"Z","src":"img/z.png"}];
	var newarr=[];//存当前随机取出的字母
	var nowarr=[];
    var t;
    var kaishi=$("a",$(".anniu")[0]);
    var youxi=$(".youxi")[0];
    kaishi.onclick=function(){
    	
     }
	function getLetter(num){
		var neww=[];
		for(var i=0;i<num;i++){
          var letter=letterArr[Math.floor(Math.random()*letterArr.length)];//随机取出字母
          while(check(letter,newarr)){
              letter=letterArr[Math.floor(Math.random()*letterArr.length)];
          }
          newarr.push(letter);
          neww.push(letter);
		} 
		return neww;
	} 
	function check(val,arr){
        for(var i in arr){
        	if(val==arr[i]){
               return true;
        	}
        }
        return false;
	}
	getLetter(4)
	




		
	function creatSpan(arr){
		var cw=document.documentElement.clientWidth;//获取浏览器宽
		for(var i=0;i < arr.length;i++){
			var span=document.createElement("span");//建立一个容器
            // span.innerHTML=arr[i];//span值为获取字母数组值
            var img=document.createElement("img");
            img.src=arr[i].src;
            span.appendChild(img);
                 var lefts=200+Math.random()*(cw-700);//设置随机位置宽，取值范围为浏览器宽减200
            while(chack(lefts,nowarr)){//去掉重复的位置值
                 lefts=200+Math.random()*(cw-700);
            }
            var tops=Math.random()*80;//设置随机位置高
            span.style.cssText="position:absolute;left:"+lefts+"px;top:"+tops+"px"; //给span添加属性
            span.lefts=lefts;//把span属性给了变量lefts
            document.body.appendChild(span); //追加span
            nowarr.push(span);//给新定义的数组加元素
		}
		return span;
	}
	function chack(val,arr){
		for(var i in arr){
			if(val>=(arr[i].lefts-50) && val<=(arr[i].lefts+50)){
                 return true;
			}
		}
		return false;
	}
	creatSpan(newarr);




	function move(){
		var ch=document.documentElement.clientHeight;
		t=setInterval(function(){
			for(var i=0;i<nowarr.length;i++){
				nowarr[i].style.top=nowarr[i].offsetTop+10+"px"
				if(nowarr[i].offsetTop>ch-300){
					document.body.removeChild(nowarr[i]);
                    newarr.splice(i,1);
                    nowarr.splice(i,1);
                    creatSpan(getLetter(1))
                    lifenum--;
                    life.innerHTML=lifenum;
                    if(lifenum==0){
                    	alert("很遗憾");
                    	clearInterval(t);
                    	if(lifenum<=-1){
                    		return
                    	}
                    }
				}

			}
		},150)
	}
	move();





	function keyUp(){
		document.onkeyup=function(e){
            e=e||window.event;
           var str= String.fromCharCode(e.keyCode);
           for (var i = 0; i < nowarr.length; i++) {
           	  if(newarr[i].zimu==str){
           		document.body.removeChild(nowarr[i]);
                    newarr.splice(i,1);
                    nowarr.splice(i,1);
                    creatSpan(getLetter(1))
                    gradenum++;
		    		grade.innerHTML=gradenum;
		   			if(gradenum>=10){
			    		alert("恭喜过关");
			    		gradenum=0;
			    		grupnum++;
			        	grup.innerHTML=grupnum;
			            clearInterval(t);
			            gradenum.innerHTML=0;
			            newarr=[];
			            for (var i = 0; i < nowarr.length; i++) {
			        	    document.body.removeChild(nowarr[i]);
			            };
			            nowarr=[];
			            creatSpan(getLetter(6))
			            move();
		            }
           	  }
           }
            
		}
	}
	keyUp();

})