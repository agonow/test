class Login{
	constructor(){
		this.url="http://www.liyangyf.com/ctrl/login.php";
		this.mobile=$("#mobile")
		this.pwd=$("#pwd")
		this.register_btn=$("#register_btn")
		this.b=$("b")
		this.init()
	}
	init(){
		var that=this;
		this.register_btn.click(function(){
			that.load()
		})
	}
	load(){
		var that=this;
		$.ajax({
			url:this.url,
			data:{
				user:this.mobile.val(),
				pass:this.pwd.val()
			},success:function(res){
				that.res=res;
				console.log(res)
				that.display()
			}
		})
	}
	display(){
		switch(this.res){
			case "0":this.b.html("用户名和密码不相符");break;
			case "1":this.b.html("未知错误，请重新登录");break;
			default:
					this.b.html("登录成功");
					location.href="../html/home.html"
					this.res = JSON.parse(this.res);
					console.log(this.res);
		}
	}
}
new Login()


