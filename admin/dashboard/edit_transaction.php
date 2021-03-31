<?php
ob_start();
//Start session
session_start();
//Connect to the database
if(!isset($_SESSION['admin_id'])){
    header("location:../");
}
include("../../phpscripts/connection.php");
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
       <!--====== FAVICON ICON =======-->
    <link rel="apple-touch-icon" sizes="120x120" href="../../apple-touch-icon.png"> <link rel="icon" type="image/png" sizes="32x32" href="../../favicon-32x32.png"> <link rel="icon" type="image/png" sizes="16x16" href="../../favicon-16x16.png"> <link rel="manifest" href="../../site.webmanifest"> <link rel="mask-icon" href="../../safari-pinned-tab.svg" color="#5bbad5"> <meta name="msapplication-TileColor" content="#fff7f7"> <meta name="theme-color" content="#ffffff">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Admin Dashboard</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Tempusdominus Bbootstrap 4 -->
  <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
  <!-- iCheck -->
  <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- JQVMap -->
  <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">
  <!-- summernote -->
  <link rel="stylesheet" href="plugins/summernote/summernote-bs4.css">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
        <li class="nav-item" style="float: right; background-color:blue;border-radius:20px">
        <a class="nav-link" href="logout.php" role="button">Logout</a>
      </li>
    </ul>

    <!-- Right navbar links -->

  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="../../Images/ARK344.png" alt="Logo" class="brand-image img-circle elevation-3"
           style=""><br>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="index.php" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </a>
            
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="./users.php" class="nav-link active">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Users
              </p>
            </a>
            </li>
             <li class="nav-item has-treeview menu-open">
            <a href="feedbacks.php" class="nav-link">
<!--              <i class="nav-icon fa fa-location-arrow"></i>-->
              <i class="nav-icon fa fa fa-reply"></i>
              <p>
<!--                  <i class="material-icons">menu</i>-->
                Feedbacks
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="proofs.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Proofs of payment
              </p>
            </a>
          </li>  
            <li class="nav-item has-treeview menu-open">
            <a href="withdrawal.php" class="nav-link">
              <i class="nav-icon fa fa-arrow-up"></i>
              <p>
                Withrawal Requests
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="wire_requests.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Wire Transfer Requests
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="card_requests.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Card Requests
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="grants_loans.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Grant/Loan Requests
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="benefits.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Benefit Fund Requests
              </p>
            </a>
          </li>
              
              

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->


      
      <!-- Main content -->
    <section class="content" style="padding-bottom:40px"> <form method="post">
      <div class="row">

        <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Edit Trade history</h3>
 <?php
if($_GET){   
    $id= $_GET['id'];
    $username = $_GET['username'];
    $currency = $_GET['co'];
    
  $sql = "SELECT * FROM `$username` WHERE `id` = '$id'" ;
          if($result = mysqli_query($link1, $sql)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                     $id = $row['id'];
    $transaction =$row['transaction']; 
    $amount =$row['amount']; 
    $date =$row['date']; 
    $comment =$row['comment']; 
    $status =$row['status']; 
    
               
            

        }
        //close the result set
        mysqli_free_result($result);

    }else{
        echo "<p>User no longer exist</p>"; 

         }
}else{
    echo "<p>Unable to excecute: $sql. " . mysqli_error($link) ."</p>";   
            
}   
  
    
    
}
?> 


              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
                <input type="hidden" name="id" class="form-control" value="<?php echo $id; ?>">
              <div class="form-group">
                <label for="inputSpentBudget">Transaction Details</label>
                <input type="text" name="transaction" class="form-control" value="<?php echo $transaction; ?>">
              </div>
                               <div class="form-group">
                <label for="inputSpentBudget">Currency</label>
                <input type="text" name="currency" class="form-control" value="<?php echo $currency; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Amount</label>
                <input type="text" name="amount" id="inputSpentBudget" class="form-control" value="<?php echo $amount; ?>">
              </div>
                <div class="form-group">
                <label for="inputSpentBudget">Date</label>
                <input type="text" name="date" id="inputSpentBudget" class="form-control" value="<?php echo $date; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Comment</label>
                <input type="text" name="comment" id="inputSpentBudget" class="form-control" value="<?php echo $comment; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Status</label>
                <input type="text" name="status" id="inputSpentBudget" class="form-control" value="<?php echo $status; ?>">
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->

          <!-- /.card -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-success float-right" name="edit_transaction" type="submit">Save Changes</button>
        </div>
      </div><br>
<!------------------------------------------save-------------------------------------->
<?php 
 if($_POST){      
     if(isset($_POST['edit_transaction'])){
         
         $id= $_POST['id'];
    $transaction = $_POST['transaction']; $transaction = mysqli_real_escape_string($link1, $transaction);
    $amount = $_POST['amount']; $amount = mysqli_real_escape_string($link1, $amount);
    $date = $_POST['date']; $date = mysqli_real_escape_string($link1, $date);
    $currency = $_POST['currency']; $currency = mysqli_real_escape_string($link, $currency);
     $comment = $_POST['comment']; $comment = mysqli_real_escape_string($link, $comment);
     $status = $_POST['status']; $status = mysqli_real_escape_string($link, $status);
    
     
 $sql = "UPDATE `$username` SET `transaction` = '$transaction',`amount` = '$amount', `date` = '$date', `currency` = '$currency', `comment` = '$comment', `status` = '$status' WHERE `id` = $id";   
     
     
    if(mysqli_query($link1, $sql)){
        
            $resultMessage = "<div class='alert alert-success'>Successfully updated</div>";
            echo $resultMessage;
//        header("Refresh:1; url=users.php");
        
        }else{ 
        $resultMessage = "<div class='alert alert-error'>Error occured while updating database</div>";
            echo $resultMessage;
//        header("Refresh:1; url=users.php");
    } 
     }
    
               
 }
 ?>               
<!------------------------------------------save-------------------------------------->   

        
        
       
                
        
        
    
      
      
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy;Gilab</strong>
    All rights reserved.
  </footer>

  <!-- Control Sidebar -->

  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="plugins/jquery-ui/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- ChartJS -->
<script src="plugins/chart.js/Chart.min.js"></script>
<!-- Sparkline -->
<script src="plugins/sparklines/sparkline.js"></script>
<!-- JQVMap -->
<script src="plugins/jqvmap/jquery.vmap.min.js"></script>
<script src="plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
<!-- jQuery Knob Chart -->
<script src="plugins/jquery-knob/jquery.knob.min.js"></script>
<!-- daterangepicker -->
<script src="plugins/moment/moment.min.js"></script>
<script src="plugins/daterangepicker/daterangepicker.js"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
<!-- Summernote -->
<script src="plugins/summernote/summernote-bs4.min.js"></script>
<!-- overlayScrollbars -->
<script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="dist/js/pages/dashboard.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script>
</body>
</html>
<?php ob_end_flush(); ?>