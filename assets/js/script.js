$("#username").keyup(function (){   //focusout - changing from one field to another field
	var name = $("#username").val();
	console.log(name)
	if(name.length < 5)
	{
		$("#error_username").html("<b>username</b> not entered");
		$(".btn").prop('disabled', true);
	}
	else
	{
		$("#error_username").html(" ");
		$(".btn").prop('disabled', false);
	}
})

$("#pwd").focusout(function(){
	var pwd = $("#pwd").val();
	var number = /([0-9])/;
	var alphabets = /([a-zA-Z])/;
	var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

	if(pwd == ""){
		$(".btn").prop('disabled', true);
		console.log("1");
	}
	else if(!(pwd.match(number)) || !(pwd.match(alphabets)) || !(pwd.match(special_characters))){
		$("#pwd_strength").html("Prefer having strong password with numbers alphabets and special characters");
		$(".btn").prop('disabled', false);
	}
	else{
		$("#pwd_strength").html("");
		$(".btn").prop('disabled', false);
	}
})

$("#userphone").focusout(function(){
	var phone = $("#userphone").val();
	if(phone.length != 10)
	{
		$("#phonecheck").html("phone number wrong");
	}
	else
	{
		$("#phonecheck").html("");
	}
})

$("#designation").focusout(function(){
	var dsg = $("#designation").val();
	if(dsg == "Select job type")
	{
		$("#dsgcheck").html("click a designation");
	}
	else
	{
		$("#dsgcheck").html("");
	}
})

$("#rpwd").keyup(function(){
	var pwd = $("#pwd").val();
	var rpwd = $("#rpwd").val();
	if(rpwd == ""){
		$("#checkpwd").html("enter the pwd");
		$(".btn").prop('disabled', true);
	}
	else if(pwd != rpwd){
		$("#checkpwd").html("password and re-enter password doesn't match");
		$(".btn").prop('disabled', true);
	}
	else
	{
		$("#checkpwd").html("");
		$(".btn").prop('disabled', false);
	}
})

$("#useremail").focusout(function(){
	var email = $("#useremail").val();
	var datastring = 'email='+email;
	$.ajax({
		url: 'apis/user/checkemail.php',
		data: datastring,
		type: 'POST',
		success: function(response){
			var response = JSON.parse(response);
			if(response.status == "success")
			{
				$("#error_email").html(response.message);
				$(".btn").prop('disabled', true);
			}
			else
			{
				$("#error_email").html(response.message);
				$(".btn").prop('disabled', false);
			}
		}
	});

})



