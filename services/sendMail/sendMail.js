function sendMail() {
  alert("coucu2");

  // Create our XMLHttpRequest object
  var hr = new XMLHttpRequest();
  // Create some variables we need to send to our PHP file
  var url = "mail.php";
  var prenom = document.getElementById("prenomIdFormContact").value;
  var mail = document.getElementById("mailIdFormContact").value;
  var messages = document.getElementById("messageIdFormContact").value;
  var vars = "prenom="+prenom+"&email="+mail+"&messages="+messages;
  hr.open("POST", url, true);
  // Set content type header information for sending url encoded variables in the request
  hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // Access the onreadystatechange event for the XMLHttpRequest object
  hr.onreadystatechange = function() {
    if(hr.readyState == 4 && hr.status == 200) {
      var return_data = hr.responseText;
    // document.getElementById("status").innerHTML = return_data;
    console.log(return_data)
    }
  }
  // Send the data to PHP now... and wait for response to update the status div
  hr.send(vars); // Actually execute the request
  // document.getElementById("status").innerHTML = "processing...";
}
