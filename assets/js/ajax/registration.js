$("#sign_up").click(function(){
   var name = $("#username").val();
   var email = $("#useremail").val();
   var contact = $("#userphone").val();
   var desig = $("#designation").val();
   var pwd = $("#pwd").val();
   var rpwd = $("#rpwd").val();
   console.log(name,email,contact,desig,pwd,rpwd);
   var datastring = 'user='+name+'&email='+email+'&dsg='+desig+'&contact='+contact+'&pwd='+pwd;
   $.ajax({
		url: 'apis/user/register.php',
		data: datastring,
		type: 'POST',
		success: function(response){
			var response = JSON.parse(response);
			if(response.status == "success")
			{
				alert(response.message);
			}
			else
			{
				alert(response.message)
			}
		}
	});
   console.log(datastring);
})