// alert('Hello World');
// function consoleLog() {
//     console.log("TROLOLO");
// }

// function consoleLog() {
//     console.log(document.getElementById('text').value);
// }

function mult(number) {
    return number*2;
}

let func = mult(2000);
alert(func);


function consoleLog() {
    let string = "Example";
    console.log(string.length);
}

function testForIn() {
    let menu = {
        width: 300,
        height: 200,
        title: "Menu"
    };
    let value = 300;

    for (value in menu) {
        alert("!!!!!!!")
    }
}
function objectExample() {


    // let object = new Object();
    let object = {};

    // Два вида синтаксиса
    object.name = 'John';
    object['age'] = 25;


    if ("name" in object) {
        console.log(object.name);
    } else {
        console.log("No such key");
    }

    // Map<String, Object> map = new HashMap<>();
    // map.put("name", "John");
    // sout(map.get("name"));
}