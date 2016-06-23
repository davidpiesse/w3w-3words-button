//require jQuery & HTML5 navigator functionality
$('button').on('click', function (e) {
    var t = $('span');
    t.text('Loading...');
    
    navigator.geolocation.getCurrentPosition(function (location) {
        data = {
            'key': 'insertAPIkey',
            'coords':	location.coords.latitude + ',' + location.coords.longitude
        };
        $.post('https://api.what3words.com/v2/reverse', data, function(response) {
            t.text(response.words);
        });
    });  
});
