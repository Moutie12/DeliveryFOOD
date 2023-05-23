<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');

$usr = "select count(*) as 'number' from admins";
$count = mysqli_query($conn,$usr);
$row = mysqli_fetch_array($count);
echo json_encode($row['number']);


?>