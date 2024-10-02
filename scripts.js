$(document).ready(function() {
    $('#Openmenu').on('click', function() {
        $('#Menu').toggle();
    });

    $('#Genres').on('click', function() {
        $('#Generos').toggle();
    });

    $('.data_link').on('click', function() {
        let filter = $(this).data('filter');
        $('.w3-tv-items').hide();
        $('.w3-tv-items.' + filter).show();
    });
});
