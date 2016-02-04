$('#clock').countdown('2016/02/12', function(event) {
   $(this).html(event.strftime('%D:%H:%M:%S'));
});