<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','angular_test');
$id = json_decode(file_get_contents('php://input'), true);
$usr = "delete from connectangular where id=$id" ;
mysqli_query($conn,$usr);
echo json_encode($id);

?>