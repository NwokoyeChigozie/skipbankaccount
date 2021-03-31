<?php include("../phpscripts/headscript.php");?>
<?php $page = "profile"; ?>

<?php 
if($account_status == "Disabled"){
 header("Location: ../phpscripts/logout.php");   
}
?>
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

    <link href="Stylesheets/bootstrap.css" rel="stylesheet">

    <link href="Stylesheets/font-awesome.css" rel="stylesheet">
    <link href="Stylesheets/animate.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="../images/favicon2.png" sizes="32x32">
    <link rel="icon" type="image/png" href="../images/favicon2.png" sizes="16x16">
    <!-- Custom styling plus plugins -->
    <link href="Stylesheets/custom.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="Stylesheets/jquery-jvectormap-2.css">
    <link href="Stylesheets/green.css" rel="stylesheet">
    <link href="Stylesheets/floatexamples.css" rel="stylesheet" type="text/css">

    <script async="" src="Scripts/default.js" charset="UTF-8" crossorigin="*"></script>
    <script src="Scripts/jquery_006.js"></script>
    <script src="Scripts/nprogress.js"></script>
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
                                <h2><i class="fa fa-user"></i> User Profile</h2>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">

                                <div class="col-md-4 col-sm-12 col-xs-12 profile_left">

                                    <div class="profile_img">

                                        <!-- end of image cropping -->
                                        <div id="crop-avatar">
                                            <!-- Current avatar -->
                                            <div class="avatar-view" title="User">
                                                <img src="Images/avatar5.png" alt="User">
                                            </div>

                                        </div>
                                        <!-- end of image cropping -->

                                    </div>
                                    <h3><?php echo $username;?></h3>

                                    <ul class="list-unstyled user_data">
                                        <li><i class="fa fa-envelope user-profile-icon"></i> Email: <span class="label label-primary pull-right" style="font-size: 12px"><?php echo $email;?></span>
                                        </li>
                                        <li><i class="fa fa-map-marker user-profile-icon"></i> Country: <span class="label label-default pull-right" style="font-size: 12px"><?php echo $country;?></span>
                                        </li>
                                        <li><i class="fa fa-phone user-profile-icon"></i> Phone: <span class="label label-warning pull-right" style="font-size: 12px"> <?php echo $phone;?></span>
                                        </li>

                                        <li>
                                            <i class="fa fa-money user-profile-icon"></i> Trade Currency: <span class="label label-info pull-right" style="font-size: 12px"><?php echo $currency;?></span>
                                        </li>

                                        <li>
                                            <i class="fa fa-money user-profile-icon"></i> Current Balance: <span class="label label-info pull-right" style="font-size: 12px"><?php //echo $balance;?></span>
                                        </li>
<!--
                                        <li>
                                            <i class="fa fa-check user-profile-icon"></i> Trade Status: <span class="label label-success pull-right" style="font-size: 12px"><?php echo $trade_status;?></span>
                                        </li>

                                        <li>
                                            <i class="fa fa-check user-profile-icon"></i> Account Status: <span class="label label-success pull-right" style="font-size: 12px">
                                                <?php echo $account_status;?>
                                            </span>
                                        </li>
-->


                                    </ul>

                                </div>

                                <div class="col-md-8 col-sm-12 col-xs-12">
                                    <div class="x_panel">
                                        <div class="x_title">
                                            <h2><i class="fa fa-text"></i> Genres of Trading Option Explained <small>Take time to know about binary trade</small></h2>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="x_content">

                                            <!-- start accordion -->
                                            <div class="accordion" id="accordion" role="tablist" aria-multiselectable="true">

                                                <div class="panel">
                                                    <a class="panel-heading collapsed" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#highlow" aria-expanded="false" aria-controls="highlow">
                                                        <h4 class="panel-title">High/Low Call Put</h4>
                                                    </a>
                                                    <div id="highlow" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false" style="height: 0px;">
                                                        <div class="panel-body">
                                                            <p><strong>High/Low Call Put</strong>
                                                            </p>
                                                            This is probably the easiest and the
                                                            simplest option for trading. The investor only needs to predict whether
                                                            the price of the asset is going to rise or fall within a given time. The
                                                            investor then selects Call if the prediction is a rise in price and Put
                                                            if it is a fall.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel">
                                                    <a class="panel-heading collapsed" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#onetouch" aria-expanded="false" aria-controls="onetouch">
                                                        <h4 class="panel-title">One Touch</h4>
                                                    </a>
                                                    <div id="onetouch" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false" style="height: 0px;">
                                                        <div class="panel-body">
                                                            <p><strong>One Touch</strong>
                                                            </p>
                                                            In this option, the investor predicts
                                                            that the price of the asset will touch a specific value before the end
                                                            of the given time. One Touch Option For example, the trading asset is
                                                            EUR/USD valued at 1.3500 on Friday. A trading platform such as
                                                            rapidcoinoptions can give the investors two options. The call option;
                                                            meaning that the price of the asset will rise and reach 1.3800 at least
                                                            once in the next week. The put option; meaning that the price of the
                                                            asset will fall and reach 1.3200 at least once during the next week. In
                                                            case you use a call option or a put option and the price touches the
                                                            specified price then you win.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel">
                                                    <a class="panel-heading collapsed" role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#notouch" aria-expanded="false" aria-controls="notouch">
                                                        <h4 class="panel-title">No Touch</h4>
                                                    </a>
                                                    <div id="notouch" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false" style="height: 0px;">
                                                        <div class="panel-body">
                                                            <p><strong>No Touch</strong>
                                                            </p>
                                                            It works the same way as the CALL/PUT
                                                            option only that in this case, you select the price at which the asset
                                                            must not reach before the selected period. Example: Google’s share price
                                                            is $540 and the trading platform is on the No Touch price of $570 with
                                                            percentage returns of 77 %. If the price does not reach 570 dollars
                                                            after the given time, then you have a gain.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel">
                                                    <a class="panel-heading" role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#optionplus" aria-expanded="true" aria-controls="optionplus">
                                                        <h4 class="panel-title">Option+</h4>
                                                    </a>
                                                    <div id="optionplus" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree" aria-expanded="true" style="">
                                                        <div class="panel-body">
                                                            <p><strong>Option+</strong>
                                                            </p>
                                                            The option comprises prediction of a
                                                            rise (Call) or a fall (Put) in the value of the asset in 30 seconds.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end of accordion -->

                                        </div>
                                    </div>
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

    <script src="Scripts/bootstrap.js"></script>

    <!-- gauge js -->
    <script type="text/javascript" src="Scripts/gauge.js"></script>
    <script type="text/javascript" src="Scripts/gauge_demo.js"></script>
    <!-- bootstrap progress js -->
    <script src="Scripts/bootstrap-progressbar.js"></script>
    <script src="Scripts/jquery_007.js"></script>
    <!-- icheck -->
    <script src="Scripts/icheck.js"></script>
    <!-- daterangepicker -->
    <script type="text/javascript" src="Scripts/moment.js"></script>
    <script type="text/javascript" src="Scripts/daterangepicker.js"></script>
    <!-- chart js -->
    <script src="Scripts/chart.js"></script>

    <script src="Scripts/custom.js"></script>

    <!-- flot js -->
    <!--[if lte IE 8]><script type="text/javascript" src="js/excanvas.min.js"></script><![endif]-->
    <script type="text/javascript" src="Scripts/jquery_003.js"></script>
    <script type="text/javascript" src="Scripts/jquery_008.js"></script>
    <script type="text/javascript" src="Scripts/jquery_009.js"></script>
    <script type="text/javascript" src="Scripts/jquery.js"></script>
    <script type="text/javascript" src="Scripts/date.js"></script>
    <script type="text/javascript" src="Scripts/jquery_005.js"></script>
    <script type="text/javascript" src="Scripts/jquery_002.js"></script>
    <script type="text/javascript" src="Scripts/curvedLines.js"></script>
    <script type="text/javascript" src="Scripts/jquery_004.js"></script>
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
    <script type="text/javascript" src="Scripts/jquery-jvectormap-2.js"></script>
    <script type="text/javascript" src="Scripts/gdp-data.js"></script>
    <script type="text/javascript" src="Scripts/jquery-jvectormap-world-mill-en.js"></script>
    <script type="text/javascript" src="Scripts/jquery-jvectormap-us-aea-en.js"></script>
    <!-- pace -->
    <script src="Scripts/pace.html"></script>

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
    <script src="Scripts/skycons.js"></script>
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

</body>

</html>


<?php ob_end_flush(); ?>
