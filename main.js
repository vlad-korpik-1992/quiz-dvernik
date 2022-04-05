document.addEventListener("DOMContentLoaded", function(){
    $('.startquiz__btn').click(function (e) {
		e.preventDefault();
        $( "#question_1" ).toggleClass('open');
	});
  $('.form__group__box__items_viber').on('click', function(e) {
    e.preventDefault();
    $( ".form__group__box__items_viber" ).toggleClass('form__group__box__items_choice');
  });
  $('.form__group__box__items_telegram').on('click', function(e) {
    e.preventDefault();
    $( ".form__group__box__items_telegram" ).toggleClass('form__group__box__items_choice');
  });
  $('.form__group__box__items_whatsapp').on('click', function(e) {
    e.preventDefault();
    $( ".form__group__box__items_whatsapp" ).toggleClass('form__group__box__items_choice');
  });
  $('.form__group__box__items_phone').on('click', function(e) {
    e.preventDefault();
    $( ".form__group__box__items_phone" ).toggleClass('form__group__box__items_choice');
  });
  $('.question__btn_back2').click(function (e) {
		e.preventDefault();
        $( "#question_2" ).toggleClass('open');
        $( "#question_1" ).toggleClass('open');
	});
  $('.question__btn_back3').click(function (e) {
		e.preventDefault();
    var backtrue = question1Answer.includes('Межкомнатные');
    if(backtrue === false)
      {
        $( "#question_3" ).toggleClass('open');
        $( "#question_1" ).toggleClass('open');
      }
    if(backtrue === true)
      {
        $( "#question_3" ).toggleClass('open');
        $( "#question_2" ).toggleClass('open');
      }
	});
  $('.question__btn_back4').click(function (e) {
		e.preventDefault();
        $( "#question_4" ).toggleClass('open');
        $( "#question_3" ).toggleClass('open');
	});
  $('.question__btn_back5').click(function (e) {
		e.preventDefault();
        $( "#question_5" ).toggleClass('open');
        $( "#question_4" ).toggleClass('open');
	});
  $('.question__btn_back6').click(function (e) {
		e.preventDefault();
        $( "#question_6" ).toggleClass('open');
        $( "#question_5" ).toggleClass('open');
	});
  $('.question__btn_back7').click(function (e) {
		e.preventDefault();
        $( "#question_7" ).toggleClass('open');
        $( "#question_6" ).toggleClass('open');
	});
  $('.question__btn_back8').click(function (e) {
		e.preventDefault();
        $( "#question_8" ).toggleClass('open');
        $( "#question_7" ).toggleClass('open');
	});
  $('.question__btn_back9').click(function (e) {
		e.preventDefault();
        $( "#question_9" ).toggleClass('open');
        $( "#question_8" ).toggleClass('open');
	});
    let question1Answer = [];
    $('.question__btn_1').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer1[]");
        for (var i= 0; i<checkboxes.length; i++)
        {
            if (checkboxes[i].checked === true)
            {
              question1Answer[i] = checkboxes[i].value;
              if(question1Answer[i] === 'Межкомнатные')
              {
                $( "#question_1" ).toggleClass('open');
                $( "#question_2" ).toggleClass('open');
              }
            }
        }
        var istrue = question1Answer.includes('Межкомнатные');
        if(istrue === false)
        {
          for (var i= 0; i<checkboxes.length; i++)
          {
              if (checkboxes[i].checked === true)
              {
                question1Answer[i] = checkboxes[i].value;
                $( "#question_1" ).removeClass('open');
                $( "#question_3" ).addClass('open');
              }
          }
        }
    });
    let question2Answer = "";
    $('.question__btn_2').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer2");
        for (var i= 0; i<checkboxes.length; i++)
        {   
            if (checkboxes[i].value != '')
            {
              question2Answer = checkboxes[i].value;
                $( "#question_2" ).toggleClass('open');
                $( "#question_3" ).toggleClass('open');
            }
        }    
    });
    let question3Answer = "";
    $('.question__btn_3').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer3");
        for (var i= 0; i<checkboxes.length; i++)
        {
            if (checkboxes[i].checked === true)
            {
              question3Answer = checkboxes[i].value;
                $( "#question_3" ).toggleClass('open');
                $( "#question_4" ).toggleClass('open');
            }
        }
    });
    let question4Answer = "";
    $('.question__btn_4').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer4");
        for (var i= 0; i<checkboxes.length; i++)
          {
            if (checkboxes[i].checked === true)
            {
              question4Answer = checkboxes[i].value;
              $( "#question_4" ).toggleClass('open');
              $( "#question_5" ).toggleClass('open');
            }
        }
    });
    let question5Answer = "";
    $('.question__btn_5').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer5");
        for (var i= 0; i<checkboxes.length; i++)
          {
            if (checkboxes[i].checked === true)
            {
              question5Answer = checkboxes[i].value;
              $( "#question_5" ).toggleClass('open');
              $( "#question_6" ).toggleClass('open');
            }
        }
    });
    let question6Answer = "";
    $('.question__btn_6').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer6[]");
        for (var i= 0; i<checkboxes.length; i++)
          {
            console.log(checkboxes[i].value);
            if (checkboxes[i].checked === true)
            {
              
              question6Answer = checkboxes[i].value;
              $( "#question_6" ).toggleClass('open');
              $( "#question_7" ).toggleClass('open');
            }
        }
    });
    let question7Answer = "";
    $('.question__btn_7').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer7");
        for (var i= 0; i<checkboxes.length; i++)
          {
            if (checkboxes[i].checked === true)
            {
              question7Answer = checkboxes[i].value;
              $( "#question_7" ).toggleClass('open');
              $( "#question_8" ).toggleClass('open');
            }
        }
    });
    let question8Answer = "";
    $('.question__btn_8').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer8");
        for (var i= 0; i<checkboxes.length; i++)
          {
            if (checkboxes[i].checked === true)
            {
              question8Answer = checkboxes[i].value;
              $( "#question_8" ).toggleClass('open');
              $( "#question_9" ).toggleClass('open');
            }
        }
    });
    $('.question__btn_10').on('click', function(e) {
      e.preventDefault();
      $( "#question_10" ).removeClass('open');
  });
    $('#ajax_send').click(function(e) {
      e.preventDefault();
      let name = document.getElementById('nameQuiz').value;
      let phone = document.getElementById('phoneQuiz').value;
      let viber = document.getElementById('Viber').value;
      let telegram = document.getElementById('Telegram').value;
      let whatsapp = document.getElementById('Whatsapp').value;
      let phoneSeparate = document.getElementById('Phone').value;
      if (name === "") {
        document.getElementById('status__error').textContent = "Укажите Ваше имя";
        return false;
      }
      if (phone === "") {
        document.getElementById('status__error').textContent = "Укажите Ваш номер телефона";
        return false;
      } else {
        let re = /^\+375[0-9]{9}$/g;
        if(!re.test(phone)){
            document.getElementById('status__error').textContent = "Укажите номер телефона в формате +375ХХХХХХХХХ";
            return false;
        }
      }
      const formData = {
        'name': name,
        'phone': phone,
        'question1Answer': question1Answer,
        'question2Answer': question2Answer,
        'question3Answer': question3Answer,
        'question4Answer': question4Answer,
        'question5Answer': question5Answer,
        'question6Answer': question6Answer,
        'question7Answer': question7Answer,
        'question8Answer': question8Answer,
        'viber': viber,
        'telegram': telegram,
        'whatsapp': whatsapp,
        'phoneSeparate': phoneSeparate,
      };
      console.log(formData);
      $( "#question_9" ).toggleClass('open');
      $( "#question_10" ).toggleClass('open');
      $.ajax({
        url: 'form.php',
        type: 'POST',
        data: formData,
        success: function() {
            $('#question_1').trigger('reset');
            $('#question_2').trigger('reset');
            $('#question_3').trigger('reset');
            $('#question_4').trigger('reset');
            $('#question_5').trigger('reset');
            $('#question_6').trigger('reset');
            $('#question_7').trigger('reset');
            $('#question_8').trigger('reset');
            $('#question_9').trigger('reset');
            $( "#question_9" ).toggleClass('open');
            $( "#question_10" ).toggleClass('open');
        }
    });
    });
});