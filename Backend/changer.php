<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$informations = json_decode(file_get_contents('php://input'), true);
$id = $informations['id'];
$name = $informations['name'];
$email = $informations['email'];
$password = $informations['password'];
$usr = "update admins SET name='$name', email='$email', password='$password' where id=$id ";
$row=mysqli_query($conn,$usr);
$tab = array($id,$name,$email,$password) ;
echo json_encode($tab);   


?>