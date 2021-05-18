const btn = document.querySelector('[data-btn]');
const box = document.querySelector('.box1');
const box1 = document.querySelector('.box2');
const box2 = document.querySelector('.box3');
const box3 = document.querySelector('.box4');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
let box9 = document.querySelector('.box9');

btn.addEventListener('click', e => {
  e.preventDefault();
  box.style.backgroundColor = '"gray';
  box1.style.backgroundColor = 'silver';
  box2.style.backgroundColor = 'maroon';
  box3.style.backgroundColor = 'pink';
  box4.style.backgroundColor = 'purple';
  box5.style.backgroundColor = 'teal';
  box6.style.backgroundColor = 'lime';
  box7.style.backgroundColor = 'olive';
  box8.style.backgroundColor = 'navy';
  box9.style.backgroundColor = 'fushsia';
  document.getElementById('myImg').src = 'images/4.jpg';
  document.getElementById('myImg1').src = 'images/4.jpg';
  document.getElementById('myImg2').src = 'images/4.jpg';
  document.getElementById('myImg3').src = 'images/4.jpg';
  document.getElementById('myImg4').src = 'images/4.jpg';
  document.getElementById('myImg5').src = 'images/4.jpg';
  document.getElementById('myImg6').src = 'images/4.jpg';
  document.getElementById('myImg7').src = 'images/4.jpg';
  document.getElementById('myImg8').src = 'images/4.jpg';
});
function myFunction() {
  document.getElementById('myImg').src = 'images/4.jpg';
  document.getElementById('myImg1').src = 'images/4.jpg';
  document.getElementById('myImg2').src = 'images/4.jpg';
  document.getElementById('myImg3').src = 'images/4.jpg';
  document.getElementById('myImg4').src = 'images/4.jpg';
  document.getElementById('myImg5').src = 'images/4.jpg';
  document.getElementById('myImg6').src = 'images/4.jpg';
  document.getElementById('myImg7').src = 'images/4.jpg';
  document.getElementById('myImg8').src = 'images/4.jpg';
}
