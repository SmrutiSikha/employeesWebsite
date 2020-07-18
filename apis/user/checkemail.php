<?php
	
	$mysql_host = "localhost";
	$mysql_user = "root";
	$mysql_password = "";
	$mysql_db = "employees";
	//connecting to database
	$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);
	$email = $_GET['email'];

	if(isset($email))
	{
		$q = "SELECT * FROM users WHERE email ='$email'";
		$query = mysqli_query($conn,$q);
		if(mysqli_num_rows($query) > 0)
		{
			echo(json_encode(array('status' => 'success', 'message' => "email achi")));
		}
		else
		{
			echo(json_encode(array('status' => 'failure', 'message' => "email nahin")));
		}
	}

?>