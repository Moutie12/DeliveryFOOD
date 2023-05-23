<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$informations = json_decode(file_get_contents('php://input'), true);
$id = $informations['id'];    
$usr = "select * from commande where iduser='$id'";
$sql = mysqli_query($conn,$usr);
$tab = array()  ;
while ($row = mysqli_fetch_assoc($sql))
{
    array_push($tab,$row);
}
echo json_encode($tab);


?>    