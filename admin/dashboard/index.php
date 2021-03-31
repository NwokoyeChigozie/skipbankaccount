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
<!--
          <ul class="navbar-nav" style="float: right; background-color:blue">
      <li class="nav-item">
        <a class="nav-link" href="logout.php" role="button">Logout</a>
      </li>
    </ul>
-->

  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index.php" class="brand-link">
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
            <a href="./index.php" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </a>
            
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="users.php" class="nav-link">
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
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
              <?php $sql = "SELECT * FROM users";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger">Error running the query!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
  ?>

                <h3><?php echo $count;?></h3>

                <p>Registered Users</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="users.php" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>  

            
          <!-- ./col -->
        </div>
        
        <!-- /.row -->
        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
          <!-- right col -->
        </div>
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
   <?php  
    
    
  $sql = "SELECT * FROM `admin` WHERE `id` = 1" ;
          if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                     $id = $row['id'];
    $bitcoin_address =$row['bitcoin_address'];
    $support_email =$row['support email'];  
    $our_users =$row['our_users'];  
    $active_users =$row['active_users'];  
    $news =$row['news'];  
    $support_phone =$row['support_phone'];  
      

        }
        //close the result set
        mysqli_free_result($result);

    }else{

         }
}else{ 
            
}   
  

?>    
               <section class="content" style="padding-bottom:40px"><form method="post">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Crypto Payment details</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="inputSpentBudget">Bitcoin Wallet Adress</label>
                <input type="text" name="bitcoin_address" id="inputSpentBudget" class="form-control" value="<?php echo $bitcoin_address; ?>">
              </div>
            </div>

            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <button class="btn btn-success float-right" type="submit" name="address_update">Update Payment details &nbsp;<span class="fa fa-plus"></span></button>
        </div>
      </div>
<?php
 if($_POST){ 
     if(isset($_POST['address_update'])){
//         $eth_address= $_POST['eth_address']; $eth_address = mysqli_real_escape_string($link, $eth_address);
    $bitcoin_address = $_POST['bitcoin_address']; $bitcoin_address = mysqli_real_escape_string($link, $bitcoin_address);
     
     
 $sql = "UPDATE `admin` SET `bitcoin_address` = '$bitcoin_address' WHERE `id` = 1";   
     
     
    if(mysqli_query($link, $sql)){
        
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
              </form></section>  
      
      
      
      
      
      
      
               <section class="content" style="padding-bottom:40px"><form method="post">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Data Update</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="inputEstimatedBudget">Skip Support email</label>
                <input type="text" name="support_email" class="form-control" value="<?php echo $support_email; ?>">
              </div>
              <div class="form-group">
                <label for="inputEstimatedBudget">Skip Support Phone Number</label>
                <input type="text" name="support_phone" class="form-control" value="<?php echo $support_phone; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Our users</label>
                <input type="text" name="our_users" id="inputSpentBudget" class="form-control" value="<?php echo $our_users; ?>">
              </div>
                <div class="form-group">
                <label for="inputSpentBudget">Active users</label>
                <input type="text" name="active_users" id="inputSpentBudget" class="form-control" value="<?php echo $active_users; ?>">
              </div>
                <div class="form-group">
                <label for="inputSpentBudget">News</label>
                <input type="text" name="news" id="inputSpentBudget" class="form-control" value="<?php echo $news; ?>">
              </div>
            </div>

            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <button class="btn btn-success float-right" type="submit" name="data_update">Update Data &nbsp;<span class="fa fa-plus"></span></button>
        </div>
      </div>
<?php
 if($_POST){
     if(isset($_POST['data_update'])){
         $support_email= $_POST['support_email']; $support_email = mysqli_real_escape_string($link, $support_email);
         $support_phone= $_POST['support_phone']; $support_phone = mysqli_real_escape_string($link, $support_phone);
    $our_users = $_POST['our_users']; $our_users = mysqli_real_escape_string($link, $our_users);
    $active_users = $_POST['active_users']; $active_users = mysqli_real_escape_string($link, $active_users);
    $news = $_POST['news']; $news = mysqli_real_escape_string($link, $news);
     
     
 $sql = "UPDATE `admin` SET `support email` = '$support_email',`support_phone` = '$support_phone',`our_users` = '$our_users',`active_users` = '$active_users',`news` = '$news' WHERE `id` = 1";   
     
     
    if(mysqli_query($link, $sql)){
        
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
              </form></section>  
    <!-- /.content -->
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