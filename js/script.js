$('#clock').countdown('2016/02/03', function(event) {
   $(this).html(event.strftime('%D:%H:%M:%S'));
});