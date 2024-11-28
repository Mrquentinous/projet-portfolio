<script setup>
import presentation from './components/presentation.vue';
import MesProjets from './components/MesProjets.vue';
import MyContact from './components/MyContact.vue';

 
</script>
<template>
    <html>
        <presentation id="presentation"></presentation> 
    <MesProjets/>
    <MyContact/>
    </html>
    
</template>




<style scoped>
template {
    display:flex ;
}
img{
    width: 100px;
}
html {
    background-color: #712e1e ;
    color: white;
}
body{
    margin-top: 45px;
    padding-bottom: 20px;
}
</style>
