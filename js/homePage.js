
 /* 
	首页ji代码
	@autor lvhuaping
	@date  20170906

 */

window.onload=function(){
	
   /*第一组事件绑定，针对模特、演绎文字部分*/
   //获取第一组选项卡
	var one_select=document.getElementsByClassName("nav_font")[0];
	
	//获取第一组选项卡要展示的ul,在class属性值为imgs的div下，即这个div下的所有孩子
	var imgsUls=document.getElementsByClassName("imgs")[0].children;
	
	 //获取文字部分div下的ul的所有孩子
	var lis=one_select.children;  
	
	for(var i=0;i<lis.length;i++){
		
		lis[i].onclick=(function(num){
			
			return function(){
				
				//先清除所有li.current属性
				
				Array.prototype.slice.call(lis,0).forEach(function(item){  //转换为数组对象
					
					item.removeAttribute("class");//移除class属性（即移除了所有样式）
				});
				
				//再给当前的li绑定class属性（添加属性值为current代表的样式）
				
				this.setAttribute("class","current");
				
				//根据当前点击的选项卡匹配需要显示的ul
				
				Array.prototype.slice.call(imgsUls,0).forEach(function(item){  //转换为数组对象
					
					item.removeAttribute("class");
				});                                          //先移除属性，单击后再添加属性对应的样式
				imgsUls[num].setAttribute("class","current");
			}
		})(i);
	}
	
			
			
			
			
			
    /*给下一组选项卡绑定事件*/
   
   
   /*获取上部div和下部div的文字导航部分的ul*/
    var uls=document.getElementsByClassName("tabUl00");
    
    Array.prototype.slice.call(uls,0).forEach(function(item,index){
    	
    	var lis2=item.children;
    	
    	if(index==0){     
    		
    		var select=document.getElementsByClassName("article_top")[0].children;
    		
    	}else{
    		
    		var select=document.getElementsByClassName("article_bottom")[0].children;
    	}
    	
    	for(var i=0;i<lis2.length;i++){
		
		lis2[i].onclick=(function(num){
			
			return function(){
				
				//先清除所有li.current属性
				
				Array.prototype.slice.call(lis2,0).forEach(function(item){  //转换为数组对象
					
					item.removeAttribute("class");//移除class属性（即移除了所有样式）
				});
				
				//再给当前的li绑定class属性（添加属性值为current代表的样式）
				
				this.setAttribute("class","current");
				
				//根据当前点击的选项卡匹配需要显示的ul
				
				for(var i=1;i<select.length;i++){
					select[i].className="tabUl01";
					
				}
					select[num+1].className="tabUl01 current";
		   }
	   })(i);
	}
 });



		/*底部页面切换事件绑定*/
	var changeUl=document.getElementsByClassName("changeUl")[0];
	
	changeUl.onclick=function(event){
		if(event.target.nodeName=="IMG"){
			//将所有选项卡样式清除
			Array.prototype.slice.call(changeUl.children,0).forEach(function(item){
			for(var i=0;i<item.children.length;i++){
				var othersSrc=item.children[i].getAttribute("src").replace("_01","");
					item.children[i].setAttribute("src",othersSrc);
				}
			});
			//给当前选项卡添加样式
			var src=event.target.getAttribute("src");
			src=src.slice(0,-4)+"_01.png";		
			event.target.setAttribute("src",src);
		}
	}
			
			
			
			
			
}//load结束位置
