<?php
    $str=file_get_contents("tpl/index.html");
    define("CSS_PATH", "http://erwff");
    echo $str=preg_replace('/\{aa\}/', '{aa}', CSS_PATH);
    file_get_contents("com/com.php",$str);
?>