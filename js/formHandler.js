
function callhandlerForm() {
	var msg   = $('#callbackForm').serialize();
        $.ajax({
        type: 'POST',
        url: 'form.php',
        data: msg,
        success: function(data) {
            $('#callbackForm').remove();
            alert(data);
        },
        error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });
}
