const textEditor = document.getElementById('editor');

window.addEventListener("load", ()=>{
   textEditor.value = localStorage.getItem('textcache');
})

textEditor.addEventListener('input', ()=>{
   localStorage.setItem('textcache', textEditor.value);
})