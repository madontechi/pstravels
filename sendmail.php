<?php
if(isset($_POST['submit'])){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject_form = $_POST['subject'];
		$message = $_POST['message'];

$to = "1988.balaji@gmail.com"; // Change to the recipient's email
$subject = "New Contact Form Submission";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $email" . "\r\n";

$email_template = "
<!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Equiry Details</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 10px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
            .header { background: #fdbe33; color: #ffffff; text-align: center; padding: 10px; border-radius: 8px 8px 0 0; }
            .content { padding: 20px; font-size: 15px; color: #333;border: 1px solid #fdbe33;border-radius:0px 0px 8px 8px; }
            .label { font-weight: bold; color: #555; }
            .t-head{width: 10%;}
            table,tr,th,td{border: 1px solid #000; border-collapse: collapse; padding: 10px;width:100%;}
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Equiry Details</h2>
            </div>
            <div class='content'>
            	<table>
            	<tr>
            		<th class='t-head'>Name</th>
            		<td>$name</td>
            	</tr>
            	<tr>
            		<th class='t-head'>Email</th>
            		<td>$email</td>
            	</tr>
            	<tr>
            		<th class='t-head'>Subject</th>
            		<td>$subject_form</td>
            	</tr>
            	<tr>
            		<th class='t-head'>Message</th>
            		<td>$message</td>
            	</tr>
            	</table>
            </div>
        </div>
    </body>
    </html>";

if (mail($to, $subject, $email_template, $headers)) {
    header('Location: contact.html');
} else {
    echo "Failed to send email.";
}
}
?>
