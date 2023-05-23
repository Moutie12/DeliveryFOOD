<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$usr = "select count(*) from articles";
$sql=mysqli_query($conn,$usr);
$row = mysqli_fetch_assoc($sql);
echo json_encode($row['count(*)']);


?>