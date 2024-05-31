const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');


inputfield.addEventListener('input', function () {
    console.log(inputfield.value);

    let password = inputfield.value;
    if (password.length < 8) {
        outputfield.innerHTML = 'Password is too short...';
        outputfield.style.color = 'red';

    } else {
        outputfield.innerHTML = 'Password is long enough';
        outputfield.style.color = 'green';
        if (password.search(/[a - z] /) == -1) {
            outputfield.innerHTML = 'Password is missing a lowercase letter';
            outputfield.style.color = 'red';
        } else if (password.search(/[A - Z] /) == -1) {
            outputfield.innerHTML = 'Password is missing a Upperrcase letter';
            outputfield.style.color = 'red';
        } else if (password.search(/[0 - 9] /) == -1) {
            outputfield.innerHTML = 'Password is missing a Number letter';
            outputfield.style.color = 'red';
        } else if (password.search(/[\&\*\(\)\-\_\=\+\[\\]/) == -1) {
            outputfield.innerHTML = 'Password is missing a Special character letter';
            outputfield.style.color = 'red';
        } else {
            outputfield.innerHTML = 'Password is Stronge'
            outputfield.style.color = 'green'
        }
    }

})

