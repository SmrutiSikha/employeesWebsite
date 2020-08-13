<?php

    session_start();
	
	$mysql_host = "localhost";
	$mysql_user = "root";
	$mysql_password = "";
	$mysql_db = "employees";
	//connecting to database
	$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);
	$email = $_POST['email'];
	$pwd = $_POST['pwd'];

    if(isset($pwd) && isset($email))
    {
    	$q = "SELECT * FROM users WHERE email ='$email'";
		$query = mysqli_query($conn,$q);
		if($query)
		{
			$row = mysqli_fetch_array($query,MYSQLI_ASSOC);
			$db_pwd = $row['pwd'];
			if($db_pwd == $pwd)
			{
			$_SESSION["user_id"] = $row["id"];
			$_SESSION["logged_in"] = 1;
			$_SESSION["email"] = $row["email"];
			echo(json_encode(array('status' => 'success', 'message' => "correct password")));
			}
		}
		else
		{
			echo(json_encode(array('status' => 'failure', 'message' => "incorrect password and email1")));
		}
    }
    else
    {
    	echo(json_encode(array('status' => 'failure', 'message' => "incorrect password and email2")));

    }

	

?> 