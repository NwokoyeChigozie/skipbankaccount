<?php 
//          $sql = "SELECT * FROM payments WHERE `email`='$email'" ;
//          if($result = mysqli_query($link, $sql)){
//    if(mysqli_num_rows($result)>0){
//        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
//               $payment_id = $row["id"];
//                $payment_username = $row["username"];
//                $payment_email = $row["email"];
//                $payment_currency = $row["currency"];
//                $payment_amount = $row["amount"];
//                $payment_time_paid = $row["time_paid"];
//                $payment_last_interest_time = $row["last_interest_time"];
//                $payment_balance = $row["payment_balance"];
//                $payment_withdrawable = $row["payment_withdrawable"];
////                $item = strtoupper($items);
////                $two_weeks = 1209600;
////                $three_months = 7890000;
//                $three_months = 300;
//                $two_weeks = 120;
//                $interest_rate = 0.3;
//                $instant_time = time();
//                if(($instant_time-$payment_last_interest_time)>=$two_weeks){
//                    if(($instant_time-$payment_time_paid)>=$three_months){
//                         $payment_interest = $payment_amount * $interest_rate;
//                   $payment_balance = $payment_balance + $payment_interest;
//                        $new_time = $payment_last_interest_time + $two_weeks;
//                    $sql = "UPDATE `payments` SET 
//                `payment_balance`='$payment_balance',`last_interest_time`='$new_time', `payment_withdrawable`='$payment_balance' WHERE `id`= $payment_id";    
//                mysqli_query($link, $sql);
//                    }else{
//                     $payment_interest = $payment_amount * $interest_rate;
//                   $payment_balance = $payment_balance + $payment_interest;
//                        $payment_withdrawable = $payment_balance - $payment_amount;
//                        $new_time = $payment_last_interest_time + $two_weeks;
//                    $sql = "UPDATE `payments` SET 
//                `payment_balance`='$payment_balance',`last_interest_time`='$new_time', `payment_withdrawable`='$payment_withdrawable' WHERE `id`= $payment_id";    
//                mysqli_query($link, $sql);   
//                    }    
//                }else{
//                    $payment_interest = $payment_amount * 0;
//                   $payment_balance = $payment_balance + $payment_interest;
//                    $payment_withdrawable = $payment_balance - $payment_amount;
//                    $sql = "UPDATE `payments` SET 
//                `payment_balance`='$payment_balance', `payment_withdrawable`='$payment_withdrawable' WHERE `id`= $payment_id";    
//                mysqli_query($link, $sql);
//                }   
//            
//
//        }
//        //close the result set
//        mysqli_free_result($result);
//
//    }else{
////        echo "<p>mySQL returned an empty result set.</p>"; 
//
//         }
//}else{
//    echo "<p>Unable to excecute: $sql. " . mysqli_error($link) ."</p>";   
//            
//}

?>
<?php
//            
// $sql = "SELECT SUM(`payment_balance`) AS `payment_balance` FROM `payments` WHERE `email`='$email'";
//
//if($result = mysqli_query($link, $sql)){
//    if(mysqli_num_rows($result)>0){
//        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
// $total_payment_balance = $row["payment_balance"];
//            //echo"$amount1";
//
//        }
//    }
//}
//
// $sql = "SELECT SUM(`payment_withdrawable`) AS `payment_withdrawable` FROM `payments` WHERE `email`='$email'";
//
//if($result = mysqli_query($link, $sql)){
//    if(mysqli_num_rows($result)>0){
//        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
// $total_payment_withdrawable = $row["payment_withdrawable"];
//            //echo"$amount1";
//
//        }
//    }
//}
//
//
//$sql = "UPDATE `users` SET `balance`='$total_payment_balance', `user_withdrawable`='$total_payment_withdrawable' WHERE `id`= $id"; 
//mysqli_query($link, $sql);
//
//
//


?>
   <?php  

  $sql = "SELECT * FROM `admin` WHERE `id` = 1" ;
          if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                     $id = $row['id'];
    $support_email =$row['support email'];  
    $our_users =$row['our_users'];  
    $active_users =$row['active_users'];  
    $news =$row['news'];
    $bitcoin_address = $row['bitcoin_address'];
    $eth_address = $row['eth_address'];
      

        }
        //close the result set
        mysqli_free_result($result);

    }
}  
  

?> 