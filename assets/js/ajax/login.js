
$("#sign_up").click(function()
	{
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
						//$("#error_email").html("email correct");
						//$(".btn").prop('disabled', false);
						// console.log("bhitarau gala");
						// alert("waiting");
						check_pwd();
					}
					else
					{
						// console.log("bhitarau galani");
						// alert("waiting...");
						$("#error_email").html("email not present");
					}
				}
		})
		return false;
	})

function check_pwd()
{
	var email = $("#useremail").val();
	var pwd = $("#pwd").val();
	var datastring = 'email='+email+'&pwd='+pwd;
	console.log(datastring);
	$.ajax({
		url: 'apis/user/login.php',
		data: datastring,
		type: 'POST',
		success: function(response){
			var response = JSON.parse(response);
			if(response.status == 'success'){
				alert(response.message);
			}
			else if(response.status == 'failure'){

			}
		}
	});
}