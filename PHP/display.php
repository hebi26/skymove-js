<?php
include('../PHP/conec.php');

//-----------------Requete pour lire l'ensemble des articles---------------//

$req = $pdo->query('SELECT * FROM covoit ORDER BY id DESC');
while ($data = $req->fetch()){
    ?>

    <div class="uniqcovoit">
        <p><?php echo htmlspecialchars($data->depart); ?> => <?php echo htmlspecialchars($data->arrivee); ?> </p>
        <p>Départ le <?php echo ($data->date); ?></p>
        <p><?php echo ($data->nbdispo); ?> places disponibles</p>
    </div>

    <?php
}
//print_r($pdo->errorInfo());
?>


