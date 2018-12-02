let users = [
    {
        id: 1,
        name: "John",
        age: 25
    }, {
        id: 2,
        name: "Ilkin",
        age: 20
    }, {
        id: 3,
        name: "Nigar",
        age: 17
    }, {
        id: 4,
        name: "Ali",
        age: 20
    }
];

let user = {
    id: 1,
    name: "John",
    age: 27
};

function getUser() {
    let divElement = document.createElement('div');
    divElement.className = "user-div";
    divElement.id = user.id;

    divElement.innerHTML = '<h6>Name:</h6>\n' +
        '    <p>' + user.name +'</p>\n' +
        '    <h6>Age:</h6>\n' +
        '    <p>' + user.age + '</p>';

    document.body.appendChild(divElement);
}

function getAllUsers() {
    users.forEach(function (user, i, array) {
        let divElement = document.createElement('div');
        divElement.className = "user-div";
        divElement.id = user.id;

        divElement.innerHTML = '<h6>Name:</h6>\n' +
            '    <p>' + user.name +'</p>\n' +
            '    <h6>Age:</h6>\n' +
            '    <p>' + user.age + '</p>';

        // Два варианта вставки
        // document.body.appendChild(divElement);
        document.body.insertAdjacentElement("beforeEnd",
            divElement);
    })
}

function saveUser() {

    let id = document.getElementById('save-id').value;
    let name = document.getElementById('save-name').value;
    let age = document.getElementById('save-age').value;

    let newUser = {
        id: +id,
        name: name,
        age: +age
    };

    users.push(newUser);
    console.log(users);

    // //Обновление DOM-a(div-a)
    // let divElement = document.createElement('div');
    // divElement.className = "user-div";
    // divElement.id = id;
    //
    // divElement.innerHTML = '<h6>Name:</h6>\n' +
    //     '    <p>' + name +'</p>\n' +
    //     '    <h6>Age:</h6>\n' +
    //     '    <p>' + age + '</p>';
    //
    // document.body.appendChild(divElement);
}

function updateUser() {
    let id = document.getElementById('save-id').value;
    let name = document.getElementById('save-name').value;
    let age = document.getElementById('save-age').value;

    //Обновление массива
    users.forEach(function (user, i, array) {
        if (user.id == id) {
            user.name = name;
            user.age = age;
        }
    });

    //Обновление DOM-a(div-a)
    let divElement = document.createElement('div');
    divElement.className = "user-div";
    divElement.id = id;

    divElement.innerHTML = '<h6>Name:</h6>\n' +
        '    <p>' + name +'</p>\n' +
        '    <h6>Age:</h6>\n' +
        '    <p>' + age + '</p>';

    document.body.replaceChild(divElement,
        document.getElementById(id));
}



function deleteUser() {
    let id = document.getElementById('delete-id').value;

    users.forEach(function (user, i, array) {
        if (user.id == id) {
            // Удаляет из массива
            delete users[i];
            // Удаляет из DOM-a
            document.getElementById(id).remove();
        }
    });
};
