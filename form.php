<?php
/*получаем значения полей из формы*/
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$question = $_POST['user_question'];

/*функция для создания запроса на сервер Telegram */
function parser($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    if($result == false){
      echo "Ошибка отправки запроса: " . curl_error($curl);
      return false;
    }
    else{
      return true;
    }
}

/*собираем сообщение*/
$message .= "<b>Новая заявка yaWeb</b>";
$message .= '%0D%0AИмя пользователя:  '.$name;
$message .= "%0D%0AТелефон пользователя:  ".$phone;
$message .= "%0D%0AСообщение пользователя:  ".$question;

/*токен который выдаётся при регистрации бота */
$token = "1843276190:AAGqa-QUATNP5DXPjgbruGifMnTP0oZNrX0";
/*идентификатор группы*/
$chat_id = "301082450";
/*делаем запрос и отправляем сообщение*/
parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}");
?>
