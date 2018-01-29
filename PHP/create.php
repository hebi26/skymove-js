<?php
include('conec.php');

$date=$_POST['date'];
$nbdispo=$_POST['nbdispo'];
$type=$_POST['type'];
$nom=$_POST['nom'];
$mail=$_POST['mail'];
$tel=$_POST['tel'];

if(!empty($_POST['atterro'])){
    $depart=$_POST['atterro'];
}
else{
    $depart=$_POST['autocomplete-google-map'];
}
$arrivee=$_POST['deco'];

// ---------------Requete pour injecter dans la table------------------------//

$req = $pdo->prepare("INSERT INTO covoit (date, nbdispo, type, nom, mail, tel, depart, arrivee)
      VALUES (:date, :nbdispo, :type, :nom, :mail, :tel, :depart, :arrivee)");

$req->execute(array(
    'date' => $date,
    'nbdispo' => $nbdispo,
    'type' => $type,
    'nom' => $nom,
    'mail' => $mail,
    'tel' => $tel,
    'depart' => $depart,
    'arrivee' => $arrivee
));

print_r($pdo->errorInfo());

