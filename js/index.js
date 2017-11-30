/* 
    ji代码
    @autor lvhuaping
    @date  20170906

 */
var submits=document.getElementsByClassName("submit");
var inputs=document.getElementsByTagName("input");
// var form=document.getElementsByTagName('form')[0];
var form=document.getElementsByTagName("form")[0];
var pt=/^\d{11}$/;
var pwds=/^[a-zA-Z]\w{5,17}$/;
form.onsubmit=function(event){
    var inputs=document.getElementsByTagName("input");
    inputs=Array.prototype.slice.call(inputs,0);
        if(pt.test(inputs[0].value)){
            if(pwds.test(inputs[1].value)){
                alert("登陆成功");
                 event.preventDefault();
                window.location.href="file:///home/briup/WebUI/example/app/homePage.html";
               
            }else{
                inputs[1].parentNode.style.borderColor="red";
                alert("密码有误，请重输");
                event.preventDefault();
            }
        }else{
            inputs[0].parentNode.style.borderColor="red";
             event.preventDefault();
        }
}