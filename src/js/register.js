// function $(elementId){
//    return document.getElementById(elementId).value;
//  }
//  function spanId(elementId){
//    return document.getElementById(elementId);
//  }
//  
//
//
//
// function checkMobile() {
//    var mobile = $("mobile");
//    console.log(mobile)
//    var mobileId = spanId("mobile_prompt");
//    mobileId.innerHTML="";
//    var reMobile = /^1\d{10}$/;
//     if (reMobile.test(mobile)==false){
//       mobileId.innerHTML="手机号输入有误";
//       return false;
//     }
//    return true;
//  }
// 
// function checkPwd(){
//    var pwd = $("pwd");
//    console.log(pwd)
//    var pwdId = spanId("pwd_prompt");
//     pwdId.innerHTML="";
//    var reg = /^[a-zA-Z0-9]{4,10}$/;
//    if(reg.test(pwd)==false){
//      pwdId.innerHTML = "密码不能含有非法字符，长度在4-10之间";
//      return false;
//    }
//    return true;
//  }
 
class Register{
	constructor(){
		this.url="http://www.liyangyf.com/ctrl/register.php";
		this.mobile=$("#mobile")
		this.pwd=$("#pwd")
		this.register_btn=$("#register_btn")
		this.b=$("b")
		this.init()
	}
	init(){
		var that=this;
		this.register_btn.click(function(){
			$.ajax({
				url:that.url,
				data:{
					tel:that.mobile.val(),
					pass:that.pwd.val()
				},
				success:function(res){
					console.log(res)
					that.res=res;
					that.display();
				}
			})
		})
	}
	display(){
		switch(this.res){
			case "0":this.b.html("用户名重复，请换一个");break;
			case "1":
			    this.b.html("注册成功，5秒钟后跳转到登录");
						setTimeout(function(){
							location.href = "login.html";
						},5000)
						break;
					case "2":this.b.html("请将所有信息输入完整");break;
		}
	}
}
new Register();

