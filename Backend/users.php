<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$usr = "select * from register";
$sql = mysqli_query($conn,$usr);
$tab = array()  ;
while ($row = mysqli_fetch_assoc($sql))
{
    array_push($tab,$row);
}
echo json_encode($tab);

?>