const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const liczba3 = document.querySelector('#liczba3');
const liczba4 = document.querySelector('#liczba4');
const btnPrzelicz = document.querySelector('#przelicz');
const wyniki1 = document.querySelector('#suma');
const wyniki2 = document.querySelector('#min');
const wyniki3 = document.querySelector('#max');
const wyniki4 = document.querySelector('#sr');
const wyniki5 = document.querySelector('#suma1');
const wyniki6 = document.querySelector('#min1');
const wyniki7 = document.querySelector('#max1');
const wyniki8 = document.querySelector('#sr1');
const input = document.querySelector('input');

btnPrzelicz.addEventListener('click', () => {

    wyniki1.innerHTML = parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value) + parseInt(liczba4.value)
})

btnPrzelicz.addEventListener('click', () => {
    wyniki2.innerHTML = Math.min(parseInt(liczba1.value), parseInt(liczba2.value), parseInt(liczba3.value), parseInt(liczba4.value))
})
btnPrzelicz.addEventListener('click', () => {
    wyniki3.innerHTML = Math.max(parseInt(liczba1.value), parseInt(liczba2.value), parseInt(liczba3.value), parseInt(liczba4.value))
})
btnPrzelicz.addEventListener('click', () => {
    wyniki4.innerHTML = (parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value) + parseInt(liczba4.value)) / 4;
})


input.addEventListener('change', () => {
    wyniki5.innerHTML = ((parseInt(liczba1.value) || 0) + (parseInt(liczba2.value) || 0) + (parseInt(liczba3.value) || 0) + (parseInt(liczba4.value) || 0))
})
