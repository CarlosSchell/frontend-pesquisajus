<?php
    $server = "177.52.181.86";
    $user = "pesquisa_work";
    $password = "S53xbw&nqdkr/c+m8-9](sWz6KCh^";
    $database = "pesquisa_tjrs";

    $conn = new mysqli($server, $user, $password, $database);
    $conn->set_charset('utf8');

    if ($conn->connect_errno) {
        echo "Nao conseguiu conectar ao banco de dados ! (" . $conn->connect_errno . ") " . $conn->connect_error;
    }
    /*echo $conn->host_info . "\n";*/
?>
