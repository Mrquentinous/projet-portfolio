<script setup>
function sendmessage(){
  const firstName = document.getElementById('first-name').value.trim()
    const lastName = document.getElementById('last-name').value.trim()
    const message = document.getElementById('message').value.trim()
  if (firstName == "" || lastName == "" || message == ""){
            (alert ("veuiller remplir le formulaire avant d'envoyer"));
            
        }
  else
  (alert ("le message a bien etait envoyer"))
}
</script>
<template>
<form @submit.prevent="sendmessage">
  <div>
    <label for="first-name">Nom</label>
    <input type="text" name="first-name">
  </div>
  <div>
    <label for="last-name">Prénom</label>
    <input type="text" name="last-name">
  </div>
  <div>
    <label for="message">message</label>
    <textarea name="message" id="massage"></textarea>
  </div>
  <input type="submit" value="envoyer">
</form>
</template>
<style>

</style>