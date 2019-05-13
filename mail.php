<?php
$msg="";
	$myemail="";
	$name="";
	$email ="";
	$subject = "";
	$message ="";
	$msg = "";	
if(isset($_POST['submit'])){
	if(!empty($_POST['name']) && !empty($_POST['email']) &&!empty($_POST['subject']) &&!empty($_POST['message'])){
	$myemail='calmaneiser10@yahoo.com';
	$name= $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];	
	$headers = "From:".$email."/".$name."";
	mail($myemail,$subject,$message,$headers);
		$msg="Your message was sent";
	}
	else{
		die();
	}
}	
?>
