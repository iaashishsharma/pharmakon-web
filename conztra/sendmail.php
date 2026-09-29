
<?php
  $name = $_REQUEST['name'] ;
  $phone = $_REQUEST['phone'] ;
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['message'] ;
  mail( " info@pharmakonlifesciences.com", "$name,$phone ",
    $message, "From: $email" );
	  ?>
<script language="JavaScript" type="text/JavaScript">
<!--
function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}
//-->
</script>
<body onLoad="MM_goToURL('parent','thankyou.html');return document.MM_returnValue">

