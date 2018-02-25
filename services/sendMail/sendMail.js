$('#sendMailIdButton').click(function () {
  var prenom = document.getElementById("prenomIdFormContact").value;
  var mail = document.getElementById("mailIdFormContact").value;
  var messages = document.getElementById("messageIdFormContact").value;
  console.log(`prenom=${prenom} - mail=${mail} - messages=${messages}`)
  /*
   * 'post_receiver.php' - where you will pass the form data
   * $(this).serialize() - to easily read form data
   * function(data){... - data contains the response from post_receiver.php
   */
  $.post('./services/sendMail/mail.php', { prenom: prenom, email: mail, messages: messages }, function (data) {
    // show the response
    console.log('DONE !!!!');
  }).fail(function () {
    // just in case posting your form failed
    alert("Posting failed.");
  });
  // to prevent refreshing the whole page page
  return false;
});

