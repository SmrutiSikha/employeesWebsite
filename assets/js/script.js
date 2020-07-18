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
		$("#pwd_strength").html("Prefer having strong password");
		$(".btn").prop('disabled', false);
		console.log("2");
	}
	else{
		$("#pwd_strength").html("");
		$(".btn").prop('disabled', false);
	}
})

$("#useremail").focusout(function(){
	var email = $("#useremail").val();
	var datastring = 'email='+email;
	$.ajax({
		url: 'apis/user/checkemail.php',
		data: datastring,
		type: 'GET',
		success: function(response){
			var response = JSON.parse(response);
			if(response.status == "success")
			{
				$("#error_email").html(response.message);
			}
			else
			{
				$("#error_email").html(response.message);
			}
		}
	});

})
