<?php
	
	$mysql_host = "localhost";
	$mysql_user = "root";
	$mysql_password = "";
	$mysql_db = "employees";
	//connecting to database
	$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);
	$email = $_POST['email'];
	$pwd = $_POST['pwd'];

	echo(json_encode(array('status' => 'success', 'message' => $email)));


	

?> 