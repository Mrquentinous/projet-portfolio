<script setup>
import Header from './components/MonHeader.vue';
import presentation from './components/presentation.vue';
import MesProjets from './components/MesProjets.vue';
import Footer from './components/MonFooter.vue';
import MyContact from './components/MyContact.vue';

 
</script>
<template>
    <html>
<Header></Header>
<body>
    <presentation/> 
    <MesProjets/>
    <MyContact/>
</body>
<Footer/>
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
