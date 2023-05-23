<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$conn=mysqli_connect('localhost','root','','grud_angular');
$informations = json_decode(file_get_contents('php://input'), true);
$email = $informations['email'];
$password = $informations['password'];
//////////////////// check users now ////////////////////
$usr ="select * from register where email='$email' and password='$password' ";
$sql = mysqli_query($conn,$usr);
$row = mysqli_fetch_assoc($sql);
//////////////////// check admins now ////////////////////

$usr1 ="select * from admins where email='$email' and password='$password' ";
$sql1 = mysqli_query($conn,$usr1);
$row1 = mysqli_fetch_assoc($sql1);


//////////////////// send request ////////////////////
if (isset($row['email']))
{
    session_start() ;
    array_push($row, "user");
    echo json_encode($row);
}else if (isset($row1['email'])){
    session_start() ;
    array_push($row1, "admin");
    echo json_encode($row1);
}else{
    $row2 = (object) [
        '0' => 'NoOne',
      ];

    echo json_encode($row2);
}

?>