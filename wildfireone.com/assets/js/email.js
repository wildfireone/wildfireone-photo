


$('#formsubmit').click(function(){
  getEmailDetails();
});


function getEmailDetails()
{
  var from_name = $('#formname').val();
  var reply_to = $('#formemail').val();
  var message_html = $('#formmessage').val();
$('#formname').val("");
$('#formemail').val("");
$('#formmessage').val("");


  console.log(from_name+":"+reply_to+":"+message_html);
  sendEmail(from_name,message_html,reply_to);
}

function sendEmail(from_name, message_html, reply_to)
{
  //emailjs.send("gmail","<YOUR TEMPLATE ID>",{from_name: "James", reply_to: 'test@testing.com', message_html: "Check this out!"});
  emailjs.send("gmail","template_jTVU4kSW",
{from_name: from_name, reply_to: reply_to, message_html: message_html})
.then(
  function(response) {
    toastr.success("Thanks, I'll get back to you asap", 'Message Sent!')
  },
  function(error) {
    toastr.error('There has been a problem seding your message, please tyr again', 'Sorry!')
  }
);
}
