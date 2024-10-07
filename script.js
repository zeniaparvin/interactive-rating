// BUTTON & CARD1,CARD2,RESULT
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const button = document.querySelector('button')
const result = document.querySelector('#result')


button.addEventListener('click', function () {
    card1.style = "display:none"
    card2.style = "display:flex"
})


// RATE & BTN
const btns = document.querySelector('.btn1')

btns.addEventListener('click', (e)=>{
    const btn = e.target.closest('.btn');
    if(!btn) return;
    
    btn.style.backgroundColor = "white";
    btn.style.color = 'black'
    result.textContent = btn.textContent;
})
