$(document).ready(function () {
  $("#booking-form").submit(function (event) {
    event.preventDefault();


    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var movieId = $("#movieSelect").val();
    var datetimeValue = $("#datetime").val();

    if (!name || !email || !phone || !movieId || !datetimeValue) {
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }

    var selectedDate = new Date(datetimeValue);
    var currentDate = new Date();

    if (selectedDate < currentDate) {
      alert("Выберите будущую дату и время.");
      return;
    }

    var selectedTime = selectedDate.getHours();
    if (selectedTime < 10 || selectedTime >= 23) {
      alert("Выберите время с 10:00 до 23:00.");
      return;
    }

    var phonePattern = /^\+7\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Пожалуйста, введите телефон в формате +7 (XXX) XXX-XX-XX, где X - цифры.");
      return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Пожалуйста, введите корректный адрес электронной почты.");
      return;
    }

    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#movieSelect").val("");
    $("#datetime").val("");

    alert("Билет забронирован успешно!");
  });
});

$('#trailerModal').on('hidden.bs.modal', function (e) {
  var iframe = $(this).find('iframe');
  var src = iframe.attr('src');
  iframe.attr('src', '');
  iframe.attr('src', src);
});

function loadTrailer(movieTrailer) {
  var iframe = document.getElementById('trailerIframe');
  switch (movieTrailer) {
    case 'movie1Trailer':
      iframe.src = 'https://www.youtube.com/embed/tdBdkxwQY-Q';
      break;
    case 'movie2Trailer':
      iframe.src = 'https://www.youtube.com/embed/I3smeRr8PGM';
      break;
    case 'movie3Trailer':
      iframe.src = 'https://www.youtube.com/embed/5ct5symaQQ0';
      break;
    case 'movie4Trailer':
      iframe.src = 'https://www.youtube.com/embed/2FXi7W0jRkE';
      break;
  }
}

$(document).ready(function () {
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var form = $(this);
    var inputs = form.find("input, textarea");
    var valid = true;

    inputs.each(function () {
      if ($(this).val() === "") {
        valid = false;
        return false;
      }
    });

    if (!valid) {
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }

    var phoneInput = form.find("#phone");
    var phonePattern = /^\+7\d{10}$/;

    if (!phonePattern.test(phoneInput.val())) {
      alert("Пожалуйста, введите телефон в формате +7 (XXX) XXX-XX-XX, где X - цифры.");
      return;
    }

    var emailInput = form.find("#email");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.val())) {
      alert("Пожалуйста, введите корректный адрес электронной почты.");
      return;
    }

    alert("Форма отправлена успешно!");
    form[0].reset();
  });
});
