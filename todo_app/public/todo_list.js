$(document).ready(function() {

    $('form').on('submit', function() {

        var item = $('form input');

        var input_data = { item: item.val() };

        $.ajax({
            type: 'POST',
            url: '/index',
            data: input_data,
            success: function(data) {
                location.reload();
            }
        });

        return false;

    });

    $('ul.list li button').on('click', function() {

        var item = $(this).text().replace(/ /g, "-");

        $.ajax({
            type: 'DELETE',
            url: '/index/:' + item,
            success: function(data) {
                location.reload();
            }
        });


    });

});