<script setup>
</script>
<template>
    <header>
        <div id="header">
            <img src="../assets/images/home.png" alt="haut-de-page">
            <nav>
                <ul>
                    <li>presentation</li>
                    <li>mes projets</li>
                    <li>me contacter</li>
                </ul>
            </nav>
        </div>
    </header> 
</template>
<style scoped>

img {
    border-radius: 50%;
    margin: auto;
    margin-left: 21px;
    height : auto;
    width : 3%; 
    min-width : 15px;
    
}
img:hover {
    border: 0px solid blue;
    box-shadow: 0px 0px 30px blue;
}
#header {
    display: flex;
}
header {
    background-color: #888870;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    width: 100%;
}
nav {
    display: flex;
    align-items: center;

}
li {
    padding-right: 40px;
}
ul{
    display: flex;
}
</style>
