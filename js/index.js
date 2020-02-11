// Your code goes here
const topLinks = document.querySelectorAll('.nav-link');

topLinks.forEach(e => {
  e.addEventListener('click', e =>{
     e.preventDefault();
  console.log('default prevented')
  })
}) 



const introText = document.querySelector('.main-navigation');

introText.addEventListener('mousemove', runEvent);

function runEvent(e) {
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`

  e.stopPropagation()
}

const desTitles = document.querySelectorAll('.destination h4');

desTitles.forEach(e => {
  e.addEventListener('click', ()=>{
    e.style.color = 'red';
  })
});

const desContent = document.querySelectorAll('.destination p');

desContent.forEach(e => {
  e.addEventListener('click', ()=>{
    e.style.color = 'rebeccapurple';
  })
})

const desEntire = document.querySelector('.content-pick');

desEntire.addEventListener('mouseenter', () =>{
  desEntire.style.backgroundColor = 'grey';
})

desEntire.addEventListener('mouseleave', () =>{
  desEntire.style.backgroundColor = 'salmon';
})

const mapImg = document.querySelector('.img-content img')
console.log(mapImg)

window.addEventListener('resize', ()=>{
  mapImg.src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
})


const buttons = document.querySelectorAll('.btn');

buttons.forEach(e => {
  e.addEventListener('mouseenter', ()=>{
    e.style.color = 'black';
  })
})

buttons.forEach(e => {
  e.addEventListener('mouseleave', ()=>{
    e.style.backgroundColor = 'pink';
    e.style.color = 'purple';
  })
})

const contentSec = document.querySelectorAll('.content-section');

contentSec.forEach(e =>{
  e.addEventListener('mouseover', ()=>{
    e.style.backgroundColor = 'dodgerblue'
    e.style.color = 'brown'
    e.style.padding = '200px'
  })
})

contentSec.forEach(e =>{
  e.addEventListener('mouseleave', ()=>{
    e.style.backgroundColor = 'pink'
    e.style.color = 'white'
    e.style.padding = '100px'
  })
})

const contentText = document.querySelector('.intro h2');

contentText.addEventListener('dblclick', () =>{
 contentText.style.backgroundColor = 'white';
 contentText.style.color = 'orange'
})