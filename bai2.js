class User {
    constructor(name, email, phone_number, add, bgColor, URL) {
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
        this.add = add;
        this.bgColor = bgColor;
        this.URL = URL;
    }
}

function displayStoredInfo() {
    const stored = JSON.parse(localStorage.getItem('users')) || [];
    const displayArea = document.querySelector('.displayInfo');
    displayArea.innerHTML = '<h1>Thông tin hồ sơ</h1>'; 

    if (stored.length > 0) {
        const user = stored[stored.length - 1]; 
        const list = document.createElement('div');
        list.classList.add('user-info'); 

        list.style.backgroundColor = user.bgColor;
       
        const img = document.createElement('img');
        img.src = user.URL;
        img.alt = 'User Image';
        img.classList.add('user-image'); 
        list.appendChild(img);

        list.innerHTML += `
            <p>Tên: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Số điện thoại: ${user.phone_number}</p>
            <p>Địa chỉ: ${user.add}</p>
        `;

        displayArea.appendChild(list);
    }
}

let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputPhone = document.getElementById('phone');
let inputAdd = document.getElementById('add');
let inputURL = document.getElementById('url');
let inputColor = document.getElementById('bgColor');
let submitButton = document.querySelector('button');

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); 

    let Name = inputName.value.trim();
    let Email = inputEmail.value.trim();
    let Phone = inputPhone.value.trim();
    let Address = inputAdd.value.trim();
    let Url = inputURL.value.trim();
    let Color = inputColor.value;
    if (Name === "" || Email === "") {
        alert("Please enter both name and email.");
        return;
    }

    let tmp = new User(Name, Email, Phone, Address, Color, Url);
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(tmp);
    localStorage.setItem('users', JSON.stringify(users));

    displayStoredInfo();

    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    inputAdd.value = '';
    inputURL.value = '';
});

// Display stored information on page load
document.addEventListener('DOMContentLoaded', displayStoredInfo);