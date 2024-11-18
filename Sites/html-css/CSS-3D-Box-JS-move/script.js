const cube = document.querySelector('.cube');
const container = document.querySelector('.cube-container');

// TURN CUBE ON MOUSEMOVE INSIDE CONTAINER
container.addEventListener('mousemove', (e) => {

  rotY = e.clientX / 1.8;
  rotZ = e.clientY / 1.8;

  cube.style.animation = 'none';
  cube.style.transform = 'rotateY(' + rotY + 'deg) rotateZ(' + rotZ + 'deg)';
  cube.style.transition = '500ms ease-out';

  container.addEventListener('mouseleave', () => {
    cube.style.animation = 'spin 1500s infinite linear';
  });
});


// TURN CUBE USING ARROW
document.body.addEventListener('click', function(e) {

  cube.style.animation = 'none';
  cube.style.transition = '1.2s ease';

  // PICK A RANDOM FACE OF THE CUBE
  const classes = ['front','back','top','bottom','right','left'];
  classToUse = classes[Math.floor(Math.random() * classes.length)];

  // INSURE TO PICK A NEW CLASS EVERYTIME
  if (cube.classList.contains(classToUse)) {
    classToUse = classes[Math.floor(Math.random() * classes.length)];
  }; 
  
  // ADD CLASS TO SHOW A RANDOM FACE
  if (e.target.classList.contains('arrow')) {
    cube.classList.remove('front','back','top','bottom','right','left');
    cube.classList.add(classToUse);
    };
});

// RESTART ANIMATION WHEN LEAVING ARROW
document.querySelectorAll('.arrow').forEach(item => {
  item.addEventListener('mouseleave', () => {
    cube.style.animation = 'spin 1500s infinite linear';
    cube.classList.remove('front','back','top','bottom','right','left');
  });
});