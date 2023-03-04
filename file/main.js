const input = document.querySelector('.check1');
const input2 = document.querySelector('.check2');
const btn = document.querySelector('.btn');
const select = document.querySelector('.select');
btn.addEventListener('click', function() {
    if (select.value === 'usd') {
        input2.value = 11000 * (input.value)
    } else if (select.value === 'ev') {
        input2.value = 12000 * (input.value)
    } else {
        input2.value = 165 * (input.value)
    }
});