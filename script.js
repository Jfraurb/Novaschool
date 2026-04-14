const toggle=document.querySelector('.menu-toggle');const mobileMenu=document.querySelector('.mobile-menu');if(toggle&&mobileMenu){toggle.addEventListener('click',()=>mobileMenu.classList.toggle('open'));}

function handleAdmissionForm(event){
  event.preventDefault();
  const success = document.getElementById('form-success');
  if(success){
    success.style.display = 'block';
    success.scrollIntoView({behavior:'smooth', block:'center'});
  }
  event.target.reset();
  return false;
}
