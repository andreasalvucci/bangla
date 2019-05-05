<html>
<head>
<title>RICEVI SEGNALAZIONE</title>
</head>
<body>


Coordinate ricevute:
<?php
	if(!isset($_POST["coordinates"])){
		header("Location: segnala.html");
	}
	else{
		$coordinate=$_POST["coordinates"];
		list($lat,$long) = explode(" ", $coordinate);
		echo "Lat: ".$lat." Long: ".$long;
	}
 ?>
</body>
</html>