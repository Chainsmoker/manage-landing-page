const btnAbrir = document.querySelector('#btnAbrir');
      navegacion = document.querySelector('.nav__enlaces')

      sliders = document.querySelectorAll('.seccion3__item');
      radiobtn = document.querySelectorAll('input[type="radio"]'),

      form = document.querySelector('form'),
      input = document.querySelector('#inputForm');

btnAbrir.addEventListener('click', () => {
    navegacion.classList.toggle('display');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value == ''){
        const alerta = document.createElement('p');
        alerta.style.fontSize = '14px'
        alerta.style.color = 'red'
        alerta.textContent = 'The field is empty';
        input.parentNode.insertBefore(alerta, input.nextSibling);
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
});

contador = 1;

setInterval(() => {
    if (contador > 2) {
        contador = 0;
    }
    const activo = document.querySelector('.show');
    activo.classList.remove('show')
    sliders[contador].classList.add('show');
    radiobtn[contador].checked = true;
    contador++;
}, 5000);

for (let i = 0; i < radiobtn.length; i++) {
    radiobtn[i].addEventListener('click', () => {
        const activo = document.querySelector('.show');
        activo.classList.remove('show')
        sliders[i].classList.add('show');
        if (i == 2) {
            contador = 0;
        } else if (i == 0) {
            contador = 1;
        } else if (i == 1) {
            contador = 2;
        }
    });
}
