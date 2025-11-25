<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Hello php</h2>
   <?php $name = "Ashraful"; echo $name ?>
   <p>
    <?php if (is_string($name)) {
        echo "Name is sring";
   }else{
        echo "Name nota sring";
   }
   ?>
   </p>
   
</body>
</html>

