<?php
session_start();
setcookie(session_name(), '', 100);
unset($_SESSION['username']);
unset($_SESSION['id']);
session_unset();
session_destroy();
$_SESSION = array();
header("Location: ../login");
header("Location: ../login");
header("Location: ../login");
?>