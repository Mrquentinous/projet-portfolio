<script>
    import Modale from './Mymodal.vue'


export default{
    name : 'projets',
    data(){
        return{
            revele1: false,
            revele2: false,
            revele3: false
        }
        
    },
    components: {
        'modale': Modale
    },
    methods: {
        toggleModale1: function(){
            this.revele1 = !this.revele1
        },
        toggleModale2: function(){
            this.revele2 = !this.revele2
        },
        toggleModale3: function(){
            this.revele3 = !this.revele3
        }
    }
}
</script>
<template>
    <div id="projets">
        <h2>Mes Projets</h2>
        <div>
            <h3>le cv</h3>
            <button v-on:click="toggleModale1"><img src="../assets/images/cv.png" alt="cv-de-quentin-lust"></button>
            <h3>le cahier des charges</h3>
            <button @click="toggleModale2"><img src="../assets/images/cahier-des-charges.png" alt="cahier-des-charges"></button>
            <h3>Un espace commentaire</h3>
            <button v-on:click="toggleModale3"><img src="../assets/images/commentaire.png" alt=""></button>
        </div>
        <modale v-bind:revele1="revele1" v-bind:toggleModale1="toggleModale1" ></modale>
        <modale v-bind:revele2="revele2" v-bind:toggleModale2="toggleModale2" ></modale>
        <modale v-bind:revele3="revele3" v-bind:toggleModale3="toggleModale3" ></modale>
    </div>
</template>
<style scoped>

#projets{
    display: flex;
    flex-direction: column;
    align-items: center;
}
button {
  display: block;
  width: fit-content;
  margin: auto;
  margin-top: 1rem;
}

img {
  display: block;
  height: 150px;
  margin: auto;
}
img:hover{
    box-shadow: 10px 10px 20px black;
}

</style>


