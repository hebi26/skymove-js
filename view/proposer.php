<?php
include('header.php');
include('../PHP/conec.php');
?>
<!-- ==================================VUE PROPOSER ========================================-->

<div class="proposer-content">

    <!-- ENSEMBLE FORMULAIRE -->

    <div class="create-form">

        <form id="create" method="post" action="../PHP/create.php">

            <!-- BLOC DETAILS -->

            <div class="form-details">
                <label for="date">Date de départ :</label><br>
                <input id="date" name="date" type="date" required="required"><br>

                <label for="nbdispo">Places disponibles :</label><br>
                <input id="nbdispo" name="nbdispo" type="number" value="0" min="1" max="99" required="required"><br>

                <label for="type">Type de covoiturage :</label><br>
                <select id="type" name="type">
                    <option selected>Type</option>
                    <option value="atterro_vers_deco">Attero vers Déco</option>
                    <option value="longue_distance">Longue distance</option>
                </select><br>
            </div>

            <!-- BLOC LIEUX -->

            <div class="form-where">

            </div>

            <!-- BLOC USERS -->

            <div class="form-users">
                <label for="nom">Nom :</label><br>
                <input id="nom" name="nom" type="text" required="required"><br>

                <label for="mail">Email :</label><br>
                <input id="mail" name="mail" type="email" required="required"><br>

                <label for="tel">Tel :</label><br>
                <input id="tel" name="tel" type="text" required="required"><br>

            </div>

            <input id="validate-form" type="submit" value="Valider">

        </form>
    </div>

</div>

</body>
</html>