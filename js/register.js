/* 
	ji代码
	@autor lvhuaping
	@date  20170906

 */
window.onload=function(){
	
	
	var reg=document.getElementById("reg");//获取注册按钮
	
	var check=document.getElementById("check");
	
	var form=document.getElementsByTagName("form")[0];//获取form表单*/
	
		
	//给注册按钮绑定事件
	reg.onclick=function(event){
	 	 
		var inputs=document.getElementsByTagName("input");//获取所有输入框
		
		inputs=Array.prototype.slice.call(inputs,0);//转换为数组对象

		
		
		if(inputs[0].value){ //手机号码输入正确
			if(inputs[1].value){  //验证码输入正确
				if(inputs[2].value){//密码输入正确
					if(inputs[3].value==inputs[2].value){//确认密码一致
						if(check.innerHTML){
							alert('注册成功');

							window.location.href="file:///home/briup/WebUI/example/app/index.html";
							// form.submit();//提交表单

						}else{
							alert("您还没有同意用户协议，无法完成注册");
							
						}
					}else{
						inputs[3].parentNode.parentNode.style.borderColor="red";
					}
				}else{
					inputs[2].parentNode.parentNode.style.borderColor="red";
				}
			}else{
				inputs[1].parentNode.parentNode.style.borderColor="red";
				alert("请点击获取验证码按钮");
			}
		}else{
			inputs[0].parentNode.parentNode.style.borderColor="red";
		}
		
	}
	
	
	/*单击获取验证码*/
	var getYzm=document.getElementById("getYzm");
	var inputs=document.getElementsByTagName("input");
	getYzm.onclick=function(){
		var random01=Math.floor(Math.random()*10);
		var random02=Math.floor(Math.random()*10);
		var random03=Math.floor(Math.random()*10);
		var random04=Math.floor(Math.random()*10);
		var value=[random01].toString()+[random02]+[random03]+[random04];
		inputs[1].value=value;
	}
	
	
	
	/*封装勾选图片的函数*/
	
	check.onclick=function(){
		if(this.innerHTML){
			this.innerHTML="";
		}else{
			var img=document.createElement("img");
			img.setAttribute("src","images/duigou.png");
			img.style.height="27px";
			img.style.width="27px";
			img.style.marginTop="2px";
			img.style.marginLeft="1px";
			this.appendChild(img);
		}
	}
	
	
	
}//load结束位置
