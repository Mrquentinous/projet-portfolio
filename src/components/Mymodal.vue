<script >
export default {
    name: 'Modale',
    props: ['revele1', 'toggleModale1','revele2', 'toggleModale2','revele3', 'toggleModale3']
}
</script>
<template>
    <div class="bloc-modale" v-if="revele1">
        <div class="overlay" v-on:click="toggleModale1" >

<div class="modal">
    <div class="modal__header">
        <h3 class="modal__header__titre">le cv</h3>
    </div>
    <div class="modal__image">
        <img src="../assets/images/cv.png" alt="cv-de-quentin-lust">
    </div>
    <div class="modal_text">
        <p class="texte">cv de quentin lust</p>
    </div>
    <div class="modal__footer">
        <button >fermer</button>
    </div>
</div>
</div>
    </div>
    
    <div class="bloc-modale" v-if="revele2">
        <div class="overlay" v-on:click="toggleModale2" >

<div class="modal">
    <div class="modal__header">
        <h3 class="modal__header__titre">le cahier des charges</h3>
    </div>
    <div class="modal__image">
        <img src="../assets/images/cahier-des-charges.png" alt="cahier-des-chargest">
    </div>
    <div class="modal_text">
        <p class="texte">cahier des charges d'un faux site de chaussettes</p>
    </div>
    <div class="modal__footer">
        <button >fermer</button>
    </div>
</div>
</div>
    </div>
    

    <div class="bloc-modale" v-if="revele3">
        <div class="overlay" v-on:click="toggleModale3" >

<div class="modal">
    <div class="modal__header">
        <h3 class="modal__header__titre">commentaire</h3>
    </div>
    <div class="modal__image">
        <img src="../assets/images/commentaire.png" alt="commentaire">
    </div>
    <div class="modal_text">
        <p class="texte">fabrication d'un espace commentaire</p>
    </div>
    <div class="modal__footer">
        <button >fermer</button>
    </div>
</div>
</div>
    </div>
    
</template>
<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.modal {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 600px;
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 3px;
padding: 20px;

}
.modal__close {
    font-size: 16px;
    font-family: "Roboto", sans-sherif;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    background-color: blue;
    cursor: pointer;
}
.modal__close:hover {
    background-color: #303f9f;
}
.modal__open{
    display: block;
}
.modal__header__titre{
    color: black;
    
    font-size: 200%;
}
.modal_text{
    color: black;
}
.texte {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 20px;
}
.modal_image{
    width: 500px;
}
img{
    height: 700px;
}
</style>
