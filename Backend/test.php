<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
session_start() ;
echo json_encode($_SESSION['username']);


?>