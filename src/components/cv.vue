
<template>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ma description personnalisée">
    <title>Mon CV</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/png" href="./image/favicon-16x16.png">
</head>
<body>
    <div id="container1">
   <header>
    <section id="section-1">
        <a href="./assets/image/mrquentinous-profile_banner-449bc644ea6c67f1-480.png" target="_blank" ><img src="/public/image_cv.png" alt="quentin lust"></a>
        <h1 style="padding-left: 21px;">LUST QUENTIN</h1> 
        <h2>Développeur web junior</h2>
    </section>
    <section id="section-2">
            <p >
                <a href="https://maps.app.goo.gl/UtQff6qZU2C5AP616" target="_blank">8 allée des fleurs <br>
                    59470 bollezeele</a>
                </p> 
            <p ><a href="mailto:quentin.lust59@gmail.com" target="_blank">quentin.lust59@gmail.com</a></p>
            <p ><a href="tel:+0765550950" target="_blank">0765550950</a></p>
           
        
    </section>
   </header>
    </div>
   <main id="container2">
   <nav>
    <h3 id="cv_soustitre">A propos</h3>
    <p>je m'appelle quentin j'ai 28 ans j'habite dans les haut de france a bollezeele </p>
    <h3 id="cv_soustitre">Langue parlées</h3>
    <ul>
        <li>Francais - langue maternelle</li>
        <li>Anglais - intermediaire</li>
    </ul>
    <h3 id="cv_soustitre">Centre d'Intererêt</h3>
    <ul>
        <li>jeux videos</li>
        <li>cinema</li>
        <li>séries</li>
        <li>jeux de société</li>
    </ul>
   </nav>
   <section id="section-3" >
    <h3 id="cv_soustitre">Experience professionnelles</h3>
    <article>
    <h4>mission intérim iziwork</h4>
    <p>de juillet 2023 a ce jour</p>
    <ul>
        <li>mannutentionnaire 3 monts Saint Sylvestre cappel</li>
        <li>approvisionneur Cora Coudekerque branche</li>
        <li>mannutentionnaire Vandencasteel Saint Sylvestre cappel</li>
    </ul>
    <h4>mission intérim synergie</h4>
    <p>de février 2020 a juillet 2023</p>
    <ul>
        <li>mannutentionnaire carriste dunkerque</li>
    </ul>
    <h4>mission intérim randstad</h4>
    <p>de Mars a Avril 2019</p>
    <ul>
        <li>mannutentionnaire pepsico Veurne Belgique</li>
    </ul>
</article>
    <h3 id="cv_soustitre">diplômes/Formation</h3>
   <article>
    
    <h4>bts electrotechnicien</h4>
    <p>2016-2018</p><br>
    <p>lycée de l'europe Dunkerque</p>
    <h4>technicien du froid et du conditionnement de l'air</h4>
    <p>2012-2016</p><br>
    <p>lycée professionnel george guynemer Saint-pol-sur-mer</p>
   </article>
   <h3 id="cv_soustitre">Compétences</h3>
   <article>
    
    <ul>
        <li>HTML 5 - Débutant</li>
        <li>CSS 3 - Débutant</li>
        <li>GitHub - Débutant</li>
    </ul>
</article>
   </section>
</main> 
   <footer>
    <a href="https://www.linkedin.com/in/quentin-lust-1b1b2a2a1/" target="_blank"><img src="/public/linkedin.svg" alt="linkedin" ></a>
    <p>derniere mise a jour le <time datetime="2024-10-28">28 octobre 2024</time></p>
   </footer>

<a href=/commentaire.html>ajouter un commentaire</a>
</body>
</html>
</template>


<style scoped>

#header{
   height:10px;
   width:100%;
   background-color:purple;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  margin: 0 2rem 0 0;
}

@media (min-width: 1024px) {


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

body{
    margin: 0px;
    flex-direction: column;
}
#container1{
    border:1px solid black;
    width:1160px;
    margin: auto;

}
#container2{
    display: flex;
}
body header{
    background-color: #782221 ;
    color: white; 
}
article h3 {
    width: 740px;
    border-left: 3px solid #782221;

}
header section img{
    border: 3px solid blue;
    border-radius: 50%;
    box-shadow: 0px 0px 30px blue;
    margin-top: 40px;
    margin: auto;
    margin-left: 21px
    
}
#section-1{
    margin-top: 15px;
    margin-left: 40%;
}
#section-2{
    background-color: #2c1d27 ;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
nav{
    background-color:#782221 ;
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
nav ul{
    color: white;
}
#cv_soustitre{
    background-color: #dbc2a4 ;
    color: black ; 
    padding-left: 15px;
}
footer{
    background-color: #782221;
    color: white;
    width:1160px;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
}
footer img{
    box-sizing: 10px;
    height: 60px;
    width: 50px;
}
header section a :hover{
    cursor: zoom-in;
}
footer a :hover{
    opacity: 20%;
}
article h3 :hover{
    text-decoration-line:underline;
}

a{
    text-decoration: none;
    color: white;
}
main section{

    width: 800px;
}
p{
    color: white;
}
li{
    color: white;
}
h4{
    color: white;
}
article{
    margin-left: 15px;
}
</style>
