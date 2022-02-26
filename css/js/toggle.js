

let themeTogller = document.getElementById('toggler');
let para = document.getElementsByTagName('p');

themeTogller.onclick = () => {
    themeTogller.classList.toggle('fa-sun');

    if(themeTogller.classList.contains('fa-sun')) {
          document.body.classList.add('active');
          para[0].classList.add('para-active');
    } else {
        document.body.classList.remove('active');
        para[0].classList.remove('para-active');

    }
}   