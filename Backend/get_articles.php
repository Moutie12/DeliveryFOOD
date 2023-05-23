<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$usr = "select * from articles";
$sql = mysqli_query($conn,$usr);
$tableau = array() ;
while ($row = mysqli_fetch_assoc($sql))
{
    array_push($tableau,$row);
}
echo json_encode($tableau);


?>