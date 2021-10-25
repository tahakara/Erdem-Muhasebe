
const navigation = document.querySelector('.mobile-header');
document.querySelector(".mobile-toggle").onclick = function(){
    this.classList.toggle("active");
    navigation.classList.toggle("active");
}