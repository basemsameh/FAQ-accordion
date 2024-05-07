let btns = document.querySelectorAll('button');
let p1 = document.querySelector('p');
let p2 = document.querySelectorAll('p')[1];
let p3 = document.querySelectorAll('p')[2];
let p4 = document.querySelectorAll('p')[3];

Array.from(btns).forEach(e => {
  e.onclick = () => {
    if (e === document.querySelector('button')) {
      test(e, p1);
    }
    else if (e === document.querySelectorAll('button')[1]) {
      test(e, p2);
    }
    else if (e === document.querySelectorAll('button')[2]) {
      test(e, p3);
    }
    else {
      test(e, p4);
    }
  }
})

function test(button, ele) {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
    button.style.backgroundImage = "url('images/icon-plus.svg')";
    ele.style.display = 'none';
  }
  else {
    button.classList.add('active');
    button.style.backgroundImage = "url('images/icon-minus.svg')";
    ele.style.display = 'block';
  }
}