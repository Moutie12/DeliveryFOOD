<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$informations = json_decode(file_get_contents('php://input'), true);
$name = $informations['nom'];
$image = $informations ['image'];    
$usr = "insert into articles values (null,'$name','$image')";
mysqli_query($conn,$usr);
echo json_encode('true');


?>    