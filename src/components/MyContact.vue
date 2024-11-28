<script >
export default{
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      errors: {},
      formSent: false
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.name) {
       alert("Le nom est requis.") ;
      }
      if (!this.form.email) {
        alert("L'email est requis.") ;
      } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
       alert("Veuillez entrer un email valide.") ;
      }
      if (!this.form.message) {
        alert("Le message est requis.");
      }
    
      return Object.keys(this.errors).length === 0; 
    },
    handleSubmit() {
      if (this.validateForm()) {
        this.formSent = true;
        console.log("Données envoyées :", this.form),
       
       

        // Réinitialisation du formulaire
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      }
    }
  }
};



</script>
<template>
  <div id="contact">
  <h3>Me contacter</h3>
<form @submit.prevent="handleSubmit()">
  <div>
    <label>Nom complet<input type="text" name="name"  v-model="form.name" ></label>
    
  </div>
  <div>
    <label>adresse mail<input type="text" name="mail" id="mail" v-model="form.email"></label>
    
  </div>
  <br /> 
  <div>
    <label >
      message
      <textarea name="message" id="message" v-model="form.message"></textarea>
    </label>
    
  </div>
  <input type="submit" value="envoyer" id="envoyer">
</form>
</div>
</template>
<style scoped>

form {
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 30vh;
    padding: 1.5rem;
    margin: auto;
    border: 1px solid #D9A78B;
}
label {
  display: flex;
    justify-content: space-between;
    width: 35%;
    text-align: left;
    font-size: larger;
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
form div{
  padding: 15px;
}
textarea{
  width: 300px;
  height: 100px;
}
#envoyer{
  font-size: x-large;
}

</style>