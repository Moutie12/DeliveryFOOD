<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$informations = json_decode(file_get_contents('php://input'), true);
$nom = $informations['name'];
$email = $informations['email'];
$password = $informations['password'];
$adresse = $informations['adresse'];
$usr = "insert into register (id,name,email,password,adresse) values (Null,'$nom','$email','$password','$adresse')" ;
mysqli_query($conn,$usr);
$tab = array(1) ;
echo json_encode($tab);

?>