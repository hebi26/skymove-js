<?php
//-------------------- Connexion a la base de donnée-----------------//

try{
    $pdo = new PDO('mysql:host=localhost;dbname=skymove','root','root');
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);
}
catch(PDOException $e){
    echo 'Connexion impossible';
}