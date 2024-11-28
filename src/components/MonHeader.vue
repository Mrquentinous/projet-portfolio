<script setup>


</script>
<template>
    <header>
        <div id="header">
           <a href="http://localhost:5173/"><img src="../assets/images/home.png" alt="home"></a> 
            <nav>
                <ul>
                    <a href="#presentation"><li>presentation</li></a>
                    <a href="#projets"><li>mes projets</li></a>
                    <a href="#contact"><li>me contacter</li></a>
                </ul>
            </nav>
        </div>
    </header> 
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Arrows:wght@400..700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

img {
    border-radius: 50%;
    margin: auto;
    margin-left: 21px;
    height : auto;
    width : 20%; 
    
    
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
    font-size: large;
    font-family: "roboto Mono";
    display: inline-block;
}
ul{
    display: flex;
}
div {
    justify-content: space-between;
}
a {
    text-decoration: none
}
a:hover {
    text-decoration: underline;
}
</style>
