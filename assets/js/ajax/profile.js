$( document ).ready(function() {
    $.ajax({
			url: 'apis/user/checklogin.php',
			type: 'GET',
			success: function(response){
					var response = JSON.parse(response);
					if(response.status == "success")
					{
						fetch_details();
					}
					else(response.status == "failure")
					{
						// alert('u r somewhere wrong bro!!!');
						// window.location = "login.html";
					}
				}
		})
});

function fetch_details()
{
	console.log("fetching....");
	$.ajax({
		url: 'apis/user/fetch_profile.php',
		type: 'GET',
		success: function(response){
           var response = JSON.parse(response);
           if(response.status == "success")
           {
           	 console.log(response.message);
           	 put_profile_data(response.message);
           }
           else
           {
           	console.log(response.message);
           }
		}
	})
}

function put_profile_data(data)
{
	// console.log("hey there");
	// console.log(data['username']);
	$('#name').val(data.profile_data['username']);
	$('#email').val(data.profile_data['email']);
	$('#num').val(data.profile_data['contact']);
	$('#prof').val(data.profile_data['dsg']);
}