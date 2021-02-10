<!DOCTYPE html>
<html>
<head>
    <title>SystemInfo</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h1>Server & File Info</h1>

        <?php 
            $server = [
                'HostServer Name' => $_SERVER['SERVER_NAME'],
                'Host Header' => $_SERVER['HTTP_HOST'],
                'Server Software' => $_SERVER['SERVER_SOFTWARE'],
                'Document Root' => $_SERVER['DOCUMENT_ROOT'],
                'Current Page' => $_SERVER['PHP_SELF'],
                'Script Name' => $_SERVER['SCRIPT_NAME'],
                'Absolute Path' => $_SERVER['SCRIPT_FILENAME']
            ];
        ?>

        <?php if($server): ?>
            <ul class="list-group">
                <?php foreach($server as $key => $value): ?>
                    <li class="list-group-item">
                        <strong><?php echo $key; ?>: </strong>
                        <?php echo $value; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
        
    </div>
</body>
</html>

