<?php
	
	$mysql_host = "localhost";
	$mysql_user = "root";
	$mysql_password = "";
	$mysql_db = "employees";
	//connecting to database
	$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);
	$uname = $_POST['user'];
	$pwd = $_POST['pwd'];
	$email = $_POST['email'];
	$contact = $_POST['contact'];
	$dsg = $_POST['dsg'];

	if(isset($uname) && isset($pwd) && isset($email) && isset($contact) && isset($dsg))
	{
		$q = "INSERT INTO users (username,email,dsg,pwd,contact) VALUES ('$uname','$email','$dsg','$pwd','$contact')";
		$query = mysqli_query($conn,$q);
		if($query)
		{
			echo(json_encode(array('status' => 'success', 'message' => "registration hauchi")));
		}
		else
		{
			echo(json_encode(array('status' => 'failure', 'message' => "registration hauni")));
		}
	}

?>