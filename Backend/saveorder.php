<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$informations = json_decode(file_get_contents('php://input'), true);
$idarticle = $informations['idarticle'];
/////////////////////Get Name Article////////////////////
$usr1 = "select name from articles where id='$idarticle'";
$sql = mysqli_query($conn,$usr1);
$nom = mysqli_fetch_assoc($sql);
$name = $nom ['name'];
/////////////////////////////////////////////////////////
$iduser = $informations['iduser'];
$usr = "insert into commande (idC,idarticle,nomarticle,iduser) values (null,'$idarticle','$name','$iduser')";
mysqli_query($conn,$usr);
echo json_encode("true");
?>