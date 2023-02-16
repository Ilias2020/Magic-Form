function dispData(){
    if(window.localStorage.getItem('formData')){
        let {fname, lname, email, phone, company, address} = JSON.parse(localStorage.getItem('formData'));
        let output = document.getElementById('submit-history-card');
        output.innerHTML = "";
        JSON.parse(window.localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `                
                    <p id="card-first-name" class="card-first-name">${data.fname}</p>
                    <p id="card-last-name" class="card-last-name">${data.lname}</p>
                    <p id="card-email" class="card-email">${data.email}</p>
                    <p id="card-phone" class="card-phone">${data.phone}</p>
                    <p id="card-company" class="card-company">${data.company}</p>
                    <p id="card-address" class="card-address">${data.address}</p>
                    <button class="delete-button">Delete</button>                 
            `;
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {

        dispData();

});