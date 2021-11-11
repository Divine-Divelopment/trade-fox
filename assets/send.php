<?
if(isset($_POST['name'], $_POST['phone'])){
		$to = 'perl.php.c@gmail.com'; 
		$subject = 'The subscribtion for Trade Fox';
		$message = '
						<html>
								<head>
										<title>'.$subject.'</title>
								</head>
								<body>
										<p>Имя: '.$_POST['тфьу'].'</p>
										<p>Телефон: '.$_POST['phone'].'</p>
								</body>
						</html>';
		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From: perl.php.c@gmail.com\r\n";
		mail($to, $subject, $message, $headers);
}
?>