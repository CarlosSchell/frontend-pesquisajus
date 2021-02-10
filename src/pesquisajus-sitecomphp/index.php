<?php
$publicacoes = '';
if (isset($_POST['submit'])) {
    $publicacoes = '';
    if (filter_has_var(INPUT_POST, 'submit')) {
        // echo 'Submitted';
        $nroprocesso = $_POST['nro-processo'];
        $nroprocesso = htmlentities($nroprocesso);
        if (!empty($nroprocesso)) {
            require('config/db.php');
            $query = "SELECT * FROM publicacoes WHERE processo=" . "'" . $nroprocesso . "'" . " ORDER BY processo ASC, ano DESC, mes DESC, dia DESC ";
            // echo $query;
            $result = mysqli_query($conn, $query);
            $publicacoes = mysqli_fetch_all($result, MYSQLI_ASSOC);
            // var_dump($publicacoes);
            mysqli_free_result($result);
            mysqli_close($conn);
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>pesquisajus - Consulte o seu processo no TJRS</title>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
</head>

<body>

    <header class="cabecalho">
        <h1 class="cabecalho-titulo">pesquisajus</h1>
        <div class="cabecalho-nav">
            <a class="cabecalho-nav-login">Login</a>
        </div>
    </header>

    <main>
        <section>
            <div class="titulo-tribunal">
                <p>Consulta ao Diário Oficial do TJRS - Primeiro Grau - Capital e Interior</p>
                <p><br></p>
                <div class="explica-nro-processo">
                    <p>Digite o numero do processo (CNJ): ex. 1234567-12.2020.8.21.0100 (com 20 dígitos)</p>
                </div>
            </div>
            <div class="busca-processo" data-toggle="tooltip" data-placement="bottom" data-tooltip="Entre com os 20 dígitos do processo. Ex.: 0018410-14.2020.8.26.0100" class="tooltip">
                <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                    <input type="text" name="nro-processo" class="campo-processo" maxlength="25" size="20" name="nro-processo" type="text" placeholder="ex 0000000-00.0000.0.00.0000" aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus="" role="combobox" spellcheck="false" title="Ok" value="<?php echo isset($_POST['nro-processo']) ? $nroprocesso : ''; ?>" aria-label="Número do processo. Informe os 20 dígitos do número do processo.">
                    </input>
                    <button type="submit" name="submit" class="botao-processo">Ok</button>
                </form>
            </div>

            <div class="erro-busca-processo">
                <span id="id-erro-ajax" class="invisivel">Erro ao buscar o processo</span>
            </div>

        </section>
    </main>

    <div class="formato-publicacao">
        <?php if ($publicacoes) : ?>
            <?php foreach ($publicacoes as $publicacao) : ?>

                <div class='item-01-lista-publicacao'>
                    <?php echo 'Publicação Diario Oficial TJ' . $publicacao['estado'] . '  -  '
                        . $publicacao['grau'] . '  -  Edição: '
                        . $publicacao['diario'] . '  -   Data: '
                        . $publicacao['dia'] . '/'
                        . $publicacao['mes'] . '/'
                        . $publicacao['ano'];
                    ?>
                </div>

                <div class='item-02-lista-publicacao'>
                    <?php echo 'Processo : '
                        . $publicacao['processo'] . '  -  CIDADE DE '
                        . $publicacao['local'] . '  -  '
                        . $publicacao['forum'] . ' - '
                        . $publicacao['vara'];
                    ?>
                </div>

                <div class='item-03-lista-publicacao'>
                    <?php echo $publicacao['decisao']; ?>
                </div>

                <div class='separador-item-lista-publicacao'>
                    <p>-</p>
                </div>

            <?php endforeach; ?>
            <footer class="formato-rodape">Final da Consulta</footer>
        <?php else : ?>
            <!--<h3>Não foram encontrados registros para este processo</h3>-->
        <?php endif; ?>
    </div>

</html>