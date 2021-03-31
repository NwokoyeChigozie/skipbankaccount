<?php 
ob_start();
include('../phpscripts/connection.php');
//Start session
session_start();
//    header("Location: ../login/");
if(!isset($_SESSION['id'])){
    header("Location: ../login/");
}
$id = $_SESSION['id'];
//echo "id: ". $id;


$sql = "SELECT * FROM users WHERE id='$id'";
$result = mysqli_query($link, $sql);
//if(!$result){
//    echo '<div class="error">Error running the query!</div>';
//    exit;
//}
        //If email & password don't match print error
$count_r = mysqli_num_rows($result);
if($count_r < 1){
//    echo '<div class="error" style="max-width: 50% !important;">No user found</div>';
    header("Location: ../phpscripts/logout.php");
}
?>
<?php
$sql = "SELECT * FROM users WHERE id='$id'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger">Error extracting user data</div>';
    exit;
}else{
   $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $id = $row['id'];
    $p_id = $row['id'];
    $name =$row['name']; 
//    echo "name: ". $name;
    $email =$row['email']; 
    $phone =$row['phone']; 
    $country =$row['country']; 
    $username =$row['username']; 
    $type =$row['type']; 
    $currency =$row['currency']; 
    $account_status =$row['account_status']; 
    $last_access = $row['last_access'];
    $current_access = $row['current_access'];
    $savings_balance = $row['savings_balance'];
    $investment_balance = $row['investment_balance'];
    $account_details  = $row['account_details'];
    $user_withdrawable = $row['user_withdrawable'];
    $password = $row['password'];
    $dob = $row['dob'];
    $login_code = $row['login_code'];
    $zip_code = $row['zip_code'];
    $home_address = $row['home_address'];
    $maiden_name = $row['maiden_name'];
    $next_of_kin = $row['next_of_kin'];
    $next_of_kin_address = $row['next_of_kin_address'];
    $gender = $row['gender'];
    $benefits = $row['benefits'];
    $rio = $row['rio'];
    

}
?>
<?php 
if($account_status == "Disabled"){
 header("Location: ../phpscripts/logout.php");   
}
?>
<?php 
include('../phpscripts/update.php');
?>






<?php
$sql = "SELECT * FROM users WHERE id='$id'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger">Error extracting user data</div>';
    exit;
}else{
//   $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
//    $id = $row['id'];
//    $name =$row['name']; 
//    $email =$row['email']; 
//    $phone =$row['phone']; 
//    $country =$row['country']; 
//    $username =$row['username']; 
//    $type =$row['type']; 
//    $currency =$row['currency']; 
//    $account_status =$row['account_status']; 
//    $last_access = $row['last_access'];
//    $current_access = $row['current_access'];
//    $savings_balance = $row['savings_balance'];
//    $investment_balance = $row['investment_balance'];
    
       $sql = "UPDATE `users` SET 
`last_access`='$current_access' WHERE `id`= $id";    
 mysqli_query($link, $sql);
    
    
   
    
    
    $current_access = time();
    $sql = "UPDATE `users` SET 
`current_access`='$current_access' WHERE `id`= $id";    
 mysqli_query($link, $sql);
    
    if($last_access = '' || $last_access = ' '){
     $last_access = $current_access;   
    }
//    $last_date = date("F d, Y h:i:s", $last_access);
    $last_date = date("F d", $last_access);
    
}
  


?>