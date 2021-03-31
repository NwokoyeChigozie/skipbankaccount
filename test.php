<?php
include('phpscripts/connection.php');
$password = "frio2rservice";
$password = hash('sha256', $password);
//echo "$password";
//value = bc7ee50038a9b7b36252f93834bcb466e563e0a5ae7a6372ae8a22a0240d07af;
$username="skipadmin";
//echo '<br>';
//$itt = "philip";
//echo hash('sha256', $itt);
//$sql = "SELECT * FROM admin WHERE username='$username' AND password='$password'"; 
//$result = mysqli_query($link, $sql);
//    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
//    print_r($row);
//    $_SESSION['id']=$row['id'];
//    $_SESSION['username']=$row['username'];
//echo $_SESSION['id'];
//echo $_SESSION['username'];
//$activationKey = bin2hex(openssl_random_pseudo_bytes(8)); echo "<br><br>";
//echo $activationKey;
//$sql = "SELECT * FROM users";
//$result = mysqli_query($link, $sql);
//if(!$result){
//    echo '<div class="alert alert-danger">Error running the query!</div>';
//    exit;
//}
//        //If email & password don't match print error
//$count = mysqli_num_rows($result);
//echo $count;
?>