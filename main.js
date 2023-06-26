let section = document.getElementById("Features-section");
let section1 = document.querySelector(".Features-section .word");
let card2 = document.querySelectorAll(".card2");
console.log(card2.style);
console.log(section1)
window.onscroll = function (){
    if(window.scrollY >= section.offsetTop -500)
    {
        section1.style.transform ="translateY(0)";
        section1.style.opacity ="1";
    }
    if(window.scrollY >= section.offsetTop -300)
    {
        card2[0].style.setProperty("transform","translateY(0)",);
        card2[1].style.setProperty("transform","translateY(0)",);
        card2[2].style.setProperty("transform","translateY(0)",);
        card2[0].style.setProperty("opacity","1","important");
        card2[1].style.setProperty("opacity","1","important");
        card2[2].style.setProperty("opacity","1","important");
    }
};
console.log(document.styleSheets[0].cssRules);