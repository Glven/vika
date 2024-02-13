const h = document.getElementById('heart');
const t = document.getElementById('text');

h.addEventListener('click', ()=>{
    t.classList.add('appearance');
    h.classList.add('beat-on');
});