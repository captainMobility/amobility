<?php
  
  $destinataire = 'e.ndjawe@gmail.com';
  // Pour les champs $expediteur / $copie / $destinataire, séparer par une virgule s'il y a plusieurs adresses
  $expediteur = 'contact@aria-mobility.fr';
  // $objet = $_POST['subject'];
  $headers  = 'MIME-Version: 1.0' . "\n"; // Version MIME
  $headers .= 'Content-type: text/html; charset=ISO-8859-1'."\n"; // l'en-tete Content-type pour le format HTML
  $headers .= 'Reply-To: '.$expediteur."\n"; // Mail de reponse
  $headers .= 'From: "Nom_de_expediteur"<'.$expediteur.'>'."\n"; // Expediteur
  $headers .= 'Delivered-to: '.$destinataire."\n"; // Destinataire    
  $message = '<div style="width: 100%; text-align: center; font-weight: bold"> Bonjour'.$_POST['name'].'! \n'.$_POST['message'].'</div>';
 
       
                 if(mail($to, $subject, $message, $headers))
                  {
                    ?>
 
                      <script languag="javascript" >alert("Votre message a bien été envoyé ");</script>
 
                      <?php
                  }
                  else // Non envoyé
                  {
                    ?>
                      <script languag="javascript">alert("Votre message n'a pas pu être envoyé");</script>
 
 
                       <?php
                 }
                header('Location: monformulaire.php');
 
?>