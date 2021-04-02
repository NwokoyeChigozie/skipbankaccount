<?php include("../phpscripts/headscript.php");?>
<?php $page = "dashboard"; ?>
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
    <!--<link rel="shortcut icon" type="image/ico" href="../images/favicon2.png" />-->
    <link href="Stylesheets/bootstrap.css" rel="stylesheet">

    <link href="Stylesheets/font-awesome.css" rel="stylesheet">

    <link href="Stylesheets/animate.css" rel="stylesheet">

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
        
/*
@media (max-width: 480px) and (min-width: 320px)         
        @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
            .text-font{
                font-size: 15px !important; 
            }
            .min-text-font{
             font-size: 10px !important;    
            }
}
*/
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
<!--
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-shield"></i> Account Type</span>
                            <div class="count green" style="font-size: 28px"><p class="text-font"><?php echo $type; ?></p></div>
                            <p class="text-font"><span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>Trade </i> Account Type</span></p>
                        </div>
                    </div>
-->
<!--
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-level-up"></i> Account Status</span>
                            <div class="count" style="font-size: 28px"> <p class="text-font"></p>
                            </div>
                            <span class="count_bottom"> </span>
                        </div>
                    </div>
-->
<!--
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-map-o"></i> Location</span>
                            <div class="count text-font" style="font-size: 22px"><p class="<?php
                                        if(strlen($country)>12 && strlen($country)<18){
                                            echo 'min-text-font';
                                        }elseif(strlen($country)>17){
                                            echo "min-text-font2";
                                        }else{
                                            echo "text-font";
                                        }
                                        ?>" style="font-size: 22px"><?php
                                echo $country; 
                                ?></p></div>
                            <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>Country </i></span>
                        </div>
                    </div>
-->


                </div>
                <!-- /top tiles -->
        

                <div class="col-md-12 col-sm-12 col-xs-12">
                    <!-- TradingView Widget BEGIN -->
                    <div class="tradingview-widget-container">
                        <div class="tradingview-widget-container__widget"></div>
                        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noopener" target="_blank"><span class="blue-text">Ticker Tape</span></a> by TradingView</div>
                        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                            {
                                "symbols": [{
                                        "title": "S&P 500",
                                        "proName": "OANDA:SPX500USD"
                                    },
                                    {
                                        "title": "Nasdaq 100",
                                        "proName": "OANDA:NAS100USD"
                                    },
                                    {
                                        "title": "EUR/USD",
                                        "proName": "FX_IDC:EURUSD"
                                    },
                                    {
                                        "title": "BTC/USD",
                                        "proName": "BITSTAMP:BTCUSD"
                                    },
                                    {
                                        "title": "ETH/USD",
                                        "proName": "BITSTAMP:ETHUSD"
                                    }
                                ],
                                "colorTheme": "light",
                                "isTransparent": false,
                                "displayMode": "adaptive",
                                "locale": "en"
                            }

                        </script>
                    </div>
                    <!-- TradingView Widget END -->
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <!-- TradingView Widget BEGIN -->
                        <div class="tradingview-widget-container">
                            <div class="tradingview-widget-container__widget"></div>
                            <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/FX-EURUSD/" rel="noopener" target="_blank"><span class="blue-text">EURUSD Rates</span></a> by TradingView</div>
                            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>
                                {
                                    "symbol": "FX:EURUSD",
                                    "width": "100%",
                                    "colorTheme": "light",
                                    "isTransparent": false,
                                    "locale": "en"
                                }

                            </script>
                        </div>
                        <!-- TradingView Widget END -->
                    </div>

                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <!-- TradingView Widget BEGIN -->
                        <div class="tradingview-widget-container">
                            <div class="tradingview-widget-container__widget"></div>
                            <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BITSTAMP-BTCUSD/" rel="noopener" target="_blank"><span class="blue-text">BTCUSD Rates</span></a> by TradingView</div>
                            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>
                                {
                                    "symbol": "BITSTAMP:BTCUSD",
                                    "width": "100%",
                                    "colorTheme": "light",
                                    "isTransparent": false,
                                    "locale": "en"
                                }

                            </script>
                        </div>
                        <!-- TradingView Widget END -->
                    </div>


                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <!-- TradingView Widget BEGIN -->
                        <div class="tradingview-widget-container">
                            <div class="tradingview-widget-container__widget"></div>
                            <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BITSTAMP-ETHBTC/" rel="noopener" target="_blank"><span class="blue-text">ETHBTC Rates</span></a> by TradingView</div>
                            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>
                                {
                                    "symbol": "BITSTAMP:ETHBTC",
                                    "width": "100%",
                                    "colorTheme": "light",
                                    "isTransparent": false,
                                    "locale": "en"
                                }

                            </script>
                        </div>
                        <!-- TradingView Widget END -->

                    </div>
                </div>

                <div class="col-md-12 col-sm-12 col-xs-12">
                    <!-- TradingView Widget BEGIN -->
                    <div class="tradingview-widget-container">
                        <div id="tradingview_3cc53"></div>
                        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BITSTAMP-EURUSD/" rel="noopener" target="_blank"><span class="blue-text">EURUSD Chart</span></a> by TradingView</div>
                        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                        <script type="text/javascript">
                            new TradingView.widget({
                                "width": "100%",
                                "height": 610,
                                "symbol": "BITSTAMP:EURUSD",
                                "interval": "D",
                                "timezone": "Etc/UTC",
                                "theme": "Light",
                                "style": "1",
                                "locale": "en",
                                "toolbar_bg": "#f1f3f6",
                                "enable_publishing": false,
                                "allow_symbol_change": true,
                                "container_id": "tradingview_3cc53"
                            });

                        </script>
                    </div>
                    <!-- TradingView Widget END -->
                </div>

                <!-- TradingView Widget BEGIN -->

                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="tradingview-widget-container">
                        <div class="tradingview-widget-container__widget"></div>
                        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"><span class="blue-text">Cryptocurrency Markets</span></a> by TradingView</div>
                        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
                            {
                                "width": "100%",
                                "height": 490,
                                "defaultColumn": "overview",
                                "screener_type": "crypto_mkt",
                                "displayCurrency": "USD",
                                "colorTheme": "light",
                                "locale": "en"
                            }

                        </script>
                    </div>
                    <!-- TradingView Widget END -->
                </div>


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
