document.addEventListener("DOMContentLoaded", function(){
    $('.startquiz__btn').click(function (e) {
		e.preventDefault();
        $( "#question_1" ).toggleClass('open');
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
              else
              {
                $( "#question_1" ).toggleClass('open');
                $( "#question_3" ).toggleClass('open');  
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
    let question9Answer = "";
    $('.question__btn_9').on('click', function(e) {
        e.preventDefault();
        var checkboxes = document.getElementsByName("answer9");
        for (var i= 0; i<checkboxes.length; i++)
          {
            if (checkboxes[i].checked === true)
            {
              question9Answer = checkboxes[i].value;
              $( "#question_9" ).toggleClass('open');
              $( "#question_10" ).toggleClass('open');
            }
        }
    });
    let forms = $('.formSendQiuz');
      let validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            let name = document.getElementById('nameQuiz').value;
            let phone = document.getElementById('phoneQuiz').value;
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
                'question9Answer': question9Answer,
              };
              event.preventDefault();
              console.log(formData);
                  $.ajax({
                      url: 'form.php',
                      type: 'POST',
                      data: formData,
                      success: function() {
                          $( "#question_10" ).toggleClass('open');
                          $('#question_1').trigger('reset');
                          $('#question_2').trigger('reset');
                          $('#question_3').trigger('reset');
                          $('#question_4').trigger('reset');
                          $('#question_5').trigger('reset');
                          $('#question_6').trigger('reset');
                          $('#question_7').trigger('reset');
                          $('#question_8').trigger('reset');
                          $('#question_9').trigger('reset');
                          $('#question_10').trigger('reset');
                      }
                  });
              });
      });
});