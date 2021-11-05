const openPopUP = document.getElementsByClassName('pricingTable-signup');
const popUp = document.getElementsByClassName('pop_up');

openPopUP.addEventListener('click',function(e){
e.preventDefault();
popUp.classList.add("active");
})

closePopUp.addEventListener('click',() =>{
    popUp.classList.remove('active');
})

