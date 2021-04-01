<?php include("../phpscripts/headscript.php");?>
<?php $page = "update_profile"; ?>

<!DOCTYPE html>
<html class=" " lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Triple Coin Options || Binary Brokers || CFD || Crypto Traders">

    <title>SKIP BANK</title>

    <!-- Bootstrap core CSS -->
<!--
<link rel="stylesheet" href="../login/Fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../login/Fonts/font-awesome-4.7.0/css/font-awesome.css">
-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="apple-touch-icon" sizes="120x120" href="../apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
<link rel="manifest" href="../site.webmanifest">
<link rel="mask-icon" href="../safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#fff7f7">
<meta name="theme-color" content="#ffffff">
    <link href="../dashboard/Stylesheets/bootstrap.css" rel="stylesheet">

    <link href="../dashboard/Stylesheets/font-awesome.css" rel="stylesheet">
    <link href="../dashboard/Stylesheets/animate.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="../images/favicon2.png" sizes="32x32">
<link rel="icon" type="image/png" href="../images/favicon2.png" sizes="16x16">
    <!-- Custom styling plus plugins -->
    <link href="../dashboard/Stylesheets/custom.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../dashboard/Stylesheets/jquery-jvectormap-2.css">
    <link href="../dashboard/Stylesheets/green.css" rel="stylesheet">
    <link href="../dashboard/Stylesheets/floatexamples.css" rel="stylesheet" type="text/css">

    <script async="" src="../dashboard/Scripts/default.js" charset="UTF-8" crossorigin="*"></script>
    <script src="../dashboard/Scripts/jquery_006.js"></script>
    <script src="../dashboard/Scripts/nprogress.js"></script>

    <!--[if lt IE 9]>
        <script src="../assets/js/ie8-responsive-file-warning.js"></script>
        <![endif]-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    <style type="text/css">
        <?php 
        include("../phpscripts/nav_mobile.php");
        ?>
        @keyframes tawkMaxOpen {
            0% {
                opacity: 0;
                transform: translate(0, 30px);
                ;
            }

            to {
                opacity: 1;
                transform: translate(0, 0px);
            }
        }

        @-moz-keyframes tawkMaxOpen {
            0% {
                opacity: 0;
                transform: translate(0, 30px);
                ;
            }

            to {
                opacity: 1;
                transform: translate(0, 0px);
            }
        }

        @-webkit-keyframes tawkMaxOpen {
            0% {
                opacity: 0;
                transform: translate(0, 30px);
                ;
            }

            to {
                opacity: 1;
                transform: translate(0, 0px);
            }
        }

        #oTyJEHT-1570635865410 {
            outline: none !important;
            visibility: visible !important;
            resize: none !important;
            box-shadow: none !important;
            overflow: visible !important;
            background: none !important;
            opacity: 1 !important;
            filter: alpha(opacity=100) !important;
            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity1) !important;
            -moz-opacity: 1 !important;
            -khtml-opacity: 1 !important;
            top: auto !important;
            right: 10px !important;
            bottom: 90px !important;
            left: auto !important;
            position: fixed !important;
            border: 0 !important;
            min-height: 0 !important;
            min-width: 0 !important;
            max-height: none !important;
            max-width: none !important;
            padding: 0 !important;
            margin: 0 !important;
            -moz-transition-property: none !important;
            -webkit-transition-property: none !important;
            -o-transition-property: none !important;
            transition-property: none !important;
            transform: none !important;
            -webkit-transform: none !important;
            -ms-transform: none !important;
            width: auto !important;
            height: auto !important;
            display: none !important;
            z-index: 2000000000 !important;
            background-color: transparent !important;
            cursor: auto !important;
            float: none !important;
            border-radius: unset !important;
            pointer-events: auto !important
        }

        #qADMEna-1570635865412.open {
            animation: tawkMaxOpen .25s ease !important;
        }

         @media (max-width: 480px) and (min-width: 320px) {
            .text-font{
                font-size: 15px !important; 
            }
            .min-text-font{
             font-size: 10px !important;    
            }
            .min-text-font2{
             font-size: 9px !important;    
            }
}

    </style>
</head>

<body class="nav-md">

    <div class="container body">

        <div class="main_container">
            <?php include("../phpscripts/usernav.php"); ?>

                </div>
                <!-- /top tiles -->

                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2><i class="fa fa-phone"></i> Update Profile</h2>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <div class="col-md-8 col-md-offset-2">
                                    <p>
                                        <strong style="font-size:19px">Change your password.</strong>
                                    </p>
                                    <form method="post">

<!--
                                        <div class="form-group">
                                            <label>Full name</label>
                                            <input type="text" name="username" class="form-control" value="<?php echo $name; ?>" readonly="readonly" >
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" class="form-control" value="<?php echo $email; ?>" readonly="readonly" >
                                        </div>
-->
                                        <input type="hidden" name="pu_id" value="<?php echo $_SESSION['id']; ?>">
                                        <div class="form-group">
                                            <label>Old Password</label>
                                            <input type="password" name="old-pass" required="" class="form-control" placeholder="Old Password">
                                        </div>
                                        <div class="form-group">
                                            <label>New Password</label>
                                            <input type="password" name="new-pass" required="" class="form-control" placeholder="New Password">
                                        </div>
                                        <div class="form-group">
                                            <label>Confirm New Password</label>
                                            <input type="password" name="confirm-pass" required="" class="form-control" placeholder="Confirm  new passwordd">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" name="submit" class="btn btn-success btn-flat btn-block">
                                                <i class="fa fa-pencil"></i> Change Password
                                            </button>
                                       </div>
<p style="text-align:center">
 <?php
 function test_input($data){
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
if(isset($_POST['submit'])){ 
  $id = $_POST['pu_id'];
  $old_pass = $_POST['old-pass'];
  $new_pass = $_POST['new-pass'];
  $confirm_pass = $_POST['confirm-pass'];
 $old_pass = test_input($old_pass); 
   $error = false; 

       if (empty($new_pass)) {
        $password1_error = "<p class='alert alert-danger' style='text-align:center'>Enter new password<p>";
           echo $password1_error;
    } else {
        $new_pass = test_input($new_pass);        
 
                                    
     if (empty($confirm_pass)) {
        echo "<p class='alert alert-danger' style='text-align:center'>Confirm your password<p>";
        
    } else {
        $confirm_pass = test_input($confirm_pass);
         
if($new_pass != $confirm_pass){
    echo "<p class='alert alert-danger' style='text-align:center'>Passwords do not match<p>";
}else{
    
    
    
if(hash('sha256', $old_pass) != $password){
    echo "<p class='alert alert-danger' style='text-align:center'> Old password is incorrect<p>";
}else{
    
if(hash('sha256', $new_pass) == $password){
    echo "<p class='alert alert-danger' style='text-align:center'>New password cannot be thesame as the old one<p>";
}else{
    
        $new_pass = hash('sha256', $new_pass);
    
    
  $sql = "SELECT * FROM users WHERE id ='$id'";
$result = mysqli_query($link, $sql);
//echo "id: $id";
//print_r($result);
if(!$result){
    echo '<div class="alert alert-danger" style="text-align:center">Error running the query!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count !== 1){
    echo '<div class="alert alert-danger" style="text-align:center">Error occured while updating password</div>';
}
else {

    
    
   $sql = "UPDATE `users` SET 
`password`='$new_pass' WHERE `id`= $id";    
 
    if(mysqli_query($link, $sql)){
        
            $resultMessage = "<div class='alert alert-success' style='text-align:center'>Password successfully changed</div>";
            echo $resultMessage;
        }else{     
 $resultMessage = "<div class='alert alert-danger' style='text-align:center'>Error ocurred, try again later.</div>";
            echo $resultMessage;
    }  
    
    
    
    

    }    
    
    
    
    
}
}    
    

    
    
    
    
    
    
    
}

         
         
       
         
          
          
          
          
          
          
          
          
          
                                            
                                        }
                                    
            }   
        
  }


?>
 </p>                                       
                                        
                                        
                                        
                                        
                                    </form>


                                </div>
                                
                                <div class="col-md-8 col-md-offset-2" style="margin-top:60px">
                                    <p>
                                        <strong style="font-size:19px">Update Profile Information.</strong>
                                    </p>

                                    <form method="post" id="p_form">
                                        <div class="form-group">
                                            <label>Full name</label>
                                            <input type="hidden" id="p_id" value="<?php echo $p_id; ?>">
                                            <input type="text" name="name" id="name" class="form-control" value="<?php echo $name; ?>" >
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" id="email" class="form-control" value="<?php echo $email; ?>" readonly="readonly" >
                                        </div>
                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" name="phone" id="phone" class="form-control" value="<?php echo $phone; ?>" >
                                        </div>
                                        <div class="form-group">
                                            <label>Country</label>
                                            <input type="text" name="country" id="country" class="form-control" value="<?php echo $country; ?>" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label>Date of Birth</label>
                                            <input type="text" name="dob" id="dob" class="form-control" value="<?php echo $dob; ?>" >
                                        </div>
                                        <div class="form-group">
                                            <label>Login Code</label>
                                            <input type="text" name="login_code" id="login_code" class="form-control" value="<?php echo $login_code; ?>" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label>Zip Code</label>
                                            <input type="text" name="zip_code" id="zip_code" class="form-control" value="<?php echo $zip_code; ?>" >
                                        </div>
                                        <div class="form-group">
                                            <label>Home Address</label>
                                            <input type="text" name="home_address" id="home_address" class="form-control" value="<?php echo $home_address; ?>" >
                                        </div>
                                        <div class="form-group">
                                            <label>Mother's Maiden Name</label>
                                            <input type="text" name="maiden_name" id="maiden_name" class="form-control" value="<?php echo $maiden_name; ?>" >
                                        </div>
                                        <div class="form-group">
                                            <label>Next of KIn</label>
                                            <input type="text" name="next_of_kin" id="next_of_kin" class="form-control" value="<?php echo $next_of_kin; ?>" >
                                        </div>
                                        <div class="form-group">
                                            <label>Address of Next of Kin</label>
                                            <input type="text" name="next_of_kin_address" id="next_of_kin_address" class="form-control" value="<?php echo $next_of_kin_address; ?>" >
                                        </div> 
                                        
                                        <div class="form-group">
                                            <button type="submit" id="p_submit" class="btn btn-success btn-flat btn-block">
                                                <i class="fa fa-pencil"></i> Update Details
                                            </button>
                                       </div>
                                       <p class="p_message" style="text-align:center"></p> 
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clearfix"></div>
                <!-- footer content -->


            </div>


        </div>
    </div>
    <br>
    <footer>
        <div class="copyright-info">
            <p class="pull-right">© THE SKIP BANK
            </p>
        </div>
        <div class="clearfix"></div>
    </footer>
    <!-- /footer content -->
    </div>
    <!-- /page content -->

    </div>

    </div>

    <div id="custom_notifications" class="custom-notifications dsp_none">
        <ul class="list-unstyled notifications clearfix" data-tabbed_notifications="notif-group">
        </ul>
        <div class="clearfix"></div>
        <div id="notif-group" class="tabbed_notifications"></div>
    </div>

    <script src="../dashboard/Scripts/bootstrap.js"></script>

    <!-- gauge js -->
    <script type="text/javascript" src="../dashboard/Scripts/gauge.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/gauge_demo.js"></script>
    <!-- bootstrap progress js -->
    <script src="../dashboard/Scripts/bootstrap-progressbar.js"></script>
    <script src="../dashboard/Scripts/jquery_007.js"></script>
    <!-- icheck -->
    <script src="../dashboard/Scripts/icheck.js"></script>
    <!-- daterangepicker -->
    <script type="text/javascript" src="../dashboard/Scripts/moment.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/daterangepicker.js"></script>
    <!-- chart js -->
    <script src="../dashboard/Scripts/chart.js"></script>

    <script src="../dashboard/Scripts/custom.js"></script>

    <!-- flot js -->
    <!--[if lte IE 8]><script type="text/javascript" src="js/excanvas.min.js"></script><![endif]-->
    <script type="text/javascript" src="../dashboard/Scripts/jquery_003.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_008.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_009.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/date.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_005.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_002.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/curvedLines.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_004.js"></script>
    <script>
        $(document).ready(function() {
            // [17, 74, 6, 39, 20, 85, 7]
            //[82, 23, 66, 9, 99, 6, 2]
            var data1 = [
                [gd(2012, 1, 1), 17],
                [gd(2012, 1, 2), 74],
                [gd(2012, 1, 3), 6],
                [gd(2012, 1, 4), 39],
                [gd(2012, 1, 5), 20],
                [gd(2012, 1, 6), 85],
                [gd(2012, 1, 7), 7]
            ];

            var data2 = [
                [gd(2012, 1, 1), 82],
                [gd(2012, 1, 2), 23],
                [gd(2012, 1, 3), 66],
                [gd(2012, 1, 4), 9],
                [gd(2012, 1, 5), 119],
                [gd(2012, 1, 6), 6],
                [gd(2012, 1, 7), 9]
            ];
            $("#canvas_dahs").length && $.plot($("#canvas_dahs"), [
                data1, data2
            ], {
                series: {
                    lines: {
                        show: false,
                        fill: true
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 0.4
                    },
                    points: {
                        radius: 0,
                        show: true
                    },
                    shadowSize: 2
                },
                grid: {
                    verticalLines: true,
                    hoverable: true,
                    clickable: true,
                    tickColor: "#d5d5d5",
                    borderWidth: 1,
                    color: '#fff'
                },
                colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
                xaxis: {
                    tickColor: "rgba(51, 51, 51, 0.06)",
                    mode: "time",
                    tickSize: [1, "day"],
                    //tickLength: 10,
                    axisLabel: "Date",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 10
                    //mode: "time", timeformat: "%m/%d/%y", minTickSize: [1, "day"]
                },
                yaxis: {
                    ticks: 8,
                    tickColor: "rgba(51, 51, 51, 0.06)",
                },
                tooltip: false
            });

            function gd(year, month, day) {
                return new Date(year, month - 1, day).getTime();
            }
        });

    </script>

    <!-- worldmap -->
    <script type="text/javascript" src="../dashboard/Scripts/jquery-jvectormap-2.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/gdp-data.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery-jvectormap-world-mill-en.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery-jvectormap-us-aea-en.js"></script>
    <!-- pace -->
    <script src="../dashboard/Scripts/pace.html"></script>

    <script type="text/javascript">
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            alert("Address Copied");
            $temp.remove();
        }

    </script>
    <script>
        $(function() {
            $('#world-map-gdp').vectorMap({
                map: 'world_mill_en',
                backgroundColor: 'transparent',
                zoomOnScroll: false,
                series: {
                    regions: [{
                        values: gdpData,
                        scale: ['#E6F2F0', '#149B7E'],
                        normalizeFunction: 'polynomial'
                    }]
                },
                onRegionTipShow: function(e, el, code) {
                    el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
                }
            });
        });

    </script>
    <!-- skycons -->
    <script src="../dashboard/Scripts/skycons.js"></script>
    <script>
        var icons = new Skycons({
                "color": "#73879C"
            }),
            list = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;

        for (i = list.length; i--;)
            icons.set(list[i], list[i]);

        icons.play();

    </script>

    <!-- dashbord linegraph -->
    <script>
        Chart.defaults.global.legend = {
            enabled: false
        };

        var data = {
            labels: [
                "Crypto",
                "EUR",
                "USD",
                "Nasdaq",
                "Others"
            ],
            datasets: [{
                data: [20, 25, 30, 15, 10],
                backgroundColor: [
                    "#BDC3C7",
                    "#9B59B6",
                    "#455C73",
                    "#26B99A",
                    "#3498DB"
                ],
                hoverBackgroundColor: [
                    "#CFD4D8",
                    "#B370CF",
                    "#34495E",
                    "#36CAAB",
                    "#49A9EA"
                ]

            }]
        };

        var canvasDoughnut = new Chart(document.getElementById("canvas1"), {
            type: 'doughnut',
            tooltipFillColor: "rgba(51, 51, 51, 0.55)",
            data: data
        });

    </script>
    <!-- /dashbord linegraph -->

    <script type="text/javascript">
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            alert("Address Copied");
            $temp.remove();
        }

    </script>
    <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5f61cc81f0e7167d0010bf8f/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
<script>
    $(document).ready(function(){
     $("#p_form").submit(function(event){
      event.preventDefault();
      var name = $("#name").val();
      var phone = $("#phone").val();
      var id = $("#p_id").val();
      var dob = $("#dob").val();
      var zip_code = $("#zip_code").val();
      var home_address = $("#home_address").val();
      var maiden_name = $("#maiden_name").val();
      var next_of_kin = $("#next_of_kin").val();
      var next_of_kin_address = $("#next_of_kin_address").val();
      var p_submit =    $("#p_submit").val();
//      console.log("name: " + name + " " +"phone: " + phone + " " +"id: " + id + " " +"dob: " + dob + " " +"zip_code: " + zip_code + " " +"home_address: " + home_address + " " +"maiden_name: " + maiden_name + " " +"next_of_kin: " + next_of_kin + " " +"next_of_kin_address: " + next_of_kin_address);
                $.ajax({
            type: "POST",
            url: "../phpscripts/update_profile.php/",
                data: {  
                  name : name,
                  phone : phone,
                  id : id,
                  dob : dob,
                  zip_code : zip_code,
                  home_address : home_address,
                  maiden_name : maiden_name,
                  next_of_kin : next_of_kin,
                  next_of_kin_address : next_of_kin_address,
                  p_submit : p_submit
    },
            success: function(response) {
      $(".p_message").html(response);
//      console.log(response);
//      console.log("Done");  
            },
            error: function(response) {
         console.log(response);
             }      
                    });

     });   
    });
</script>
</body>

</html>
<?php ob_end_flush(); ?>