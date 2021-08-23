$("#callbackForm").on('submit', function (e) {

    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "form.php",
      data: $("#callbackForm").serialize(),
        success: function () {
            alert("Заявка успешно отправлена");
            $('#callbackForm')[0].reset();
        },
        error: function () {
            alert("Ошибка отправки формы, пожалуйста, попробуйте еще раз");
      }
    });
});
