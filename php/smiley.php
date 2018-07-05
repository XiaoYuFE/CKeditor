<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');
$arr = array(
    array("type" => 1, "title" => "默认表情", "list" => array("./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif", "./images/demo/01.gif")),
    array("type" => 2, "title" => "小鱼", "list" => array("../images/demo/02.gif", "../images/demo/02.gif", "../images/demo/02.gif")),
    array("type" => 3, "title" => "兔斯基", "list" => array("../images/demo/03.gif", "../images/demo/03.gif", "../images/demo/03.gif")),
    array("type" => 4, "title" => "洋葱头", "list" => array("../images/demo/04.gif", "../images/demo/04.gif", "../images/demo/04.gif")),
    array("type" => 5, "title" => "悠嘻猴", "list" => array("../images/demo/05.gif", "../images/demo/05.gif", "../images/demo/05.gif")),
);

echo json_encode($arr);
?>