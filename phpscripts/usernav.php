






<div class="col-md-3 left_col">
                <div class="left_col scroll-view mobile_nav_adjust" style="overflow: hidden; outline: currentcolor none medium; cursor: grab;" tabindex="5000">

                    <div class="navbar nav_title" style="border: 0;">
                        <a href="../dashboard/" class="site_title">Skip Bank</a>
                    </div>
                    <div class="clearfix"></div>

                    <!-- menu prile quick info -->
                    <div class="profile">
                        <div class="profile_pic">
                            <img src="../dashboard/Images/avatar5.png" alt="Premium" class="img-circle profile_img">
                        </div>
                        <div class="profile_info">
                            <span>Welcome</span>
                            <h2>
                                <p><?php echo $name; ?></p>
                                <small><i class="fa fa-circle text-success"></i> Online</small>
                            </h2>
                        </div>
                    </div>
                    <!-- /menu prile quick info -->

                    <br> <!-- sidebar menu -->
                    <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">

                        <div class="menu_section current-page">
                            <h3>&nbsp;</h3>
                            <ul class="nav side-menu" style="">
                                <li class=""><a href="../dashboard"><i class="fa fa-home"></i> Dashboard</a></li>
                            </ul>
                        </div>

                        <div class="menu_section">
                            <h3>Account</h3>
                            <ul class="nav side-menu">
                                <li id="fund_button"><a><i class="fa fa-arrow-down"></i> Fund Account</a></li>
                                <ul class="nav side-menu" id="drop_one" style="display:None">
                                <li><a href='../fund?type=savings&duration=unlimited'>&nbsp;&nbsp;&nbsp; <i class='fa fa-money'></i> <span style='color:#A9A9A9'>Savings</span></a></li><li><a id='invest_button'>&nbsp;&nbsp;&nbsp; <i class='fa fa-money'></i> <span style='color:#A9A9A9'>Investment</span></a></li>
                                    
                                <ul id='drop_two' class='nav side-menu' style="display:None"><li><a href='../fund?type=investment&duration=2_months'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:#A9A9A9'>2 MONTHS</span></a></li><li><a href='../fund?type=investment&duration=3_months'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:#A9A9A9'>3 MONTHS</span></a></li><li><a href='../fund?type=investment&duration=5_months'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:#A9A9A9'>5 MONTHS</span></a></li><li><a href='../fund?type=investment&duration=8_months'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:#A9A9A9'>8 MONTHS</span></a></li><li><a href='../fund?type=investment&duration=1_year'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:#A9A9A9'>1 YEAR</span></a></li></ul>
                                </ul>
                                <li><a href="../withdraw"><i class="fa fa-arrow-up"></i> Withdraw</a></li>
                                <li><a href="../history"><i class="fa fa-history"></i> Trade History</a></li>
<!--                                <li><a href="../profile"><i class="fa fa-user"></i> Account Details</a></li>-->
                            </ul>
                        </div>


                        <div class="menu_section">
                            <h3>Others</h3>
                            <ul class="nav side-menu">

                                <li><a href="../feedback"><i class="fa fa-inbox"></i> Send Feedback </a></li>
                                <li><a href="../update_profile"><i class="fa fa-user"></i> My Profile</a></li>
                                <li><a href="../request_card"><i class="fa fa-credit-card" aria-hidden="true"></i> Request Debit/Credit Card</a></li>
                                <li><a href="../grants-loans"><i class="fa fa-university" aria-hidden="true"></i> Request Grants/Loans</a></li>
                                <li><a href="../benefit_funds"><i class='fa fa-money'></i> Check Benefit Funds</a></li>
                            </ul>
                        </div>

                    </div>
                    <!-- /sidebar menu -->

                    <!-- /menu footer buttons -->
                    <div class="sidebar-footer hidden-small">
                        <a href="../update_profile" data-toggle="tooltip" data-placement="top" title="" data-original-title="Settings">
                            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="FullScreen">
                            <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                        </a>
                        <a href="../phpscripts/logout.php" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lock">
                            <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                        </a>
                        <a href="../phpscripts/logout.php" data-toggle="tooltip" data-placement="top" title="" data-original-title="Logout">
                            <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                        </a>
                    </div>
                    <!-- /menu footer buttons -->
                </div>
            </div>
            <!-- top navigation -->
            <div class="top_nav">

                <div class="nav_menu">
                    <nav class="" role="navigation">
                        <div class="nav toggle">
                            <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                        </div>

                        <ul class="nav navbar-nav navbar-right">
                            <li class="">
                                <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <img src="../dashboard/Images/avatar5.png" alt="User"><?php echo $name; ?><span class=" fa fa-angle-down" id="arrow_c"></span>
                                </a>
                                <ul class="dropdown-menu dropdown-usermenu animated fadeInDown pull-right" id="arrow_d" style="display:none">
                                    <li><a href="../phpscripts/logout.php"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>

            </div>
            <!-- /top navigation -->
<?php 

function tab_split($int_val){ 
//    echo strlen("$int_val");
    if(strlen("$int_val") <= 3){
        return $int_val;
    }else{

    $f_v = '';
    $n_count = 0;
    $val_i = str_split("$int_val");
    for ($x = (strlen("$int_val")-1); $x >=0; $x--) {
    $n_count += 1;
    if($n_count == 1){
       $f_v = $val_i[$x]; 
    }elseif($n_count % 3 == 0){
        if($x == 0){
           $f_v = $val_i[$x] . $f_v; 
        }else{
          $f_v = ',' . $val_i[$x] . $f_v;  
        }
        
    }else{
      $f_v = $val_i[$x] . $f_v;  
    }
    
//    $val_ij = $val_i[$x];
        }
    return $f_v;
        
        
    }
}




function serializer($num){
    
    $num_array = explode(".",$num);
    
    
    if(count($num_array) == 2){
        $num = round($num, 2);
        
        if(count(explode(".",$num)) == 2){
        $nm_array = explode(".",$num);
        $num_first = tab_split($nm_array[0]);
        if(strlen("$nm_array[1]")== 0){
            $decimal_v = "00";
        }elseif(strlen("$nm_array[1]")== 1){
            $decimal_v = $nm_array[1] . "0";
        }else{
            $decimal_v = $nm_array[1];
        }
        
        return $num_first . "." . $decimal_v; 
        }else{
          $num = tab_split($num);
        return $num;  
        }
     

    }elseif(count($num_array) == 1){
     $num = tab_split($num);
     return $num;
    }else{
       return 0; 
    }
//    echo $num_array[0] . " " . $num_array[1] . "<br>";
//    echo count($num_array);
    
}

?>

            <!-- page content -->
            <div class="right_col right_c" role="main">
                <!-- top tiles -->
                <div class="row tile_count">
                    <div class="animated flipInY col-md-6 col-sm-6 col-xs-6 col-lg-5 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top min-text-font"><i class="fa fa-money"></i> Savings Balance</span>
                            <div class="count" style="font-size: 28px"><p class="text-font" style="color:green">&dollar;<?php echo serializer($savings_balance); ?></p></div>
<!--                            <span class="count_bottom"><i class="green">Trade </i> Ongoing</span>-->
                        </div>
                    </div>
                    <div class="animated flipInY col-md-6 col-sm-6 col-xs-6 col-lg-5 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top min-text-font2"><i class="fa fa-clock-o"></i> Investment Balance</span>
                            <div class="count" style="font-size: 28px"><p class="text-font" style="color:#CCCC00">&dollar;<?php echo serializer($investment_balance); ?></p></div>
                            <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i><?php echo $rio; ?></i></span>
                        </div>
                    </div>
                                            <div style="height:40px;">
<!--        <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=light&amp;pref_coin_id=1505&amp;invert_hover=no" scrolling="auto" marginwidth="0" marginheight="0" border="0" style="border:0;margin:0;padding:0;" width="100%" height="36" frameborder="0"></iframe>-->
        <marquee style="background-color:#fff;color:#000; font-size:15px !important"><p><span style="color:red">Our Users:</span><span style="color:green"> <?php echo $our_users; ?></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:red">Active Users:</span><span style="color:green"> <?php echo $active_users; ?></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:red">News:</span><span style="color:green"> <?php echo $news; ?></span></p></marquee>
    </div>
<!--
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-clock"></i> Last seen</span>
                            <div class="count" style="font-size: 16px"><p class="text-font"><?php echo $last_date; ?></p></div>
                            <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>Last Access </i></span>
                        </div>
                    </div>
-->
                    
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
       $(document).ready(function(){ 
    $("#arrow_c").click(function(event){
      event.preventDefault();
//   $("#arrow_d").css("display", "Block");
    if($("#arrow_d").css("display") != 'none'){
        $("#arrow_d").css("display", "None");
    }else{  
        $("#arrow_d").css("display", "Block");
    }    

    }); 
           
    $("#fund_button").click(function(event){
      event.preventDefault();
    if($("#drop_one").css("display") != 'none'){
        $("#drop_one").css("display", "None");
    }else{  
        $("#drop_one").css("display", "Block");
    }
        

    });
        /////////////////////////////////////////////////   
    $("#invest_button").click(function(event){
      event.preventDefault();
    console.log($("#drop_two").css("display"));
    if($("#drop_two").css("display") != 'none'){
        $("#drop_two").css("display", "None");
    }else{  
        $("#drop_two").css("display", "Block");
    }
        

    });  
           ///////////////////////////////////
    
           
           
                            
                            });
</script>
