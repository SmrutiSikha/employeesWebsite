<?php 

$mysql_host = "localhost";
$mysql_user = "root";
$mysql_password ="";
$mysql_db = "employees";
$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

session_start();

if(isset($_SESSION['logged_in']) && isset($_SESSION['user_id']))
{
	echo(json_encode(array('status' => 'success' , 'message' => 'successful login')));
}
else
{
	echo(json_encode(array('status' => 'failure' , 'message' => 'go try again!!!')));
}


 ?>