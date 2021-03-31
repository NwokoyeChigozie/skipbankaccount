<?php 
 if($_POST){
     include('connection.php');
     if(isset($_POST['p_submit'])){
         
         $id= $_POST['id'];
    $name = $_POST['name']; $name = mysqli_real_escape_string($link, $name);
    $phone = $_POST['phone']; $phone = mysqli_real_escape_string($link, $phone);
    $dob = $_POST['dob']; $dob = mysqli_real_escape_string($link, $dob);
    $zip_code = $_POST['zip_code']; $zip_code = mysqli_real_escape_string($link, $zip_code);
    $home_address = $_POST['home_address']; $home_address = mysqli_real_escape_string($link, $home_address);
    $maiden_name = $_POST['maiden_name']; $maiden_name = mysqli_real_escape_string($link, $maiden_name);
    $next_of_kin = $_POST['next_of_kin']; $next_of_kin = mysqli_real_escape_string($link, $next_of_kin);
    $next_of_kin_address = $_POST['next_of_kin_address']; $next_of_kin_address = mysqli_real_escape_string($link, $next_of_kin_address);
     
     
 $sql = "UPDATE `users` SET `name` = '$name',`phone` = '$phone', `dob` = '$dob', `zip_code` = '$zip_code', `home_address` = '$home_address', `maiden_name` = '$maiden_name', `next_of_kin` = '$next_of_kin', `next_of_kin_address` = '$next_of_kin_address' WHERE `users`.`id` = $id";   
     
     
    if(mysqli_query($link, $sql)){
        
            $resultMessage = "<div class='alert alert-success'>Successfully updated</div>";
            echo $resultMessage;
            echo "<script>
function navigate(){
window.location = '../update_profile';
}

setTimeout(navigate, 2000);
</script>";
//        echo "`name` = '$name',`phone` = '$phone', `dob` = '$dob', `zip_code` = '$zip_code', `home_address` = '$home_address', `maiden_name` = '$maiden_name', `next_of_kin` = '$next_of_kin', `next_of_kin_address` = '$next_of_kin_address'";
//        header("Refresh:1; url=users.php");
        
        }else{ 
        $resultMessage = "<div class='alert alert-error'>Error occured while updating details</div>";
            echo $resultMessage;
//        header("Refresh:1; url=users.php");
    } 
     }
    
               
 }
 ?> 