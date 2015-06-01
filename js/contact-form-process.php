<?php
$success = 0;

// $_POST
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$jobtitle = $_POST['jobtitle'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Insert into db
$result = mysql_pconnect('10.178.193.125', 'camargueuser', '75P26MEGzE');
	
if (!$result) return false;
if(!mysql_select_db('camarguetest')) return false;

$query = "INSERT INTO subscribers (firstname, lastname, jobtitle, company, email, phone) VALUES ('".$firstname."', '".$lastname."', '".$jobtitle."', '".$company."', '".$email."', '".$phone."')";
$result = mysql_query($query);

if(!$result)
{
	return false;
}

// header info
$headers = "From: $firstname $lastname";
$headers .= "<$email>\r\n";
$headers .= "Reply-To: $email";

// message
$emailContent = "Tenacitas News Subscription:\n\n";
$emailContent .= "First Name: $firstname\n";
$emailContent .= "Surname: $lastname\n";
$emailContent .= "Job Title: $jobtitle\n";
$emailContent .= "Company: $company\n";
$emailContent .= "Email Address: $email\n";
$emailContent .= "Phone: $phone\n";

// send
$success = mail('nbeardwell@infinitespada.com', 'News Subscription', $emailContent, $headers);

if($success)
{
	// header info
	$headers = "From: nbeardwell@infinitespada.com";
	$headers .= "<nbeardwell@infinitespada.com>\r\n";
	$headers .= "Reply-To: anbeardwell@infinitespada.com";
	
	$emailContent = "Thank you for subscribing to our newsletter.\n\nYou have been successfully added to our mailing list, keeping you up-to-date with our monthly reports.\n\nIf you¹ve not subscribed please contact nbeardwell@infinitespada.com to be removed from the mailing list.";
	$success = mail($email, 'News Subscription', $emailContent, $headers);
}	
?>
