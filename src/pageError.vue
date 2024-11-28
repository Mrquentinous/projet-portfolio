<script>
import { RouterLink } from "vue-router";

</script>
<template>
    <html>
        <h1>404</h1>
    <img src="../src/assets/images/istockphoto-943657262-612x612.jpg" alt="?">
    <p>la page que vous chercher n'existe pas</p>
    <RouterLink to="/">Retour</RouterLink>

    </html>


</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Edu+AU+VIC+WA+NT+Arrows:wght@400..700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
html{
    background-color: #712e1e ;
    color: white;
}
a{
    display: block;
        width: fit-content;
        text-decoration: none;
        padding: .5rem;
        background-color: bisque;
        color: #010326;
        font-size: 30px;
        margin-bottom: 10px;
}
p{
    font-family: "Bungee Spice", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
}
html{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>