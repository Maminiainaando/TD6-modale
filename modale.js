const cliquer=document.querySelector('#cliquer');
const form=document.querySelector('form');
const name=document.getElementById('name');
const last_name=document.getElementById('last_name');
const register=document.getElementById('register');
cliquer.addEventListener('click',(e)=>{
    form.classList.add('form1');
    form.classList.remove('form');
})

register.addEventListener('click',(e)=>{
    e.preventDefault();
  form.classList.remove('form1');
  form.classList.add('form');
   if(name.value!="" && last_name.value!=""){
    alert("Vous ètes "+name.value+" "+last_name.value+" !Votre information est maintenant enregistrer")
   }else{
    alert("Veuillez remplir le formulaire.")
   }
  // form.classList.add('form');
})