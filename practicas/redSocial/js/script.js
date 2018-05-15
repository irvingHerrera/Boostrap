$(function() {
    var boton = $("#btn-menu");
    var fondo = $("#fondo-enlance");

    boton.on('click', function(e) {
        fondo.show();
        fondo.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });

    fondo.on('click', function(e) {
        fondo.hide();
        fondo.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });

}())