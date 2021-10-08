
$("#callbackForm").on('submit', function (e) {

    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "form.php",
      data: $("#callbackForm").serialize(),
        success: function () {
			$('#callbackForm')[0].reset();
			swal({
				title: "Успешная отправка",
				text: "Спасибо, ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время",
				icon: "success",
				button: "ОК",
				timer: 3000
			  });
        },
        error: function () {
			swal({
				title: "Ошибка",
				text: "К сожалению, при отправке сообщения возникли проблемы. Пожалуйста, воспользуйтесь одним из контактов для связи с нами",
				icon: "error",
				button: "ОК",
			  });
      }
    });
});
