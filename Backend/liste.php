<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$conn=mysqli_connect('localhost','root','','angular_test');

$usr = "select * from connectangular" ;
$user = mysqli_query($conn,$usr);
$tableau = array() ;
while ($row = mysqli_fetch_assoc($user))
{
    array_push($tableau,$row);
}
echo json_encode($tableau);

?>