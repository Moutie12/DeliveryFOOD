<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$conn=mysqli_connect('localhost','root','','angular_test');

$data = json_decode(file_get_contents('php://input'), true);

$name1 = $data['name'];
$power1 = $data['power'];
$image1 = $data['lien'];
$usr = "insert into connectangular values (Null,'$name1','$power1','$image1')" ;
mysqli_query($conn,$usr);
$data1 = array(true);
// Do something with the data
echo json_encode($data1);
#$tab = array() ;
#var_dump(json_decode($hero, true));


#$res = "Hi" ;
#echo json_encode($name);

?>