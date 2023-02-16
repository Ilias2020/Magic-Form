
const form = document.querySelector('form');

form.addEventListener('submit', function () {
    let formData = JSON.parse(window.localStorage.getItem('formData'));
    formData.push({
        fname: document.getElementById('first-name').value,
        lname: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        address: document.getElementById('address').value
    });
    window.localStorage.setItem('formData', JSON.stringify(formData));
    console.log(window.localStorage.getItem('formData'));
    //dispData();
    e.preventDefault();
});


