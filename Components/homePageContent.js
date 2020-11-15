const homePageContent = document.querySelector("#home");

aboutMe = {
    en :"<p>I am currently a postdoctoral re&shy;searcher at <b>OFCE (French Economic Ob&shy;servatory)</b>, where I work on the <b>research project PRODIGE</b> about orchestras, dis&shy;criminations and gender.</p><p>I received my PhD in Economics from <b>Aix-Marseille University</b> in 2018. My main research interests are in labor, public and industrial economics. I am particularly in&shy;terested in earnings inequalities and the role of skill match, as well as in firm efficiency.</p>" ,

    fr : "<p>Ayant obtenu en 2018 mon doctorat en Sciences économiques à <b>l’Université d’Aix-Marseille</b>, je suis actuellement cher&shy;cheuse post-doctorante à l’<b>OFCE (Obser&shy;vatoire Français des Conjectures Econo&shy;miques)</b>. Je fais partie du <b>projet de re&shy;cherche PRODIGE</b> qui se concentre sur les discriminations de genre dans les orchestres en France.</p><p>Mes principaux domaines de recher&shy;ches portent sur les liens entre travail, politiques économiques publiques et in&shy;dustriels. Je porte un intérêt particulier aux sujets concernant les inégalités sala&shy;riales en fonctions du <em>skill match</em>, ainsi que les sujets relatifs au concept de <em>firm efficiency</em>.</p>"
    
}
titre ={
    en : "About me",
    fr :"Qui suis-je ?"
}

const titreMain = document.querySelector("main .titre");
titreMain.textContent = titre.en;

const textMain = document.querySelector("main #about-me");
textMain.innerHTML = aboutMe.en;

let frenchHomePageContent = false;
toggleButton.addEventListener("click", ()=>{
    frenchHomePageContent=!frenchHomePageContent;

    if (frenchHomePageContent) {
        titreMain.textContent = titre.fr
        textMain.innerHTML  = aboutMe.fr
    } else {
        titreMain.textContent = titre.en
        textMain.innerHTML = aboutMe.en;
    } 
})
