<?php include("../phpscripts/headscript.php");?>
<?php $page = "dashboard"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head id="Head1">
    <meta charset="UTF-8" />
    <title>
        Skip Bank - My Account</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <style type="text/css">
        .ajax__calendar_container {
            z-index: 1000;
        }

    </style>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style type="text/css">
        .pyicons_b {
            width: 31px;
            height: 22px;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            position: relative;
        }

        .pyicons_b.icon_b-bell-notification__newb {
            background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyM3B4IiB2aWV3Qm94PSIwIDAgMjIgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJMZWdhY3ktSFAtKy13ZWJuYXYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTE1LjAwMDAwMCwgLTI2MS4wMDAwMDApIiBmaWxsPSIjMzk5QkRBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0MC4wMDAwMDAsIDI0Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTY3JlZW4tU2hvdC0yMDE5LTAxLTAyLWF0LTE1LjIyLjM3Ij4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ibm90aWZpY2F0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NzQuMDAwMDAwLCAxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljb24vbm90aWZpY2F0aW9ucy1ncmV5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU5MjE5NzA0LDkuMzE1NzE0NDMgQy0wLjI4NzQ4OTEwMiwyLjg4MTE0ODc5IDUuMDc4MjQ3NiwwLjAyODEwODc2ODcgNS4xNDI5ODE2OSwwIEw1LjQyMTA5ODUyLDAuNTE3NjY5ODI0IEw1LjY5NDQyMDIzLDEuMDQ3MDUxNjMgQzUuNTA3NDEwNjQsMS4xNDU0MzIzMyAxLjEzOTA1ODQxLDMuNTAxODg0MSAyLjc0NTQyMjg0LDkuMDExMjAyNzcgTDEuNTkyMTk3MDQsOS4zMTU3MTQ0MyBaIE0yMS4yNTIxNzk2LDguOTk0ODA1OTkgTDIyLjQwNTQwNTQsOS4zMTU3MTQ0MyBDMjQuMjgwMjk2NCwyLjg4MTE0ODc5IDE4LjkxNDU1OTcsMC4wMjgxMDg3Njg3IDE4Ljg1OTQxNTksMCBMMTguMjk4Mzg3MSwxLjA0NzA1MTYzIEMxOC40ODUzOTY3LDEuMTMzNzIwMzQgMjIuODU2MTQ2NSwzLjQ5MDE3MjEyIDIxLjI0NzM4NDUsOC45OTQ4MDU5OSBMMjEuMjUyMTc5Niw4Ljk5NDgwNTk5IFogTTE0LjY0OTMwMjUsMTguODgyMDY1NCBMMTQuNjQ5MzAyNSwyMC42NTc2MDI2IEMxNC42NDkzMDI1LDIxLjMwNjQ0NjcgMTQuMTg4OTcxMiwyMyAxMi4wODYzMTIxLDIzIEMxMC43MDUzMTgyLDIzIDEwLjAzNjM5OTMsMjIuMzQ2NDcxMSA5LjcxNzUyMzk4LDIxLjc5NjAwNzcgQzkuNTA2MDQ5MzksMjEuNDI5ODk1NiA5LjM4ODQxNjgzLDIxLjAxOTIxNTQgOS4zNzQ2NzMwNiwyMC41OTkwNDI3IEw5LjM3NDY3MzA2LDE4Ljg4MjA2NTQgTDEsMTguODgyMDY1NCBMMS43MzM2NTMwMSwxNy45NDUxMDY0IEM0LjY4MDI1MjgzLDE0LjE2NDQ3NyA0LjcxMzgxODY2LDExLjQ0NDk1MzcgNC43NDI1ODkzNiw5LjA0ODY4MTEzIEM0Ljc2MTc2OTgzLDcuMjU2NzQ3MTIgNC43ODMzNDc4Niw1LjU2NTUzNjIxIDUuOTk2NTEyNjQsMy44MTEwODA1NiBDNy43OTcwNzkzNCwxLjIwNjMzNDY2IDEwLjc5MTYzMDMsMC45MjUyNDY5NyAxMS45OTA0MDk4LDAuOTI1MjQ2OTcgQzEzLjE4OTE4OTIsMC45MjUyNDY5NyAxNi4yMDI5MjA3LDEuMjA2MzM0NjYgMTguMDA1ODg0OSwzLjgxMTA4MDU2IEMxOS4yMTkwNDk3LDUuNTY1NTM2MjEgMTkuMjM4MjMwMiw3LjI1Njc0NzEyIDE5LjI1OTgwODIsOS4wNDg2ODExMyBDMTkuMjg4NTc4OSwxMS40NDQ5NTM3IDE5LjMyMjE0NDcsMTQuMTYyMTM0NiAyMi4yNjYzNDcsMTcuOTQ5NzkxMiBMMjMsMTguODg2NzUwMiBMMTQuNjQ5MzAyNSwxOC44ODIwNjU0IFogTTMuMzgwNzc1OTQsMTcuNzEwODY2NyBMMjAuNjIxNjIxNiwxNy43MTA4NjY3IEMxOC4xMjA5Njc3LDE0LjA4OTUyMDMgMTguMDg5Nzk5NSwxMS4zMjMxNDkgMTguMDYxMDI4OCw5LjA2MjczNTUxIEMxOC4wNDE4NDgzLDcuMzgzMjM2NTggMTguMDIyNjY3OCw1LjkzMDk1MDIgMTcuMDEwODk4LDQuNDY2OTUxODMgQzE1LjUzMTYwNDIsMi4zMjgzNDMwMSAxMy4wMTQxNjc0LDIuMDk2NDQ1NjcgMTIsMi4wOTY0NDU2NyBDMTAuOTg1ODMyNiwyLjA5NjQ0NTY3IDguNDcwNzkzMzcsMi4zMzA2ODU0MSA2Ljk4OTEwMjAxLDQuNDY2OTUxODMgQzUuOTc3MzMyMTcsNS45MzA5NTAyIDUuOTYwNTQ5MjYsNy4zODMyMzY1OCA1LjkzODk3MTIzLDkuMDYyNzM1NTEgQzUuOTEyNTk4MDgsMTEuMzIzMTQ5IDUuODc5MDMyMjYsMTQuMDg5NTIwMyAzLjM3ODM3ODM4LDE3LjcxMDg2NjcgTDMuMzgwNzc1OTQsMTcuNzEwODY2NyBaIE0xMy40NTA1MjMxLDE4Ljg4MjA2NTQgTDEwLjU3MzQ1MjUsMTguODgyMDY1NCBMMTAuNTczNDUyNSwyMC41OTQzNTc5IEMxMC41NzM0NTI1LDIwLjc5NTgwNDEgMTAuNjY5MzU0OCwyMS44MjQxMTY1IDEyLjA4NjMxMjEsMjEuODI0MTE2NSBDMTMuMzMwNjQ1MiwyMS44MjQxMTY1IDEzLjQ0NTcyOCwyMC45MjY5NzgzIDEzLjQ1MDUyMzEsMjAuNjUyOTE3OCBMMTMuNDUwNTIzMSwxOC44ODIwNjU0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
        }

        .pyicons_b.icon_b-question__new {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDI2NC41ODMgMjY0LjU4MyIgc3R5bGU9ImZpbGw6IzM5OWJkYSI+PHBhdGggZD0iTTEzMi4yOTIgMjY0LjU4NGMtNTMuNTA3IDAtMTAxLjc0NS0zMi4yMzItMTIyLjIyMi04MS42NjZTLjkxMiA3Ni41ODMgMzguNzQ3IDM4Ljc0OHM5NC43MzYtNDkuMTUzIDE0NC4xNy0yOC42NzcgODEuNjY2IDY4LjcxNSA4MS42NjYgMTIyLjIyMmMtLjE0NiA3My4wMDItNTkuMjkgMTMyLjE0Ni0xMzIuMjkyIDEzMi4yOTJ6bTAtMjUxLjM1NEM2Ni41MzUgMTMuMjMgMTMuMjMgNjYuNTM1IDEzLjIzIDEzMi4yOTJzNTMuMzA2IDExOS4wNjIgMTE5LjA2MyAxMTkuMDYzIDExOS4wNjMtNTMuMzA2IDExOS4wNjMtMTE5LjA2MkMyNTEuMjEgNjYuNTk2IDE5Ny45ODggMTMuMzc1IDEzMi4yOTIgMTMuMjN6bS0xMy4yMyAxNTIuMTM1di01LjI5MmE0My45MiA0My45MiAwIDAgMSAzLjQ0LTE4Ljc4NWMzLjI3LTYuMTQ2IDcuNzczLTExLjU1IDEzLjIzLTE1Ljg3NXExMy40OTQtMTEuMTEyIDE2LjkzMy0xNi45MzNhMjUuOTMgMjUuOTMgMCAwIDAgMy40NC0xMy43NThjLjM4NS01LjktMS45NTUtMTEuNjUzLTYuMzUtMTUuNnEtNi4zNS01LjI5Mi0xOC41Mi01LjI5MmE2Mi45NyA2Mi45NyAwIDAgMC0xNS4wODEgMS44NTJjLTUuODc0IDEuNTY0LTExLjU1NCAzLjc4My0xNi45MzMgNi42MTVsLTUuODItMTMuMjNhODIuNTUgODIuNTUgMCAwIDEgMzguODk0LTEwLjA1NHExOC43ODUgMCAyOS4xMDQgOS4yNiAxMC4zMiA5LjI2IDEwLjU4MyAyNi4xOTRjLjEgNC4zMDgtLjUxNiA4LjYwMy0xLjg1MiAxMi43YTM3LjA0IDM3LjA0IDAgMCAxLTUuODIxIDEwLjMxOSAxMzYuMjYgMTM2LjI2IDAgMCAxLTE2LjE0IDE1LjYxIDYwLjU5IDYwLjU5IDAgMCAwLTEzLjIyOSAxNC4wMjMgMjkuOSAyOS45IDAgMCAwLTMuMTc1IDE1LjA4MXYzLjE3NXpNMTE0LjMgMTk0LjQ3cTAtMTMuMjMgMTEuNjQyLTEzLjIzYzMuMzYtLjI0MiA2LjY1NCAxLjAxOCA4Ljk5NiAzLjQ0YTE0LjU1IDE0LjU1IDAgMCAxIDMuMTc1IDEwLjA1NGMuMjIgMy41NDgtLjkxNCA3LjA0Ny0zLjE3NSA5LjgtMi4yNiAyLjM4LTUuNDU2IDMuNjM4LTguNzMgMy40NC0zLjEzLjA5Ni02LjE3Mi0xLjA0NC04LjQ2Ny0zLjE3NS0yLjQ3My0yLjc0LTMuNzE2LTYuMzczLTMuNDQtMTAuMDU0eiIvPjwvc3ZnPg==);
        }

        .red-dot {
            border-radius: 100%;
            position: absolute;
            background-color: #ff4800;
            top: -6px;
            left: 15px;
            padding: 3px;
            min-width: 14px;
            text-align: center;
            height: 14px;
            line-height: 14px;
        }

        .two-chars {
            width: 16px;
        }

        .three-chars {
            border-radius: 35%;
            width: 20px;
        }

        .msg-count {
            display: block;
            font-size: 12px;
            color: #ffffff;
            font-family: RobotoCondensed-Bold, Arial, sans-serif;
        }

        .ltrdir .Announcements {
            text-align: right !important;
            padding: 10px 0px !important;
        }

        .ltrdir .TimePannel {
            border-right: none !important;
        }

        .rtldir .Announcements {
            text-align: left !important;
            padding: 10px 0px !important;
        }

        .rtldir .TimePannel {
            border-left: none !important;
        }

        @media screen and (max-width: 1024px) {
            #LeftContent {
                border: none !important;
            }
        }

        .WelcomeMessageContainer,
        #PageContainer,
        .RightContentTextArea {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
            border-radius: 8px;
            border: 1px solid #c7c7c7 !important;
        }

        .-bell-mobile-wrap {
            float: right !important;
        }

        .ltrdir-bell-mobile-wrap {
            float: right !important;
        }

        .rtldir-bell-mobile-wrap {
            float: left !important;
        }

        #messagesMobileOnly {
            width: auto !important;
            padding-top: 3px !important;
        }

        #MobIconBell1 {
            width: 31px !important;
            height: 22px !important;
        }

        #MobIconBell1:before {
            font-size: 18px !important;
        }

        .menu-open form:not([action*="NewPassword"]):not([action*="Login"]) #NavigationBar .mobile-red-dot {
            border-radius: 100% !important;
            position: absolute !important;
            background-color: #ff4800;
            padding: 3px !important;
            text-align: center !important;
            width: 14px !important;
            height: 14px !important;
            line-height: 14px !important;
        }

        .menu-open form:not([action*="NewPassword"]):not([action*="Login"]) #NavigationBar .mobile-red-dot .msg-count {
            line-height: 14px !important;
            text-align: center !important;
        }

        .menu-open form:not([action*="NewPassword"]):not([action*="Login"]) #NavigationBar .two-chars {
            width: 16px !important;
        }

        .menu-open form:not([action*="NewPassword"]):not([action*="Login"]) #NavigationBar .three-chars {
            border-radius: 35% !important;
            width: 23px !important;
            right: 6px !important;
        }

        .menu-open form:not([action*="NewPassword"]):not([action*="Login"]) #NavigationBar .ltrdir-bell-mobile-wrap .mobile-red-dot {
            right: 15px;
            left: unset;
            height: auto;
            top: 3px;
        }

        .menu-open form:not([action*="NewPassword"]):not([action*="Login"]) #NavigationBar .rtldir-bell-mobile-wrap .mobile-red-dot {
            left: 36px;
            right: unset;
            height: auto;
            top: 3px;
        }

    </style>
    <style type="text/css">
        .MainContainer #LeftContent {
            max-width: 960px;
            width: calc(100% - 36px);
            margin: 18px;
        }

        #creditMobileOnly {
            display: none;
        }

        .hide-drop-down {
            display: none;
        }

        .MainContainer #LeftContent .box-wrapper-top {
            margin-bottom: -2px;
        }

        .globalBg .footer {
            background-color: transparent;
        }

        .globalBg .PageFooter {
            background-image: none;
        }

        .globalBg .MainContainer {
            background-color: transparent;
        }

        #LeftContent .box-wrapper-top img {
            width: 100%;
        }

        #LeftContent .box-wrapper-bottom img {
            width: 100%;
        }

        .balances-widget-outlet .balance-card__content main div .balance {
            font-size: 34px !important;
        }

        @media screen and (max-width: 690px) {
            #form2 .menuContainer {
                display: initial;
            }

            .MainContainer #LeftContent {
                width: 100%;
                margin: 0;
            }

            .MainContainer #LeftContent.maDashboard #widgetContainer .myaccount__container__wrapper {
                margin-top: 0 !important;
            }

            .balances-widget-outlet .balance-card__content main div .balance {
                font-size: 24px !important;
            }
        }

        .globalBg {
            background-color: #F1F3F7;
        }

        .MainContainer #LeftContent.maDashboard #widgetContainer.widgetContainer {
            border: none;
        }

        .qMarkTour {
            float: right;
            margin: 6px;
            margin-top: 10px;
            font-size: 10px;
            padding-right: 8px;
            border-right: 1px solid #c9cdd7;
            padding-left: 8px;
            position: relative;
            cursor: pointer;
        }

        .qMarkTour .icon-question__new {
            color: #399bda;
        }

        .rtldir .qMarkTour {
            float: left;
            border-right: none;
            border-left: 1px solid #c9cdd7;
        }

        #NavigationBar #mainmenu>li:first-of-type:after {
            content: none;
        }

        .qMarkTour #tourOptionsDD {
            position: absolute;
            display: none;
            width: 100%;
            min-width: 150px;
            box-shadow: #c9cdd7 0px 0px 3px 1px;
            right: 45px;
            top: 10px;
            background-color: white;
            z-index: 9999;
        }

        .qMarkTour #tourOptionsDD ul li {
            background-color: #fff;
            font-size: 14px;
            color: #636b78;
            cursor: pointer;
            line-height: 28px;
            min-height: 1px;
            min-width: 1px;
            display: block;
        }

        .qMarkTour #tourOptionsDD ul li:hover {
            background: #c4cada;
            color: #636b78;
        }

        .qMarkTour #tourOptionsDD ul li>* {
            padding: 5px 14px;
            display: inline-block;
            width: 100%;
        }

        .qMarkTour #tourOptionsDD ul li>a {
            color: #636b78;
            text-decoration: none;
        }

        body.iosIframe:not(.menu-open) {
            -webkit-overflow-scrolling: auto !important
        }

        .HeaderContainer .mobile-only.toggle-menu {
            z-index: 10;
        }


        @media screen and (max-width: 1024px) {
            .WelcomeArea .WelcomeMessageContainer .Announcements {
                float: right !important;
                margin: 0 5px;
            }

            .WelcomeArea.rtldir .WelcomeMessageContainer .Announcements {
                float: left !important;
                margin: 0 5px;
            }

            .WelcomeArea .WelcomeMessageContainer .qMarkTour {
                float: right !important;
                margin-top: 10px;
            }

            .WelcomeArea.rtldir .WelcomeMessageContainer .qMarkTour {
                float: left !important;
                margin-top: 10px;
            }

            .WelcomeArea.rtldir .WelcomeMessageContainer .TimePannel {
                float: right !important;
            }

            .WelcomeArea.rtldir .qMarkTour #tourOptionsDD {
                left: 45px;
                right: auto;
            }
        }

    </style>
    <meta http-equiv="copyright" content="Copyright 2021 payoneer.com All Rights Reserved." />
    <meta http-equiv="og:image" content="http://www.payoneer.com/img/payoneerLogo.gif" />

    <meta name="application-name" content="Skip" />
    <meta name="msapplication-TileColor" content="#FF4800" />
    <meta name="msapplication-TileImage" content="https://pubs.payoneer.com/Content/Default/img/Favicon/mstile-144x144.png" />
    <meta name="msapplication-config" content="none" />
    <link type="text/css" rel="stylesheet" href="Stylesheets/a_10_80348692.css" />
    <link type="text/css" rel="stylesheet" href="Stylesheets/a_10_633498983.css" />
    <link type="text/css" rel="stylesheet" href="Stylesheets/transactions-style-f8cb1ce9352c1871534e.css" />
    <script type="text/javascript" src="https://pubs.payoneer.com/Content/Common/jquery/1.8.3/jquery.min.js"></script>
    <script type="text/javascript" src="Scripts/a_10_-200637219.js"></script>
    <script type="text/javascript" src="Scripts/a_10_488517883.js"></script>
</head>

<body id="body" onload="mp_onload()" data-theme="avocado">

    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-W27TBLJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>
        var dataLayer = [{
            PID: ' (100014283)',
            LangId: '1',
            account_reflected: 'Yes',
            system_name: 'MyAccountB2B'
        }];
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-W27TBLJ');

    </script>

    <div id="dvSetColor" class="SetColor"></div>

    <form method="post" action="./Widget.aspx?w=Dashboard" onsubmit="javascript:return WebForm_OnSubmit();" id="form2" class="NoOffsetClass">
        <div class="aspNetHidden">
            <input type="hidden" name="rsa_deviceprint" id="rsa_deviceprint" value="" />
            <input type="hidden" name="rsa_devicefso" id="rsa_devicefso" value="" />
            <input type="hidden" name="userPrefs" id="userPrefs" value="" />
            <input type="hidden" name="qaz" id="qaz" value="-1094045428" />
            <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
            <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
            <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPaA8FDzhkOGYxYzVhMmYxOWRjN2St73KAu22CA/PAb7SOFBRlKTbiRw==" />
        </div>


        <div class="aspNetHidden">
            <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="79D2D812" />
        </div>
        <div align="center" class="HeaderContainer">
            <div class="Header">
                <div class="HeaderContent">
                    <div class="mobile-only toggle-menu ">
                        Toggle Menu</div>
                    <div class="NonBrandedLogo" style="display:none">
                        <a class="PayoneerLink" title="" href="https://www.payoneer.com/?langid=1&amp;pid=100014283" target="_blank" id="logoPartner"><img src="../Images/ARK344.png" /></a>
                    </div>
                    <span class="master-localization-container" style="float: right; padding-top: 10px;padding-right: 10px;margin-top:-10px;">
                        <div Payoneer="Localization" class="form-field normal" id="MyLocal">
                            <select name="ctl00$MyLocal" id="MyLocal" class="localizationStyled" onchange="__doPostBack(&#39;ctl00$MyLocal&#39;,$(this).val())">
                                <option title="English" value="1" selected="selected">
                                    English</option>
                                <option title="Russian" value="3">
                                    Русский</option>
                                <option title="Chinese" value="4">
                                    简体中文</option>
                                <option title="Turkish" value="5">
                                    Türkçe</option>
                                <option title="Portuguese" value="6">
                                    Português</option>
                                <option title="Spanish" value="7">
                                    Español</option>
                                <option title="Hungarian" value="8">
                                    Magyar</option>
                                <option title="French" value="9">
                                    Français</option>
                                <option title="Greek" value="11">
                                    ελληνικά</option>
                                <option title="Malay" value="12">
                                    Melayu</option>
                                <option title="German" value="13">
                                    Deutsch</option>
                                <option title="Japanese" value="14">
                                    日本語</option>
                                <option title="Korean" value="15">
                                    한국어</option>
                                <option title="Polish" value="16">
                                    Polski</option>
                                <option title="Chinese_st" value="17">
                                    繁體中文</option>
                                <option title="Danish" value="18">
                                    Dansk</option>
                                <option title="Arabic" value="19">
                                    العربية</option>
                                <option title="Italian" value="20">
                                    Italiano</option>
                                <option title="Vietnamese" value="21">
                                    Tiếng Việt</option>
                                <option title="Ukrainian" value="22">
                                    Українська</option>
                                <option title="Thai" value="24">
                                    ภาษาไทย</option>
                                <option title="Indonesian" value="25">
                                    Bahasa Indonesia</option>
                            </select>
                        </div>
                        <div class="languages-title">
                            Select your language:</div>
                    </span>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
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



function serializer($input){
    $final_output = "0.00";
    if(!empty($input) && $input != '' && is_numeric($input)){
        $input = round($input, 2);
        
        if(count(explode('.', $input)) < 2){
            $final_output = $input . ".00";
            $final_output = tab_split(explode('.', $final_output)[0]) . '.' . explode('.', $final_output)[1];
            
        }elseif(count(explode('.', $input)) > 2){
            $final_output = explode('.', $input)[0] . ".00";
            $final_output = tab_split(explode('.', $final_output)[0]) . '.' . explode('.', $final_output)[1];
            
        }elseif(count(explode('.', $input)) == 2){
            $final_output = $input;
            $final_output = tab_split(explode('.', $final_output)[0]) . '.' . explode('.', $final_output)[1];
            
        }
    }
    return $final_output;
}

?>
        <div align="center" class="menuContainer">
            <div id="NavigationBar" class="NavigationBar">
                <div class="CustomerIdContainerMobile menustyleRight mobile-only" style="color: black;background-color: white;border-top: 1px solid;border-color: black;">
                    <div id="messagesMobileOnly" class="ltrdir-bell-mobile-wrap">
                        <!--
                        <div class="Announcements">
                            <a href="../MainPage/Widget.aspx?w=NotificationsUiApi#/settings/notifications">
                                <span id="MobIconBell1" class="pyicons_b icon_b-bell-notification__newb"><span id="MobRedDot1" class="mobile-red-dot two-chars"><span class="msg-count">13</span></span></span>
                            </a>
                        </div>
-->
                    </div>


                    <span class="BrandedColor" style="width: 40%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                        <?php echo $name;?></span>
                    <span class="CustomerIdLabelMobile" style="display:inline-block;width:30%;">Customer ID</span> <strong style="width:auto"><?php echo $p_id;?></strong>
                </div>
                <div class="menustyleRight no-mobile">
                    <a id="btnSignout" href="../phpscripts/logout.php"><span id="Label28">Sign Out</span></a>
                </div>
                <ul id="mainmenu" class="sf-menu">

                    <li><a href="../dashboard"><span>Dashboard</span></a></li>

                    <li> <a href="#" onclick="return false;"><span>Activity</span></a>
                        <ul>
                            <li><a href='../update_profile/' target='_self'><span>Update Profile</span></a></li>
                            <li><a href='../history/' target='_self'><span>Trade History</span></a></li>
                            <li><a href='../feedback/' target='_self'><span>Send Feedback</span></a></li>

                        </ul>
                    </li>
                    <li> <a href="#" onclick="return false;"><span>Receive</span></a>
                        <ul>
                            <li><a href='../fund?type=savings' target='_self'><span>Savings</span></a></li>
                            <li><a href='../fund?type=investment' target='_self'><span>Investment</span></a></li>
                        </ul>
                    </li>
                    <li> <a href="../pay/"><span> Pay</span></a>
                    </li>
                    <li>
                        <a href="../withdraw/"><span>Withdraw</span></a>
                    </li>
                </ul>
                <ul id="mainmenuright" class="sf-menu sf-menu-right">

                    <li>
                        <a href="#" onclick="return false;"><span>Others</span></a>
                        <ul>
                            <li><a href='../request_card/' target='_self'><span>Request Debit/Credit Cards</span></a></li>
                            <li><a href='../grants-loans/' target='_self'><span>Request Grants/Loans</span></a></li>
                            <li><a href='../benefit_funds/' target='_self'><span>Check Benefit Funds</span></a></li>
                        </ul>
                    </li>
                </ul>
                <div class="menustyleRight mobile-only">
                    <a id="btnSignoutMobile" href="../phpscripts/logout.php"><span id="Label3">Sign Out</span></a>
                </div>
            </div>
            <label id="creditMobileOnly" class="credit-ddl mobile-only">
                <select name="ctl00$ddlAccounts2" onchange="onAccountSelectedChanged();setTimeout(&#39;__doPostBack(\&#39;ctl00$ddlAccounts2\&#39;,\&#39;\&#39;)&#39;, 0)" id="ddlAccounts2" class="TextField hide-drop-down" style="width:200px;">
                    <option selected="selected" value="D4366182289308631">USD Balance</option>
                    <option value="D4366182289308629">EUR Balance</option>
                    <option value="D4366182289308630">GBP Balance</option>
                    <option value="D4366182370258153" style="background-color:red">Payoneer card - XXXX-1544</option>
                    <option value="D4366182391607658" style="background-color:red">Payoneer card - XXXX-3560</option>
                </select> </label>
        </div>

        <div align="center" class="globalBg">
            <div class="MainContainer">
                <div id="WelcomeArea" class="WelcomeArea ltrdir">
                    <div class="WelcomeMessageContainer">
                        <div class="WelcomeMessage equal-height">
                            <span id="txtGreeting"></span> <br />
                            <div style="width: 200px; text-overflow: ellipsis; -o-text-overflow: ellipsis; white-space: nowrap; overflow: hidden; padding: 0px; margin: 0px;">
                                <?php echo $name;?></div>
                            <div class="CustomerIdContainer">
                                <span class="CustomerIdBorder">
                                    <span>Customer ID</span> <strong><?php echo $p_id;?></strong>
                                </span>
                            </div>
                        </div>
                        <select name="ctl00$ddlAccounts" onchange="onAccountSelectedChanged();setTimeout(&#39;__doPostBack(\&#39;ctl00$ddlAccounts\&#39;,\&#39;\&#39;)&#39;, 0)" id="ddlAccounts" class="TextField hide-drop-down" style="width:200px;">
                            <option selected="selected" value="D4366182289308631">USD Balance</option>
                            <option value="D4366182289308629">EUR Balance</option>
                            <option value="D4366182289308630">GBP Balance</option>
                            <option value="D4366182370258153" style="background-color:red">Payoneer card - XXXX-1544</option>
                            <option value="D4366182391607658" style="background-color:red">Payoneer card - XXXX-3560</option>
                        </select>
                        <div class="qMarkTour">
                            <span class="pyicons_b icon_b-question__new"></span>
                            <div id="tourOptionsDD">
                                <ul>
                                    <li><a href="https://payoneer.custhelp.com/app/answers/detail/a_id/31194" target="_blank"><span id="Label1">FAQ</span></a></li>
                                    <li onclick="showTour()"><span id="Label5">Take tour</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="spacer">&nbsp;</div>
                    </div>
                </div>
                <div id="LeftContent" class="maDashboard">
                    <div id="widgetContainer" class="widgetContainer" bis_skin_checked="1">
                        <div class="myaccount" bis_skin_checked="1">
                            <div class="myaccount__container legacy" bis_skin_checked="1">
                                <div class="myaccount__container__outlet" bis_skin_checked="1">
                                    <div class="myaccount__container__wrapper" bis_skin_checked="1">
                                        <div class="dashboard-outlet" bis_skin_checked="1">
                                            <div class="widget-handler dashboard-widget-handler jumbotron-widget--not_visible" bis_skin_checked="1">
                                                <!--                                                <div class="widget-template actions-required-widget" bis_skin_checked="1"></div>-->
                                                <div class="widget-template jumbotron-widget" bis_skin_checked="1">
                                                    <div class="sc-fzoYkl hfPoTr" bis_skin_checked="1"></div>
                                                </div>
                                                <div class="widget-template balances-widget" bis_skin_checked="1">
                                                    <div class="balances-widget-outlet" bis_skin_checked="1">
                                                        <div class="balances-widget-main" bis_skin_checked="1">
                                                            <div class="balances-widget-header" bis_skin_checked="1"><span class="text">Balances</span></div>
                                                            <div class="balances-cards-list-wrapper" bis_skin_checked="1">
                                                                <div class="balances-cards-list" bis_skin_checked="1">
                                                                    <div data-testid="widget-balances-balance-card-0" class="balance-card" bis_skin_checked="1">
                                                                        <div class="active-border" bis_skin_checked="1">
                                                                            <div bis_skin_checked="1"></div>
                                                                        </div>
                                                                        <div class="balance-card__content" bis_skin_checked="1">
                                                                            <header class="balance-card__header" data-testid="widget-balance_blocked-header-0">
                                                                                <!--
                                                                                <div class="inline-dropdown" bis_skin_checked="1">
                                                                                    <div class="inline-dropdown__trigger" bis_skin_checked="1"><span class="inline-dropdown__trigger__value-wrapper"></span><span class="inline-dropdown__trigger__label"><i class="icon-more-actions"></i></span></div>
                                                                                </div>
-->
                                                                            </header>
                                                                            <main class="balance-card__main">
                                                                                <div class="" bis_skin_checked="1">
                                                                                    <p>Savings Balance</p><br>
                                                                                    <div class="balance" data-testid="widget-balance_card-balance-0" bis_skin_checked="1"><?php echo serializer($savings_balance); ?> USD</div>
                                                                                    <div class="card-details" bis_skin_checked="1"><span class="masked-card"></span></div>
                                                                                </div>
                                                                                <!--                                                                                <i class="icon-right-open-big  "></i>-->
                                                                            </main>
                                                                            <div class="snackFooter" bis_skin_checked="1">
                                                                                <div bis_skin_checked="1">
                                                                                    <footer data-testid="widget-balance_balance-card-footer-0" class="balance-card__footer"><a class="myaccount-link" href="../withdraw/"><span>Withdraw <i class="fa fa-angle-right"></i></span></a></footer>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="sep" bis_skin_checked="1"></div>
                                                                    <div data-testid="widget-balances-balance-card-1" class="balance-card" bis_skin_checked="1">
                                                                        <div class="active-border" bis_skin_checked="1">
                                                                            <div bis_skin_checked="1"></div>
                                                                        </div>
                                                                        <div class="balance-card__content" bis_skin_checked="1">
                                                                            <header class="balance-card__header" data-testid="widget-balance_blocked-header-1">
                                                                            </header>
                                                                            <main class="balance-card__main">
                                                                                <div class="" bis_skin_checked="1">
                                                                                    <p>Investment Balance</p><br>
                                                                                    <div class="balance" data-testid="widget-balance_card-balance-1" bis_skin_checked="1"><?php echo serializer($investment_balance); ?> USD</div>
                                                                                    <div class="card-details" bis_skin_checked="1"><span class="masked-card"></span></div>
                                                                                </div>
                                                                                <!--                                                                                <i class="icon-right-open-big  "></i>-->
                                                                            </main>
                                                                            <div class="snackFooter" bis_skin_checked="1">
                                                                                <div bis_skin_checked="1">
                                                                                    <footer data-testid="widget-balance_balance-card-footer-1" class="balance-card__footer"><a class="myaccount-link" href="../withdraw/"><span>Withdraw <i class="fa fa-angle-right"></i></span></a></footer>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="sep" bis_skin_checked="1"></div>
                                                                    <div data-testid="widget-balances-balance-card-2" class="balance-card" bis_skin_checked="1">
                                                                        <div class="active-border" bis_skin_checked="1">
                                                                            <div bis_skin_checked="1"></div>
                                                                        </div>
                                                                        <div class="balance-card__content" bis_skin_checked="1">
                                                                            <header class="balance-card__header" data-testid="widget-balance_blocked-header-2">
                                                                            </header>
                                                                            <main class="balance-card__main">
                                                                                <div class="" bis_skin_checked="1">
                                                                                    <p>Investment Withdrawable Amount</p><br>
                                                                                    <div class="balance" data-testid="widget-balance_card-balance-2" bis_skin_checked="1"><?php echo serializer($user_withdrawable); ?> USD</div>
                                                                                    <div class="card-details" bis_skin_checked="1"><span class="masked-card"></span></div>
                                                                                </div>
                                                                                <!--                                                                                <i class="icon-right-open-big  "></i>-->
                                                                            </main>
                                                                            <div class="snackFooter" bis_skin_checked="1">
                                                                                <div bis_skin_checked="1">
                                                                                    <footer data-testid="widget-balance_balance-card-footer-2" class="balance-card__footer"><a class="myaccount-link" href="../withdraw/"><span>Withdraw <i class="fa fa-angle-right"></i></span></a></footer>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="sc-fzoXWK hnKkAN" bis_skin_checked="1">
                                                                <div class="snackBackground closeSnack" bis_skin_checked="1">
                                                                    <div class="overlay" bis_skin_checked="1"></div>
                                                                    <div class="snack" bis_skin_checked="1"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="LeftContent" class="" bis_skin_checked="1">
                                                    <div id="widgetContainer" class="widgetContainer" bis_skin_checked="1">
                                                        <div class="myaccount" bis_skin_checked="1">
                                                            <div class="myaccount__container legacy" bis_skin_checked="1">
                                                                <div class="myaccount__container__outlet" bis_skin_checked="1">
                                                                    <div class="myaccount__container__wrapper" bis_skin_checked="1">
                                                                        <section id="activity" class="activity page-component activity--legacy">
                                                                            <div class="activity__activity-body--legacy" bis_skin_checked="1">
                                                                                <div class="transactions" bis_skin_checked="1">
                                                                                    <div class="transactions__body" bis_skin_checked="1">
                                                                                        <div class="myaccount-page-title myaccount-page-title--legacy" bis_skin_checked="1">
                                                                                            <div class="myaccount-page-title__wrapper" bis_skin_checked="1">
                                                                                                <div class="myaccount-page-title__start" bis_skin_checked="1"><span class="title">Transactions</span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="transaction-search-new transaction-search-new--legacy" bis_skin_checked="1"></div>
                                                                                        
                                                                                        <div class="transactions__body__tables transactions__body__tables--legacy" bis_skin_checked="1">
                                                                                            <div class="card transactions__body__tables__table-transactions transactions__body__tables__table-transactions--legacy card--open card--active card--no-padding card--shadow" bis_skin_checked="1">
                                                                                                <div class="card__header card__header--collapsable" bis_skin_checked="1"><i class="card__header__expander icon-right-open-big"></i>
                                                                                                    <div class="card__header__title" bis_skin_checked="1">
                                                                                                        <h2>Recent transactions</h2>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="card__content" bis_skin_checked="1">
                                                                                                    <div class="card__body" bis_skin_checked="1">
                                                                                                        <div class="table table--clickable table--show-selection" bis_skin_checked="1">
                                                                                                            <div class="table__actions" bis_skin_checked="1">
                                                                                                                <div class="table__actions__header-text" bis_skin_checked="1"></div>
                                                                                                                
                                                                                                            </div>
                                                                                                            <div class="table-wrapper" bis_skin_checked="1" style="min-width: initial;">
                                                                                                                <table>
                                                                                <colgroup>
                                                                                    <col span="1" class="table__table-col column-date">
                                                                                    <col span="1" class="table__table-col column-activity">
                                                                                    <col span="1" class="table__table-col column-amount">
                                                                                    <col span="1" class="table__table-col column-payout-method">
                                                                                    <col span="1" class="table__table-col column-statement">
                                                                                    <col span="1" class="table__table-col column-action">
                                                                                    <col span="1" class="table__table-col column-status">
                                                                                    <col span="1" class="table__table-col column-date-status-mobile">
                                                                                    <col span="1" class="col--clickable">
                                                                                </colgroup>
                                                                                <thead>
                                                                                    <tr class="table__table-tr">
                                                                                        <th colspan="1" class="table__table-th column-amount">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Date</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Date</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th column-activity">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Description</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Description</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="2" class="table__table-th column-amount">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Comment</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Comment</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
<!--
                                                                                        <th colspan="1" class="table__table-th column-payout-method">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Comment</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Comment</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
-->
<!--
                                                                                        <th colspan="1" class="table__table-th column-statement">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1"></div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th column-action">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Action</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Action</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th column-status">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Status</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Status</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th column-date-status-mobile">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Status</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Status</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th table__table-th--clickable"></th>
-->
                                                                                    </tr>
                                                                                </thead>
                                                            <tbody>
                                                                <?php 
$prods = [];
$sql1 = "SELECT * FROM `$username` ORDER BY id DESC" ;
          if($result = mysqli_query($link1, $sql1)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            $prods[] = $row;
//                   $transactionid = $row["id"];
//            
//               $transaction = $row["transaction"];
//            
//               $amount = $row["amount"];
//               $comment = $row["comment"];
//               $currency = $row["currency"];
//               if($currency == '$'){
//                  $amount = round($amount, 2);
//               }
//            if(strpos(strtolower($transaction), "debit") !== false){
//                $color = "red";
//            }elseif(strpos(strtolower($transaction), "credit") !== false){
//                $color = "green";
//            }else{
//                $color = "blue";
//            }
//               $date = $row["date"];
////            $date = date("F d, Y h:i:s", $date);
//               $status = $row["status"]; 
        }
    }
          }
    $new_prods = [];
    if(!empty($prods) && $prods[0] != ''){
        foreach($prods as $prod){
            $t_time = $prod['date'];
            $t_stamp = strtotime($t_time);
            if((time()-$t_stamp) <= 172800){
               $new_prods[] = $prod; 
            }
        }
    }
                                        
    if(!empty($new_prods) && $new_prods[0] != ''){
        foreach($new_prods as $prod){
            $t_time = $prod['date'];
            $t_transaction = $prod['transaction'];
            $t_amount = $prod['amount'];
            $t_comment = $prod['comment'];
            $t_currency = $prod['currency'];
            $t_status = $prod['status'];
            $t_stamp = strtotime($t_time);
            $t_a = explode(',', $t_time);
            $t_time = implode('', $t_a);
            $t_a = explode(' ', $t_time);
            $color = '';
            if(strpos(strtolower($t_transaction), "debit") !== false){
                $color = "red";
            }elseif(strpos(strtolower($t_transaction), "credit") !== false){
                $color = "green";
            }else{
                $color = "blue";
            }
//            print_r($t_a);
            
            ?>
             <tr class="table__table-tr table__table-tr--data" style="color:<?php echo $color; ?> !important">
                                                                    <td class="table__table-td column-date">
                                                                        <div bis_skin_checked="1">
                                                                            <div bis_skin_checked="1">
                                                                                
                                                                                <div class="activity-date" bis_skin_checked="1"><?php echo $t_a[1] . " " . $t_a[0]; ?></div>
                                                                                <div class="activity-year" bis_skin_checked="1"><?php echo $t_a[2]; ?></div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="table__table-td column-activity">
                                                                        <div bis_skin_checked="1">
                                                                            <div class="activity-description" bis_skin_checked="1"><?php echo $t_transaction; ?><br>
                                                                                <span class="activity-description__status"><?php echo $t_status; ?></span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="table__table-td column-amount">
                                                                        <div bis_skin_checked="1"><span style="font-size:13px"><?php echo $t_comment; ?></span></div>
                                                                    </td>
<!--
                                                                    <td class="table__table-td column-payout-method">
                                                                        <div bis_skin_checked="1">
                                                                            <div bis_skin_checked="1">

                                                                                <div class="payout-method-view" bis_skin_checked="1" style="max-width:200px">
                                                                                    <div class="prefix-view" bis_skin_checked="1" ><?php echo $t_comment; ?></div>
                                                                                    <div class="suffix-view" bis_skin_checked="1"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
-->
                                                                    <td class="table__table-td column-statement">
                                                                        <div bis_skin_checked="1">
                                                                            <div bis_skin_checked="1"></div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="table__table-td column-action">
                                                                        <div bis_skin_checked="1"><span> </span></div>
                                                                    </td>
                                                                    <td class="table__table-td column-status">
                                                                        <div bis_skin_checked="1"><span> Completed</span></div>
                                                                    </td>
                                                                    <td class="table__table-td column-date-status-mobile">
                                                                        <div bis_skin_checked="1"><span>17 Jun 2020<span class="status-span"> - Completed</span></span></div>
                                                                    </td>
                                                                    <td class="table__table-td table__table-td--clickable">
<!--                                                                        <i class="icon-expander"></i>-->
                                                                    </td>
                                                                </tr>                                                   
                                                                
                                                                
                                                                
            <?php
        }
    }else{
        
    }
?>
                                                                
                                                            </tbody>
                                                                                                                </table>
                                                                                                            </div>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </section>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="" bis_skin_checked="1">
                                                                <div class="notification-list" bis_skin_checked="1"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="" bis_skin_checked="1">
                                <div class="notification-list" bis_skin_checked="1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer" id="footer">
                <a href="" target="_blank">
                    <span id="lblFooterAllRights">© 2030 Skip Bank, All Rights Reserved</span></a> 
            </div>
            <div class="PageFooter"></div>
        </div>
        <script type="text/javascript">
            //<![CDATA[
            window.widgetEntryRoute = '/dashboard';
            var wlh = window.location.hash.replace(window.widgetEntryRoute, '').replace('#', '');
            var nwlh = '#' + window.widgetEntryRoute + wlh;
            if (window.widgetEntryRoute.includes('?') && wlh[0] === '?') {
                var nwlh = '#' + window.widgetEntryRoute + '&' + wlh.substring(1);
            } else {
                var nwlh = '#' + window.widgetEntryRoute + wlh;
            }
            window.location.hash = nwlh;
            window.WidgetParameters = {
                referrerSourceId: 1,
                isPostBack: 0
            };
            if (typeof HandleWidgetHashKeys === 'function') {
                HandleWidgetHashKeys();
            } //]]>

        </script>
        <script type="text/javascript">
            /* <![CDATA[ */
            if (top != self) {
                try {
                    if (parent != top && (!top.document || !parent.document || top.document.domain != parent.document.domain)) {
                        throw 1;
                    }
                    var allow = ['payoneer.com', ];
                    var href = document.referrer.toLowerCase();
                    var passOK = false;
                    for (var i = 0; i < allow.length; i++) {
                        if (href.indexOf(allow[i]) >= 0) {
                            passOK = true;
                        }
                    }
                    if (!passOK) {
                        throw 1;
                    }
                } catch (e) {
                    try {
                        window.document.getElementsByTagName('head')[0].innerHTML = '';
                    } catch (e) {
                        /* IE */
                        var htmlEl = document.getElementsByTagName('html')[0];
                        htmlEl.removeChild(document.getElementsByTagName('head')[0]);
                        var el = document.createElement('head');
                        htmlEl.appendChild(el);
                    }
                    window.location = 'https://www.payoneer.com/Oops/ErrorPage.html?err=124';
                }
            } /* ]]> */

        </script>
    </form>
    <link type="text/css" rel="stylesheet" href='Stylesheets/main-style-1cd7169ce6f8fcbce5fd.css' />
    <script type="text/javascript" src='Scripts/runtime-9f32c6e80e34003c8ae8.js'></script>
    <script type="text/javascript" src='Scripts/auth-666057ffc0084fbd582e.js'></script>
    <script type="text/javascript" src='Scripts/core-vendors-8d03bbcc0796f54cb7c9.js'></script>
    <script type="text/javascript" src='Scripts/vendors-7ec0ac209997600b85c4.js'></script>
    <script type="text/javascript" src='Scripts/infra-594c8b1e690aef6d3146.js'></script>
    <script type="text/javascript" src='Scripts/main-db41e6b70ecc4f408c89.js'></script>
</body>

</html>
