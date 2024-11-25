<script setup>
function sendmessage(){
  const mail ={
    to : "Quentin",
    from_first_name: document.getElementById('first-name').value,
    from_last_name: document.getElementById('last-name').value,
    message : document.getElementById('message').value

  }
  if (firstName == "" || lastName == "" || message == ""){
            (alert ("veuiller remplir le formulaire avant d'envoyer"));
            
        }
  else
  (alert ("le message a bien etait envoyer"))
}
</script>
<template>
  <h3>Me contacter</h3>
<form @submit.prevent="sendmessage">
  <div>
    <label>Nom<input type="text" name="first-name" id="first-name"></label>
    
  </div>
  <div>
    <label>Prénom<input type="text" name="last-name" id="last-name"></label>
    
  </div>
  <br /> 
  <div>
    <label >
      message
      <textarea name="message" id="massage"></textarea>
    </label>
    
  </div>
  <input type="submit" value="envoyer">
</form>
</template>
<style scoped>

form {
  display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    height: 60vh;
    padding: 1.5rem;
    margin: auto;
    border: 1px solid #D9A78B;
}
label {
  display: flex;
    justify-content: space-between;
    width: 35%;
    text-align: left;
}
label:last-of-type {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

input[type='text'] {
    font-weight: 800;
}
h3 {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
</style>