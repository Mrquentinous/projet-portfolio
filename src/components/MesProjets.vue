<script>
</script>
<template>
    <div id="projets">
        <h2>Mes Projets</h2>
        <div>
            <h3>le cv</h3>
            <img src="../assets/images/cv.png" alt="cv-de-quentin-lust">
            <h3>le cahier des charges</h3>
            <img src="../assets/images/cahier-des-charges.png" alt="cahier-des-charges">
            <h3>Un espace commentaire</h3>
            <img src="../assets/images/commentaire.png" alt="">
        </div>
    </div>
</template>
<style scoped>

#projets{
    display: flex;
    flex-direction: column;
    align-items: center;
}
img {
    height : auto;
    width : 30%; 
    min-width : 15px;
}
img:hover{
    box-shadow: 10px 10px 20px black;
}
</style>

