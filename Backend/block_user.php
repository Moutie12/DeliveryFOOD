<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$id = json_decode(file_get_contents('php://input'), true);
$usr = "delete from register where id='$id'";
$sql=mysqli_query($conn,$usr);
echo json_encode($id);
?>