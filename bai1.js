class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let submitButton = document.querySelector('button');
let storedInfoList = document.getElementById('storedInfo');  


function displayStoredInfo() {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedInfoList.innerHTML = '';

    storedUsers.forEach(user => {
        const listItem = document.createElement('span');
        listItem.innerHTML = `Name: ${user.name} <br> Email: ${user.email}<br>`;
        storedInfoList.appendChild(listItem);
    });

    if (storedUsers.length === 0) {
        storedInfoList.innerHTML = 'No user information stored yet.';
    }
}


submitButton.addEventListener('click', function(){
    let tmp_name = nameInput.value;
    let tmp_email = emailInput.value;
    
    if (tmp_email === "" || tmp_name === "") {
        alert("Please enter both name and email.");
        return;  
    }

    let tmpUser = new User(tmp_name, tmp_email);
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(tmpUser);
    localStorage.setItem('users', JSON.stringify(users));
    displayStoredInfo();
    
    nameInput.value = '';
    emailInput.value = '';
});

