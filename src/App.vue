<script setup>
import CV from "./components/cv.vue"
</script>
<script >



export default{
    data(){
        return{
        Nom : 'LUST',
        Prénom : 'Quentin',
        Région : 'Haut-de-france',
        Age : '29',
        };
    },
};


</script>
<template>
    <h1>portfolio de quentin lust</h1>
    <h2>Ma présentation</h2>
<p>je m'appelle {{ Nom }} {{ Prénom }} j'habite dans la region {{ Région }} j'ai {{ Age }} ans j'apprend le developpement web pour devenir developper web junior <br>
voici quelques fonction que j'ai appris durant ma formation </p><br>
<a href="/src/site/acceuil/acceuil.html"><button>site test</button></a>

<h2>Mon cv </h2>


    <div id="header"></div><br>
<CV></CV>
</template>




<style scoped>
template {
    display:flex ;
}

</style>
