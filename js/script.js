$(document).ready(function() {

    $('#type').on('change', function () {
        selectType();
    });

    $('.create').submit(function(e){

        e.preventDefault();

        var date= $('#date').val();
        var nbdispo= $('#nbdispo').val();
        var type= $('#type').val();
        var nom= $('#nom').val();
        var mail= $('#mail').val();
        var tel= $('#tel').val();
        var atterro= $('#atterro').val();
        var deco= $('#deco').val();
        var autocomplete= $('#autocomplete-google-map').val();

        alert('date: '+ date + ' | places disponibles : ' + nbdispo + ' | type de covoit : ' + type + ' | identité : ' + nom + ' | email : ' + mail +
              ' | tel : ' + tel + ' | depart : ' + atterro + ' ' + autocomplete + ' | arrivée : ' + deco);

    });

    //--------------FUNCTION SELECTION TYPE FORM------------------------------------//

    function selectType(){
        var type = $("#type").val();
        if(type ==="atterro_vers_deco"){
            displayform1();
        }
        else if(type ==="longue_distance"){
            displayform2();
        }
    }

    //--------------FUNCTION CREATION FORMULAIRE ATTERRO -> DECO ------------------------------------//

    function displayform1(){

        $(".form-where").html(
            '                <p>Départ :</p>\n'+
            '                <select class="departement" id="departement-depart">\n' +
            '                    <option selected>Departement</option>\n' +
            '                </select><br>\n' +
            '                <select id="atterro">\n' +
            '                    <option selected>Atterro</option>\n' +
            '                </select><br>\n' +
            '\n' +
            '                <p>Arrivée :</p>\n' +
            '                <select id="deco">\n' +
            '                    <option selected>Deco</option>\n' +
            '                </select><br><br>'
        );
        checkdep();
    }

    //--------------FUNCTION CREATION FORMULAIRE LONGUE DISTANCE------------------------------------//

    function displayform2(){
        $('.form-where').html(

            '                <label for="autocomplete-google-map">Départ : </label><br>\n'+
            '                <input type="text" id="autocomplete-google-map" placeholder="ex: Nîmes"><br>\n' +
            '                <p>Arrivée :</p>\n' +
            '                <select class="departement" id="departement-arrive">\n' +
            '                    <option selected>Departement</option>\n' +
            '                </select><br>\n' +
            '                <select id="deco">\n' +
            '                    <option selected>Deco</option>\n' +
            '                </select><br><br>'
        );
        checkdep();
    }

    //--------------FUNCTION TRI ALHABETIQUE TABLEAU------------------------------------//

    Array.prototype.localeSort = function localeSort() {
        return this.sort(function (a, b) {
            return a.localeCompare(b);
        });
    };

//----------------------FUNCTION TRI DEPARTEMENT ------------------------------------------//

    function checkdep(){

        $.getJSON('../lib/sites.json', function (data) {

            var departementTab = [];
            var uniqdepartementTab = [];

            $.each(data, function(index, x){                        //on parcours et insere dans tableau results
                departementTab.push(x.cp.substr(0,2));
            });

            $.each(departementTab, function(i, el){                                //pour chaque entrée du tableau result
                if($.inArray(el, uniqdepartementTab) === -1) {
                    uniqdepartementTab.push(el);   //on push un valeur uniq dans uniqresult
                }
            });

            var departement = "";
            uniqdepartementTab.localeSort();                                        //on appele function tri pour notre tableau

            for (var i = 0; i < uniqdepartementTab.length; i++) {                           //on boucle sur notre tableau uniqresult
                departement += '<option value="' + uniqdepartementTab[i] + '">' + uniqdepartementTab[i] + '</option>'
            }

            $(".departement").append(departement);   //pour chaque entrée on rempli les options

        });

        $('.departement').on('change', function(){
            var attero = "";
            var deco = "";
            trisites();
        })
    }

    //--------------------------------TRI SITES PAR DEPARTEMENT-----------------------------//

    function trisites(){

        var currentdep=$('.departement').val();
        // currentdep= parseInt(currentdep);

        $.getJSON('../lib/sites.json', function (data) {

            var atterrotab = [];
            var decotab = [];

            $.each(data, function (index, x) {
                if (x.site_sous_type === "Atterrissage" && currentdep == x.cp.substr(0,2)) {
                    atterrotab.push(x.nom + x.sous_nom);
                }
                else if (x.site_sous_type === "Décollage" && currentdep == x.cp.substr(0,2)) {
                    decotab.push(x.nom + x.sous_nom);
                }
            });

            var atterro = "";
            var deco = "";

            atterrotab.localeSort();
            decotab.localeSort();

            for (var j = 0; j < atterrotab.length; j++) {
                    atterro += '<option value="' + atterrotab[j] + '">' + atterrotab[j] + '</option>'
            }

            $("#atterro").html(atterro);

            for (var k = 0; k < decotab.length; k++) {
                deco += '<option value="' + decotab[k] + '">' + decotab[k] + '</option>'
            }
            $("#deco").html(deco);
        });
    }
});