<?php 


$mysql_host = "localhost";
$mysql_user = "root";
$mysql_password ="";
$mysql_db = "employees";
$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

session_start();

if(isset($_SESSION['user_id']) && isset($_SESSION['logged_in']))
{
	$id = $_SESSION['user_id'];
	$profile_data = [];
	$query = mysqli_query($conn, "SELECT * FROM users where id ='".$id."'");
	if(mysqli_num_rows($query) == 0)
	{
		echo(json_encode(array('status' => 'failure' , 'message' => 'oops sorry')));
	}
	else
	{
		$profile_data = mysqli_fetch_array($query,MYSQLI_ASSOC);
		$result = (object)['profile_data'=>$profile_data];
		echo(json_encode(array('status' => 'success' , 'message' => $result)));


	}
}

 ?>